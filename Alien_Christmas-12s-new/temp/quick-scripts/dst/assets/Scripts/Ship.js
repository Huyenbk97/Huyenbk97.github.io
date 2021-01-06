
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Ship.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8240RsGelFOYk6ef13lP8F', 'Ship');
// Scripts/Ship.ts

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
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ship = null;
        _this.popup = null;
        _this.text = null;
        _this.hand = null;
        _this.bgblack = null;
        _this.shield = null;
        _this.bulletPo = null;
        _this.redDis = null;
        // @property()
        _this.shipBullet = null;
        _this.bulletPool = 0;
        _this.game = 0;
        _this.bullet1 = 1;
        _this.redDisplay = null;
        _this.bullet2 = false;
        _this.shipBullet1 = null;
        _this.shipBullet2 = null;
        _this.shipBullet3 = null;
        _this.shipBullet4 = null;
        _this.shipBullet5 = null;
        _this.shipBullet6 = null;
        _this.shipBullet7 = null;
        _this.shipBullet8 = null;
        _this.redD = null;
        _this.stopShip = false;
        _this.backgroundSound = null;
        _this.BulletSkill2 = null;
        _this.bulletParent = null;
        _this.fireRate = 1;
        _this.isGamestart = false;
        _this.activeBullet = false;
        return _this;
    }
    Ship_1 = Ship;
    Ship.prototype.positionXY = function (event) {
    };
    Ship.prototype.onLoad = function () {
        Ship_1.Instance = this;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.ship.on(cc.Node.EventType.TOUCH_START, function (event) {
            this.schedule(this.createBullet, 0.15, cc.macro.REPEAT_FOREVER);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.schedule(this.createBullet, 0.1, cc.macro.REPEAT_FOREVER);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._ontouchmove, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this._ontouchmove, this);
    };
    Ship.prototype.closeTouch = function () {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._ontouchmove, this);
    };
    Ship.prototype._ontouchmove = function (TouchEvent) {
        if (this.stopShip === false) {
            var delta = TouchEvent.getDelta();
            this.node.position = delta.add(this.node.position);
        }
    };
    Ship.prototype.start = function () {
    };
    Ship.prototype.SpawnBullet = function () {
    };
    Ship.prototype.spawShield1 = function () {
        this.bullet1 += 1;
    };
    Ship.prototype.createBullet = function () {
        if (this.stopShip === false) {
            if (this.text.active == false) {
                if (window.matchMedia("(orientation:  portrait)").matches && this.activeBullet == false) {
                    var Bullet = cc.instantiate(this.shipBullet1);
                    Bullet.setPosition(this.node.position.x + 20, this.node.position.y + this.node.height / 2 + 50);
                    this.node.parent.addChild(Bullet);
                    var Bullet = cc.instantiate(this.shipBullet1);
                    Bullet.setPosition(this.node.position.x - 20, this.node.position.y + this.node.height / 2 + 50);
                    this.node.parent.addChild(Bullet);
                    cc.audioEngine.playEffect(this.shoot, false);
                }
                else if (window.matchMedia("(orientation:  portrait)").matches && this.activeBullet == true) {
                    var Bullet = cc.instantiate(this.shipBullet2);
                    Bullet.setPosition(this.node.position.x + 20, this.node.position.y + this.node.height / 2 + 10);
                    this.node.parent.addChild(Bullet);
                    var Bullet = cc.instantiate(this.shipBullet3);
                    Bullet.setPosition(this.node.position.x + 20, this.node.position.y + this.node.height / 2 + 30);
                    this.node.parent.addChild(Bullet);
                    var Bullet = cc.instantiate(this.shipBullet4);
                    Bullet.setPosition(this.node.position.x + 20, this.node.position.y + this.node.height / 2 + 40);
                    this.node.parent.addChild(Bullet);
                    var Bullet = cc.instantiate(this.shipBullet5);
                    Bullet.setPosition(this.node.position.x - 20, this.node.position.y + this.node.height / 2 + 10);
                    this.node.parent.addChild(Bullet);
                    var Bullet = cc.instantiate(this.shipBullet6);
                    Bullet.setPosition(this.node.position.x - 20, this.node.position.y + this.node.height / 2 + 30);
                    this.node.parent.addChild(Bullet);
                    var Bullet = cc.instantiate(this.shipBullet7);
                    Bullet.setPosition(this.node.position.x - 20, this.node.position.y + this.node.height / 2 + 40);
                    this.node.parent.addChild(Bullet);
                    var Bullet = cc.instantiate(this.shipBullet1);
                    Bullet.setPosition(this.node.position.x + 20, this.node.position.y + this.node.height / 2 + 50);
                    //Bullet.setRotation(this.rotation)
                    this.node.parent.addChild(Bullet);
                    var Bullet = cc.instantiate(this.shipBullet1);
                    Bullet.setPosition(this.node.position.x - 20, this.node.position.y + this.node.height / 2 + 50);
                    this.node.parent.addChild(Bullet);
                    //cc.audioEngine.setVolume(this.shoot, 0.5);
                    cc.audioEngine.playEffect(this.shoot, false);
                }
                if (window.matchMedia("(orientation: landscape)").matches && this.activeBullet == false) {
                    var Bullet = cc.instantiate(this.shipBullet1);
                    Bullet.setPosition(this.node.position.x + 10, this.node.position.y + this.node.height / 2 - 50);
                    this.node.parent.addChild(Bullet);
                    var Bullet = cc.instantiate(this.shipBullet1);
                    Bullet.setPosition(this.node.position.x - 10, this.node.position.y + this.node.height / 2 - 50);
                    this.node.parent.addChild(Bullet);
                    cc.audioEngine.playEffect(this.shoot, false);
                    //cc.audioEngine.playEffect(this.shoot,false);
                }
                else {
                    if (window.matchMedia("(orientation: landscape)").matches && this.activeBullet == true) {
                        var Bullet = cc.instantiate(this.shipBullet2);
                        Bullet.setPosition(this.node.position.x + 20, this.node.position.y + this.node.height / 2 - 60);
                        this.node.parent.addChild(Bullet);
                        var Bullet = cc.instantiate(this.shipBullet3);
                        Bullet.setPosition(this.node.position.x + 20, this.node.position.y + this.node.height / 2 - 50);
                        this.node.parent.addChild(Bullet);
                        var Bullet = cc.instantiate(this.shipBullet4);
                        Bullet.setPosition(this.node.position.x + 20, this.node.position.y + this.node.height / 2 - 40);
                        this.node.parent.addChild(Bullet);
                        var Bullet = cc.instantiate(this.shipBullet5);
                        Bullet.setPosition(this.node.position.x - 20, this.node.position.y + this.node.height / 2 - 60);
                        this.node.parent.addChild(Bullet);
                        var Bullet = cc.instantiate(this.shipBullet6);
                        Bullet.setPosition(this.node.position.x - 20, this.node.position.y + this.node.height / 2 - 50);
                        this.node.parent.addChild(Bullet);
                        var Bullet = cc.instantiate(this.shipBullet7);
                        Bullet.setPosition(this.node.position.x - 20, this.node.position.y + this.node.height / 2 - 40);
                        this.node.parent.addChild(Bullet);
                        var Bullet = cc.instantiate(this.shipBullet1);
                        Bullet.setPosition(this.node.position.x + 10, this.node.position.y + this.node.height / 2 - 30);
                        //Bullet.setRotation(this.rotation)
                        this.node.parent.addChild(Bullet);
                        var Bullet = cc.instantiate(this.shipBullet1);
                        Bullet.setPosition(this.node.position.x - 10, this.node.position.y + this.node.height / 2 - 30);
                        this.node.parent.addChild(Bullet);
                        //cc.audioEngine.setVolume(this.shoot, 0.5);
                        cc.audioEngine.play(this.shoot, false, 0.5);
                    }
                }
            }
        }
    };
    Ship.prototype.endCard = function () {
        this.text.active = true;
        this.hand.active = true;
        if (window.matchMedia("(orientation:  portrait)").matches && this.activeBullet == false) {
            this.node.setPosition(5.988, -365.307);
        }
        else if (window.matchMedia("(orientation:  landscape)").matches && this.activeBullet == false)
            this.node.setPosition(8.808, -144.453);
        this.stopShip = true;
    };
    Ship.prototype.InitBullet = function () {
    };
    Ship.prototype.startShotting = function () {
        this.schedule(this.createBullet, 0.18, cc.macro.REPEAT_FOREVER, 0);
    };
    Ship.prototype.shotting = function () {
        this.InitBullet();
    };
    Ship.prototype.update = function (dt) {
        if (this.node.x > 360)
            this.node.x = 360;
        if (this.node.x < -360)
            this.node.x = -360;
        if (this.node.y > 640)
            this.node.y = 640;
        if (this.node.y < -640)
            this.node.y = -640;
        this.rotation += dt;
        this.ship.on(cc.Node.EventType.TOUCH_END, function (event) {
            this.text.active = true;
            this.bgblack.active = true;
            this.hand.active = true;
            this.node.parent.getChildByName('IconGame').active = true;
            this.node.parent.getChildByName('PlayNow').active = true;
        }, this);
        this.ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.text.active = false;
            this.bgblack.active = false;
            this.hand.active = false;
        }, this);
        this.ship.on(cc.Node.EventType.TOUCH_START, function (event) {
            this.node.parent.getChildByName('IconGame').active = false;
            this.node.parent.getChildByName('PlayNow').active = false;
        }, this);
    };
    Ship.prototype.onCollisionEnter = function (other, self) {
        if (other.name == "SHield<BoxCollider>") {
            this.activeBullet = true;
        }
        if (other.name == "boss26_bullet_2<BoxCollider>") {
            this.redD.getComponent(cc.Animation).play('shakeCamera');
            this.redDis.active = true;
            this.redDis.getComponent(cc.Animation).play('effectRed');
        }
        if (self.name == "Bullet33<BoxCollider>") {
        }
    };
    var Ship_1;
    Ship.Instance = null;
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "ship", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "popup", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "bgblack", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shield", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "bulletPo", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "redDis", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shipBullet", void 0);
    __decorate([
        property
    ], Ship.prototype, "bulletPool", void 0);
    __decorate([
        property
    ], Ship.prototype, "game", void 0);
    __decorate([
        property
    ], Ship.prototype, "bullet1", void 0);
    __decorate([
        property(cc.Animation)
    ], Ship.prototype, "redDisplay", void 0);
    __decorate([
        property
    ], Ship.prototype, "bullet2", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shipBullet1", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shipBullet2", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shipBullet3", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shipBullet4", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shipBullet5", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shipBullet6", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shipBullet7", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "shipBullet8", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "redD", void 0);
    __decorate([
        property(Boolean)
    ], Ship.prototype, "stopShip", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], Ship.prototype, "shoot", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], Ship.prototype, "backgroundSound", void 0);
    __decorate([
        property(cc.Prefab)
    ], Ship.prototype, "BulletSkill2", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "bulletParent", void 0);
    __decorate([
        property
    ], Ship.prototype, "activeBullet", void 0);
    Ship = Ship_1 = __decorate([
        ccclass
    ], Ship);
    return Ship;
}(cc.Component));
exports.default = Ship;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTBQQztRQXZQRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsY0FBYztRQUVkLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFFakIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixnQkFBVSxHQUFxQixJQUFJLENBQUM7UUFFcEMsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBVSxLQUFLLENBQUM7UUFTeEIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsa0JBQVks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TUFBTSxDQUFDLENBQUM7b0JBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM5QyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDOUYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUM7b0JBRTlGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM5RixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM5QyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDOUYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUM7b0JBRTlGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM5RixtQ0FBbUM7b0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMs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LElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM5RixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUM5QyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFFOUYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzlGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM5RixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUM5QyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFFOUYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzlGLG1DQUFtQzt3QkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUVsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFD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O0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0NBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDOzBDQUNNO0lBSXhCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTO1NBQ3JCLENBQUM7dUNBQ1U7SUFLWjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztTQUNyQixDQUFDO2lEQUNxQjtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1c7SUFJN0I7UUFEQyxRQUFROzhDQUNxQjtJQXBFYixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMFB4QjtJQUFELFdBQUM7Q0ExUEQsQUEwUEMsQ0ExUGlDLEVBQUUsQ0FBQyxTQUFTLEdBMFA3QztrQkExUG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVsbGV0IGZyb20gXCIuL0J1bGxldFwiO1xuaW1wb3J0IEdhbWVVSWNvbnRyb2xsZXIgZnJvbSBcIi4vR2FtZVVJY29udHJvbGxlclwiO1xuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgc3RhdGljIEluc3RhbmNlOiBTaGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaGlwOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGV4dDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmdibGFjazogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBzaGllbGQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnVsbGV0UG86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlZERpczogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KClcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNoaXBCdWxsZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGJ1bGxldFBvb2w6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgZ2FtZTogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBidWxsZXQxOiBudW1iZXIgPSAxO1xuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgcmVkRGlzcGxheTogY2MuQW5pbWF0aW9uQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgYnVsbGV0MjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpcEJ1bGxldDE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpcEJ1bGxldDI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpcEJ1bGxldDM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpcEJ1bGxldDQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpcEJ1bGxldDU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpcEJ1bGxldDY6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpcEJ1bGxldDc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpcEJ1bGxldDg6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlZEQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxuICAgIHN0b3BTaGlwOiBib29sZWFuPWZhbHNlO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pXG4gICAgc2hvb3Q6IG51bGw7XG4gIFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgIH0pXG4gICAgYmFja2dyb3VuZFNvdW5kID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIEJ1bGxldFNraWxsMjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidWxsZXRQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIGZpcmVSYXRlOiBudW1iZXIgPSAxO1xuICAgIGlzR2FtZXN0YXJ0OiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5XG4gICAgYWN0aXZlQnVsbGV0OiBib29sZWFuID0gZmFsc2U7XG4gICAgcG9zaXRpb25YWShldmVudCkge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgXG4gICAgICAgIFNoaXAuSW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaGlwLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jcmVhdGVCdWxsZXQsIDAuMTUsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcbiAgXG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY3JlYXRlQnVsbGV0LCAwLjEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcbiAgICAgIFxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29udG91Y2htb3ZlLCB0aGlzKVxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsdGhpcy5fb250b3VjaG1vdmUsdGhpcylcbiAgICB9XG4gICAgXG4gICAgY2xvc2VUb3VjaCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb250b3VjaG1vdmUsIHRoaXMpXG4gICAgfVxuXG4gICAgX29udG91Y2htb3ZlKFRvdWNoRXZlbnQpIHtcbiAgICAgaWYgKHRoaXMuc3RvcFNoaXA9PT1mYWxzZSkge1xuICAgICAgICBsZXQgZGVsdGEgPSBUb3VjaEV2ZW50LmdldERlbHRhKCk7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGRlbHRhLmFkZCh0aGlzLm5vZGUucG9zaXRpb24pOyAgICAgICAgICBcbiAgICAgfSAgICAgICAgICAgICAgXG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgIH1cbiAgICBTcGF3bkJ1bGxldCgpIHtcbiAgICB9XG4gICAgc3Bhd1NoaWVsZDEoKSB7XG4gICAgICAgIHRoaXMuYnVsbGV0MSArPSAxICBcbiAgICB9XG4gICAgY3JlYXRlQnVsbGV0KCkge1xuICAgICAgICBpZiAodGhpcy5zdG9wU2hpcD09PWZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnRleHQuYWN0aXZlID09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246ICBwb3J0cmFpdClcIikubWF0Y2hlcyYmIHRoaXMuYWN0aXZlQnVsbGV0PT1mYWxzZSkge1xuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQxKTtcbiAgICAgICAgICAgICAgICBCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKyAyMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMis1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChCdWxsZXQpO1xuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQxKTtcbiAgICAgICAgICAgICAgICBCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggLSAyMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMis1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChCdWxsZXQpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaG9vdCwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogIHBvcnRyYWl0KVwiKS5tYXRjaGVzJiYgdGhpcy5hY3RpdmVCdWxsZXQ9PXRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgQnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGlwQnVsbGV0Mik7XG4gICAgICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICsgMjAsIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDIrMTApO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoQnVsbGV0KTtcbiAgICAgICAgICAgICAgICB2YXIgQnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGlwQnVsbGV0Myk7XG4gICAgICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICsgMjAsIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDIrMzApO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoQnVsbGV0KTtcbiAgICAgICAgICAgICAgICB2YXIgQnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGlwQnVsbGV0NCk7XG4gICAgICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICsgMjAsIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDIrNDApO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoQnVsbGV0KTtcbiAgICAgICAgICAgICAgICB2YXIgQnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGlwQnVsbGV0NSk7XG4gICAgICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54IC0gMjAsIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDIrMTApO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoQnVsbGV0KTtcbiAgICAgICAgICAgICAgICB2YXIgQnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGlwQnVsbGV0Nik7XG4gICAgICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54IC0gMjAsIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDIrMzApO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoQnVsbGV0KTtcbiAgICAgICAgICAgICAgICB2YXIgQnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGlwQnVsbGV0Nyk7XG4gICAgICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54IC0gMjAsIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDIrNDApO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoQnVsbGV0KTtcbiAgICAgICAgICAgICAgICB2YXIgQnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGlwQnVsbGV0MSk7XG4gICAgICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICsgMjAsIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDIrNTApO1xuICAgICAgICAgICAgICAgIC8vQnVsbGV0LnNldFJvdGF0aW9uKHRoaXMucm90YXRpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChCdWxsZXQpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIEJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2hpcEJ1bGxldDEpO1xuICAgICAgICAgICAgICAgIEJ1bGxldC5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCAtIDIwLCB0aGlzLm5vZGUucG9zaXRpb24ueSArIHRoaXMubm9kZS5oZWlnaHQgLyAyKzUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKEJ1bGxldCk7XG4gICAgICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5zaG9vdCwgMC41KTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2hvb3QsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzJiZ0aGlzLmFjdGl2ZUJ1bGxldD09ZmFsc2UpIHsgXG4gICAgICAgICAgICAgICAgdmFyIEJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2hpcEJ1bGxldDEpO1xuICAgICAgICAgICAgICAgIEJ1bGxldC5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCArIDEwLCB0aGlzLm5vZGUucG9zaXRpb24ueSArIHRoaXMubm9kZS5oZWlnaHQgLyAyLTUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKEJ1bGxldCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgQnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGlwQnVsbGV0MSk7XG4gICAgICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54IC0gMTAsIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDItNTApO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoQnVsbGV0KTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2hvb3QsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaG9vdCxmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge2lmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzJiZ0aGlzLmFjdGl2ZUJ1bGxldD09dHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQyKTtcbiAgICAgICAgICAgICAgICBCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKyAyMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMi02MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChCdWxsZXQpO1xuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQzKTtcbiAgICAgICAgICAgICAgICBCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKyAyMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMi01MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChCdWxsZXQpO1xuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQ0KTtcbiAgICAgICAgICAgICAgICBCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKyAyMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMi00MCk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChCdWxsZXQpO1xuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQ1KTtcbiAgICAgICAgICAgICAgICBCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggLSAyMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMi02MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChCdWxsZXQpO1xuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQ2KTtcbiAgICAgICAgICAgICAgICBCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggLSAyMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMi01MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChCdWxsZXQpO1xuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQ3KTtcbiAgICAgICAgICAgICAgICBCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggLSAyMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMi00MCk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChCdWxsZXQpO1xuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQxKTtcbiAgICAgICAgICAgICAgICBCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKyAxMCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMi0zMCk7XG4gICAgICAgICAgICAgICAgLy9CdWxsZXQuc2V0Um90YXRpb24odGhpcy5yb3RhdGlvbilcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKEJ1bGxldCk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgQnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGlwQnVsbGV0MSk7XG4gICAgICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54IC0gMTAsIHRoaXMubm9kZS5wb3NpdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDItMzApO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoQnVsbGV0KTtcbiAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLnNob290LCAwLjUpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zaG9vdCwgZmFsc2UsMC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgfVxuICAgIH1cbiAgICBlbmRDYXJkKCkge1xuICAgICAgICB0aGlzLnRleHQuYWN0aXZlPXRydWVcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZT10cnVlXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogIHBvcnRyYWl0KVwiKS5tYXRjaGVzJiYgdGhpcy5hY3RpdmVCdWxsZXQ9PWZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oNS45ODgsIC0zNjUuMzA3KTsgXG4gICAgICAgIH1lbHNlICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246ICBsYW5kc2NhcGUpXCIpLm1hdGNoZXMmJiB0aGlzLmFjdGl2ZUJ1bGxldD09ZmFsc2UpIHRoaXMubm9kZS5zZXRQb3NpdGlvbig4LjgwOCwtMTQ0LjQ1Myk7IFxuICAgICAgICAgXG4gICAgIHRoaXMuc3RvcFNoaXA9dHJ1ZTtcbiAgICB9XG4gICAgSW5pdEJ1bGxldCgpIHtcbiAgICB9XG4gICAgc3RhcnRTaG90dGluZygpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNyZWF0ZUJ1bGxldCwgMC4xOCwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDApO1xuICAgIH1cbiAgICBzaG90dGluZygpIHtcbiAgICAgICAgdGhpcy5Jbml0QnVsbGV0KCk7XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiAzNjApdGhpcy5ub2RlLnggPSAzNjBcbiAgICAgICAgaWYgKHRoaXMubm9kZS54IDwgLTM2MCkgdGhpcy5ub2RlLnggPSAtMzYwXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA+IDY0MCkgdGhpcy5ub2RlLnkgPSA2NDBcbiAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgLTY0MCl0aGlzLm5vZGUueSA9IC02NDBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSBkdDtcbiAgICAgICAgdGhpcy5zaGlwLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRleHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmdibGFjay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdJY29uR2FtZScpLmFjdGl2ZT10cnVlXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdQbGF5Tm93JykuYWN0aXZlPXRydWVcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2hpcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYmdibGFjay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2hpcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdJY29uR2FtZScpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdQbGF5Tm93JykuYWN0aXZlPWZhbHNlXG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5uYW1lPT0gXCJTSGllbGQ8Qm94Q29sbGlkZXI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQnVsbGV0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXIubmFtZSA9PSBcImJvc3MyNl9idWxsZXRfMjxCb3hDb2xsaWRlcj5cIikge1xuICAgICAgICAgICAgdGhpcy5yZWRELmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoJ3NoYWtlQ2FtZXJhJyk7XG4gICAgICAgICAgICB0aGlzLnJlZERpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZWREaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgnZWZmZWN0UmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYubmFtZSA9PSBcIkJ1bGxldDMzPEJveENvbGxpZGVyPlwiKSB7ICAgICBcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=