import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { VehiclePublishComponent } from './ads/Vehicles/vehicle-publish.component';
import { MobTabPublishComponent } from './ads/Mobile&Tablets/mobTab-publish.component';
import { HomeappPublishComponent } from './ads/HomeAppliances/homeapp-publish.component';
import { AllAdsPublishComponent } from './ads/allAds-publish.component';

import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
     ],
  declarations: [ 
    AppComponent,
    VehiclePublishComponent,
    MobTabPublishComponent,
    HomeappPublishComponent,
    AllAdsPublishComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
