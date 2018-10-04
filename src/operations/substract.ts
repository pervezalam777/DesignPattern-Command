import {IOperation} from "../interfaces/ioperation"

export class Substract implements IOperation {
    
    performAction(first:number, second:number):number{
        return first - second;
    }
}