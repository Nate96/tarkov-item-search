export class Singleton {
    private static instance: Singleton;
    protected constructor() {
    }
    static getInstance<T extends Singleton>(): T {
        const instance = this.instance;
        if (!instance) {
            this.instance = new this();
        }
        return this.instance as T;
    }
}