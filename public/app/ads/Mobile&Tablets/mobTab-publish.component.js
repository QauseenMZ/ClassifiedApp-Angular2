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
var add_service_1 = require('../../Services/add.service');
var MobTabPublishComponent = (function () {
    function MobTabPublishComponent(AdService) {
        this.AdService = AdService;
    }
    MobTabPublishComponent.prototype.getMT_Ads = function () {
        var _this = this;
        this.AdService.getMT_Ads().then(function (mt_ads) { return _this.mt_ads = mt_ads; });
    };
    MobTabPublishComponent.prototype.ngOnInit = function () {
        this.getMT_Ads();
    };
    MobTabPublishComponent = __decorate([
        core_1.Component({
            selector: 'mobTab-publish',
            template: "\n  <div *ngFor=\"let mt of mt_ads; let i= index\">\n  <div class=\"panel panel-default\">\n          <div class=\"panel-heading row\">\n              <img src=\"{{mt.img}}\"  width=\"130\" style=\" max-height=30px;\" class=\"img-responsive pull-right\" alt=\"Cinque Terre\"/>\n              <div class=\"panel-title row\" style=\"font-size: 23px;\">\n              &nbsp;<strong>{{mt.title}}</strong>                            \n              <br>\n              &nbsp;<strong style=\"font-size: 15px;\"> Price:  {{mt.price}} </strong> &nbsp;&nbsp;\n              &nbsp;<strong style=\"font-size: 15px;\">Location:  {{mt.area}} </strong><br>\n              \n              <div attr.id=\"mtt{{i}}\" class=\"panel-collapse collapse\" style=\"list-style:none; font-size: 15px;\">\n          <div class=\"panel-body\">\n          <strong>\n                  &nbsp; Owner: {{mt.owner}} <br> \n                  &nbsp; Contact Number:  &nbsp; {{mt.contact_num}} <br>\n                  &nbsp; Brand:  {{mt.brand}} <br> \n                  &nbsp; Warrenty:  {{mt.warrenty}} <br>\n                  &nbsp; Accessories:  {{mt.accessories}} <br> \n                  &nbsp; Details: {{mt.details}} <br></strong>\n                  </div> \n                  </div>\n                  \n              <button type=\"button\" style=\"margin-left:10px;\" class=\"btn btn-info\" data-toggle=\"collapse\" attr.href=\"#mtt{{i}}\">Details</button>\n              \n                  </div>\n          </div>\n  </div>\n  </div>\n\n  \n  \n  ",
            providers: [add_service_1.AdService]
        }), 
        __metadata('design:paramtypes', [add_service_1.AdService])
    ], MobTabPublishComponent);
    return MobTabPublishComponent;
}());
exports.MobTabPublishComponent = MobTabPublishComponent;
//# sourceMappingURL=mobTab-publish.component.js.map