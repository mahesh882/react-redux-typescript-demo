export enum Actions {
  ADD_DATA = "ADD_DATA",
  SUB_DATA="SUB_DATA"
}

export interface Action{
type:Actions;
payload?:any;
}
