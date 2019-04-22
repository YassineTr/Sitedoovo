import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {MailingService} from '../services/mailing.service';
import {Employe} from '../models/employe';
import {Mail} from '../models/mail';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.scss']
})
export class MailingComponent implements OnInit {
    public mail: Mail;
    public status;
    public token;
    public identity;
  constructor(
      private _userService: UserService,
      private _mailService: MailingService,
  ) {
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
    this.mail = new Mail(1 , ' ' , ' ' , ' ', 'a');
  }

  ngOnInit() {
  }
  onSubmitMail() {
        console.log(this.mail);
        this.mail.sendFrom = this.identity.email ;
        console.log(this.mail.subject + this.mail.content + this.mail.sender);
        this._mailService.sendMail(this.mail).subscribe(
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

}
