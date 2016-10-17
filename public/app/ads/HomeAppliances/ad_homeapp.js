"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var advertisement_1 = require('../advertisement');
var Home_Applicances = (function (_super) {
    __extends(Home_Applicances, _super);
    function Home_Applicances(t, o, cn, p, a, i, c, ty, cd) {
        _super.call(this, t, o, cn, p, a, i, c);
        this.type = ty;
        this.condition_details = cd;
    }
    return Home_Applicances;
}(advertisement_1.Ad));
exports.Home_Applicances = Home_Applicances;
//# sourceMappingURL=ad_homeapp.js.map