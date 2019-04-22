import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {MapsComponent} from './maps/maps.component';
import {IconsComponent} from './icons/icons.component';
import {TypographyComponent} from './typography/typography.component';
import {TableListComponent} from './table-list/table-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewComponent} from './produits/produit.new/produit.new.component';
import {NewmapComponent} from './newmap/newmap.component';
import {OvometroComponent} from './ovometro/ovometro.component';
import {OvoComponent} from './ovo/ovo.component';
import {EditComponent} from './produits/produit.edit/produit.edit.component';
import {DetailComponent} from './produits/produit.detail/produit.detail.component';
import {MailingComponent} from './mailing/mailing.component';
import {HistoryMailingComponent} from './history-mailing/history-mailing.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {LoginclientComponent} from './loginclient/loginclient.component';
import {RegisterclientComponent} from './registerclient/registerclient.component';
import {SlideshowComponent} from './slideshow/slideshow.component';
import {TermesComponent} from './termes/termes.component';
import {NextmonthComponent} from './nextmonth/nextmonth.component';
import {BahiaComponent} from './bahia/bahia.component';
import {SaopauloComponent} from './saopaulo/saopaulo.component';
import {ParanaComponent} from './parana/parana.component';
import {SantaCaComponent} from './santa-ca/santa-ca.component';
import {BrasiliaComponent} from './brasilia/brasilia.component';
import {CearaComponent} from './ceara/ceara.component';
import {ESComponent} from './es/es.component';
import {MaranhoComponent} from './maranho/maranho.component';

const routes: Routes = [
    {path: '', component: OvoComponent},
  /*{path: '', redirectTo: 'dashboard', pathMatch: 'full',},*/
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component	: LoginComponent},
  {path: 'register', component: RegisterComponent},
    {path: 'new_produit', component: NewComponent},
    {path: 'edit_produit/:id', component: EditComponent},
    {path: 'detail_produit/:id', component: DetailComponent},
    {path: 'ovometro', component: OvometroComponent},
    {path: 'newmap' , component: NewmapComponent},
     { path: 'dashboard',      component: DashboardComponent },
     { path: 'user-profile',   component: UserProfileComponent },
     { path: 'table-list',     component: TableListComponent },
     { path: 'typography',     component: TypographyComponent },
     { path: 'mailing',        component: MailingComponent },
     { path: 'historyMailing', component: HistoryMailingComponent },
     { path: 'icons',          component: IconsComponent },
     { path: 'maps',           component: MapsComponent },
     { path: 'notifications',  component: NotificationsComponent },
     { path: 'upgrade',        component: UpgradeComponent },
     { path: '',               redirectTo: 'dashboard', pathMatch: 'full' } ,
     { path: 'checkout', component: CheckoutComponent},
     { path: 'clientlogin', component: LoginclientComponent},
     { path: 'registerclient', component: RegisterclientComponent},
     { path: 'slideshow' , component: SlideshowComponent},
     { path: 'termes' , component: TermesComponent},
     { path: 'nextmonth', component: NextmonthComponent},
     { path: 'bahia' , component: BahiaComponent},
     { path: 'saopaulo', component: SaopauloComponent},
     { path: 'parana', component: ParanaComponent},
       { path: 'santa-ca', component: SantaCaComponent},
      { path : 'brasilia', component: BrasiliaComponent},
      { path: 'ceara', component: CearaComponent},
      { path: 'es', component: ESComponent},
      {path: 'maranho', component: MaranhoComponent},



];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
