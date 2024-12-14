"use strict";
/**
 * Real World Example for the Factory Method design pattern
 *
 * Need: Create different database connectors and be able to switch the
 * connector with an environment variable
 *
 * Solution: Create an abstract class with a factory method that returns a
 * concrete implementation of a database connection
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisConnection = exports.MongoConnection = exports.DBConnection = exports.RedisConnectionFactory = exports.MongoConnectionFactory = exports.DBConnectionFactory = void 0;
/**
 * Abstract class with the factory method
 */
class DBConnectionFactory {
}
exports.DBConnectionFactory = DBConnectionFactory;
/**
 * Concrete factories, each of them produces a concrete connection
 */
class MongoConnectionFactory extends DBConnectionFactory {
    createDBConnection() {
        return new MongoConnection();
    }
}
exports.MongoConnectionFactory = MongoConnectionFactory;
class RedisConnectionFactory extends DBConnectionFactory {
    createDBConnection() {
        return new RedisConnection();
    }
}
exports.RedisConnectionFactory = RedisConnectionFactory;
/**
 * Abstract product to be created = database connection
 */
class DBConnection {
    connect() {
        console.log(`Connected to ${this.provider}`);
    }
}
exports.DBConnection = DBConnection;
/**
 * Concrete product to be created = database connection
 */
class MongoConnection extends DBConnection {
    constructor() {
        super();
        this.provider = 'Mongo DB';
    }
}
exports.MongoConnection = MongoConnection;
class RedisConnection extends DBConnection {
    constructor() {
        super();
        this.provider = 'Redis';
    }
}
exports.RedisConnection = RedisConnection;
/**
 * The client function accepts any concrete factory
 */
function main(dbConnectionFactory) {
    const dbConnection = dbConnectionFactory.createDBConnection();
    dbConnection.connect();
}
/**
 * Based on an environment variable, we create a concrete factory and inject it
 * to the client function
 */
switch (process.env.DB) {
    case 'Mongo':
        main(new MongoConnectionFactory());
        break;
    case 'Redis':
        main(new RedisConnectionFactory());
        break;
    default:
        console.error('Unknown DB');
}
