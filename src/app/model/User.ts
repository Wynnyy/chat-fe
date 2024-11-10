export interface User {
  nickName: string;
  status: Status;



}

export enum Status {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}
