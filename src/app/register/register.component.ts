import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public title: string;
    public user: User;
    public status;
    public token;
    public identity;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.title = 'Register';
        this.user = new User(1, 'user', '', '', '', '' , '', '', '', '', '', '', 1);
    }

    ngOnInit() {
        console.log('Register component created!');
    }

    onSubmit() {
        console.log(this.user);
        this._userService.register(this.token , this.user).subscribe(
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
