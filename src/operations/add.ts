import {IOperation} from "../interfaces/ioperation"

export class Addition implements IOperation {
    
    performAction(first:number, second:number):number{
        return first + second;
    }
}