import { IObserver } from "./iobserver";
import { INotifier } from "./inotifier";

export interface ISubject {
    subscribe(observer:IObserver):boolean
    unsubscribe(observer:IObserver):boolean
}