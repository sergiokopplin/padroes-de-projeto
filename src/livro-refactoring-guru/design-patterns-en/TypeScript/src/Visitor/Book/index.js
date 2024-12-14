"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
}
class City extends Node {
    accept(visitor) {
        visitor.doForCity(this);
    }
}
class Industry extends Node {
    accept(visitor) {
        visitor.doForIndustry(this);
    }
}
class SightSeeing extends Node {
    accept(visitor) {
        visitor.doForSightSeeing(this);
    }
}
class ExportVisitor {
    doForCity(city) {
        console.log(`Exporting City node to XML: ${city}`);
    }
    doForIndustry(industry) {
        console.log(`Exporting Industry node to XML: ${industry}`);
    }
    doForSightSeeing(sightSeeing) {
        console.log(`Exporting SightSeeing node to XML: ${sightSeeing}`);
    }
}
const graph = [];
graph.push(new City());
graph.push(new Industry());
graph.push(new SightSeeing());
const xmlExportVisitor = new ExportVisitor();
graph.forEach((node) => node.accept(xmlExportVisitor));
