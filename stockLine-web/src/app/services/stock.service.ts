import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import EventEmitter from '../tools/EventEmitter'

@Injectable()
export default class StockSrv extends EventEmitter {
    activeCode: string
    constructor(
        private http: HttpClient
    ) { 
        super();
    }
}