import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
    providedIn: 'root'
})

export class ClienteServices{
    url = "http://localhost:4000/cliente";

    constructor(private http: HttpClient){ }

    getVerCliente(): Observable<any>{
        return this.http.get(this.url);
    }

    guardarCliente(cliente: Cliente): Observable<any>{
        return this.http.post(this.url, cliente);
    }
}