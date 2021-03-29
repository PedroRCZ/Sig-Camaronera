import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ConsumoServices{
    url = "http://localhost:4000/inventario/"
    url2 = "http://localhost:4000/inventario/piscina/"
    url3 = "http://localhost:4000/inventario/corrida/"

    constructor(private http: HttpClient){ }

    getVerConsumo(): Observable<any>{
        return this.http.get(this.url);
    }

    getConsumoById(id: number): Observable<any> {
        return this.http.get(this.url + id);
    }

    getPiscinaById(id: number): Observable<any> {
        return this.http.get(this.url2 + id);
    }

    getCorridaById(id: number): Observable<any> {
        return this.http.get(this.url3 + id);
    }

}