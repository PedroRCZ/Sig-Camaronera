import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class VerVentasServices{

    url = 'http://localhost:4000/ventas/visualizar';

    constructor(private http: HttpClient){    }

    getVerVentas(): Observable<any> {
        return this.http.get(this.url);
    }
}