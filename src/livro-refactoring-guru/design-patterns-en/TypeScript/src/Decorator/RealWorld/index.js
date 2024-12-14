"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserController {
    process(req) {
        const users = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Alice' },
        ];
        const response = {
            status: 200,
            data: {}
        };
        if (req.method === 'GET') {
            response.data = users;
        }
        else {
            response.status = 400;
            response.data = {
                message: 'Bad request'
            };
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(response);
            }, 200);
        });
    }
}
class Decorator {
    constructor(controller) {
        this.controller = controller;
    }
    process(req) {
        return this.controller.process(req);
    }
}
class TelemetryDecorator extends Decorator {
    process(req) {
        const _super = Object.create(null, {
            process: { get: () => super.process }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const start = new Date().getTime();
            const result = yield _super.process.call(this, req);
            const end = new Date().getTime();
            const time = end - start;
            /**
             * If you want, you can save this telemetry data in a log file
             */
            console.log(`${req.url} ${req.method} => ${time}ms`);
            return result;
        });
    }
}
const userController = new TelemetryDecorator(new UserController());
userController.process({ url: '/users', method: 'GET' });
