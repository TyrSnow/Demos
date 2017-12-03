import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export default class StockSrv {
    activeCode: string
    constructor(
        private http: HttpClient
    ) { }
}