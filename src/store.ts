import { create as Cr, State } from "zustand";
import { devtools as Dv } from "zustand/middleware";
import { persist as Pr } from "zustand/middleware";
import { AppStore, coll, takss } from "./InterFace/interface";



export const store = (set: any): AppStore => ({
  task: [],
  draggedTask: '',
  draggedTaskId: 0,
  draggedTime: '',
  column:[{colId:1,colName:'To Do'}],

  addCol: (colId:number,colName:string) =>
    set(
      (store: AppStore) => ({ column: [...store.column, { colId, colName}] }),
      false,
      "addTask"
    ),
  delCol: (colId:number) =>
    set(
      (store: AppStore) => ({
        column: store.column.filter((column:coll) => column.colId !== colId),
      }),
      false,
      "delTask"
    ),
  updateCol: (colId:number, newTitle:string) =>
    set(
      (store: AppStore) => ({
        column: store.column.map((column:coll) =>
          column.colId === colId ? { ...column, colName: newTitle } : column
        ),
      }),
      false,
      "updateTask"
    ),
  
  addTask: (taskId:number, title:string, state:string,time:string|number) =>
    set(
      (store: AppStore) => ({ task: [...store.task, { taskId, title, state,time }] }),
      false,
      "addTask"
    ),
  delTask: (taskId:number) =>
    set(
      (store: AppStore) => ({
        task: store.task.filter((task:takss) => task.taskId !== taskId),
      }),
      false,
      "delTask"
    ),
  updateTask: (taskId:number, newTitle:string) =>
    set(
      (store: AppStore) => ({
        task: store.task.map((task:takss) =>
          task.taskId === taskId ? { ...task, title: newTitle } : task
        ),
      }),
      false,
      "updateTask"
    ),

  setDraggedTask: (title:string) => set({ draggedTask: title }, false, "draggedTask"),
  setDraggedTime: (time:string | number) => set({ draggedTime: time }, false, "draggedTask"),
  setDraggedTaskId: (taskId:number) =>
    set({ draggedTaskId: taskId }, false, "draggedTask"),
  moveTask: (taskId:number, title:string, state:string,time:string | number) =>
    set(
      (store: AppStore) => ({
        task: store.task.map((task:takss) =>
          task.taskId === taskId ? { taskId, title, state ,time} : task
        ),
      }),
      false,
      "moveTask"
    ),
});

export const useStore = Cr(Pr(Dv(store), { name: "store" }));
