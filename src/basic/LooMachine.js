class LoopMachine {
    constructor() {
        this.id = null;
        this.callbacks = [];
    }
    addUniqueCallback(callback) {
        if (this.callbacks.includes(callback)) return;
        this.callbacks.push(callback);
    }
    filterCallbacks(callback) {
        this.callbacks = this.callbacks.filter(cb => cb !== callback);
    }
    startInterval(fps) {
        this.id = setInterval(() => {
            this.callbacks.forEach(cb => cb());
        }, 1000 / fps);
    }
    clear() {
        clearInterval(this.id);
        this.id = null;
    }
}

const loopMachine = new LoopMachine();


export default loopMachine;

export { LoopMachine };

