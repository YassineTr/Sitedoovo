import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {MailingService} from '../services/mailing.service';
import {Mail} from '../models/mail';
import {Franchise} from '../models/franchise';

@Component({
  selector: 'app-history-mailing',
  templateUrl: './history-mailing.component.html',
  styleUrls: ['./history-mailing.component.scss']
})
export class HistoryMailingComponent implements OnInit {
    public token;
    public identity;
    public historymailing: Array<Mail>;
    constructor(
        private _userService: UserService,
        private _mailService: MailingService,
    ) {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }

    getAllMails() {
        this._mailService.getAllMails(this.token).subscribe(
            response => {
                if (response.status === 'success') {
                    this.historymailing = response.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

  ngOnInit() {
      this.getAllMails();
  }

}
