import {IOperation} from "../interfaces/ioperation"

export class Divide implements IOperation {
    
    performAction(first:number, second:number):number{
        return first / second;
    }
}