import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../models/facturaAgregar';


@Injectable({
    providedIn: 'root'
})

export class VerVentasServices{

    url = 'https://back-sig.herokuapp.com/ventas/';
    url2 = 'https://back-sig.herokuapp.com/ventas/';

    constructor(private http: HttpClient){    }

    getVerVentas(): Observable<any> {
        return this.http.get(this.url +"visualizar");
    }

    guardarVentas(factura: Factura): Observable<any>{
        return this.http.post(this.url2+"agregar/", factura);
    }
}