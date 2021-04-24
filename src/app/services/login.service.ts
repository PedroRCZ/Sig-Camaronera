import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../models/login';

@Injectable({
    providedIn: 'root'
})

export class LoginServices{

    url = "https://back-sig.herokuapp.com/login/";

    constructor(private http: HttpClient){ }
    
    getVerLogin(login: login): Observable<any>{
        return this.http.post(this.url, login);
    }


}
