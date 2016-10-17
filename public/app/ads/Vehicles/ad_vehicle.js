"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var advertisement_1 = require('../advertisement');
var Vehicle = (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle(t, o, cn, p, a, i, c, b, m, kms, f) {
        _super.call(this, t, o, cn, p, a, i, c);
        this.brand = b;
        this.model = m;
        this.kms_driven = kms;
        this.features = f;
    }
    return Vehicle;
}(advertisement_1.Ad));
exports.Vehicle = Vehicle;
//# sourceMappingURL=ad_vehicle.js.map