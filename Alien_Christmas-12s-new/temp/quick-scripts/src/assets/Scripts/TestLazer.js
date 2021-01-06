"use strict";
cc._RF.push(module, '87140QN6OhHP6mq0QAL6lDc', 'TestLazer');
// Scripts/TestLazer.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Ship = null;
        _this.text = 'hello';
        _this.Laser = null;
        _this.distance = 0;
        _this.line = 400;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.node.setContentSize(45, cc.winSize.height);
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.distance = 0;
        //this.schedule(this.setHEIGHT, 0.1, cc.macro.REPEAT_FOREVER);
    };
    // setHEIGHT(distance) {
    //     this.node.setContentSize(45, 400);
    //  }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        var endPoint = cc.v2();
        endPoint.x = this.Ship.getPosition().x;
        endPoint.y = this.Ship.getPosition().y;
        var startPoint = cc.v2();
        startPoint.x = selfCollider.node.getPosition().x;
        startPoint.y = selfCollider.node.getPosition().y;
        this.distance = endPoint.sub(startPoint).mag();
        //console.log(selfCollider.node.getPosition());
        console.log(this.distance);
        //this.setHEIGHT(distance);
    };
    NewClass.prototype.update = function (dt) {
        if (this.line > this.distance) {
            this.line = cc.winSize.height;
            this.node.setContentSize(45, this.line);
        }
        else {
            this.line = this.distance;
            this.node.setContentSize(45, this.line);
        }
        //this.node.setScale(1, this.line/50);
        //console.log(cc.winSize.height);
        // if (this.X<=50) {
        //     this.Laser.scaleY+=this.X * dt ; 
        // }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Ship", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Laser", void 0);
    __decorate([
        property
    ], NewClass.prototype, "distance", void 0);
    __decorate([
        property
    ], NewClass.prototype, "line", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();