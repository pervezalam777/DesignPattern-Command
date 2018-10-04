import { BasicCalculator } from "./calculator/basiccalculator";
import { COMMAND_CONST } from "./commands/commandFactory";

class Bootstrap {

    constructor(){ }

    public initialize(){
        let basicCal:BasicCalculator = new BasicCalculator();
        basicCal.initialize();

        let value:number = basicCal.performOperation(COMMAND_CONST.ADDITION, 10);
        value = basicCal.performOperation(COMMAND_CONST.ADDITION, 20);
        console.log(value);

        value = basicCal.performOperation(COMMAND_CONST.MULTIPLY, 30);
        console.log(value);

        value = basicCal.performOperation(COMMAND_CONST.MULTIPLY, 30);
        console.log(value);

        value = basicCal.undoOperation();
        console.log(value);

    }
}   

let boot = new Bootstrap();
boot.initialize();