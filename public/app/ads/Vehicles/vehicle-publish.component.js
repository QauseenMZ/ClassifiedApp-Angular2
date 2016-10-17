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
var VehiclePublishComponent = (function () {
    function VehiclePublishComponent(AdService) {
        this.AdService = AdService;
    }
    VehiclePublishComponent.prototype.getVeh_Ads = function () {
        var _this = this;
        this.AdService.getVeh_Ads().then(function (veh_ads) { return _this.veh_ads = veh_ads; });
    };
    VehiclePublishComponent.prototype.ngOnInit = function () {
        this.getVeh_Ads();
    };
    VehiclePublishComponent = __decorate([
        core_1.Component({
            selector: 'vehicle-publish',
            template: "\n\n  <div *ngFor=\"let v of veh_ads; let i= index\">\n  <div class=\"panel panel-default\">\n          <div class=\"panel-heading row\">\n              <img src=\"{{v.img}}\"  width=\"130\" style=\" max-height=30px;\" class=\"img-responsive pull-right\" alt=\"Cinque Terre\"/>\n              <div class=\"panel-title row\" style=\"font-size: 23px;\">\n              &nbsp;<strong>{{v.title}}</strong>                            \n              <br>\n              &nbsp;<strong style=\"font-size: 15px;\"> Price:  {{v.price}} </strong> &nbsp;&nbsp;\n              &nbsp;<strong style=\"font-size: 15px;\">Location:  {{v.area}} </strong><br>\n              \n              <div attr.id=\"collapse{{i}}\" class=\"panel-collapse collapse\" style=\"list-style:none; font-size: 15px;\">\n          <div class=\"panel-body\">\n          <strong>\n                  &nbsp; Owner: {{v.owner}} <br> \n                  &nbsp; Contact Number:  &nbsp; {{v.contact_num}} <br>\n                  &nbsp; Brand:  {{v.brand}} <br> \n                  &nbsp; Model:  {{v.model}} <br>\n                  &nbsp; Kms Driven:  {{v.kms_driven}} <br> \n                  &nbsp; Features: {{v.features}} <br></strong>\n                  </div> \n                  </div>\n                  \n              <button type=\"button\" style=\"margin-left:10px;\" class=\"btn btn-info\" data-toggle=\"collapse\" attr.href=\"#collapse{{i}}\">Details</button>\n              \n                  </div>\n          </div>\n  </div>\n  </div>\n\n  \n  ",
            providers: [add_service_1.AdService]
        }), 
        __metadata('design:paramtypes', [add_service_1.AdService])
    ], VehiclePublishComponent);
    return VehiclePublishComponent;
}());
exports.VehiclePublishComponent = VehiclePublishComponent;
//# sourceMappingURL=vehicle-publish.component.js.map