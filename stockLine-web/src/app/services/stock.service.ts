import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export default class StockSrv {
    constructor(
        private http: HttpClient
    ) { }
}