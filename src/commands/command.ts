import { ICommand } from "../interfaces/icommand";
import {IOperation} from "../interfaces/ioperation"

export class Command implements ICommand {
    private exeInvoker:IOperation
    private undoInvoker:IOperation
    private value:number 

    constructor(exeInvoker:IOperation, undoInvoker:IOperation, value:number){
        this.exeInvoker = exeInvoker;
        this.undoInvoker = undoInvoker;
        this.value = value;
    }

    execute(curent:number):number{
        return this.exeInvoker.performAction(curent, this.value)
    }

    canUndo():boolean{
        return this.undo !== undefined
    }

    canRedo():boolean{
        return this.exeInvoker !== undefined
    }

    undo(curent:number):number {
        return this.undoInvoker.performAction(curent, this.value)
    }

    redo(curent:number):number {
        return this.execute(curent);
    }

}