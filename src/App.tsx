import { useState } from "react";
import "./App.css";
import TaskColumn from "./components/Column/TaskColumn";
import React from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { AppStore, keys } from "./InterFace/interface";
import Header from "./components/Header/Header";

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const addCol = useStore((store: AppStore) => store.addCol);
  const column = useStore((store: AppStore) => store.column, shallow);

  console.log(column);
  const [count, setCount] = useState(0);
  const getStatus = (key: keys) => {
    let newstate = "";
    switch (key) {
      case keys.PLANNED:
        newstate = "To Do";
        break;
      case keys.ONGOING:
        newstate = "In Progress";
        break;
      case keys.TESTING:
        newstate = "Testing";
        break;
      case keys.DONE:
        newstate = "Done";
        break;
    }
    return newstate;
  };
  return (
    <div className="App">
      <div className="columnContainer ColContainer">
        <div className="Header"><Header/></div>
        <div className="App ColSubContainer">
          {column.map((col: any) => (
            <TaskColumn colId={col.colId} state={col.colName} />
          ))}
          <button
            className="addColumn"
            onClick={() => {
              setOpen(true);
            }}
          >
            <p className="addIcon">+</p>
          </button>
        </div>

        {/* <TaskColumn  state={getStatus(keys.ONGOING)}/>
      <TaskColumn  state={getStatus(keys.TESTING)}/>
      <TaskColumn  state={getStatus(keys.DONE)}/> */}
        {open && (
          <div className="modal">
            <div className="modalContent">
              <div className="modalTitle">Add New Column </div>
              <textarea
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <div className="modalBtnContainer">
                <button
                  className="close"
                  onClick={() => {
                    setText("");
                    setOpen(false);
                  }}
                >
                  Close
                </button>
                <button
                  className="close submit"
                  onClick={() => {
                    text
                      ? addCol(Math.floor(Math.random() * (1000 - 0 + 1)), text)
                      : "";
                    setText("");
                    setOpen(false);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
