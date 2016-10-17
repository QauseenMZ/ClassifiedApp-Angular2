"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var add_service_1 = require('./Services/add.service');
var AppComponent = (function () {
    function AppComponent(AdService) {
        this.AdService = AdService;
        this.title = 'Classifieds';
    }
    AppComponent.prototype.getAds = function () {
        var _this = this;
        this.AdService.getAds().then(function (ads) { return _this.ads = ads; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getAds();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \n  \n  \n        <img src=\"img/fc.PNG\" class=\"img-responsive center-block\" alt=\"Cinque Terre\" />\n        \n        <div class=\"container\">\n        <div class=\"col-sm-2\">\n          <ul class=\"nav nav-pills nav-stacked\" style=\"background-color: none; margin-right:0px;\">\n          <li class=\"active\"><a style=\"background: none; padding:0; margin:0\" data-toggle=\"pill\" href=\"#all\"><img  src=\"img/i0.PNG\" style=\"display:inline\" class=\"img-responsive\" alt=\"Cinque Terre\"/></a></li>\n          <li><a style=\"background: none; padding:0; margin:0\" data-toggle=\"pill\" href=\"#vehicles\"><img  src=\"img/i1.PNG\" style=\"display:inline\" class=\"img-responsive\" alt=\"Cinque Terre\"/></a></li>\n          <li><a style=\"background: none; padding:0; margin:0\" data-toggle=\"pill\" href=\"#mt\"><img  src=\"img/i2.PNG\" style=\"display:inline\" class=\"img-responsive\" alt=\"Cinque Terre\"/></a></li>\n          <li><a style=\"background: none; padding:0; margin:0\" data-toggle=\"pill\" href=\"#happ\"><img  src=\"img/i3.PNG\" style=\"display:inline\" class=\"img-responsive\" alt=\"Cinque Terre\" /></a></li>\n          </ul>\n      </div>\n      \n      <div class=\"tab-content\" >\n\t\t<div id=\"all\" class=\"tab-pane fade in active\">\n\t\t  <h1>All Classifieds</h1>\n\t\t  <div class=\"col-md-8\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"panel-group\" id=\"allAds\">\n\t\t\t\t<allAds-publish></allAds-publish>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t\t<div id=\"vehicles\" class=\"tab-pane fade\">\n\t\t  <h1>Vehicles</h1>\n\t\t\t  <div class=\"col-md-8\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"panel-group\" id=\"v\">\n\t\t\t\t\t<vehicle-publish></vehicle-publish>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t</div>\n\t\t<div id=\"mt\" class=\"tab-pane fade\">\n\t\t  <h2>Mobile & Tablets</h2>\n\t\t\t  <div class=\"col-md-8\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"panel-group\" id=\"mm\">\n\t\t\t\t\t<mobTab-publish></mobTab-publish>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t  </div>\n\t\t  <div id=\"happ\" class=\"tab-pane fade\">\n\t\t  <h1>Home Appliances</h1>\n\t\t\t  <div class=\"col-md-8\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"panel-group\" id=\"hh\">\n\t\t\t\t\t<homeapp-publish></homeapp-publish>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t  </div>\n\t\t\n</div>\n</div>\n\n    \n  ",
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
            providers: [add_service_1.AdService]
        }), 
        __metadata('design:paramtypes', [add_service_1.AdService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map