"use strict";
cc._RF.push(module, 'de7bcvcCy5II5oE9Nh03ZDE', 'HandMove');
// Scripts/HandMove.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.duration = 1;
        _this.moveAmountX = 0;
        _this.moveAmountY = 20;
        return _this;
    }
    NewClass.prototype.setMoveHand = function () {
        var moveLeft = cc.moveBy(this.duration, cc.v2(-this.moveAmountX, -this.moveAmountY));
        var moveRight = cc.moveBy(this.duration, cc.v2(this.moveAmountX, this.moveAmountY));
        return cc.repeatForever(cc.sequence(moveLeft, moveRight));
    };
    NewClass.prototype.onLoad = function () {
        this.moveHand = this.setMoveHand();
        this.node.runAction(this.moveHand);
        cc.find("Cannon 01/Barrel/SFX", this.node);
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property
    ], NewClass.prototype, "duration", void 0);
    __decorate([
        property
    ], NewClass.prototype, "moveAmountX", void 0);
    __decorate([
        property
    ], NewClass.prototype, "moveAmountY", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();