import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cosumo } from '../models/consumo';

@Injectable({
    providedIn: 'root'
})

export class ConsumoServices{
    url = "https://back-sig.herokuapp.com/inventario/"


    constructor(private http: HttpClient){ }

    getVerConsumo(): Observable<any>{
        return this.http.get(this.url);
    }

    getConsumoById(id: number): Observable<any> {
        return this.http.get(this.url + id);
    }

    getPiscinaById(id: number): Observable<any> {
        return this.http.get(this.url +"piscina/"+ id);
    }

    getCorridaById(id: number): Observable<any> {
        return this.http.get(this.url + "corrida/" + id);
    }

    guardarConsumo(consumo: Cosumo): Observable<any>{
        return this.http.post(this.url, consumo);
    }

    getConsumoSumado(): Observable<any>{
        return this.http.get(this.url + "consumo/");
    }

}