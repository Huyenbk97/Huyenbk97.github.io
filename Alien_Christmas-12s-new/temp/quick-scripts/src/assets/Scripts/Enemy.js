"use strict";
cc._RF.push(module, 'e7e7fpcnt5A7JcfvPCOS7GP', 'Enemy');
// Scripts/Enemy.ts

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
        _this.enemyNumber = 9;
        _this.explosion = null;
        _this.BulletEnemy = null;
        _this.test = null;
        _this.enemy1 = null;
        _this.enemy2 = null;
        _this.enemy3 = null;
        _this.enemy4 = null;
        _this.enemy5 = null;
        _this.enemy6 = null;
        _this.cavas = null;
        _this.enemy7 = null;
        _this.enemy8 = null;
        _this.enemy9 = null;
        _this.redDes = null;
        _this.expolosion = null;
        _this.shield = null;
        _this.ShootFrequency = 3.0;
        _this.duration = 0.5;
        _this.moveAmountX = 0.01;
        _this.moveAmountY = 0.01;
        _this.enemyLife = 100;
        _this.enemyHp = 6;
        _this.shieldHave = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        var anim = this.getComponent(cc.Animation);
        this.schedule(this.spawBullet, 1.5, cc.macro.REPEAT_FOREVER);
    };
    NewClass.prototype.spawBullet = function () {
        try {
            if (window.matchMedia("(orientation: portrait)").matches) {
                var enemys = [this.enemy1, this.enemy2, this.enemy3, this.enemy4, this.enemy5, this.enemy6, this.enemy7, this.enemy8, this.enemy9];
                var random = Math.floor(Math.random() * enemys.length);
                var newBullet = cc.instantiate(this.BulletEnemy);
                newBullet.setPosition(enemys[random].position.x, enemys[random].position.y);
                this.node.addChild(newBullet);
            }
            if (window.matchMedia("(orientation: landscape)").matches) {
                var enemys = [this.enemy1, this.enemy2, this.enemy3, this.enemy4, this.enemy5, this.enemy6, this.enemy7, this.enemy8, this.enemy9];
                var random = Math.floor(Math.random() * enemys.length);
                var newBullet = cc.instantiate(this.BulletEnemy);
                newBullet.setPosition(enemys[random].position.x + 100, enemys[random].position.y - 100);
                this.node.addChild(newBullet);
            }
        }
        catch (error) {
        }
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.name == "Bullet33<BoxCollider>" || other.name == "Bullet1<BoxCollider>" || other.name == "Bullet1<BoxCollider>" || other.name == "Bullet2<BoxCollider>" || other.name == "Bullet3<BoxCollider>" || other.name == "Bullet4<BoxCollider>" || other.name == "Bullet5<BoxCollider>" || other.name == "Bullet6<BoxCollider>") {
            this.enemyHp -= 1;
            other.node.destroy();
            if (this.enemyHp == 0) {
                this.enemyNumber--;
                var explosion = cc.instantiate(this.expolosion);
                explosion.setPosition(self.node.position);
                this.node.parent.addChild(explosion);
                self.node.destroy();
                cc.audioEngine.playEffect(this.explosion, false);
                this.redDes.getComponent(cc.Animation).play('shakeCamera');
                this.node.parent.parent.getComponent('GameController').spawShield(self.node.position.x, self.node.position.y);
                this.node.parent.getChildByName('Boss').getComponent('Boss').spawnBullet();
            }
        }
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.schedule(this.spawBullet, 1.5, cc.macro.REPEAT_FOREVER);
    };
    __decorate([
        property
    ], NewClass.prototype, "enemyNumber", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewClass.prototype, "explosion", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "BulletEnemy", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "test", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy5", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy6", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cavas", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy7", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy8", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy9", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "redDes", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "expolosion", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "shield", void 0);
    __decorate([
        property
    ], NewClass.prototype, "ShootFrequency", void 0);
    __decorate([
        property
    ], NewClass.prototype, "Animation_Node", void 0);
    __decorate([
        property
    ], NewClass.prototype, "duration", void 0);
    __decorate([
        property
    ], NewClass.prototype, "moveAmountX", void 0);
    __decorate([
        property
    ], NewClass.prototype, "moveAmountY", void 0);
    __decorate([
        property
    ], NewClass.prototype, "enemyLife", void 0);
    __decorate([
        property
    ], NewClass.prototype, "enemyHp", void 0);
    __decorate([
        property
    ], NewClass.prototype, "shieldHave", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();