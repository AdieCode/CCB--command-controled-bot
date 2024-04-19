class Bot {
    constructor(){
        this._userInput = '';
        this._command = '';
        this._progress = 0;
        this._commandList = [];
        this._commandSteps = {}
        this.data = {}; 
    }

    set userInput(text){
        this._userInput = text;
    }

    get userInput(){
        return this._userInput;
    }

    // function will check if text is a command or not
    checkIfCommand(text){
        if (this._commandList.includes(text)){
           return true
        } else {
           return false
        }
    }
    
    //check if there is a command in the userTracker object
    isTheirCommand(){
        const commandLength = this._command.length;
    
        if (commandLength > 0){
            return true
        } else {
            return false
        }
    }
    
    addCommand(command){
        this._commandList.push(command);
        this._commandSteps[command] = [];
    }
    
    setAsCurrentCommand(command){
        this._command = command;
    }
    
    clearUserInput(){
        this._userInput = '';
    }

    addStep(command, newFunction){
        const isCommand = this.checkIfCommand(command);

        if (isCommand){
            this._commandSteps[command].push(newFunction);
        } else {
            this.addCommand(command);
            this._commandSteps[command].push(newFunction);
        }
    }

    addStepArray(command, newFunctions){
        const isCommand = this.checkIfCommand(command);
        const isArray = Array.isArray(newFunctions);

        if (isCommand && isArray){

            newFunctions.forEach(func => {
                this._commandSteps[command].push(func)
            });

        } else {
            this.addCommand(command);
            newFunctions.forEach(func => {
                this._commandSteps[command].push(func);
            });
        }
    }

    next(){
        this._progress++
    }

    respond(text){
        const isCommand = this.checkIfCommand(text);
        this._userInput = text;

        if (isCommand){
            this.setAsCurrentCommand(text)
            this._progress = 0;
            return this._commandSteps[this._command][this._progress]();
        } else {
            return this._commandSteps[this._command][this._progress]();
        }
    }

    
}

module.exports = Bot;

