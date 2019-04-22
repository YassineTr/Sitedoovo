import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTooltipModule} from '@angular/material';
import { ProduitsComponent } from './produits/produits.component';
import { DetailComponent } from './produits/produit.detail/produit.detail.component';
import { EditComponent } from './produits/produit.edit/produit.edit.component';
import { NewComponent } from './produits/produit.new/produit.new.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { QuestionsComponent } from './questions/questions.component';
import { MapaComponent } from './mapa/mapa.component';
import { NewmapComponent } from './newmap/newmap.component';
import { FreeComponent } from './free/free.component';
import { OvometroComponent } from './ovometro/ovometro.component';
import { OvomComponent } from './ovom/ovom.component';
import { OvoComponent } from './ovo/ovo.component';
import {CardModule} from 'primeng/card';
import {ButtonModule, DropdownModule, SpinnerModule} from 'primeng/primeng';
import {SlideshowModule} from 'ng-simple-slideshow';
import { MailingComponent } from './mailing/mailing.component';
import { HistoryMailingComponent } from './history-mailing/history-mailing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginclientComponent } from './loginclient/loginclient.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { TermesComponent } from './termes/termes.component';
import { NextmonthComponent } from './nextmonth/nextmonth.component';
import { SaopauloComponent } from './saopaulo/saopaulo.component';
import { BahiaComponent } from './bahia/bahia.component';
import { ESComponent } from './es/es.component';
import { ParanaComponent } from './parana/parana.component';
import { SantaCaComponent } from './santa-ca/santa-ca.component';
import { BrasiliaComponent } from './brasilia/brasilia.component';
import { MaranhoComponent } from './maranho/maranho.component';
import { CearaComponent } from './ceara/ceara.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
      CardModule,
      SpinnerModule,
      ButtonModule,
      DropdownModule,
      SlideshowModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
      MatButtonModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      MatRadioModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
      DashboardComponent,
      UserProfileComponent,
      TableListComponent,
      TypographyComponent,
      IconsComponent,
      MapsComponent,
      NotificationsComponent,
      UpgradeComponent,
      ProduitsComponent,
      DetailComponent,
      EditComponent,
      NewComponent,
      SlideshowComponent,
      QuestionsComponent,
      MapaComponent,
      NewmapComponent,
      FreeComponent,
      OvometroComponent,
      OvomComponent,
      OvoComponent,
      MailingComponent,
      HistoryMailingComponent,
      CheckoutComponent,
      LoginclientComponent,
      RegisterclientComponent,
      TermesComponent,
      NextmonthComponent,
      SaopauloComponent,
      BahiaComponent,
      ESComponent,
      ParanaComponent,
      SantaCaComponent,
      BrasiliaComponent,
      MaranhoComponent,
      CearaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
