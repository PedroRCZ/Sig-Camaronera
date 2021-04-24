import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camaron } from '../models/camaron'

@Injectable({
    providedIn: 'root'
})

export class CamaronServices{
    url = "https://back-sig.herokuapp.com/camaron/"

    constructor(private http: HttpClient){ }

    getverCamaron(): Observable<any>{
        return this.http.get(this.url);
    }

    getCamaronById(id: number): Observable<any> {
        return this.http.get(this.url + id);
    }

    decrementoCamaron(id: number, camaron: Camaron): Observable<any>{
        return this.http.put(this.url + id, camaron);
    }
}