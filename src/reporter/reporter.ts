import { INotifier } from "../interfaces/inotifier";
import { INotification } from "../interfaces/inotification";

export class Reporter {
    private newsAgencyToReport:INotifier | null = null;

    constructor(){
    } 

    attachTo(agency:INotifier){
        this.newsAgencyToReport = agency;
    }

    notifyNews(data:string){
        var news:INotification = {
            type:"politics", 
            action:"breaking news",
            payload: data
        };
        (<INotifier>this.newsAgencyToReport).notify(news)
    }
}

export class ReporterFactory {
    public static create():Reporter{
        return new Reporter();
    }
}