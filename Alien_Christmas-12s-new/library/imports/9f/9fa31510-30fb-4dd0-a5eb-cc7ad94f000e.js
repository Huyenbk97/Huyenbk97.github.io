"use strict";
cc._RF.push(module, '9fa31UQMPtN0KXrzHrZTwAO', 'Scroll');
// Scripts/Scroll.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Scroll = /** @class */ (function (_super) {
    __extends(Scroll, _super);
    function Scroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.background_1 = null;
        _this.background_2 = null;
        _this.speed = 200;
        _this.initPosition = null;
        return _this;
    }
    Scroll.prototype.start = function () {
        var screen = cc.find("Canvas");
        // this.initPosition = this.background_2.getPosition();
        this.initPosition = cc.v2(screen.getContentSize().width, 0);
        console.log(screen.getContentSize().width);
        this.background_2.setPosition(this.initPosition);
    };
    Scroll.prototype.update = function (dt) {
        this.background_1.x -= this.speed * dt;
        this.background_2.x -= this.speed * dt;
        if (this.background_1.getPosition().x <= -this.background_1.getContentSize().width) {
            this.background_1.setPosition(this.initPosition);
            this.background_2.setPosition(0, 0);
        }
        if (this.background_2.getPosition().x <= -this.background_2.getContentSize().width) {
            this.background_2.setPosition(this.initPosition);
            this.background_1.setPosition(0, 0);
        }
    };
    __decorate([
        property(cc.Node)
    ], Scroll.prototype, "background_1", void 0);
    __decorate([
        property(cc.Node)
    ], Scroll.prototype, "background_2", void 0);
    __decorate([
        property
    ], Scroll.prototype, "speed", void 0);
    Scroll = __decorate([
        ccclass
    ], Scroll);
    return Scroll;
}(cc.Component));
exports.default = Scroll;

cc._RF.pop();