import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor'

@Injectable({
    providedIn: 'root'
})

export class ProveedorServices{
    url = "http://localhost:4000/gastos/proveedor/";

    constructor(private http: HttpClient){    }

    getVerProveedor(): Observable<any>{
        return this.http.get(this.url);
    }

    gruardarProveedor(proveedor: Proveedor): Observable<any>{
        return this.http.post(this.url, proveedor)
    }

    getProveedorByID(id: number): Observable <any>{
        return this.http.get(this.url + id);
    } 
}