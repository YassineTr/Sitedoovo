import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Produit} from '../../models/produit';
import {UserService} from '../../services/user.service';
import {ProduitService} from '../../services/produit.service';

@Component({
  selector: 'app-produit.detail',
  templateUrl: './produit.detail.component.html',
  styleUrls: ['./produit.detail.component.scss']
})
export class DetailComponent implements OnInit {
    public page_title = 'Detail Product';
    public identity;
    public token;
    public produit: Produit;
    public status_produit;
    public loading;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _produitService: ProduitService
    ) {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
  ngOnInit() {
    this.getProduit();
  }

    delete(id) {
        this._produitService.deleteProduit(this.token, id).subscribe(
            response => {
                if (response.status === 'success') {
                    this._router.navigate(['/table-list']);
                } else {
                    alert('Product was not deleted');
                }
            },
            error =>{
                console.log(<any>error);
            }
        );
    }

  getProduit() {
        this.loading = 'show';
        this._route.params.forEach((params: Params) => {
            console.log(params);
            const id = +params['id'];

            this._produitService.getProduit(this.token, id).subscribe(
                response => {
                    console.log(response);
                    if (response.status === 'success') {
                        this.produit = response.data;
                        console.log(this.produit);
                        this.loading = 'hide';
                    } else {
                        this._router.navigate(['/login']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }
}
