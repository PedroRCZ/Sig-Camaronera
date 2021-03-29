import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../models/facturaAgregar';


@Injectable({
    providedIn: 'root'
})

export class VerVentasServices{

    url = 'http://localhost:4000/ventas/visualizar';
    url2 = 'http://localhost:4000/ventas/agregar/';

    constructor(private http: HttpClient){    }

    getVerVentas(): Observable<any> {
        return this.http.get(this.url);
    }

    guardarVentas(factura: Factura): Observable<any>{
        return this.http.post(this.url2, factura);
    }
}