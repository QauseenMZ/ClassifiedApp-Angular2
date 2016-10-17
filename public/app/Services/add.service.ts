import { Injectable } from '@angular/core';
import { Vehicle } from '../ads/vehicles/ad_vehicle';
import { Mob_Tab } from '../ads/Mobile&Tablets/ad_mobTab';
import { Home_Applicances } from '../ads/HomeAppliances//ad_homeapp';
import { Ad } from '../ads/advertisement';
import { ad_arr } from '../ads/MockAds/mock-ads';
import { veh_ad_arr } from '../ads/MockAds/mock-ads';
import { mob_ad_arr } from '../ads/MockAds/mock-ads';
import { homeapp_ad_arr } from '../ads/MockAds/mock-ads';

@Injectable()
export class AdService {
    getAds(): Promise<any[]> {
    return Promise.resolve(ad_arr);
  }
  
  getVeh_Ads(): Promise<Vehicle[]> {
    return Promise.resolve(veh_ad_arr);
  }
  
  getMT_Ads(): Promise<Mob_Tab[]> {
    return Promise.resolve(mob_ad_arr);
  }
  
  getHA_Ads(): Promise<Home_Applicances[]> {
    return Promise.resolve(homeapp_ad_arr);
  }
  
}
