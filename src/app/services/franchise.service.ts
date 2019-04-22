import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {GLOBAL} from './global';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {

    public url: string;
    public identity;
    public token;

    constructor(
        private _http: Http
    ) {
        this.url = GLOBAL.url;
    }

    create(token, task) {
        const json 	= JSON.stringify(task);
        const params 	= `json=${json}&authorization=${token}`;
        // const params 	= "json="+json+"&authorization="+token;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        // return this._http.post(this.url+'/produit/new',params, {headers:headers})
        return this._http.post(`${this.url}/franchise/new`, params, {headers: headers})

            .map(res => res.json());
    }

    getFranchises(token) {
        // let params = "authorization="+token;
        const params = `authorization=${token}`;
        const header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this._http.post(`${this.url}/franchise/list`, params, {headers: header})
            .map(res => res.json());
    }

    getFranchise(token, id) {
        const params = `authorization=${token}`;
        const header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this._http.post(`${this.url}/franchise/detail/${id}`, params, {headers: header})
            .map(res => res.json());
    }

    update(token, task, id) {
        const json 	= JSON.stringify(task);
        const params 	= `json=${json}&authorization=${token}`;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this._http.post(`${this.url}/franchise/edit/${id}`, params, {headers: headers})
            .map(res => res.json());
    }

    /* search(token, search = null, filter = null, order = null) {
        const params = `authorization=${token}&filter=${filter}&order=${order}`;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        let url;
        if (search == null) {
            url = `${this.url}/franchise/search`;
        } else {
            url = `${this.url}/franchise/search/${search}`;
        }

        return this._http.post(url, params, {headers: headers})
            .map(res => res.json());
    }*/

    deleteFranchise(token, id) {
        const params = `authorization=${token}`;
        const header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(`${this.url}/franchise/remove/${id}`, params, {headers: header})
            .map(res => res.json());
    }

}
