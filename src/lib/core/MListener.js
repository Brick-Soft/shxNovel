class MListener {

    constructor() {
        /** @type {Map<String, Array<Function>>} */
        this.pool = new Map();
    }

    on(event, fn) {
        if (typeof event !== 'string') { return; }
        if (this.pool.has(event)) {
            this.pool.get(event).push(fn);
        } else {
            this.pool.set(event, [fn]);
        }
    }

    emit(event, ...args) {
        if (typeof event !== 'string') { return; }
        let aim = this.pool.get(event);
        if (!Array.isArray(aim)) { return; }
        for (let fn of aim) { fn(...args); }
    }

    async emitAsync(event, ...args) {
        if (typeof event !== 'string') { return; }
        let aim = this.pool.get(event);
        if (!Array.isArray(aim)) { return; }
        for await (let fn of aim) { await fn(...args); }
    }

}

const eventController = new MListener();
export { MListener, eventController }