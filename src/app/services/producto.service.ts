import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
    providedIn: 'root'
})
 
export class ProductoServices{
    url = "http://localhost:4000/gastos/producto/";

    constructor(private http: HttpClient){ }
    
    getVerProducto(): Observable<any>{
        return this.http.get(this.url);
    }

    guardarProducto(producto: Producto): Observable<any>{
        return this.http.post(this.url, producto);
    }

    getProductoByID(id: number): Observable <any>{
        return this.http.get(this.url+ id);
    } 

}

