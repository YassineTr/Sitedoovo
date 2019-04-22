import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public title: string;
    public user;
    public identity;
    public token;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Login';
        this.user = {
            'email' : '',
            'password' : '',
            'getHash' : 'true'
        };
    }

    ngOnInit() {
        console.log('Login component created!');
        // console.log(JSON.parse(localStorage.getItem('identity')));
        // console.log(this._userService.getIdentity());
        // console.log(JSON.parse(localStorage.getItem('token')));
        // console.log(this._userService.getToken());
        this.logout();
        this.redirectIfIdentity();
    }

    logout() {
        this._route.params.forEach((params: Params) => {
            console.log('logout');
            const logout = +params['id'];
            if (logout === 1) { // delete all session
                localStorage.removeItem('identity');
                localStorage.removeItem('token');
                console.log('entra aqui2');


                this.identity = null;
                this.token = null;

                window.location.href = '/';
            }
        });
    }

    redirectIfIdentity() {
        const identity = this._userService.getIdentity();
        if (identity != null && identity.sub) {
            this._router.navigate(['/']);
        }
    }

    onSubmit() {
        console.log(this.user);
        this._userService.signup(this.user).subscribe(
            response => {
                this.identity = response;
                console.log('identity : ' + JSON.stringify(this.identity) );
                if (this.identity.lenght <= 1) {
                    console.log('Server error');
                }{
                    if (!this.identity.status) {
                        localStorage.setItem('identity', JSON.stringify(this.identity));

                        // to get token
                        this.user.getHash = null;
                        this._userService.signup(this.user).subscribe(
                            response => {
                                this.token = response;
                                console.log('token : ' + this.token);
                                if (this.identity.lenght <= 1) {
                                    console.log('Server error');
                                }{
                                    if (!this.identity.status) {
                                        localStorage.setItem('token', JSON.stringify(this.token));
                                        window.location.href = '/dashboard';
                                    }
                                }
                            },
                            error => {
                                console.log('errorr w :' + <any>error);
                            }
                        );

                    }
                }
            },
            error => {
                console.log('errorr w++ :' + <any>error);
            }
        );
    }
}