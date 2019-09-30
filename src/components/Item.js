import React from "react";
import { DragSource } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    console.log("yoyoyo");
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(props.item);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
const Item = props => {
  const { isDragging, connectDragSource, item } = props;
  const opacity = isDragging ? 0 : 1;

  return connectDragSource(
    <div className="item" style={{ opacity }}>
      <span>{item.name}</span>
    </div>
  );
};

export default DragSource("item", itemSource, collect)(Item);
