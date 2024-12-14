"use strict";
/**
 * Real World Example for the Abstract Factory design pattern
 *
 * Need: Provide different infrastructure connectors for different environments,
 * for example to mock some dependencies in testing environments, use cloud
 * services in production, etc.
 *
 * Solution: Create an abstract factory to supply variants of file systems,
 * databases and log providers. There is a concrete factory for each
 * environment. This factory is configured to provide different concrete
 * connectors for each type of environment. For example, in development we use
 * the console to log messages, whereas in production we use the Sentry service.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdEnvironmentFactory = exports.DevEnvironmentFactory = exports.EnvironmentFactory = exports.SentryLogProvider = exports.ConsoleLogProvider = exports.MockFS = exports.RealFS = exports.S3FS = exports.InMemoryMockDB = exports.MySQLDB = exports.LogProvider = exports.FS = exports.DB = void 0;
/**
 * First of all create some abstract products = connectors
 */
class DB {
}
exports.DB = DB;
class FS {
}
exports.FS = FS;
class LogProvider {
}
exports.LogProvider = LogProvider;
/**
 * Declare the different concrete product variants
 */
class MySQLDB extends DB {
    connect() {
        console.log('Connected to MySQL');
    }
}
exports.MySQLDB = MySQLDB;
class InMemoryMockDB extends DB {
    connect() {
        console.log('Mocking DB in memory');
    }
}
exports.InMemoryMockDB = InMemoryMockDB;
class S3FS extends FS {
    readFile(filename) {
        console.log(`Reading file ${filename} from S3`);
    }
}
exports.S3FS = S3FS;
class RealFS extends FS {
    readFile(filename) {
        console.log(`Reading file ${filename} from a real FS`);
    }
}
exports.RealFS = RealFS;
class MockFS extends FS {
    readFile(filename) {
        console.log(`Mocking a read file call to ${filename}`);
    }
}
exports.MockFS = MockFS;
class ConsoleLogProvider extends LogProvider {
    log(message) {
        console.log(`From console: ${message}`);
    }
}
exports.ConsoleLogProvider = ConsoleLogProvider;
class SentryLogProvider extends LogProvider {
    log(message) {
        console.log(`From Sentry: ${message}`);
    }
}
exports.SentryLogProvider = SentryLogProvider;
/**
 * Then create the abstract factory
 */
class EnvironmentFactory {
}
exports.EnvironmentFactory = EnvironmentFactory;
/**
 * Finally create a concrete factory, one for each environment. Each factory
 * produces different concrete products = connectors, depending on each
 * environment needs
 */
class DevEnvironmentFactory extends EnvironmentFactory {
    getDB() {
        return new InMemoryMockDB();
    }
    getFS() {
        return new MockFS();
    }
    getLogProvider() {
        return new ConsoleLogProvider();
    }
}
exports.DevEnvironmentFactory = DevEnvironmentFactory;
class ProdEnvironmentFactory extends EnvironmentFactory {
    getDB() {
        return new MySQLDB();
    }
    getFS() {
        return new RealFS();
    }
    getLogProvider() {
        return new SentryLogProvider();
    }
}
exports.ProdEnvironmentFactory = ProdEnvironmentFactory;
/**
 * The client function receives a factory to produce what it needs to execute
 * the application. It's not concerned about the environment.
 */
function client(environmentFactory) {
    const db = environmentFactory.getDB();
    db.connect();
    const fs = environmentFactory.getFS();
    fs.readFile('document.txt');
    const logProvider = environmentFactory.getLogProvider();
    logProvider.log('hello world');
}
/**
 * Based on an environment variable, inject the concrete factory implementation
 * of the environment to the client function
 */
if (process.env.NODE_ENV === 'production') {
    client(new ProdEnvironmentFactory());
}
else {
    client(new DevEnvironmentFactory());
}
