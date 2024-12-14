"use strict";
class Truck {
    deliver() {
        console.log("Delivering by land (Truck)");
    }
}
class Ship {
    deliver() {
        console.log("Delivering by sea (Ship)");
    }
}
class Logistics {
}
class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
    planDelivery() {
        this.transport = this.createTransport();
        this.transport.deliver();
    }
}
class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship();
    }
    planDelivery() {
        this.transport = this.createTransport();
        this.transport.deliver();
    }
}
const roadLogistics = new RoadLogistics();
roadLogistics.planDelivery();
const seaLogistics = new SeaLogistics();
seaLogistics.planDelivery();
