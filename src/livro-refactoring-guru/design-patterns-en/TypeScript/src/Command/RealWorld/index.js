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
const https = require('node:https');
/**
 * We will use a receiver object to run the business logic
 */
class PrintRandomFactCommand {
    constructor(randomFactDomainServiceReceiver) {
        this.randomFactDomainServiceReceiver = randomFactDomainServiceReceiver;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const fact = yield this.randomFactDomainServiceReceiver.getRandomFact();
            console.info(fact);
        });
    }
}
/**
 * The Receiver class contains all the business logic to retrieve the
 * information
 */
class RandomFactDomainServiceReceiver {
    getRandomFact() {
        return new Promise((resolve, reject) => {
            https.get('https://uselessfacts.jsph.pl/api/v2/facts/random', (res) => {
                res.on('data', (d) => {
                    const data = JSON.parse(d);
                    const fact = data.text;
                    resolve(fact);
                });
            }).on('error', (error) => {
                reject(error);
            });
        });
    }
}
/**
 * The Invoker will execute any command every X seconds.
 */
class CommandInvoker {
    constructor(command, seconds = 5) {
        this.command = command;
        this.seconds = seconds;
    }
    start() {
        setInterval(() => {
            this.command.execute();
        }, this.seconds * 1000);
    }
}
/**
 * The client code invokes the command
 */
const randomFactDomainServiceReceiver = new RandomFactDomainServiceReceiver();
const command = new PrintRandomFactCommand(randomFactDomainServiceReceiver);
const commandInvoker = new CommandInvoker(command, 3);
commandInvoker.start();
