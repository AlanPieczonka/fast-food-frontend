import React from "react";
import { Switch, Route } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import Content from "../../layout/Content";
import { NavLink } from "react-router-dom";

import ForkIcon from '../../../assets/icons/Fork'
import SettingsIcon from '../../../assets/icons/Settings'

const grid = 8

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle
});

const List = ({ header, droppableId, items }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="list" style={getListStyle(snapshot.isDraggingOver)}>
          <header className="list__header">
            {header}
            <a>...</a>
          </header>
          <div className="list__cards">
            {items.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={`${item.id}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <article ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    style={
                      getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    className="list__card">
                    {item.id}
                    <ul>
                      {item.products.map(product => (
                        <li key={product.productId}>
                          <span>ID: {product.productId}</span>
                          <span>quantity: {product.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class CurrentOrders extends React.Component {

  state = {
    toDo: [
      { id: 1, products: [{ productId: "2", quantity: 3 }, { productId: "3", quantity: 2 }] },
      { id: 2, products: [{ productId: "1", quantity: 1 }, { productId: "4", quantity: 1 }] }
    ],
    inProgress: [
      { id: 3, products: [{ productId: "2", quantity: 4 }, { productId: "3", quantity: 2 }] }
    ],
    done: [
      { id: 4, products: [{ productId: "2", quantity: 3 }, { productId: "5", quantity: 2 }] },
      { id: 5, products: [{ productId: "1", quantity: 3 }, { productId: "3", quantity: 2 }] },
      { id: 6, products: [{ productId: "2", quantity: 3 }, { productId: "3", quantity: 2 }] },
    ]
  }

  id3List = {
    droppable: 'toDo',
    droppable2: 'inProgress',
    droppable3: 'done'
  };

  getList = id => this.state[this.id3List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

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

      this.setState({
        [this.id3List[source.droppableId]]: result[source.droppableId],
        [this.id3List[destination.droppableId]]: result[destination.droppableId]
      });
    }
  }

  render() {
    return (
      <div>
        <div className="grid -three">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <List header="To Do" droppableId="droppable" items={this.state.toDo} />
            <List header="In progress" droppableId="droppable2" items={this.state.inProgress} />
            <List header="Done" droppableId="droppable3" items={this.state.done} />
          </DragDropContext>
        </div>
      </div>
    )
  }
}

const OrdersSettings = () => {
  return (
    <div>Settings</div>
  )
}

export default () => {
  return (
    <>
      <div className="sidebar sidebar-management">
        <NavLink to="/orders/current" activeClassName="--active">
          <ForkIcon />
            Current orders
        </NavLink>
        <NavLink to="/orders/settings" activeClassName="--active">
          <SettingsIcon />
            Settings
        </NavLink>
      </div>
      <Content>
        <Switch>
          <Route path="/orders/current" component={CurrentOrders} />
          <Route path="/orders/settings" component={OrdersSettings} />
        </Switch>
      </Content>
    </>
  );
};
