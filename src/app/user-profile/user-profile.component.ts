import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {Franchise} from '../models/franchise';
import {FranchiseService} from '../services/franchise.service';
import {Produit} from '../models/produit';
import {Employe} from '../models/employe';
import {EmployeService} from '../services/employe.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    public title: string;
    public user: User;
    public employe: Employe;
    public franchise: Franchise;
    public getfranchise: Franchise;
    public franchises: Array<Franchise>;
    public status;
    public token;
    public identity;
    public selectedValue;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService,
      private _employeService: EmployeService,
      private _franchiseService: FranchiseService
  ) {
      this.title = 'Register';
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = new User(1, 'user', 'a', 'a', 'a', 'a' , 'a', 'a', 'a', 'a', 'a', 'a', 1);
      this.franchise = new Franchise(1, '', '', '', '', '', '', '', '', '', '', '');
      this.employe = new Employe(1, '' , '' , '' , '' , '' , '' , 0 , '' , '' , '' , '');
  }

    ngOnInit() {
        this.getOnefranchise();
        console.log('Register component created!');
        this.getAllFranchises();
    }
    getOnefranchise() {
        if (this.identity.ref_franchise !== 0 ) {
            this._franchiseService.getFranchise(this.token, this.identity.ref_franchise).subscribe(
                response => {
                    console.log(response);
                    if (response.status === 'success') {
                        this.getfranchise = response.data;
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        } else {
            this.getfranchise = null ;
        }
    }

    getAllFranchises() {
        this._franchiseService.getFranchises(this.token).subscribe(
            response => {
                if (response.status === 'success') {
                    this.franchises = response.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    onSubmitUser() {
        console.log(this.user);
        this._userService.addAdmin(this.token , this.user).subscribe(
            response => {
                this.status = response.status;
                if (response.status !== 'success') {
                    this.status = 'error';
                    console.log(response.msg);
                }
            },
            error => {
                console.log(<any>error)
            }
        );
    }
    onSubmitFranchise() {
        console.log(this.user);
        this._franchiseService.create(this.token , this.franchise ).subscribe(
            response => {
                this.status = response.status;
                if (response.status !== 'success') {
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error)
            }
        );
    }
    onSubmitEmploye() {
      this._employeService.create(this.token , this.employe ).subscribe(
            response => {
                this.status = response.status;
                if (response.status !== 'success') {
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error)
            }
        );
    }

}
