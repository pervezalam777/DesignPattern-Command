import {IOperation} from "../interfaces/ioperation"

export class Multiply implements IOperation {
    
    performAction(first:number, second:number):number{
        return first * second;
    }
}