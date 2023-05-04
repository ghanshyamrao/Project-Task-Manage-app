export interface TaskColumnProps {
  state: string;
  colId: number;
}
export enum keys {
  PLANNED = "PLANNED",
  ONGOING = "ONGOING",
  TESTING = "TESTING",
  DONE = "DONE",
}
export interface TaskProps {
  title: string;
  status: string;
  taskId: number;
  time: string | number;
}

export interface takss{
    taskId: number 
    title: string 
    state: string
    time:string | number
  }
  export interface coll{
    colId: number 
    colName: string 
  }
  
  export type AppStore = {
    column:{
      colId:number
      colName:string
    }[]
    task: {
      taskId: number 
      title: string 
      state: string
      time:string | number
    }[];
   
    draggedTask: string
    draggedTaskId: number 
    draggedTime:string | number
  
    addCol:(colId:number,colName:string)=>void;
    delCol: (taskId:number) => void;
    updateCol: (taskId:number, newTitle:string) => void;
    addTask: (taskId:number, title:string, state:string, time:string|number) => void;
    delTask: (taskId:number) => void;
    updateTask: (taskId:number, newTitle:string) => void;
    setDraggedTask: (title:string) => void;
    setDraggedTime:(time:string | number)=>void;
    setDraggedTaskId: (taskId:number) => void;
    moveTask: (taskId:number, title:string, state:string,time:string | number) => void;
  };
  
export interface ButtonType {
  buttonType:string
  Icon:any
  extendClass:string
}  