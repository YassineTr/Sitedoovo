import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {MailingComponent} from '../../mailing/mailing.component';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTESAdmin: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    { path: '/mailing',  title: 'Mailing',  icon: 'library_books', class: ''},
    { path: '/historyMailing',  title: 'History Mailing',  icon: 'library_books', class: ''},
    { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
    { path: '/login/1', title: 'LogOut',  icon: 'unarchive', class: '' },
];
export const ROUTESUser: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    { path: '/mailing',  title: 'Mailing',  icon: 'library_books', class: ''},
    { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
    { path: '/login/1', title: 'LogOut',  icon: 'unarchive', class: '' },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
    public identity;
  constructor(
      private _userService: UserService,
  ) {
      this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
      console.log('identity : ' +    this.identity);
      if (this.identity.role === 'admin') {
    this.menuItems = ROUTESAdmin.filter(menuItem => menuItem);
      } else {
          this.menuItems = ROUTESUser.filter(menuItem => menuItem);
      }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
