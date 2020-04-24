import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

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

const List = ({ header, droppableId, items, archiveOrder, countdown }) => {
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
                      {<p>{countdown && countdown[item.id] ? countdown[item.id].count : 'none'}</p>}
                      <button onClick={archiveOrder(item.id)}>Archive</button>
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

export { reorder, move }
export default List