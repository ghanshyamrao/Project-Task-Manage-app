import classNames from "classnames";
import "./task.css";
import { useStore } from "../../store";
import { useEffect, useState } from "react";
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import moment from "moment";
import { Alert, Space } from 'antd';
import { AppStore, TaskProps, takss } from "../../InterFace/interface";



const Task: React.FC<TaskProps> = ({ title, status, taskId, time }) => {
  const task = useStore((store: AppStore) =>
    store.task.find((task: takss) => task?.taskId === taskId)
  );
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const delTask = useStore((store: AppStore) => store.delTask);
  const editTask = useStore((store: AppStore) => store.updateTask);
  const [showDropDown, setshowDropDown] = useState(false);
  const setDraggedTask = useStore((store: AppStore) => store.setDraggedTask);
  const [actionVisiable,setActionVisiable] = useState(false)
  const setDraggedTaskId = useStore(
    (store: AppStore) => store.setDraggedTaskId
  );
  const setDraggedTime = useStore((store: AppStore) => store.setDraggedTime);
  const taskNumber = `${title.slice(0, 1).toUpperCase()}-${Math.floor(taskId)}`;
  const createdTime = moment(task!.time).startOf('milliseconds').fromNow(); 

  const getStatus = (key: string): string => {
    let newstate = "";
    switch (key) {
      case "To Do":
        newstate = "PLANNED";
        break;
      case "In Progress":
        newstate = "ONGOING";
        break;
      case "Testing":
        newstate = "TESTING";
        break;
      case "Done":
        newstate = "DONE";
        break;
      default:
        break;
    }
    return newstate;
  };

  return (

    <div
      onDragEnd={() => {
        setDraggedTask(task!.title);
        setDraggedTaskId(task!.taskId);
        setDraggedTime(task!.time);
      }}
    >
     
      <div
        className="task"
        draggable
        onMouseLeave={()=>{
          setActionVisiable(false)
          setshowDropDown(false)
        }}
        onMouseEnter={()=>{
          setActionVisiable(true)
        }}
        onDragStartCapture={() => {
          setDraggedTask(task!.title);
          setDraggedTaskId(task!.taskId);
          setDraggedTime(task!.time);
        }}
      >
        <div className="taskHeaderAction">
          <div className="taskTitle">{title}</div>
          <div className="dropdown">
            <button
              onClick={() => {
                setshowDropDown(!showDropDown);
              }}
              style={{ display: open ? "none" : "" }}
              className={actionVisiable ?"visiabale actionBtn dropbtn":"hide actionBtn dropbtn"}
            >
              <p >...</p>
            </button>
            <div
              className="dropdown-content"
              style={{ display: showDropDown ? "" : "none" }}
            >
              <div className="bottomWrapper">
                <div className="taskActionBtn">
                  <div
                    className="edit del"
                    onClick={() => {
                      setOpen(true);
                      setshowDropDown(false);
                    }}
                  >
                    Edit
                  </div>
                  <div
                    className="del"
                    onClick={() => {
                      delTask(taskId);
                      setshowDropDown(false);
                    }}
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div/>
        </div>
        <div className="rolesLabalContainer">
        <div className="rolesLabal"> ADMIN</div>
        </div>
        <div className="labal">
          <div className="labalContainer">
          <p className="checkLable">✅</p>
          <div className="taskNumber">{taskNumber}</div>
          </div>
          <div className={classNames("status", getStatus(status))}>
            {status.slice(0,2).toUpperCase()}
          </div>
        </div>
        <div className="timeStamp">Created at : {createdTime}</div>
      </div>
      {open && (
      <div className="modal">
        <div className="modalContent">
          <div className="modalTitle">Edit Task {status}</div>
          <textarea
            autoFocus={true}
            onChange={(e) => setText(e.target.value)}
            defaultValue={task?.title ?? ""}
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
                if (text) {
                  editTask(task!.taskId, text);
                }
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
   

  );
};

export default Task;
