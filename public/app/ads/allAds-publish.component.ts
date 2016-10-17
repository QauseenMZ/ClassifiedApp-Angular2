import { Component, Input, OnInit } from '@angular/core';
import { Home_Applicances } from './HomeAppliances/ad_homeapp';
import { Mob_Tab } from './Mobile&Tablets/ad_mobTab';
import { Vehicle } from './Vehicles/ad_vehicle';
import { AdService } from '../Services/add.service';

@Component({
  selector: 'allAds-publish',
  template:
  `
  <div *ngFor="let v of veh_ads; let i= index">
  <div class="panel panel-default">
          <div class="panel-heading row">
              <img src="{{v.img}}"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>
              <div class="panel-title row" style="font-size: 23px;">
              &nbsp;<strong>{{v.title}}</strong>                            
              <br>
              &nbsp;<strong style="font-size: 15px;"> Price:  {{v.price}} </strong> &nbsp;&nbsp;
              &nbsp;<strong style="font-size: 15px;">Location:  {{v.area}} </strong><br>
              
              <div attr.id="veh{{i}}" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">
          <div class="panel-body">
          <strong>
                  &nbsp; Owner: {{v.owner}} <br> 
                  &nbsp; Contact Number:  &nbsp; {{v.contact_num}} <br>
                  &nbsp; Brand:  {{v.brand}} <br> 
                  &nbsp; Model:  {{v.model}} <br>
                  &nbsp; Kms Driven:  {{v.kms_driven}} <br> 
                  &nbsp; Features: {{v.features}} <br></strong>
                  </div> 
                  </div>
                  
              <button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" attr.href="#veh{{i}}">Details</button>
              
                  </div>
          </div>
  </div>
  </div>
  
  
  <div *ngFor="let mt of mt_ads; let i= index">
  <div class="panel panel-default">
          <div class="panel-heading row">
              <img src="{{mt.img}}"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>
              <div class="panel-title row" style="font-size: 23px;">
              &nbsp;<strong>{{mt.title}}</strong>                            
              <br>
              &nbsp;<strong style="font-size: 15px;"> Price:  {{mt.price}} </strong> &nbsp;&nbsp;
              &nbsp;<strong style="font-size: 15px;">Location:  {{mt.area}} </strong><br>
              
              <div attr.id="mta{{i}}" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">
          <div class="panel-body">
          <strong>
                  &nbsp; Owner: {{mt.owner}} <br> 
                  &nbsp; Contact Number:  &nbsp; {{mt.contact_num}} <br>
                  &nbsp; Brand:  {{mt.brand}} <br> 
                  &nbsp; Warrenty:  {{mt.warrenty}} <br>
                  &nbsp; Accessories:  {{mt.accessories}} <br> 
                  &nbsp; Details: {{mt.details}} <br></strong>
                  </div> 
                  </div>
                  
              <button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" attr.href="#mta{{i}}">Details</button>
              
                  </div>
          </div>
  </div>
  </div>
  
  
  
  <div *ngFor="let ha of happ_ads; let i= index">
  <div class="panel panel-default">
          <div class="panel-heading row">
              <img src="{{ha.img}}"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>
              <div class="panel-title row" style="font-size: 23px;">
              &nbsp;<strong>{{ha.title}}</strong>                            
              <br>
              &nbsp;<strong style="font-size: 15px;"> Price:  {{ha.price}} </strong> &nbsp;&nbsp;
              &nbsp;<strong style="font-size: 15px;">Location:  {{ha.area}} </strong><br>
              
              <div attr.id="hap{{i}}" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">
          <div class="panel-body">
          <strong>
                  &nbsp; Owner: {{ha.owner}} <br> 
                  &nbsp; Contact Number:  &nbsp; {{ha.contact_num}} <br>
                  &nbsp; Type:  {{ha.type}} <br> 
                  &nbsp; Condition Details:  {{ha.condition_details}} <br></strong>
                  </div> 
                  </div>
                  
              <button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" attr.href="#hap{{i}}">Details</button>
              
                  </div>
          </div>
  </div>
  </div>

  
  `,
  providers: [AdService]
})

export class AllAdsPublishComponent {
  // @Input()
  // hero: Hero;
  
  happ_ads: Home_Applicances[];
  veh_ads: Vehicle[];
  mt_ads: Mob_Tab[];
  
  constructor(private AdService: AdService) { }
  
   getHA_Ads(): void {
    this.AdService.getHA_Ads().then(happ_ads => this.happ_ads = happ_ads);
  }
  
  getVeh_Ads(): void {
    this.AdService.getVeh_Ads().then(veh_ads => this.veh_ads = veh_ads);
  }
  
  getMT_Ads(): void {
    this.AdService.getMT_Ads().then(mt_ads => this.mt_ads = mt_ads);
  }
  
   ngOnInit(): void {
    this.getHA_Ads();
    this.getVeh_Ads();
    this.getMT_Ads();
  }
}
