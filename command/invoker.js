class Invoker {

    constructor() {
        this.history = [];
    }

    run (cmd){
        this.history.push(cmd);
        cmd();
    }

    undo() {
        const cmd = this.history.pop();
        cmd.undo();
    }
}