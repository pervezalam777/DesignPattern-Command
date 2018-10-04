import { ISubject } from "../interfaces/isubject";
import { Subject } from "../observerable/subject";
import { IObserver } from "../interfaces/iobserver";
import { INotification } from "../interfaces/inotification";
import { INotifier } from "../interfaces/inotifier";

export class NewsAgency implements INotifier {
    private subjectSubscribers:ISubject | INotifier
    constructor(){
        this.subjectSubscribers = new Subject();
    }

    subscribe(observer:IObserver):boolean {
        return (<ISubject>this.subjectSubscribers).subscribe(observer);
    }

    unsubscribe(observer:IObserver):boolean {
        return (<ISubject>this.subjectSubscribers).unsubscribe(observer);
    }

    notify(request:INotification):boolean {
        if(request.type === "politics"){
            return  (<INotifier>this.subjectSubscribers).notify(request)
        }
        return false;
    }
}

export class NewsAgencyFactory {
    public static create():NewsAgency{
        return new NewsAgency();
    }
}