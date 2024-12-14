"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoadStrategy {
    buildRoute(origin, destination) {
        return `Road route from ${origin} to ${destination}`;
    }
}
class WalkingStrategy {
    buildRoute(origin, destination) {
        return `Walking route from ${origin} to ${destination}`;
    }
}
class PublicTransportStrategy {
    buildRoute(origin, destination) {
        return `Public transport route from ${origin} to ${destination}`;
    }
}
class Navigator {
    setRouteStrategy(strategy) {
        this.routeStrategy = strategy;
    }
    buildRoute(origin, destination) {
        if (this.routeStrategy) {
            return this.routeStrategy.buildRoute(origin, destination);
        }
        else {
            return "No route strategy set.";
        }
    }
}
const navigator = new Navigator();
navigator.setRouteStrategy(new RoadStrategy());
console.log(navigator.buildRoute("City A", "City B"));
navigator.setRouteStrategy(new WalkingStrategy());
console.log(navigator.buildRoute("Park X", "Museum Y"));
navigator.setRouteStrategy(new PublicTransportStrategy());
console.log(navigator.buildRoute("Station P", "Station Q"));
