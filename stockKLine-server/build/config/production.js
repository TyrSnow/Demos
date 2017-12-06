"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    PORT: 8081,
    secretKey: 'bc8s.28er',
    db: {
        uri: 'mongodb://127.0.0.1:27017/StockKLine',
        user: '',
        password: ''
    },
    log: {
        appenders: {
            out: {
                type: 'console'
            },
            app: {
                type: 'file',
                filename: 'logs/access.log',
                maxLogSize: 1024,
                backups: 4
            },
            error: {
                type: 'file',
                filename: 'logs/error.log',
                maxLogSize: 1024,
                backups: 4
            }
        },
        categories: {
            default: {
                appenders: ['out', 'app'],
                level: 'debug'
            },
            error: {
                appenders: ['out', 'error'],
                level: 'debug'
            }
        },
        replaceConsole: true
    }
};
exports.default = config;
//# sourceMappingURL=production.js.map