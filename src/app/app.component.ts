import { Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public identity;
    public token;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService,
  ){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
  }
}
