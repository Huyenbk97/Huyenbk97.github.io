"use strict";
cc._RF.push(module, '4d268yDDhdOSb6Zem32oNno', 'Camera_Controller');
// Scripts/Camera_Controller.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Camera_Controller = /** @class */ (function (_super) {
    __extends(Camera_Controller, _super);
    function Camera_Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shipMove = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Camera_Controller.prototype.start = function () {
    };
    Camera_Controller.prototype.update = function () {
        var target_position = this.shipMove.getPosition();
        var curren_position = this.node.getPosition();
        curren_position.lerp(target_position, 0.1, curren_position);
        this.node.setPosition(curren_position);
        // update (dt) {}
    };
    Camera_Controller.instance = null;
    __decorate([
        property(cc.Node)
    ], Camera_Controller.prototype, "shipMove", void 0);
    Camera_Controller = __decorate([
        ccclass
    ], Camera_Controller);
    return Camera_Controller;
}(cc.Component));
exports.default = Camera_Controller;

cc._RF.pop();