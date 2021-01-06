"use strict";
cc._RF.push(module, '996dfqfvzxDLq8jNSuxvKKg', 'BulletBossMove');
// Scripts/BulletBossMove.ts

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
        _this.label = null;
        _this.Ship = null;
        _this.rate = 0;
        _this.spin = 0;
        _this.rotation = 0;
        _this.speed = 0;
        _this.game = 0;
        _this.delay = 3;
        _this.bulletBoss = null;
        // LIFE-CYCLE CALLBACKS:
        _this.boss = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.Ship.on(cc.Node.EventType.TOUCH_START, function (event) {
            this.game += 1;
            if (this.game == 1) {
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 2);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 5);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 6);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 20);
            }
        }, this);
        this.Ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.game += 1;
            if (this.game == 1) {
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 2);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 7);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 14);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 20);
            }
        }, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.initBullet = function () {
        if (window.matchMedia("(orientation: landscape)").matches) {
            var node = cc.instantiate(this.bulletBoss);
            node.parent = this.node.parent;
            //node.position = this.offset.add(this.node.position);
            var pos = this.boss.getPosition();
            node.setPosition(cc.v2(pos.x + 10, pos.y - 100));
            node.setScale(0.3, 0.3);
            node.rotation = this.rotation;
            var endPoint = cc.v2();
            endPoint.x = cc.winSize.height * Math.sin(this.rotation / 180 * Math.PI);
            endPoint.y = cc.winSize.height * Math.cos(this.rotation / 180 * Math.PI);
            var distance = endPoint.sub(node.position).mag();
            var duration = distance / this.speed;
            var moveBy = cc.moveBy(duration, endPoint);
            var removeSelt = cc.removeSelf();
            var sequence = cc.sequence(moveBy, removeSelt);
            node.runAction(sequence);
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            var node = cc.instantiate(this.bulletBoss);
            node.parent = this.node.parent;
            //node.position = this.offset.add(this.node.position);
            var pos = this.boss.getPosition();
            node.setPosition(cc.v2(pos.x + 10, pos.y - 200));
            node.setScale(0.5, 0.5);
            node.rotation = this.rotation;
            var endPoint = cc.v2();
            endPoint.x = cc.winSize.height * Math.sin(this.rotation / 180 * Math.PI);
            endPoint.y = cc.winSize.height * Math.cos(this.rotation / 180 * Math.PI);
            var distance = endPoint.sub(node.position).mag();
            var duration = distance / this.speed;
            var moveBy = cc.moveBy(duration, endPoint);
            var removeSelt = cc.removeSelf();
            var sequence = cc.sequence(moveBy, removeSelt);
            node.runAction(sequence);
        }
    };
    NewClass.prototype.update = function (dt) {
        if (this.spin === 0) {
            return;
        }
        this.rotation += dt * this.spin;
        if (this.rotation == 0) {
            this.node.destroy();
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Ship", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rate", void 0);
    __decorate([
        property
    ], NewClass.prototype, "spin", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rotation", void 0);
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "game", void 0);
    __decorate([
        property
    ], NewClass.prototype, "delay", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bulletBoss", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boss", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();