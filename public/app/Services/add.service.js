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
var mock_ads_1 = require('../ads/MockAds/mock-ads');
var mock_ads_2 = require('../ads/MockAds/mock-ads');
var mock_ads_3 = require('../ads/MockAds/mock-ads');
var mock_ads_4 = require('../ads/MockAds/mock-ads');
var AdService = (function () {
    function AdService() {
    }
    AdService.prototype.getAds = function () {
        return Promise.resolve(mock_ads_1.ad_arr);
    };
    AdService.prototype.getVeh_Ads = function () {
        return Promise.resolve(mock_ads_2.veh_ad_arr);
    };
    AdService.prototype.getMT_Ads = function () {
        return Promise.resolve(mock_ads_3.mob_ad_arr);
    };
    AdService.prototype.getHA_Ads = function () {
        return Promise.resolve(mock_ads_4.homeapp_ad_arr);
    };
    AdService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AdService);
    return AdService;
}());
exports.AdService = AdService;
//# sourceMappingURL=add.service.js.map