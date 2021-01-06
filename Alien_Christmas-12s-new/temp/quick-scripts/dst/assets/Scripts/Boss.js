
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Boss.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm9zcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXNNQztRQW5NRyxvQkFBYyxHQUFHLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGlCQUFXLEdBQVUsR0FBRyxDQUFDO1FBRXpCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLFFBQUUsR0FBYyxJQUFJLENBQUM7UUFFckIsb0JBQWMsR0FBVyxHQUFHLENBQUM7UUFFN0IsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUV4QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFFakIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVUsSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLFlBQU0sR0FBVyxFQUFFLENBQUM7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TTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNPO0lBRTNCO1FBREMsUUFBUTs2Q0FDZTtJQUV4QjtRQURDLFFBQVE7MENBQ2E7SUFFdEI7UUFEQyxRQUFRO3dDQUNXO0lBRXBCO1FBREMsUUFBUTswQ0FDYTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDVztJQUkvQjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUztTQUNwQixDQUFDO2dEQUNvQjtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO3FDQUNQO0lBcEVILElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FzTXhCO0lBQUQsV0FBQztDQXRNRCxBQXNNQyxDQXRNaUMsRUFBRSxDQUFDLFNBQVMsR0FzTTdDO2tCQXRNb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHN0YXRpYyBJbnN0YW5jZTogQm9zcyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBFeHBvbG9zaW9uQm9zcyA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgZHVyYXRpb246IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgbW92ZUFtb3VudFg6bnVtYmVyID0gMzAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIG1vdmVBbW91bnRZOiBudW1iZXIgPSA3NTtcbiAgICBtb3ZlRW5lbXk6Y2MuQWN0aW9uSW50ZXJ2YWw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBCdWxsZXRCb3NzOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaHA6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgU2hvb3RGcmVxdWVuY3k6IG51bWJlciA9IDMuMDtcbiAgICBAcHJvcGVydHlcbiAgICBlbmVteUxpZmU6IG51bWJlciA9IDIwMDtcbiAgICBAcHJvcGVydHlcbiAgICBwcm9ncmVzczogbnVtYmVyID0gMTtcbiAgICBAcHJvcGVydHlcbiAgICBnYW1lOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIGdhbWVTdGFyOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5XG4gICAgZW5lbXlDbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eVxuICAgIGJvc3NDbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eVxuICAgIHBsYXlBbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZXhwbG9zaW9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBTaGlwOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBCb3NzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXh0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYXZhczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZXhwbG90aW9uOiBjYy5Ob2RlPW51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVkRGVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZ0JsYWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGV4cGxvc2lvbjE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGVuZW15TnVtYmVyOiBudW1iZXIgPSA5O1xuICAgIEBwcm9wZXJ0eVxuICAgIHNoaWVsZEhwOiBudW1iZXIgPSAxMDtcbiAgICBAcHJvcGVydHlcbiAgICBCb3NzSHA6IG51bWJlciA9IDEwO1xuICAgIEBwcm9wZXJ0eVxuICAgIEJvc3NNb3ZlOiBudW1iZXIgPSAxMDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXh0SGFuZDogY2MuTm9kZSA9IG51bGw7IFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlZERpczogY2MuTm9kZSA9IG51bGw7IFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZXhwb2xvc2lvbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwXG4gICAgfSlcbiAgICBCb3NzX2V4cGxvc2lvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbkNsaXApXG4gICAgbm8yOiBBbmltYXRpb249bnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFxuICAgICAgICBCb3NzLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdmFyIG1hbmFnZXI9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgXG4gICAgfVxuICAgIG9wZW4oKSB7XG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgIC8vdGhpcy5tb3ZlRW5lbXkgPSB0aGlzLnNldE1vdmUoKTtcbiAgICAgICAgLy90aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMubW92ZUVuZW15KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNwYXduQnVsbGV0LCAzLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMy4wKTsgIFxuICAgIH1cbiAgICBzZXRNb3ZlKCkge1xuICAgIH1cbiAgICBzcGF3bkJ1bGxldCgpIHtcblxuICAgIHRoaXMuZW5lbXlOdW1iZXItLVxuICAgIC8vY29uc29sZS5sb2codGhpcy5lbmVteU51bWJlcik7XG4gICAgaWYgKHRoaXMuZW5lbXlOdW1iZXI9PTApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImVuZW15TnVtYmVyPT0wXCIpO1xuICAgICAgICB0aGlzLmVuZW15Q2xlYXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbmVteU51bWJlciA9PSA0KSB7ICAgXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIHtcbiAgICAgXG4gICAgICAgICAgICAgICAgLy8gSGVyZSBgdGhpc2AgaXMgcmVmZXJyaW5nIHRvIHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJ1bGxldEJvc3MpO1xuICAgICAgICAgICAgICAgIEJ1bGxldC5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCAsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoQnVsbGV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25CdWxsZXQsIDIsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAyKTtcbiAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykgeyBcbiAgICAgICAgICAgIHZhciBCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJ1bGxldEJvc3MpO1xuICAgICAgICAgICAgQnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54PTMwLCB0aGlzLm5vZGUucG9zaXRpb24ueS0yMDApO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKEJ1bGxldCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25CdWxsZXQsMS41LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMik7XG4gICAgICAgIH1cbn0gXG59XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlckNvbGxpZGVyLCBzZWxmQ29sbGlkZXIpIHtcbiAgICAgICAgdGhpcy5yZWREZXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgnc2hha2VDYW1lcmEnKTtcbiAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHNlbGZDb2xsaWRlci5uYW1lPT1cImJvc3Nfd29ybGRjdXBfYnVsbGV0XzQ8Qm94Q29sbGlkZXI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVkRGVzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoJ3NoYWtlQ2FtZXJhJyk7IFxuICAgICAgICAgICAgdGhpcy5yZWREaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVkRGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoJ2VmZmVjdFJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmQ29sbGlkZXIubmFtZSA9PSBcIkJvc3M8UG9seWdvbkNvbGxpZGVyPlwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmVteU51bWJlciA8PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Cb3NzSHAtLTtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaWVsZEhwLS07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpZWxkSHAgPT0gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgIC8vdmFyIGFjdGlvbiA9IGNjLmZhZGVPdXQoMS41KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdHaWFwMScpLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdHaWFwMicpLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQm9zc0hwID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3NzQ2xlYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgZXhwbG9zaW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5leHBvbG9zaW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGV4cGxvc2lvbi5zZXRQb3NpdGlvbihzZWxmQ29sbGlkZXIubm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBvbG9zaW9uQm9zcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGV4cGxvc2lvbilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb3Rpb24uYWN0aXZlPXRydWU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvdGlvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCdubzInKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnJlZERlcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCdzaGFrZUNhbWVyYScpOyBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlOdW1iZXIgPD0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb3ZlID0gY2MubW92ZVRvKDEsIDEwLCAyNzcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Cb3NzLnJ1bkFjdGlvbihtb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoJ0dhbWVDb250cm9sbGVyJykuZGVsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDaGlsZEJ5TmFtZSgnU2hpcCcpLmdldENvbXBvbmVudCgnU2hpcCcpLmVuZENhcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb3ZlID0gY2MubW92ZVRvKDEsIDgsIDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJvc3MucnVuQWN0aW9uKG1vdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmdldENvbXBvbmVudCgnR2FtZUNvbnRyb2xsZXInKS5kZWxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmdldENoaWxkQnlOYW1lKCdTaGlwJykuZ2V0Q29tcG9uZW50KCdTaGlwJykuZW5kQ2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIH0gfVxuXG4gICAgb3BlblN0b3JlKCkgeyAgXG4gICAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgfVxuICAgIG9wZW5kZWxheSgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLm9wZW5TdG9yZSwgMik7XG4gICAgfVxuICAgIFxuICAgIGNsaWNrUG9wdXAoKSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbGllbi5zaG9vdGVyLmdhbGF4eS5hdHRhY2smaGw9dmkmZ2w9VVNcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvZ2FsYXh5LWF0dGFjay1hbGllbi1zaG9vdGVyL2lkMTE3NjAxMTY0MlwiKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgZXhwbG9zaW9uUnVuKCl7ICAgXG4gICAgICAgIHZhciBleHBsb3Npb24gPXRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICB2YXIgZXhwbG9zaW9uUnVuID0gY2MuaW5zdGFudGlhdGUodGhpcy5leHBsb3Npb24pO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGV4cGxvc2lvblJ1bik7XG4gICAgICAgIGV4cGxvc2lvblJ1bi5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCx0aGlzLm5vZGUucG9zaXRpb24ueSk7XG4gICAgICAgIHZhciBhbmltYXRpb24gPSBleHBsb3Npb25SdW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW1hdGlvbi5vbignZmluaXNoZWQnLHRoaXMub25GaW5pc2hlZCwgZXhwbG9zaW9uUnVuKTtcbiAgICB9XG4gICAgc3RhcnQgKCkge1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5zZXRNb3ZlKCk7XG4gICAgIH1cbn1cbiAgICAgICJdfQ==