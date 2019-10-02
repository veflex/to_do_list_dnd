import React, {useState} from "react";
import { DragSource } from "react-dnd";



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

const itemSource = {
  beginDrag (props, monitor) {
    return props.item;
  },
  endDrag (props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(props.item);
  }
};
export default DragSource("item", itemSource, collect)(Item);
