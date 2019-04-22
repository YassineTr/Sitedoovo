import {Component, OnInit, VERSION} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-nextmonth',
    templateUrl: './nextmonth.component.html',
    styleUrls: ['./nextmonth.component.scss']
})

export class NextmonthComponent implements OnInit {
    version = VERSION.full;
    date: Date = new Date();



    ngOnInit() {
        this.date = new Date();
        this.date.setDate( this.date.getDate() + 30 );

    }


}
