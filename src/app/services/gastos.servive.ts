import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gastos } from '../models/gastos'

@Injectable({
    providedIn: 'root'
})

export class GastosServices{
    url = "http://localhost:4000/gastos/";

    constructor(private http: HttpClient){  }

    getVerGastos(): Observable<any>{
        return this.http.get(this.url);
    }

    guardarGastos(gastos: Gastos): Observable<any>{
        return this.http.post(this.url, gastos);
    }
    getGastosByID(id: number):Observable<any>{
        return this.http.get(this.url + id)
    }
}