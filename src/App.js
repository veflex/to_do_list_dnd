import React, { useState } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import "./App.scss";
import Item from "./components/Item";
import Target from "./components/Target";
function App() {
  // eslint-disable-next-line
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" }
  ]);

  const [items2, setItems2] = useState([]);

  const deleteItem = (item, setListeFrom, setListTo) => {
    setListeFrom(prevState => {
      const itemsCopy = [...prevState];
      const index = itemsCopy.indexOf(item);
      itemsCopy.splice(index, 1);

      return itemsCopy;
    });
    setListTo(prevState2 => {
      const newState = [...prevState2, item];
      console.log(newState);
      return newState;
    });
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="container">
          <Target header="Liste 1">
            {items.map((item, index) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  handleDrop={item => {
                    deleteItem(item, setItems, setItems2);
                  }}
                ></Item>
              );
            })}
          </Target>
          <Target header="Liste 2">
            {items2.map((item, index) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  handleDrop={item => {
                    deleteItem(item, setItems2, setItems);
                  }}
                ></Item>
              );
            })}
          </Target>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
