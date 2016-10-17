import { Component, Input, OnInit } from '@angular/core';
import { Mob_Tab } from '../Mobile&Tablets/ad_mobTab';
import { AdService } from '../../Services/add.service';

@Component({
  selector: 'mobTab-publish',
  template:
  `
  <div *ngFor="let mt of mt_ads; let i= index">
  <div class="panel panel-default">
          <div class="panel-heading row">
              <img src="{{mt.img}}"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>
              <div class="panel-title row" style="font-size: 23px;">
              &nbsp;<strong>{{mt.title}}</strong>                            
              <br>
              &nbsp;<strong style="font-size: 15px;"> Price:  {{mt.price}} </strong> &nbsp;&nbsp;
              &nbsp;<strong style="font-size: 15px;">Location:  {{mt.area}} </strong><br>
              
              <div attr.id="mtt{{i}}" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">
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
                  
              <button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" attr.href="#mtt{{i}}">Details</button>
              
                  </div>
          </div>
  </div>
  </div>

  
  
  `,
  providers: [AdService]
  
})

export class MobTabPublishComponent {
  // @Input()
  // hero: Hero;
  
  mt_ads: Mob_Tab[];
  
  constructor(private AdService: AdService) { }
  
   getMT_Ads(): void {
    this.AdService.getMT_Ads().then(mt_ads => this.mt_ads = mt_ads);
  }
  
   ngOnInit(): void {
    this.getMT_Ads();
  }
}


