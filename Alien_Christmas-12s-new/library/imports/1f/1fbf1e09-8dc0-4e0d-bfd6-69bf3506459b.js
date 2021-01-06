"use strict";
cc._RF.push(module, '1fbf14JjcBODb/Wab81BkWb', 'Boss');
// Scripts/Boss.ts

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
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ExpolosionBoss = null;
        _this.duration = 0;
        _this.moveAmountX = 300;
        _this.moveAmountY = 75;
        _this.BulletBoss = null;
        _this.hp = null;
        _this.ShootFrequency = 3.0;
        _this.enemyLife = 200;
        _this.progress = 1;
        _this.game = 0;
        _this.gameStar = false;
        _this.enemyClear = false;
        _this.bossClear = false;
        _this.playAnimation = true;
        _this.explosion = null;
        _this.Ship = null;
        _this.Boss = null;
        _this.text = null;
        _this.cavas = null;
        _this.explotion = null;
        _this.redDes = null;
        _this.bgBlack = null;
        _this.explosion1 = null;
        _this.enemyNumber = 9;
        _this.shieldHp = 10;
        _this.BossHp = 10;
        _this.BossMove = 10;
        _this.textHand = null;
        _this.redDis = null;
        _this.expolosionNode = null;
        _this.Boss_explosion = null;
        _this.no2 = null;
        return _this;
    }
    Boss_1 = Boss;
    Boss.prototype.onLoad = function () {
        Boss_1.Instance = this;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    Boss.prototype.open = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        //this.moveEnemy = this.setMove();
        //this.node.runAction(this.moveEnemy);
        this.schedule(this.spawnBullet, 3, cc.macro.REPEAT_FOREVER, 3.0);
    };
    Boss.prototype.setMove = function () {
    };
    Boss.prototype.spawnBullet = function () {
        this.enemyNumber--;
        //console.log(this.enemyNumber);
        if (this.enemyNumber == 0) {
            //console.log("enemyNumber==0");
            this.enemyClear = true;
        }
        if (this.enemyNumber == 4) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                // Here `this` is referring to the component
                try {
                    var Bullet = cc.instantiate(this.BulletBoss);
                    Bullet.setPosition(this.node.position.x, this.node.position.y);
                    this.node.addChild(Bullet);
                    this.schedule(this.spawnBullet, 2, cc.macro.REPEAT_FOREVER, 2);
                }
                catch (error) {
                }
            }
            if (window.matchMedia("(orientation: landscape)").matches) {
                var Bullet = cc.instantiate(this.BulletBoss);
                Bullet.setPosition(this.node.position.x = 30, this.node.position.y - 200);
                this.node.addChild(Bullet);
                this.schedule(this.spawnBullet, 1.5, cc.macro.REPEAT_FOREVER, 2);
            }
        }
    };
    Boss.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        this.redDes.getComponent(cc.Animation).play('shakeCamera');
        otherCollider.node.destroy();
        if (selfCollider.name == "boss_worldcup_bullet_4<BoxCollider>") {
            this.redDes.getComponent(cc.Animation).play('shakeCamera');
            this.redDis.active = true;
            this.redDis.getComponent(cc.Animation).play('effectRed');
        }
        if (selfCollider.name == "Boss<PolygonCollider>") {
            if (this.enemyNumber <= 2) {
                this.BossHp--;
                this.shieldHp--;
                if (this.shieldHp == 40) {
                    //var action = cc.fadeOut(1.5);
                    this.node.getChildByName('Giap1').active = false;
                    this.node.getChildByName('Giap2').active = false;
                }
                if (this.BossHp == 0) {
                    this.bossClear = true;
                    // var explosion = cc.instantiate(this.expolosionNode);
                    // explosion.setPosition(selfCollider.node.position);
                    this.node.destroy();
                    cc.audioEngine.playEffect(this.ExpolosionBoss, false);
                    // this.node.parent.addChild(explosion)
                    this.explotion.active = true;
                    this.explotion.getComponent(cc.Animation).play('no2');
                    //this.redDes.getComponent(cc.Animation).play('shakeCamera'); 
                    if (this.enemyNumber <= 2) {
                        if (window.matchMedia("(orientation: portrait)").matches) {
                            var move = cc.moveTo(1, 10, 277);
                            this.Boss.runAction(move);
                            this.node.parent.parent.getComponent('GameController').delay();
                            this.node.parent.parent.getChildByName('Ship').getComponent('Ship').endCard();
                        }
                        if (window.matchMedia("(orientation: landscape)").matches) {
                            var move = cc.moveTo(1, 8, 100);
                            this.Boss.runAction(move);
                            this.node.parent.parent.getComponent('GameController').delay();
                            this.node.parent.parent.getChildByName('Ship').getComponent('Ship').endCard();
                        }
                    }
                }
            }
        }
    };
    Boss.prototype.openStore = function () {
    };
    Boss.prototype.opendelay = function () {
        this.schedule(this.openStore, 2);
    };
    Boss.prototype.clickPopup = function () {
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            cc.sys.openURL("https://play.google.com/store/apps/details?id=com.alien.shooter.galaxy.attack&hl=vi&gl=US");
        }
        else {
            cc.sys.openURL("https://apps.apple.com/us/app/galaxy-attack-alien-shooter/id1176011642");
        }
    };
    Boss.prototype.explosionRun = function () {
        var explosion = this.node.getPosition();
        var explosionRun = cc.instantiate(this.explosion);
        this.node.parent.addChild(explosionRun);
        explosionRun.setPosition(this.node.position.x, this.node.position.y);
        var animation = explosionRun.getComponent(cc.Animation);
        animation.on('finished', this.onFinished, explosionRun);
    };
    Boss.prototype.start = function () {
    };
    Boss.prototype.update = function (dt) {
        this.setMove();
    };
    var Boss_1;
    Boss.Instance = null;
    __decorate([
        property(cc.AudioClip)
    ], Boss.prototype, "ExpolosionBoss", void 0);
    __decorate([
        property
    ], Boss.prototype, "duration", void 0);
    __decorate([
        property
    ], Boss.prototype, "moveAmountX", void 0);
    __decorate([
        property
    ], Boss.prototype, "moveAmountY", void 0);
    __decorate([
        property(cc.Prefab)
    ], Boss.prototype, "BulletBoss", void 0);
    __decorate([
        property(cc.Sprite)
    ], Boss.prototype, "hp", void 0);
    __decorate([
        property
    ], Boss.prototype, "ShootFrequency", void 0);
    __decorate([
        property
    ], Boss.prototype, "enemyLife", void 0);
    __decorate([
        property
    ], Boss.prototype, "progress", void 0);
    __decorate([
        property
    ], Boss.prototype, "game", void 0);
    __decorate([
        property
    ], Boss.prototype, "gameStar", void 0);
    __decorate([
        property
    ], Boss.prototype, "enemyClear", void 0);
    __decorate([
        property
    ], Boss.prototype, "bossClear", void 0);
    __decorate([
        property
    ], Boss.prototype, "playAnimation", void 0);
    __decorate([
        property(cc.Prefab)
    ], Boss.prototype, "explosion", void 0);
    __decorate([
        property(cc.Node)
    ], Boss.prototype, "Ship", void 0);
    __decorate([
        property(cc.Node)
    ], Boss.prototype, "Boss", void 0);
    __decorate([
        property(cc.Node)
    ], Boss.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], Boss.prototype, "cavas", void 0);
    __decorate([
        property(cc.Node)
    ], Boss.prototype, "explotion", void 0);
    __decorate([
        property(cc.Node)
    ], Boss.prototype, "redDes", void 0);
    __decorate([
        property(cc.Node)
    ], Boss.prototype, "bgBlack", void 0);
    __decorate([
        property(cc.Prefab)
    ], Boss.prototype, "explosion1", void 0);
    __decorate([
        property
    ], Boss.prototype, "enemyNumber", void 0);
    __decorate([
        property
    ], Boss.prototype, "shieldHp", void 0);
    __decorate([
        property
    ], Boss.prototype, "BossHp", void 0);
    __decorate([
        property
    ], Boss.prototype, "BossMove", void 0);
    __decorate([
        property(cc.Node)
    ], Boss.prototype, "textHand", void 0);
    __decorate([
        property(cc.Node)
    ], Boss.prototype, "redDis", void 0);
    __decorate([
        property(cc.Prefab)
    ], Boss.prototype, "expolosionNode", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], Boss.prototype, "Boss_explosion", void 0);
    __decorate([
        property(cc.AnimationClip)
    ], Boss.prototype, "no2", void 0);
    Boss = Boss_1 = __decorate([
        ccclass
    ], Boss);
    return Boss;
}(cc.Component));
exports.default = Boss;

cc._RF.pop();