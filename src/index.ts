import { NewsAgencyFactory, NewsAgency } from "./newsagency/newsagency";
import { Reporter, ReporterFactory } from "./reporter/reporter";
import { Subscriber, SubscriberFactory } from "./subscribers/subscriber";

class Bootstrap {

    constructor(){ 

    }

    public initialize(){
       let timesOfIndia:NewsAgency = NewsAgencyFactory.create();

       let reporterOne:Reporter = ReporterFactory.create();
       reporterOne.attachTo(timesOfIndia);

       let reporterTwo:Reporter = ReporterFactory.create();
       reporterTwo.attachTo(timesOfIndia);

       let subscriberOne:Subscriber = SubscriberFactory.create("Vijay");
       timesOfIndia.subscribe(subscriberOne)

       let subscriberTwo:Subscriber = SubscriberFactory.create("Raj");
       timesOfIndia.subscribe(subscriberTwo);


       reporterOne.notifyNews("PM Modi to visit UP CM today");
       reporterTwo.notifyNews("Rahul Gandhi is on amarnath yatra");

    }
}   

let boot = new Bootstrap();
boot.initialize();