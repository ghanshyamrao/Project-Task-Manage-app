import React, { useState } from "react";
import "./Column.css";
import Task from "../Task/Task";
import {useStore } from "../../store";
import { shallow } from "zustand/shallow";
import classNames from "classnames";
import { AppStore, TaskColumnProps } from "../../InterFace/interface";



const TaskColumn: React.FC<TaskColumnProps> = ({ colId, state }) => {
  const tasks = useStore(
    (store: AppStore) =>
      store.task.filter((task: any) => task?.state === state),
    shallow
  );
  const addTask = useStore((store: AppStore) => store.addTask);
  const setDraggedTask = useStore((store: AppStore) => store.setDraggedTask);
  const setDraggedTaskId = useStore(
    (store: AppStore) => store.setDraggedTaskId
  );
  const editCol = useStore((store: AppStore) => store.updateCol);
  const delCol = useStore((store: AppStore) => store.delCol);
  const setDraggedTime = useStore((store: AppStore) => store.setDraggedTime);
  const draggedTask = useStore((store: AppStore) => store.draggedTask);
  const draggedTaskId = useStore((store: AppStore) => store.draggedTaskId);
  const draggedTime = useStore((store: AppStore) => store.draggedTime);
  const moveTask = useStore((store: AppStore) => store.moveTask);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [date, setDate] = useState(new Date().toISOString());
  const [onEditState, setOnEditState] = useState(false);
  const [editStateText, setEditStateText] = useState("");
  const [showDropDown, setshowDropDown] = useState(false);
  const [actionVisiable,setActionVisiable] = useState(false)

  console.log(showDropDown);

  return (
    <>
      <div
        className={classNames("Column", { drop: drop })}
        spellCheck
        // draggable
        onDragOverCapture={(e) => {
          setDrop(true);
          e.preventDefault();
        }}
        onDragLeave={(e) => {
          setDrop(false);
          e.preventDefault();
        }}
        onDropCapture={(e) => {
          moveTask(draggedTaskId, draggedTask, state, draggedTime);
          setDraggedTaskId(0);
          setDraggedTask("");
        }}
      >
        <div
         onMouseLeave={()=>{
          setActionVisiable(false)
          setshowDropDown(false)
        }}
        onMouseEnter={()=>{
          setActionVisiable(true)
        }}
          className={
            onEditState ? "ColumnTitleHeader editState" :"ColumnTitleHeader "
          }
        >
          {onEditState ? (
            <div className="editStateContainer">
              <input
                defaultValue={state}
                onChange={(e) => {
                  setEditStateText(e.target.value);
                }}
                type="text"
              />
              <div className="editStateButton">
                <button
                  onClick={() => {
                    editStateText ? editCol(colId, editStateText) : "";
                    setOnEditState(false);
                  }}
                  className="stateAction close"
                >
                  ✔
                </button>
                <button
                  onClick={() => {
                    setOnEditState(false);
                  }}
                  className="stateAction close"
                >
                  🗙
                </button>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <div className="editTextContainer">
              <p
                className="EditableText"
                onClick={() => {
                  setOnEditState(true);
                }}
              >
                {state}
              </p>
              <div className="doneTaskContainer">
                {tasks.length > 0
                  ? tasks.length + (tasks.length < 2 ? " issue" : " issues")
                  : ""}
                {state === "Done" && tasks.length > 0 ? (
                  <div className="taskDone">✔</div>
                ) : (
                  ""
                )}
              </div>
              </div>
              
              <div className="dropdown">
                <div
                  onClick={() => {
                    setshowDropDown(true);
                  }}
                  onDoubleClick={() => {
                    setshowDropDown(false);
                  }}
                  style={{ display: open ? "none" : "" }}
                  className={actionVisiable ?"visiabale actionBtn dropbtn stateDrop":"hidden actionBtn dropbtn"}
                >
                  <p>...</p>
                </div>
                <div
                  className="dropdown-content"
                  style={{ display: showDropDown ? "" : "none" }}
                >
                  <div className="ActionButtonContainer">
                    <button
                      className="AddRemove edit del"
                      onClick={() => {
                        setOpen(true);
                        setshowDropDown(false);
                      }}
                    >
                      +Add Task
                    </button>
                    <button
                      className="AddRemove del"
                      onClick={() => {
                        delCol(colId);
                        setshowDropDown(false);
                      }}
                    >
                      Delete Col
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
       
        {tasks.map((task: any) => (
          <Task
            taskId={task.taskId}
            title={task.title}
            status={task.state}
            key={task.title}
            time={task.time}
          />
        ))}
      
      </div>
      {open && (
        <div className="modal">
          <div className="modalContent">
            <div className="modalTitle">Add Task In {state}</div>
            <textarea onChange={(e) => setText(e.target.value)} value={text} />
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
                  setDate(new Date().toISOString());
                  text
                    ? addTask(
                        Math.floor(Math.random() * (1000 - 0 + 1)),
                        text,
                        state,
                        date
                      )
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
    </>
  );
};

export default TaskColumn;
