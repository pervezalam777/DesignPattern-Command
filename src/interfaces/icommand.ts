
export interface ICommand {
    execute(current:number):number
    canUndo():boolean
    canRedo():boolean
    undo(current:number):number
    redo(current:number):number
}