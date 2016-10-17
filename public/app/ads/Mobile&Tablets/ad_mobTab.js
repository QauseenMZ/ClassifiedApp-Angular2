"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var advertisement_1 = require('../advertisement');
var Mob_Tab = (function (_super) {
    __extends(Mob_Tab, _super);
    function Mob_Tab(t, o, cn, p, a, i, c, b, w, ac, d) {
        _super.call(this, t, o, cn, p, a, i, c);
        this.brand = b;
        this.warrenty = w;
        this.accessories = ac;
        this.details = d;
    }
    return Mob_Tab;
}(advertisement_1.Ad));
exports.Mob_Tab = Mob_Tab;
//# sourceMappingURL=ad_mobTab.js.map