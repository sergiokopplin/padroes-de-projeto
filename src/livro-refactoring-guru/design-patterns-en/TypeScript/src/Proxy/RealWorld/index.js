"use strict";
/**
 * Real World Example for the Proxy Design Pattern
 *
 * Need: Cache and log access to an external weather service SDK
 *
 * Solution: Create a proxy class to cache the SDK calls and log the requests
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * The real service emulates a network request to an external service with a 1
 * second delay
 */
class RealWeatherServiceSDK {
    request() {
        return __awaiter(this, void 0, void 0, function* () {
            const randomWeatherForecast = {
                avgTemperature: Math.random() * 35,
                maxPrecipitationProbability: Math.random() * 100,
            };
            return new Promise((resolve) => {
                setTimeout(() => resolve(randomWeatherForecast), 1000);
            });
        });
    }
}
/**
 * The Proxy implements the same interface than the real service. However the
 * proxy uses an internal cache to store responses. Subsequent calls to the
 * proxied service will go faster as they won't call the real slow service. The
 * proxy also logs useful information about the cache usage and timmings.
 */
class ProxyWeatherService {
    constructor(realWeatherService) {
        this.realWeatherService = realWeatherService;
        this.expirationTimeInMillis = 24 * 60 * 60 * 1000;
    }
    request() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Requesting forecast on date ${new Date().toISOString()}.`);
            const initialTime = Date.now();
            if (this.isCacheExpired()) {
                console.log('Invalid cache. Calling real weather service...');
                this.setCache(yield this.realWeatherService.request());
            }
            const requestTimeInMillis = Date.now() - initialTime;
            console.log(`Request processed in ${requestTimeInMillis} milliseconds`);
            return this.cachedResponse;
        });
    }
    isCacheExpired() {
        return this.cachedResponse ?
            Date.now() > this.cacheDate.getTime() + this.expirationTimeInMillis :
            true;
    }
    setCache(weatherForecast) {
        this.cachedResponse = weatherForecast;
        this.cacheDate = new Date();
    }
}
/**
 * The client code works with real and proxied services
 */
function clientCode(weatherService) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 3; i += 1) {
            const weatherForecast = yield weatherService.request();
            console.log(`The weather forecast is ${weatherForecast.avgTemperature}º average temperature and ${weatherForecast.maxPrecipitationProbability}% max precipitation probability.`);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Client: Executing the client code with a real weather service:');
        const realWeatherService = new RealWeatherServiceSDK();
        yield clientCode(realWeatherService);
        console.log('');
        console.log('Client: Executing the same client code with a proxied weather service:');
        const proxy = new ProxyWeatherService(realWeatherService);
        yield clientCode(proxy);
    });
}
main();
