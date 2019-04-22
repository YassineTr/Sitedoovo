import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {ProduitService} from '../services/produit.service';
import {Produit} from '../models/produit';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
    public clients: Array<User>;
    public title: string;
    public identity;
    public token;
    public produits: Array<Produit>;
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
      this.getAllClients();
      this.getAllProduits();
  }
    getAllProduits() {
      console.log('get products ');
        this._route.params.forEach((params: Params) => {
            this.loading = 'show';
            this._produitService.getProduits(this.token).subscribe(
                response => {
                    if (response.status === 'success') {
                        this.produits = response.data;
                        this.loading = 'hide';
                        console.log('***', this.produits);
                    }
                    console.log('success : ' + response.msg)
                },
                error => {
                    console.log(<any>error);
                }
            );
            console.log('fin products');
        });
    }
  getAllClients() {
        this._route.params.forEach((params: Params) => {



            this.loading = 'show';
            this._userService.getClients(this.token).subscribe(
                response => {
                    if (response.status === 'success') {
                        this.clients = response.data;
                        this.loading = 'hide';

                        console.log('***', this.clients);


                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

}
