import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
    providedIn: 'root'
})

export class ClienteServices{
    url = "https://back-sig.herokuapp.com/cliente/";

    constructor(private http: HttpClient){ }

    getVerCliente(): Observable<any>{
        return this.http.get(this.url);
    }

    guardarCliente(cliente: Cliente): Observable<any>{
        return this.http.post(this.url, cliente);
    }
    getClienteByID(id: number): Observable <any>{
        return this.http.get(this.url+ id);
    }
}