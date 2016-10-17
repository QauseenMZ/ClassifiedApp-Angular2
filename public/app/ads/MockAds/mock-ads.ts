import { Vehicle } from '../Vehicles/ad_vehicle';
import { Mob_Tab } from '../Mobile&Tablets/ad_mobTab';
import { Home_Applicances } from '../HomeAppliances/ad_homeapp';
import { Ad } from '../advertisement';

let v1: Vehicle= new Vehicle("Vitz 2006 for Sale!","QMZ",3475929,8000000,"Karachi","img/c4.png","vehicle","Vitz",2006,90000,"In new Condition!");
let v2: Vehicle= new Vehicle("Silver Toyota 2003","Amjad",13278291,650000,"Lahore","img/c1.png","vehicle","Toyota",2004,800000,"Excellent Working Condition! Only serious buyers contact please.");
let v3: Vehicle= new Vehicle("Civic 2013 Brand New Condition","Mahtab",37892611,1050000,"Faislabad","img/c2.png","vehicle","Honda",2013,50000,"Brand new condition. Price is negotiable.");
let v4: Vehicle= new Vehicle("Classic Red Nissan ","Raheel",13278291,650000,"Lahore","img/c3.png","vehicle","Toyota",2004,800000,"Urgent for sale. Only serious buyers contact please.");
let v5: Vehicle= new Vehicle("Cab 10-Seater","Arslan",13278291,650000,"Karachi","img/c5.png","vehicle","Toyota",2004,800000,"Excellent Condition! Urgent for sale. Only serious buyers contact please. ");

let mt1: Mob_Tab= new Mob_Tab("Samsung Galaxy S1","Arslan",13278291,15000,"Karachi","img/m1.png","Mobile&Tablets","Samsung","8 months warrenty","With Box, ear-phones, charger, 8GB-memory card","Price Negotiable. In new Condition!");
let mt2: Mob_Tab= new Mob_Tab("Noir i2","Sajid",13278291,7000,"Lahore","img/m2.png","Mobile&Tablets","Q-Mobile","3 months warrenty","With Box, ear-phones and charger","In excellent Condition! Only serious buyers contact please.");
let mt3: Mob_Tab= new Mob_Tab("Samsung Tablet","Amjad",13278291,17000,"Faisalabad","img/m3.png","Mobile&Tablets","Samsung","No warrenty","With Box and charger","Urgent for Sale.");
let mt4: Mob_Tab= new Mob_Tab("Sony Noir-i5 ","Raheel",13278291,12000,"Abbotabad","img/m4.png","Mobile&Tablets","Sony Ericcson","12 months warrenty","With complete accessories!","Only 3 months used! In brand new Condition!");
let mt5: Mob_Tab= new Mob_Tab("Q-Mobile qN-174","Arslan",13278291,5000,"Karachi","img/m5.png","Mobile&Tablets","Q-Mobile","No warrenty","Box, ear-phones and charger available","In new Condition!");

let h1: Home_Applicances= new Home_Applicances("Microwave Oven","Arslan",13278291,1500,"Karachi","img/a1.png","HomeApps","Microwave","In Excellent working conditions!");
let h2: Home_Applicances= new Home_Applicances("5-in-1 Cooking and Baking Oven","Sajid",13278291,3000,"Lahore","img/a2.png","HomeApps","Oven","Brand New Oven, only used for 2 years. Price Negotiable.");
let h3: Home_Applicances= new Home_Applicances("Set of Two Washing Machines","Amjad",13278291,17000,"Faisalabad","img/a3.png","HomeApps","Washing Machine","Available for whole-Sale.");
let h4: Home_Applicances= new Home_Applicances("King Size Bed","Raheel",13278291,12000,"Abbotabad","img/a4.png","HomeApps","Furniture","Excellent conditions!");
let h5: Home_Applicances= new Home_Applicances("Food Factory-Complete Set","Arslan",13278291,2500,"Karachi","img/a5.png","HomeApps","Sofa","Un-used Pack. Available for Sale.");

export let ad_arr: any[] = [v1,v2,v3,v4,v5,mt1,mt2,mt3,mt4,mt5,h1,h2,h3,h4,h5];

export let veh_ad_arr: Vehicle[] = [v1,v2,v3,v4,v5];
export let mob_ad_arr: Mob_Tab[] = [mt1,mt2,mt3,mt4,mt5];
export let homeapp_ad_arr: Home_Applicances[] = [h1,h2,h3,h4,h5];
