import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdProv } from '../models/prodprov'

@Injectable({
    providedIn: 'root'
})

export class ProdProvServices{
    url = "http://localhost:4000/gastos/prod/";
    url2 = "http://localhost:4000/gastos/prod/existe/";

    constructor(private http: HttpClient){ }
    
    getVerProdProv(): Observable<any>{
        return this.http.get(this.url);
    }

    getVerProdProvEx(prodprov: ProdProv): Observable<any>{
        return this.http.post(this.url2, prodprov);
    }

    guardarPro(prodpov: ProdProv): Observable<any>{
        return this.http.post(this.url, prodpov);
    }


}

