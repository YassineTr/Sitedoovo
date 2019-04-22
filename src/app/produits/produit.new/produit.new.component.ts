import { Component, OnInit } from '@angular/core';
import {Produit} from '../../models/produit';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {ProduitService} from '../../services/produit.service';
import {Headers, Http} from '@angular/http';

@Component({
  selector: 'app-produit.new',
  templateUrl: './produit.new.component.html',
  styleUrls: ['./produit.new.component.scss']
})
export class NewComponent implements OnInit {
    public page_title: string;
    public identity;
    public token;
    public produit: Produit;
    public status_produit;
    formData ;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _produitService: ProduitService,
        private _http: Http
    ) {
        this.page_title = 'New Product ';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }

    ngOnInit() {
        if (this.identity == null && !this.identity.sub ) {
            this._router.navigate(['/login']);
        } else {
            this.produit = new Produit(1, '', 0, 0, '', '', '');
        }
    }

    upload(event) {
        const elem = event.target;
        if (elem.files.length > 0) {
            console.log(elem.files[0]);
            this.formData = new FormData();
            this.formData.append('file', elem.files[0]);
        }
    }

    onSubmit() {
        console.log(this.produit);
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        this._http.post('http://127.0.0.1:8000/produit/upload', this.formData).subscribe(
        (data) => {
            console.log(data.json());
            const dataImage = data.json();
            this.produit.image = dataImage.data;
            console.log('image : ' + this.produit.image);
            this._produitService.create(this.token, this.produit).subscribe(
                response => {
                    this.status_produit = response.status;
                    if (this.status_produit !== 'success') {
                        this.status_produit = 'error';
                    } else {
                        this.produit = response.data;
                        // this._router.navigate(['/task',this.task.id]);
                        this._router.navigate(['/']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

}
