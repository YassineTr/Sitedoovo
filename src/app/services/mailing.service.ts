import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {GLOBAL} from './global';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

    public url: string;
    public identity;
    public token;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    sendMail(mail) {
        const json 	= JSON.stringify(mail);
        const params = `json=${json}`;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(`${this.url}/mailing`, params, {headers: headers})
            .map(res => res.json());

    }
    getAllMails(token) {
        const params = `authorization=${token}`;
        const header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this._http.post(`${this.url}/getAllMails`, params, {headers: header})
            .map(res => res.json());
    }
}
