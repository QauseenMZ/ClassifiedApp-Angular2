import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from './ad_vehicle';
import { AdService } from '../../Services/add.service';

@Component({
  selector: 'vehicle-publish',
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
              
              <div attr.id="collapse{{i}}" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">
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
                  
              <button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" attr.href="#collapse{{i}}">Details</button>
              
                  </div>
          </div>
  </div>
  </div>

  
  `,
  providers: [AdService]
})

export class VehiclePublishComponent {
  // @Input()
  // hero: Hero;
  
  veh_ads: Vehicle[];
  
  constructor(private AdService: AdService) { }
  
   getVeh_Ads(): void {
    this.AdService.getVeh_Ads().then(veh_ads => this.veh_ads = veh_ads);
  }
  
   ngOnInit(): void {
    this.getVeh_Ads();
  }
}


