import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdProv } from '../models/prodprov'

@Injectable({
    providedIn: 'root'
})

export class ProdProvServices{
    url = "https://back-sig.herokuapp.com/gastos/";
    url2 = "https://back-sig.herokuapp.com/gastos/";
    url3 = "https://back-sig.herokuapp.com/gastos/";

    constructor(private http: HttpClient){ }
    
    getVerProdProv(): Observable<any>{
        return this.http.get(this.url+"prod/");
    }

    getVerProdProvEx(prodprov: ProdProv): Observable<any>{
        return this.http.post(this.url2+"prod/existe/", prodprov);
    }

    guardarPro(prodpov: ProdProv): Observable<any>{
        return this.http.post(this.url3+"f/", prodpov);
    }


}

