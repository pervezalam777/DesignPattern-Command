import { ICommand } from "../interfaces/icommand";
import { CommandFactory, COMMAND_CONST } from "../commands/commandFactory";

export class BasicCalculator {
    private currentValue:number = 0;
    private callStack:Array<ICommand> = [];
    private undoCallStack:Array<ICommand> = [];
    private futureCallStack:Array<ICommand> = [];
    private commandFactory:CommandFactory;
    
    constructor(){
        this.commandFactory = new CommandFactory();
    }
    
    initialize(){
        // Left for future dependency
    }

    keepOperationForFuture(operation:string, value:number):boolean{
        let command:ICommand = this.commandFactory
                        .createCommand(operation, value);
        this.futureCallStack.push(command);              
        return false;
    }

    performPendingOperation():number{
        let command:ICommand = <ICommand> this.futureCallStack.shift();
        let value:number = this.currentValue;
        while(command){
            this.callStack.push(command);
            value = command.execute(this.currentValue);
            command = <ICommand> this.futureCallStack.shift();
        }
        return value;
    }

    performOperation(operation:string, value:number):number{
        let command:ICommand = this.commandFactory
                        .createCommand(operation, value)
        this.currentValue = command.execute(this.currentValue);
        this.callStack.push(command);
        return this.currentValue;
    }
    
    undoOperation():number{
        let command:ICommand = <ICommand> this.callStack.pop();
        if(command && command.canUndo()){
            this.undoCallStack.push(command);
            return command.undo(this.currentValue)
        }
        return -1;
    }

    redoOperation():number {
        let command:ICommand = <ICommand> this.undoCallStack.pop();
        if(command && command.canRedo()){
            this.callStack.push(command);
            return command.execute(this.currentValue)
        }
        return -1;
    }

    reset(){
        this.callStack = [];
        this.undoCallStack = [];
        this.currentValue = 0;
    }

    getValue():number {
        return this.currentValue;
    }
}