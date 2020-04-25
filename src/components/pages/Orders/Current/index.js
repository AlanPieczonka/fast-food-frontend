import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import List from './List'
import { reorder, move } from './List'
import { showNotification } from '../../../../utils/notifications'

class CurrentOrders extends React.Component {

  state = {
    toDo: [
      { id: 1, products: [{ productId: "2", quantity: 3 }, { productId: "3", quantity: 2 }] },
      { id: 2, products: [{ productId: "1", quantity: 1 }, { productId: "4", quantity: 1 }] }
    ],
    inProgress: [
      { id: 3, products: [{ productId: "2", quantity: 4 }, { productId: "3", quantity: 2 }] }
    ],
    ready: [
      { id: 4, products: [{ productId: "2", quantity: 3 }, { productId: "5", quantity: 2 }] },
      { id: 5, products: [{ productId: "1", quantity: 3 }, { productId: "3", quantity: 2 }] },
      { id: 6, products: [{ productId: "2", quantity: 3 }, { productId: "3", quantity: 2 }] },
    ],
    countdown: {
      3: { count: 10 }
    }
  }

  id3List = {
    droppable: 'toDo',
    droppable2: 'inProgress',
    droppable3: 'ready'
  };

  componentDidMount() {
    // because order with id of 3 is initially in inProgress list
    this.intervals = [
      { orderId: 3, intervalId: setInterval(() => {
        const currentCount = this.state.countdown[3].count
        this.setCountdown(3, currentCount)
      }, 1000)}
    ]
  }

  componentWillUnmount() {
    this.intervals.forEach(({ intervalId }) => {
      clearInterval(intervalId)
    })
    delete this.intervals
  }

  setCountdown(id, currentCount) {
    if (currentCount > 1) {
      this.setState({ countdown: { ...this.state.countdown, [id]: { count: currentCount - 1 } }})
    } else {
      showNotification('error', `We're running late on order number ${id}!`, 'TOP_RIGHT')
      this.resetCountdown(id)
    }
  }

  resetCountdown(id) {
    this.setState({ countdown: { ...this.state.countdown, [id]: { count: 10 } }})
  }

  getList = id => this.state[this.id3List[id]];

  onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) return

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      this.setState({ [this.id3List[source.droppableId]]: items });
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      const compare = otherArray => (current) => otherArray.filter(other => other.id === current.id).length === 0
      const id = result[destination.droppableId].filter(compare(this.state[this.id3List[destination.droppableId]]))[0].id 

      if (source.droppableId === 'droppable2') {
        const countdown = { ...this.state.countdown }

        delete countdown[id]
        
        this.setState({ countdown }, () => {
          clearInterval(this.intervals.find(x => x.orderId === id).intervalId)
          this.intervals = this.intervals.filter(x => x.orderId !== id)
        })
      }

      if (destination.droppableId === 'droppable2') {
        this.setState({ countdown: {...this.state.countdown, [id]: { count: 10 } }}, () => {
            this.intervals.push({ orderId: id, intervalId: setInterval(() => {
              const currentCount = this.state.countdown[id].count
              this.setCountdown(id, currentCount)
            }, 1000)})
        })
      }

      if (destination.droppableId === 'droppable3') {
        showNotification('success', `Order with the id of ${id} is ready!`, 'TOP_RIGHT')
      }

      this.setState({
        [this.id3List[source.droppableId]]: result[source.droppableId],
        [this.id3List[destination.droppableId]]: result[destination.droppableId]
      });
    }
  }

  archiveOrder = (id) => {
    return () => {
      const key = Object.keys(this.state).find(key => this.state[key].find(product => product.id === id))

      this.setState({
        [key]: this.state[key].filter((product) => product.id !== id)
      }, () => {
        const intervalId = this.intervals.find(x => x.orderId === id) ? this.intervals.find(x => x.orderId === id).intervalId : null
        if (intervalId) {
          clearInterval(intervalId)
        }
      })
    }
  }
  archiveReadyOrders = () => this.setState({ ready: [] })

  render() {
    return (
      <div className="current-orders">
        <div className="grid -three">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <List archiveOrder={this.archiveOrder} header="To Do" droppableId="droppable" items={this.state.toDo} />
            <List archiveOrder={this.archiveOrder} header="In progress" droppableId="droppable2" items={this.state.inProgress} countdown={this.state.countdown}  />
            <List archiveOrder={this.archiveOrder} header="Ready" droppableId="droppable3" items={this.state.ready} />
          </DragDropContext>
        </div>
        <div className="current-orders__actions">
          <button className={`btn ${this.state.ready.length === 0 && '-disabled'}`} onClick={this.archiveReadyOrders}>Archive ready orders</button>
        </div>
      </div>
    )
  }
}

export default CurrentOrders