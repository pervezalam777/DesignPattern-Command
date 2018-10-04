import { INotification } from "./inotification";

export interface INotifier {
    notify(request:INotification):boolean
}