import React from "react";
import { DropTarget } from "react-dnd";

const collect = (connect, monitor) => {
  return {
    connectedDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
};

const Target = props => {
  const { connectedDropTarget, hovered, item } = props;
  return connectedDropTarget(
    <div className="item-list target">
      <h2 className="header">Liste {props.header}</h2>
      {props.children}
    </div>
  );
};

export default DropTarget("item", {}, collect)(Target);
