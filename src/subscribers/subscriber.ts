import { IObserver } from "../interfaces/iobserver";
import { INotification } from "../interfaces/inotification";

export class Subscriber implements IObserver {
    private name:string
    constructor(name:string){
        this.name = name;
    }

    update(news:INotification){
        console.log(this.name, "I have got the news");
        console.log(this.name, news.type, ":", news.payload)
    }
}

export class SubscriberFactory {
    public static create(name:string):Subscriber{
        return new Subscriber(name);
    }
}
