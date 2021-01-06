"use strict";
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