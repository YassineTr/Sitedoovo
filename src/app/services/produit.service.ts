import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {GLOBAL} from './global';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
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
        return this._http.post(`${this.url}/produit/new`, params, {headers: headers})

            .map(res => res.json());
    }
    upload(task) {
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        // return this._http.post(this.url+'/produit/new',params, {headers:headers})
        return this._http.post(`${this.url}/produit/upload`, task, {headers: headers})

            .map(res => res.json());
    }

    getProduits(token) {
        // let params = "authorization="+token;
        const params = `authorization=${token}`;
        const header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});


        console.log(`${this.url}/produit/list`);
        return this._http.post(`${this.url}/produit/list`, params, {headers: header})
            .map(res => res.json());
    }

    getProduit(token, id) {
        const params = `authorization=${token}`;
        const header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(`${this.url}/produit/detail/${id}`, params, {headers: header})
            .map(res => res.json());
    }

    update(token, task, id) {
        const json 	= JSON.stringify(task);
        const params 	= `json=${json}&authorization=${token}`;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(`${this.url}/produit/edit/${id}`, params, {headers: headers})
            .map(res => res.json());
    }

    search(token, search = null, filter = null, order = null) {
        const params = `authorization=${token}&filter=${filter}&order=${order}`;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});


        let url;
        if (search == null) {
            url = `${this.url}/produit/search`;
        } else {
            url = `${this.url}/produit/search/${search}`;
        }

        return this._http.post(url, params, {headers: headers})
            .map(res => res.json());
    }

    deleteProduit(token, id) {
        const params = `authorization=${token}`;
        const header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(`${this.url}/produit/remove/${id}`, params, {headers: header})
            .map(res => res.json());
    }
}
