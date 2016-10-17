import { Component, OnInit } from '@angular/core';
import { Vehicle } from './ads/Vehicles/ad_vehicle';
import { Mob_Tab } from './ads/Mobile&Tablets/ad_mobTab';
import { Home_Applicances } from './ads/HomeAppliances/ad_homeapp';
import { Ad } from './ads/advertisement';
import { AdService } from './Services/add.service'


@Component({
  selector: 'my-app',
  template:`
  
  
  
        <img src="img/fc.PNG" class="img-responsive center-block" alt="Cinque Terre" />
        
        <div class="container">
        <div class="col-sm-2">
          <ul class="nav nav-pills nav-stacked" style="background-color: none; margin-right:0px;">
          <li class="active"><a style="background: none; padding:0; margin:0" data-toggle="pill" href="#all"><img  src="img/i0.PNG" style="display:inline" class="img-responsive" alt="Cinque Terre"/></a></li>
          <li><a style="background: none; padding:0; margin:0" data-toggle="pill" href="#vehicles"><img  src="img/i1.PNG" style="display:inline" class="img-responsive" alt="Cinque Terre"/></a></li>
          <li><a style="background: none; padding:0; margin:0" data-toggle="pill" href="#mt"><img  src="img/i2.PNG" style="display:inline" class="img-responsive" alt="Cinque Terre"/></a></li>
          <li><a style="background: none; padding:0; margin:0" data-toggle="pill" href="#happ"><img  src="img/i3.PNG" style="display:inline" class="img-responsive" alt="Cinque Terre" /></a></li>
          </ul>
      </div>
      
      <div class="tab-content" >
		<div id="all" class="tab-pane fade in active">
		  <h1>All Classifieds</h1>
		  <div class="col-md-8">
			<div class="row">
				<div class="panel-group" id="allAds">
				<allAds-publish></allAds-publish>
				</div>
			</div>
		  </div>
		</div>
		<div id="vehicles" class="tab-pane fade">
		  <h1>Vehicles</h1>
			  <div class="col-md-8">
				<div class="row">
					<div class="panel-group" id="v">
					<vehicle-publish></vehicle-publish>
					</div>
				</div>
			  </div>
		</div>
		<div id="mt" class="tab-pane fade">
		  <h2>Mobile & Tablets</h2>
			  <div class="col-md-8">
				<div class="row">
					<div class="panel-group" id="mm">
					<mobTab-publish></mobTab-publish>
					</div>
				</div>
			  </div>
		  </div>
		  <div id="happ" class="tab-pane fade">
		  <h1>Home Appliances</h1>
			  <div class="col-md-8">
				<div class="row">
					<div class="panel-group" id="hh">
					<homeapp-publish></homeapp-publish>
					</div>
				</div>
			  </div>
		  </div>
		
</div>
</div>

    
  `,


// styles: [`
//   .selected {
//     background-color: #CFD8DC !important;
//     color: white;
//   }
//   .heroes {
//     margin: 0 0 2em 0;
//     list-style-type: none;
//     padding: 0;
//     width: 15em;
//   }
//   .heroes li {
//     cursor: pointer;
//     position: relative;
//     left: 0;
//     background-color: #EEE;
//     margin: .5em;
//     padding: .3em 0;
//     height: 1.6em;
//     border-radius: 4px;
//   }
//   .heroes li.selected:hover {
//     background-color: #BBD8DC !important;
//     color: white;
//   }
//   .heroes li:hover {
//     color: #607D8B;
//     background-color: #DDD;
//     left: .1em;
//   }
//   .heroes .text {
//     position: relative;
//     top: -3px;
//   }
//   .heroes .badge {
//     display: inline-block;
//     font-size: small;
//     color: white;
//     padding: 0.8em 0.7em 0 0.7em;
//     background-color: #607D8B;
//     line-height: 1em;
//     position: relative;
//     left: -1px;
//     top: -4px;
//     height: 1.8em;
//     margin-right: .8em;
//     border-radius: 4px 0 0 4px;
//   }
// `],

providers: [AdService]

})

export class AppComponent implements OnInit {
  title = 'Classifieds';
  // selectedHero: Hero;
  ads: any[];
  
  constructor(private AdService: AdService) { }
  
   getAds(): void {
    this.AdService.getAds().then(ads => this.ads = ads);
  }
  
   ngOnInit(): void {
    this.getAds();
  }
  
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  
  
}




