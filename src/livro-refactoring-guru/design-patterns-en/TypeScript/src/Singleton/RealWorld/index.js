"use strict";
/**
 * Real World Example for the Singleton Design Pattern
 *
 * Need: Ensure there is only one instance of a Logger class that provides a
 * global point of access to it.
 *
 * Solution: Use the Singleton pattern to create a Logger class that has only
 * one instance and provides a global access point to that instance.
 */
/**
 * The Logger class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Logger {
    /**
     * The Logger's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    constructor() {
        this.entries = [];
    }
    /**
     * The static method that controls access to the singleton instance.
     */
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    /**
     * Business logic method for adding log entries.
     */
    add(log) {
        this.entries.push(log);
    }
}
