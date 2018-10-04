import { INotification } from "./inotification";

export interface IObserver {
    update(notification:INotification):void
}