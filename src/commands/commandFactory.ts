import { ICommand } from "../interfaces/icommand";
import { IOperation } from "../interfaces/ioperation";
import { Addition } from "../operations/add";
import { Substract } from "../operations/substract";
import { Command } from "./command";
import { Multiply } from "../operations/multiply";
import { Divide } from "../operations/divide";

export const COMMAND_CONST = {
    ADDITION:"addition",
    SUBSTRACT:"substract",
    MULTIPLY:"multiply",
    DIVIDE:"divide"
}

export class CommandFactory {

    constructor(){}

    createCommand(name:string, value:number):ICommand {
        switch(name){
            case COMMAND_CONST.ADDITION:
                return this.addCommand(value);
            case COMMAND_CONST.SUBSTRACT:
                return this.subCommand(value);
            case COMMAND_CONST.MULTIPLY:
                return this.multiCommand(value);
            case COMMAND_CONST.DIVIDE:
                return this.divideCommand(value);
            default:
                return this.addCommand(value)
        }
    }

    addCommand(value:number):ICommand {
        let execute:IOperation = new Addition();
        let undo:IOperation = new Substract();
        return new Command(execute, undo, value);
    }

    subCommand(value:number):ICommand {
        let execute:IOperation = new Substract();
        let undo:IOperation = new Addition();
        return new Command(execute, undo, value);
    }

    multiCommand(value:number):ICommand {
        let execute:IOperation = new Multiply();
        let undo:IOperation = new Divide();
        return new Command(execute, undo, value);
    }

    divideCommand(value:number):ICommand {
        let execute:IOperation = new Divide();
        let undo:IOperation = new Multiply();
        return new Command(execute, undo, value);
    }

}