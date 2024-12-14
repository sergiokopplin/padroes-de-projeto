"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailNotifier {
    constructor(emails) {
        this.emails = emails;
    }
    send(message) {
        console.log(`Sending email to ${this.emails}: ${message}`);
    }
}
class SMSDecorator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    send(message) {
        console.log(`Sending SMS: ${message}`);
        this.notifier.send(message);
    }
}
class FacebookDecorator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    send(message) {
        console.log(`Sending Facebook message: ${message}`);
        this.notifier.send(message);
    }
}
class SlackDecorator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    send(message) {
        console.log(`Sending Slack message: ${message}`);
        this.notifier.send(message);
    }
}
const emailNotifier = new EmailNotifier([
    "user1@example.com",
    "user2@example.com",
]);
const combinedNotifier = new SlackDecorator(new FacebookDecorator(new SMSDecorator(emailNotifier)));
combinedNotifier.send("Important message: House is on fire!");
