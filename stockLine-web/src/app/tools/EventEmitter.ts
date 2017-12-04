
/**
 * 
 */
export default class EventEmitter {
    events: object
    constructor() {
        this.events = {}
    }

    on(name: string, handler: Function, time: number = -1):EventEmitter {
        if (this.events[name]) {
            this.events[name].push({
                handler,
                time
            })
        } else {
            this.events[name] = [
                {
                    handler,
                    time
                }
            ]
        }
        return this;
    }

    once(name: string, handler: Function): EventEmitter {
        return this.on(name, handler, 1);
    }

    off(name: string, handler?: Function): EventEmitter {
        if (!this.events[name]) {
            return this;
        }
        if (!handler) {
            delete this.events[name];
            return this;
        }
        let arr = this.events[name];
        for (let i = arr.length - 1; i > -1; i--) {
            if (arr[i].handler === handler) {
                arr.splice(i, 1);
            }
        }
        return this;
    }

    emit(name: string, args: any): EventEmitter {
        if (!this.events[name]) {
            return this;
        }
        let arr = this.events[name];
        for (let i = arr.length - 1; i > -1; i--) {
            arr[i].handler(args);
            if (arr[i].time === -1) {
                continue;
            } else {
                arr[i].time--;
                if (arr[i].time === 0) {
                    arr.splice(i, 1);
                }
            }
        }
        return this;
    }
}