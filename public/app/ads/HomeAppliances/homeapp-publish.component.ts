import { Component, Input, OnInit } from '@angular/core';
import { Home_Applicances } from './ad_homeapp';
import { AdService } from '../../Services/add.service';

@Component({
  selector: 'homeapp-publish',
  template:
  `
  <div *ngFor="let ha of happ_ads; let i= index">
  <div class="panel panel-default">
          <div class="panel-heading row">
              <img src="{{ha.img}}"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>
              <div class="panel-title row" style="font-size: 23px;">
              &nbsp;<strong>{{ha.title}}</strong>                            
              <br>
              &nbsp;<strong style="font-size: 15px;"> Price:  {{ha.price}} </strong> &nbsp;&nbsp;
              &nbsp;<strong style="font-size: 15px;">Location:  {{ha.area}} </strong><br>
              
              <div attr.id="ha{{i}}" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">
          <div class="panel-body">
          <strong>
                  &nbsp; Owner: {{ha.owner}} <br> 
                  &nbsp; Contact Number:  &nbsp; {{ha.contact_num}} <br>
                  &nbsp; Type:  {{ha.type}} <br> 
                  &nbsp; Condition Details:  {{ha.condition_details}} <br></strong>
                  </div> 
                  </div>
                  
              <button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" attr.href="#ha{{i}}">Details</button>
              
                  </div>
          </div>
  </div>
  </div>

  
  `,
  providers: [AdService]
})

export class HomeappPublishComponent {
  // @Input()
  // hero: Hero;
  
  happ_ads: Home_Applicances[];
  
  constructor(private AdService: AdService) { }
  
   getHA_Ads(): void {
    this.AdService.getHA_Ads().then(happ_ads => this.happ_ads = happ_ads);
  }
  
   ngOnInit(): void {
    this.getHA_Ads();
  }
}
