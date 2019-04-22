import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {Produit} from '../models/produit';
import {Franchise} from '../models/franchise';
import {Employe} from '../models/employe';
import {FranchiseService} from '../services/franchise.service';
import {EmployeService} from '../services/employe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public identity;
    public token;
    public franchises: Array<Franchise>;
    public employes: Array<Employe>;
    public getfranchise: Franchise;
    public loading;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService,
      private _franchiseService: FranchiseService,
      private _employeService: EmployeService,
  ) {
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
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
            this.getfranchise = null;
        }
    }
    getfranchisename(id) {
        console.log('id = ' + id );
        const data = this.franchises.find(ob => ob['id'] === id);
        return data.nom ;
    }
    getAllFranchises() {
        this._route.params.forEach((params: Params) => {
            this.loading = 'show';
            this._franchiseService.getFranchises(this.token).subscribe(
                response => {
                    if (response.status === 'success') {
                        this.franchises = response.data;
                        this.loading = 'hide';
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }
    getAllEmployes() {
        this._route.params.forEach((params: Params) => {
            this.loading = 'show';
            console.log(this.identity.ref_franchise);
            if (this.identity.ref_franchise === 0) {
            this._employeService.getEmployes(this.token).subscribe(
                response => {
                    if (response.status === 'success') {
                        this.employes = response.data;
                        this.loading = 'hide';
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
            } else {
             this._employeService.getEmploye(this.token , this.identity.ref_franchise).subscribe(
                 response => {
                     console.log('response : ' + response.msg);
                     if (response.status === 'success') {
                         console.log('data : ' + response.data);
                         this.employes = response.data;
                         this.loading = 'hide';
                     }
                 },
                 error => {
                     console.log(<any>error);
                 }
             );
            }
        });
    }
  startAnimationForLineChart(chart) {
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart) {
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if (data.type === 'bar') {
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      this.getOnefranchise();
      this.getAllEmployes();
      this.getAllFranchises();
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      };

      const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      };

      const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      const datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      const optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      const responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      // start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }

}
