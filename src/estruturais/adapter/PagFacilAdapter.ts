import { Gateway } from "./Gateway";
import { PagFacil } from "./terceiros/PagFacil";

export class PagFacilAdapter extends PagFacil implements Gateway {}
