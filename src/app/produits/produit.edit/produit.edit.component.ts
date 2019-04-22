import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {ProduitService} from '../../services/produit.service';
import {Produit} from '../../models/produit';
import {Headers, Http} from '@angular/http';

@Component({
  selector: 'app-produit.edit',
  templateUrl: './produit.edit.component.html',
  styleUrls: ['./produit.edit.component.scss']
})
export class EditComponent implements OnInit {
    public page_title = 'Edit Product';
    public identity;
    public token;
    public produit: Produit;
    public status_produit;
    public loading;
    public formData ;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService,
      private _produitService: ProduitService,
      private _http: Http
  ) {
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.getProduit()
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

    upload(event) {
        const elem = event.target;
        if (elem.files.length > 0) {
            console.log(elem.files[0]);
            this.formData = new FormData();
            this.formData.append('file', elem.files[0]);
        }
    }

    onSubmit() {

        this._route.params.forEach((params: Params) => {
            const id = +params['id'];
            if (this.formData != null) {
                console.log('is not null');
                const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
                this._http.post('http://127.0.0.1:8000/produit/upload', this.formData).subscribe(
                    (data) => {
                        console.log(data.json());
                        const dataImage = data.json();
                        this.produit.image = dataImage.data;
                        console.log('image : ' + this.produit.image);
                        this._produitService.update(this.token, this.produit, id).subscribe(
                            response => {
                                this.status_produit = response.status;

                                if (this.status_produit !== 'success') {
                                    this.status_produit = 'error';
                                } else {
                                    this.produit = response.data;
                                    // this._router.navigate(['/task',this.task.id]);
                                    this._router.navigate(['/detail_produit/' + id]);
                                }
                            },
                            error => {
                                console.log(<any>error);
                            }
                        );
                    });
            } else {
                this._produitService.update(this.token, this.produit, id).subscribe(
                    response => {
                        this.status_produit = response.status;

                        if (this.status_produit !== 'success') {
                            this.status_produit = 'error';
                        } else {
                            this.produit = response.data;
                            // this._router.navigate(['/task',this.task.id]);
                            this._router.navigate(['/detail_produit/' + id]);
                        }
                    },
                    error => {
                        console.log(<any>error);
                    }
                );
            }
        });
    }
}
