import { ISubject } from "../interfaces/isubject";
import { IObserver } from "../interfaces/iobserver";
import { INotification } from "../interfaces/inotification";
import { INotifier } from "../interfaces/inotifier";

export class Subject implements ISubject, INotifier {
    private subscriberList:Array<IObserver> = []

    public subscribe(observer:IObserver):boolean {
        if(this.getIndex(observer) === -1){
            this.subscriberList.push(observer);
            return true;
        }
        return false;
    }

    public unsubscribe(observer:IObserver):boolean {
        let index = this.getIndex(observer);
        if(index > -1){
            this.subscriberList.splice(index, 1);
            return true;
        }
        return false;
    }

    getIndex(observer:IObserver):number{
        let index:number = this.subscriberList
                            .findIndex(value => value === observer)
        return index;
    }

    public notify(request:INotification):boolean {
        this.subscriberList.forEach(value => value.update(request))
        return true;
    }   
}