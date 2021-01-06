
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/AutoDestroy');
require('./assets/Scripts/Bad');
require('./assets/Scripts/Boss');
require('./assets/Scripts/Bullet');
require('./assets/Scripts/BulletBossMove');
require('./assets/Scripts/Camera_Controller');
require('./assets/Scripts/Enemy - 001');
require('./assets/Scripts/Enemy');
require('./assets/Scripts/EnemyController');
require('./assets/Scripts/EnemyShip');
require('./assets/Scripts/ExpolosionEnemy');
require('./assets/Scripts/Game');
require('./assets/Scripts/GameController');
require('./assets/Scripts/GameUIcontroller');
require('./assets/Scripts/Gameplay');
require('./assets/Scripts/HandMove');
require('./assets/Scripts/InitBossController');
require('./assets/Scripts/Lazer');
require('./assets/Scripts/LoadScene');
require('./assets/Scripts/Meteror');
require('./assets/Scripts/MoveBullet');
require('./assets/Scripts/MoveEnemyCirle');
require('./assets/Scripts/NewScript');
require('./assets/Scripts/Plane');
require('./assets/Scripts/Player');
require('./assets/Scripts/PopupWindow');
require('./assets/Scripts/Resize');
require('./assets/Scripts/Scroll - 001');
require('./assets/Scripts/Scroll');
require('./assets/Scripts/ShieldMove');
require('./assets/Scripts/Ship');
require('./assets/Scripts/ShipMove');
require('./assets/Scripts/Spaceship');
require('./assets/Scripts/SpriteEx');
require('./assets/Scripts/Test');
require('./assets/Scripts/TestBullets');
require('./assets/Scripts/TestLazer');
require('./assets/Scripts/TestMoveEnemy');
require('./assets/Scripts/bulletEnemy');
require('./assets/Scripts/bulletMove1');
require('./assets/Scripts/moveTest1');
require('./assets/Scripts/smoke');
require('./assets/Scripts/taptoplay');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37befggchFBrqvAAeCF2gQE', 'GameController');
// Scripts/GameController.ts

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
var GameUIcontroller_1 = require("./GameUIcontroller");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numOfEnemy = 47;
        _this.popup = null;
        _this.popupopen = null;
        _this.text = null;
        _this.Boss2 = null;
        _this.play = null;
        _this.Ship = null;
        _this.moveHand = null;
        _this.enemyemty = false;
        _this.bossemty = false;
        _this.boss2 = null;
        _this.iconGame = null;
        _this.initBulletPosition = null;
        // @property()
        _this.shipBullet = null;
        _this.sheild = null;
        _this.sheildNumber = 0;
        _this.wight = 0;
        _this.height = 0;
        _this.wightBf = 0;
        _this.heightBf = 0;
        _this.enemyemty1 = 9;
        _this.setPositionDoc = true;
        _this.setPositionNgang = true;
        _this.Victory = null;
        _this.backgroundSound = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
        this.wight = screen.width;
        this.height = screen.height;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        cc.audioEngine.play(this.backgroundSound, true, 0.5);
    };
    GameController.prototype.start = function () {
    };
    GameController.prototype.setTouch = function () {
        this.Ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos_ship = this.Ship.getPosition();
            var pos_move = event.getDelta();
            this.Ship.setPosition(cc.v2(pos_ship.x + pos_move.x, pos_move.y + pos_ship.y));
        }, this);
    };
    GameController.prototype.delay = function () {
        this.node = cc.find("Canvas");
        this.node.on(cc.Node.EventType.TOUCH_START, this.clickPopup);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.clickPopup);
        this.scheduleOnce(this.clickPopup, 3);
    };
    GameController.prototype.decreaseEnemy = function () {
        this.numOfEnemy -= 1;
        console.log(this.numOfEnemy);
        if (this.numOfEnemy == 0) {
            this.showPopup();
        }
    };
    GameController.prototype.InitBullet = function () {
        var bullet = cc.instantiate(this.shipBullet);
        var pos = this.initBulletPosition.getPosition();
        bullet.setPosition(cc.v2(pos.x, pos.y + this.initBulletPosition.height / 2));
        bullet.parent = this.initBulletPosition;
    };
    GameController.prototype.spawShield = function (x, y) {
        this.sheildNumber++;
        if (this.sheildNumber <= 2) {
            var shield = cc.instantiate(this.sheild);
            shield.setPosition(x, y);
            this.node.parent.addChild(shield);
        }
    };
    GameController.prototype.showPopup = function () {
        cc.audioEngine.playEffect(this.Victory, false);
        var action = cc.moveBy(0.5, 0, 1000);
        var seq = cc.sequence(cc.moveBy(0.5, 0, 1000), cc.hide());
        this.Ship.runAction(seq);
        GameUIcontroller_1.default.Instance.showBanner();
    };
    GameController.prototype.clickPopup = function () {
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            cc.sys.openURL("https://play.google.com/store/apps/details?id=com.alien.shooter.galaxy.attack&hl=vi&gl=US");
        }
        else {
            cc.sys.openURL("https://apps.apple.com/us/app/galaxy-attack-alien-shooter/id1176011642");
        }
    };
    GameController.prototype.update = function () {
        if (window.matchMedia("(orientation: portrait)").matches) {
            if (screen.width == 375) {
                this.iconGame.setScale(0.8, 0.8);
                this.play.setScale(0.8, 0.8);
                this.text.setScale(0.8, 0.8);
                this.text.setPosition(8.234, -55.209);
            }
            else {
                this.Boss2.setScale(0.9, 0.9);
                this.iconGame.setScale(1, 1);
                this.play.setScale(0.9, 0.9);
                this.text.setScale(1, 1);
                this.text.setPosition(8.234, -55.209);
            }
            this.node = cc.find("Canvas/resize");
            //     this.node.setScale(1.9, 1.9);
            this.node.setScale(1, 1);
            this.Ship.setScale(0.6, 0.6);
            if (this.setPositionDoc == false) {
                this.Ship.setPosition(16, -382.86);
                this.setPositionNgang = false;
                this.setPositionDoc = true;
            }
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
            this.node = cc.find("Canvas/resize");
            this.node.setScale(0.4, 0.4);
            this.node.setPosition(21, -10);
            this.play.setPosition(-236.899, -148.714);
            this.play.setScale(0.4, 0.4);
            this.iconGame.setPosition(239, -134);
            this.iconGame.setScale(0.4, 0.4);
            this.text.setScale(0.5, 0.5);
            this.text.setPosition(8.234, -10);
            this.Ship.setScale(0.3, 0.3);
            this.Boss2.setScale(0.4, 0.4);
            if (this.setPositionNgang == false) {
                this.Ship.setPosition(8.808, -144.453);
                this.setPositionNgang = true;
                this.setPositionDoc = false;
            }
        }
    };
    GameController.Instance = null;
    __decorate([
        property
    ], GameController.prototype, "numOfEnemy", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "popup", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "popupopen", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "Boss2", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "play", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "Ship", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "moveHand", void 0);
    __decorate([
        property
    ], GameController.prototype, "enemyemty", void 0);
    __decorate([
        property
    ], GameController.prototype, "bossemty", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "boss2", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "iconGame", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "initBulletPosition", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "shipBullet", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "sheild", void 0);
    __decorate([
        property
    ], GameController.prototype, "sheildNumber", void 0);
    __decorate([
        property
    ], GameController.prototype, "wight", void 0);
    __decorate([
        property
    ], GameController.prototype, "height", void 0);
    __decorate([
        property
    ], GameController.prototype, "wightBf", void 0);
    __decorate([
        property
    ], GameController.prototype, "heightBf", void 0);
    __decorate([
        property
    ], GameController.prototype, "enemyemty1", void 0);
    __decorate([
        property
    ], GameController.prototype, "setPositionDoc", void 0);
    __decorate([
        property
    ], GameController.prototype, "setPositionNgang", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], GameController.prototype, "Victory", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], GameController.prototype, "backgroundSound", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBRzVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBcUtDO1FBbEtHLGdCQUFVLEdBQVUsRUFBRSxDQUFDO1FBRXZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFHLEtBQUssQ0FBQTtRQUVqQixjQUFRLEdBQUMsS0FBSyxDQUFBO1FBRWQsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLHdCQUFrQixHQUFTLElBQUksQ0FBQztRQUNoQyxjQUFjO1FBRWQsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUV6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLHNCQUFnQixHQUFXLElBQUksQ0FBQztRQUloQyxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBSWQscUJBQWUsR0FBRSxJQUFJ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QjtJQUloQztRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUztTQUNsQixDQUFDO21EQUNXO0lBSWQ7UUFIQSxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVM7U0FDbEIsQ0FBQzsyREFDbUI7SUF4RE4sY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXFLbEM7SUFBRCxxQkFBQztDQXJLRCxBQXFLQyxDQXJLMkMsRUFBRSxDQUFDLFNBQVMsR0FxS3ZEO2tCQXJLb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVUljb250cm9sbGVyIGZyb20gXCIuL0dhbWVVSWNvbnRyb2xsZXJcIjtcbmltcG9ydCBUZXN0IGZyb20gXCIuL1Rlc3RcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgc3RhdGljIEluc3RhbmNlOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgbnVtT2ZFbmVteTogbnVtYmVyID00NztcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXBvcGVuOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXh0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBCb3NzMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGxheTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgU2hpcDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbW92ZUhhbmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGVuZW15ZW10eSA9IGZhbHNlXG4gICAgQHByb3BlcnR5XG4gICAgYm9zc2VtdHk9ZmFsc2VcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3NzMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaWNvbkdhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGluaXRCdWxsZXRQb3NpdGlvbjpjYy5Ob2RlPW51bGw7XG4gICAgLy8gQHByb3BlcnR5KClcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNoaXBCdWxsZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hlaWxkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHlcbiAgICBzaGVpbGROdW1iZXI6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgd2lnaHQ6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgaGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHdpZ2h0QmY6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgaGVpZ2h0QmY6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgZW5lbXllbXR5MTogbnVtYmVyID0gOTtcbiAgICBAcHJvcGVydHlcbiAgICBzZXRQb3NpdGlvbkRvYzogYm9vbGVhbiA9IHRydWU7XG4gICAgQHByb3BlcnR5XG4gICAgc2V0UG9zaXRpb25OZ2FuZzogYm9vbGVhbiA9dHJ1ZTtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcFxuICAgICAgfSlcbiAgICBWaWN0b3J5ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcFxuICAgICAgfSlcbiAgICAgYmFja2dyb3VuZFNvdW5kID1udWxsO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy53aWdodCA9IHNjcmVlbi53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzY3JlZW4uaGVpZ2h0O1xuICAgICAgICB2YXIgbWFuYWdlcj0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmFja2dyb3VuZFNvdW5kLCB0cnVlLDAuNSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuICAgIHNldFRvdWNoKCkge1xuICAgICAgICB0aGlzLlNoaXAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcG9zX3NoaXAgPSB0aGlzLlNoaXAuZ2V0UG9zaXRpb24oKVxuICAgICAgICAgICAgdmFyIHBvc19tb3ZlID0gZXZlbnQuZ2V0RGVsdGEoKTtcbiAgICAgICAgICAgIHRoaXMuU2hpcC5zZXRQb3NpdGlvbihjYy52Mihwb3Nfc2hpcC54K3Bvc19tb3ZlLngscG9zX21vdmUueStwb3Nfc2hpcC55KSlcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICAgIGRlbGF5KCkge1xuICAgICAgICB0aGlzLm5vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuY2xpY2tQb3B1cCk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLmNsaWNrUG9wdXApO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmNsaWNrUG9wdXAsIDMpO1xuICAgIH1cbiAgICBkZWNyZWFzZUVuZW15KCkge1xuICAgICAgICB0aGlzLm51bU9mRW5lbXktPTE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtT2ZFbmVteSk7XG4gICAgICAgIGlmICh0aGlzLm51bU9mRW5lbXkgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UG9wdXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBJbml0QnVsbGV0KCl7XG4gICAgICAgIHZhciBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaXBCdWxsZXQpO1xuICAgICAgICB2YXIgcG9zID0gdGhpcy5pbml0QnVsbGV0UG9zaXRpb24uZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgYnVsbGV0LnNldFBvc2l0aW9uKGNjLnYyKHBvcy54LHBvcy55K3RoaXMuaW5pdEJ1bGxldFBvc2l0aW9uLmhlaWdodC8yKSlcbiAgICAgICAgYnVsbGV0LnBhcmVudCA9IHRoaXMuaW5pdEJ1bGxldFBvc2l0aW9uO1xuXG4gICAgfSAgIFxuXG4gICAgc3Bhd1NoaWVsZCh4LHkpIHtcbiAgICAgICAgdGhpcy5zaGVpbGROdW1iZXIrK1xuICAgICAgICBpZiAodGhpcy5zaGVpbGROdW1iZXI8PTIpIHtcbiAgICAgICAgICAgIHZhciBzaGllbGQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoZWlsZClcbiAgICAgICAgICAgIHNoaWVsZC5zZXRQb3NpdGlvbih4LHkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzaGllbGQpOyBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgc2hvd1BvcHVwKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuVmljdG9yeSxmYWxzZSk7ICBcbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVCeSgwLjUsIDAsIDEwMDApO1xuICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDAuNSwgMCwgMTAwMCksIGNjLmhpZGUoKSk7XG4gICAgICAgIHRoaXMuU2hpcC5ydW5BY3Rpb24oc2VxKTtcbiAgICAgICAgR2FtZVVJY29udHJvbGxlci5JbnN0YW5jZS5zaG93QmFubmVyKCk7XG4gICAgfVxuICAgIGNsaWNrUG9wdXAoKSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uYWxpZW4uc2hvb3Rlci5nYWxheHkuYXR0YWNrJmhsPXZpJmdsPVVTXCIpO1xuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL2FwcHMuYXBwbGUuY29tL3VzL2FwcC9nYWxheHktYXR0YWNrLWFsaWVuLXNob290ZXIvaWQxMTc2MDExNjQyXCIpO1xuICAgICAgICAgICAgIH1cbiAgICB9ICBcbiAgICB1cGRhdGUoKSB7XG4gICBcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykgeyBcbiAgICAgICAgICAgIGlmIChzY3JlZW4ud2lkdGg9PTM3NSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbkdhbWUuc2V0U2NhbGUoMC44LCAwLjgpO1xuICAgICAgICAgICAgICAgICB0aGlzLnBsYXkuc2V0U2NhbGUoMC44LCAwLjgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dC5zZXRTY2FsZSgwLjgsIDAuOCk7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0LnNldFBvc2l0aW9uKDguMjM0LCAtNTUuMjA5KVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Cb3NzMi5zZXRTY2FsZSgwLjksMC45KVxuICAgICAgICAgICAgICAgICB0aGlzLmljb25HYW1lLnNldFNjYWxlKDEsIDEpOyBcbiAgICAgICAgICAgICAgICAgdGhpcy5wbGF5LnNldFNjYWxlKDAuOSwgMC45KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQuc2V0U2NhbGUoMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0LnNldFBvc2l0aW9uKDguMjM0LCAtNTUuMjA5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlID0gY2MuZmluZChcIkNhbnZhcy9yZXNpemVcIik7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMS45LCAxLjkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgdGhpcy5TaGlwLnNldFNjYWxlKDAuNiwwLjYpXG4gICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLnNldFBvc2l0aW9uRG9jPT1mYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuU2hpcC5zZXRQb3NpdGlvbigxNiwgLTM4Mi44Nik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbk5nYW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbkRvYyA9IHRydWU7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7IFxuICAgICAgICAgICAgdGhpcy5ub2RlID0gY2MuZmluZChcIkNhbnZhcy9yZXNpemVcIik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMC40LCAwLjQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDIxLC0xMClcbiAgICAgICAgICAgIHRoaXMucGxheS5zZXRQb3NpdGlvbigtMjM2Ljg5OSwtMTQ4LjcxNClcbiAgICAgICAgICAgIHRoaXMucGxheS5zZXRTY2FsZSgwLjQsIDAuNCk7XG4gICAgICAgICAgICB0aGlzLmljb25HYW1lLnNldFBvc2l0aW9uKDIzOSwtMTM0KVxuICAgICAgICAgICAgdGhpcy5pY29uR2FtZS5zZXRTY2FsZSgwLjQsIDAuNCk7XG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0U2NhbGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgdGhpcy50ZXh0LnNldFBvc2l0aW9uKDguMjM0LCAtMTApXG4gICAgICAgICAgICB0aGlzLlNoaXAuc2V0U2NhbGUoMC4zLCAwLjMpO1xuICAgICAgICAgICAgdGhpcy5Cb3NzMi5zZXRTY2FsZSgwLjQsMC40KVxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0UG9zaXRpb25OZ2FuZz09ZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXAuc2V0UG9zaXRpb24oOC44MDgsLTE0NC40NTMpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbk5nYW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uRG9jID0gZmFsc2U7ICBcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04fb20q+KJK+Iumls2Uv2+q', 'Bullet');
// Scripts/Bullet.ts

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
        _this.Cavas = null;
        _this.bulletTime = 100;
        _this.BulletSpeed = 1000;
        _this.radianNumber = 75;
        // LIFE-CYCLE CALLBACKS:
        _this.rotation = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.node.setRotation(this.rotation);
            this.node.setScale(1.4, 1.4);
            for (var radianNumber = 90; radianNumber < 100; radianNumber++) {
                var radian = this.radianNumber / 360 * 2 * Math.PI;
                this.bulletTime -= 3.5;
                this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
                if (this.bulletTime == 0) {
                    this.node.destroy();
                    //this.node.position.y = this.node.position.y + 5;
                }
                if (this.radianNumber == 100) {
                    this.radianNumber = 90;
                }
            }
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
            this.node.setRotation(this.rotation);
            this.node.setScale(0.8, 0.8);
            var radian = this.radianNumber / 360 * 2 * Math.PI;
            this.bulletTime -= 3.5;
            this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Cavas", void 0);
    __decorate([
        property
    ], NewClass.prototype, "bulletTime", void 0);
    __decorate([
        property
    ], NewClass.prototype, "BulletSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radianNumber", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rotation", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0RDO1FBOUNHLFdBQUssR0FBUyxJQUFJLENBQUM7UUFFbkIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFFekIsaUJBQVcsR0FBUyxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsd0JBQXdCO1FBRXhCLGNBQVEsR0FBVyxDQUFDLENBQUM7O1FBb0NyQixpQkFBaUI7SUFDckIsQ0FBQztJQXBDRyxlQUFlO0lBQ2Ysd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRix5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUVMLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEtBQUssSUFBSSxZQUFZLEdBQUMsRUFBRSxFQUFFLFlBQVksR0FBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQUU7Z0JBQzVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDMUosSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDcEIsa0RBQWtEO2lCQUNyRDtnQkFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUUsR0FBRyxFQUFFO29CQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztpQkFDMUI7YUFDSjtTQUVKO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUMsT0FBTyxFQUFFO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxSixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixrREFBa0Q7YUFDckQ7U0FDRDtJQUNELENBQUM7SUE1Q0o7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDQztJQUVuQjtRQURDLFFBQVE7Z0RBQ2dCO0lBRXpCO1FBREMsUUFBUTtpREFDZ0I7SUFFekI7UUFEQyxRQUFRO2tEQUNpQjtJQUcxQjtRQURDLFFBQVE7OENBQ1k7SUFYSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RqRDtrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgQ2F2YXM6IE5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGJ1bGxldFRpbWU6IG51bWJlciA9IDEwMDtcbiAgICBAcHJvcGVydHlcbiAgICBCdWxsZXRTcGVlZDpudW1iZXIgPTEwMDA7XG4gICAgQHByb3BlcnR5XG4gICAgcmFkaWFuTnVtYmVyOiBudW1iZXIgPSA3NTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBAcHJvcGVydHlcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMDtcbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICB1cGRhdGUoZHQpIHtcbiAgICAgICBcbiAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEuNCwgMS40KTtcbiAgICAgICAgICAgZm9yIChsZXQgcmFkaWFuTnVtYmVyPTkwOyByYWRpYW5OdW1iZXIgPDEwMDsgcmFkaWFuTnVtYmVyKyspIHtcbiAgICAgICAgICAgIGxldCByYWRpYW4gPSB0aGlzLnJhZGlhbk51bWJlciAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgdGhpcy5idWxsZXRUaW1lIC09IDMuNTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCArPSBNYXRoLmNvcyhyYWRpYW4pICogZHQgKiB0aGlzLkJ1bGxldFNwZWVkLCB0aGlzLm5vZGUucG9zaXRpb24ueSArPSBNYXRoLnNpbihyYWRpYW4pICogdGhpcy5CdWxsZXRTcGVlZCAqIGR0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bGxldFRpbWUgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgLy90aGlzLm5vZGUucG9zaXRpb24ueSA9IHRoaXMubm9kZS5wb3NpdGlvbi55ICsgNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGlmICh0aGlzLnJhZGlhbk51bWJlcj09MTAwKSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5yYWRpYW5OdW1iZXIgPSA5MDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgXG4gICAgICAgfVxuICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7IFxuICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24odGhpcy5yb3RhdGlvbik7XG4gICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgwLjgsMC44KTtcbiAgICAgICAgbGV0IHJhZGlhbiA9IHRoaXMucmFkaWFuTnVtYmVyIC8gMzYwICogMiAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMuYnVsbGV0VGltZSAtPSAzLjU7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCArPSBNYXRoLmNvcyhyYWRpYW4pICogZHQgKiB0aGlzLkJ1bGxldFNwZWVkLCB0aGlzLm5vZGUucG9zaXRpb24ueSArPSBNYXRoLnNpbihyYWRpYW4pICogdGhpcy5CdWxsZXRTcGVlZCAqIGR0KTtcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy90aGlzLm5vZGUucG9zaXRpb24ueSA9IHRoaXMubm9kZS5wb3NpdGlvbi55ICsgNTtcbiAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Camera_Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ2FtZXJhX0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFvQkM7UUFqQkcsY0FBUSxHQUFVLElBQUksQ0FBQzs7SUFpQjNCLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLGlDQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0Qsa0NBQU0sR0FBTjtRQUNJLElBQUksZUFBZSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsSUFBSSxlQUFlLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxHQUFHLEVBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0MsaUJBQWlCO0lBQ3JCLENBQUM7SUFsQlUsMEJBQVEsR0FBb0IsSUFBSSxDQUFDO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ0s7SUFITixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQW9CckM7SUFBRCx3QkFBQztDQXBCRCxBQW9CQyxDQXBCOEMsRUFBRSxDQUFDLFNBQVMsR0FvQjFEO2tCQXBCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhX0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHN0YXRpYyBpbnN0YW5jZTogQ2FtZXJhX0NvbnRyb2xsZXI9bnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaGlwTW92ZTogY2MuTm9kZT1udWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuICAgIHVwZGF0ZSgpe1xuICAgICAgICB2YXIgdGFyZ2V0X3Bvc2l0aW9uPXRoaXMuc2hpcE1vdmUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgdmFyIGN1cnJlbl9wb3NpdGlvbj10aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY3VycmVuX3Bvc2l0aW9uLmxlcnAodGFyZ2V0X3Bvc2l0aW9uLDAuMSxjdXJyZW5fcG9zaXRpb24pO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVuX3Bvc2l0aW9uKTtcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFJMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxSEM7UUFuSEQsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFLcEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUVqQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLG9CQUFjLEdBQVEsR0FBRyxDQUFDO1FBSTFCLGNBQVEsR0FBVSxHQUFHLENBQUM7UUFFdEIsaUJBQVcsR0FBVSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBUyxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUV4QixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FB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QUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDRztJQUV2QjtRQURDLFFBQVE7b0RBQ2lCO0lBRTFCO1FBREMsUUFBUTtvREFDbUI7SUFFNUI7UUFEQyxRQUFROzhDQUNhO0lBRXRCO1FBREMsUUFBUTtpREFDaUI7SUFFMUI7UUFEQyxRQUFRO2lEQUNnQjtJQUd6QjtRQURDLFFBQVE7K0NBQ2U7SUFFeEI7UUFEQyxRQUFROzZDQUNXO0lBR3BCO1FBREMsUUFBUTtnREFDbUI7SUF2RFgsUUFBUTtRQUY1QixPQUFPO09BRWEsUUFBUSxDQXFINUI7SUFBRCxlQUFDO0NBckhELEFBcUhDLENBckhxQyxFQUFFLENBQUMsU0FBUyxHQXFIakQ7a0JBckhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5XG5lbmVteU51bWJlcjogbnVtYmVyID0gOTsgXG4gICAgYWN0aW9uOiBjYy5BY3Rpb25JbnRlcnZhbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICB9KVxuICAgIGV4cGxvc2lvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBCdWxsZXRFbmVteTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVteTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZW15MjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lbXkzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVteTQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZW15NTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lbXk2OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYXZhczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lbXk3OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVteTg6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZW15OTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVkRGVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGV4cG9sb3Npb246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpZWxkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHlcbiAgICBTaG9vdEZyZXF1ZW5jeTpudW1iZXI9My4wO1xuICAgIEBwcm9wZXJ0eVxuICAgIEFuaW1hdGlvbl9Ob2RlOmNjLkFuaW1hdGlvbjtcbiAgICBAcHJvcGVydHlcbiAgICBkdXJhdGlvbjpudW1iZXIgPSAwLjU7XG4gICAgQHByb3BlcnR5XG4gICAgbW92ZUFtb3VudFg6bnVtYmVyID0gMC4wMTtcbiAgICBAcHJvcGVydHlcbiAgICBtb3ZlQW1vdW50WTpudW1iZXIgPTAuMDE7XG4gICAgbW92ZUVuZW15OmNjLkFjdGlvbkludGVydmFsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGVuZW15TGlmZTogbnVtYmVyID0gMTAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIGVuZW15SHA6IG51bWJlciA9IDY7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzaGllbGRIYXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB2YXIgbWFuYWdlcj0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7IFxuICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zcGF3QnVsbGV0LDEuNSxjYy5tYWNyby5SRVBFQVRfRk9SRVZFUik7ICAgXG4gICAgICBcbiAgICAgXG4gICAgfVxuXG4gICAgc3Bhd0J1bGxldCgpIHtcbiAgICAgICAgdHJ5IHsgXG4gICAgICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVuZW15cyA9IFt0aGlzLmVuZW15MSwgdGhpcy5lbmVteTIsIHRoaXMuZW5lbXkzLCB0aGlzLmVuZW15NCwgdGhpcy5lbmVteTUsIHRoaXMuZW5lbXk2LCB0aGlzLmVuZW15NywgdGhpcy5lbmVteTgsIHRoaXMuZW5lbXk5XVxuICAgICAgICAgICAgICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmVteXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIHZhciBuZXdCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJ1bGxldEVuZW15KTtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXdCdWxsZXQuc2V0UG9zaXRpb24oZW5lbXlzW3JhbmRvbV0ucG9zaXRpb24ueCAsIGVuZW15c1tyYW5kb21dLnBvc2l0aW9uLnkgKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3QnVsbGV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7IFxuICAgICAgICAgICAgICAgIHZhciBlbmVteXMgPSBbdGhpcy5lbmVteTEsIHRoaXMuZW5lbXkyLCB0aGlzLmVuZW15MywgdGhpcy5lbmVteTQsIHRoaXMuZW5lbXk1LCB0aGlzLmVuZW15NiwgdGhpcy5lbmVteTcsIHRoaXMuZW5lbXk4LCB0aGlzLmVuZW15OV1cbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW5lbXlzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV3QnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5CdWxsZXRFbmVteSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3QnVsbGV0LnNldFBvc2l0aW9uKGVuZW15c1tyYW5kb21dLnBvc2l0aW9uLnggKyAxMDAsIGVuZW15c1tyYW5kb21dLnBvc2l0aW9uLnkgLSAxMDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0J1bGxldCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7IFxuICAgICAgICBpZiAob3RoZXIubmFtZSA9PSBcIkJ1bGxldDMzPEJveENvbGxpZGVyPlwifHxvdGhlci5uYW1lID09IFwiQnVsbGV0MTxCb3hDb2xsaWRlcj5cInx8b3RoZXIubmFtZSA9PSBcIkJ1bGxldDE8Qm94Q29sbGlkZXI+XCJ8fG90aGVyLm5hbWUgPT0gXCJCdWxsZXQyPEJveENvbGxpZGVyPlwifHxvdGhlci5uYW1lID09IFwiQnVsbGV0MzxCb3hDb2xsaWRlcj5cInx8b3RoZXIubmFtZSA9PSBcIkJ1bGxldDQ8Qm94Q29sbGlkZXI+XCJ8fG90aGVyLm5hbWUgPT0gXCJCdWxsZXQ1PEJveENvbGxpZGVyPlwifHxvdGhlci5uYW1lID09IFwiQnVsbGV0NjxCb3hDb2xsaWRlcj5cIikge1xuICAgICAgICAgICAgdGhpcy5lbmVteUhwIC09IDE7XG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW15SHAgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOdW1iZXItLSBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBleHBsb3Npb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmV4cG9sb3Npb24pO1xuICAgICAgICAgICAgICAgIGV4cGxvc2lvbi5zZXRQb3NpdGlvbihzZWxmLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZXhwbG9zaW9uKSBcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5leHBsb3Npb24sZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVkRGVzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoJ3NoYWtlQ2FtZXJhJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KCdHYW1lQ29udHJvbGxlcicpLnNwYXdTaGllbGQoc2VsZi5ub2RlLnBvc2l0aW9uLngsIHNlbGYubm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdCb3NzJykuZ2V0Q29tcG9uZW50KCdCb3NzJykuc3Bhd25CdWxsZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd0J1bGxldCwxLjUsY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpOyBcbiAgICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Enemy - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22ce9ZX+XFDTrNzAuAGz/HF', 'Enemy - 001');
// Scripts/Enemy - 001.ts

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
        _this.bulletEnemy = null;
        _this.r = 220;
        _this.radian = 0;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.updatePos = function () {
        this.node.x = 4.405 + this.r * Math.cos(this.radian);
        this.node.y = 288.652 + this.r * Math.sin(this.radian);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.spawBullets = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.radian = this.radian + dt * 0.5;
        this.updatePos();
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bulletEnemy", void 0);
    __decorate([
        property
    ], NewClass.prototype, "r", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radian", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbXkgLSAwMDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErQkM7UUE3QkcsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsT0FBQyxHQUFXLEdBQUcsQ0FBQztRQUVoQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFtQjNCLENBQUM7SUFqQkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFDZiw0QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsOEJBQVcsR0FBWDtJQUVBLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1E7SUFHNUI7UUFEQyxRQUFRO3VDQUNPO0lBRWhCO1FBREMsUUFBUTs0Q0FDVTtJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQVpOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErQjVCO0lBQUQsZUFBQztDQS9CRCxBQStCQyxDQS9CcUMsRUFBRSxDQUFDLFNBQVMsR0ErQmpEO2tCQS9Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1bGxldEVuZW15OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHlcbiAgICByOiBudW1iZXIgPSAyMjA7XG4gICAgQHByb3BlcnR5XG4gICAgcmFkaWFuOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgdXBkYXRlUG9zKCl7XG4gICAgICAgIHRoaXMubm9kZS54ID0gNC40MDUrdGhpcy5yICogTWF0aC5jb3ModGhpcy5yYWRpYW4pO1xuICAgICAgICB0aGlzLm5vZGUueSA9IDI4OC42NTIrdGhpcy5yICogTWF0aC5zaW4odGhpcy5yYWRpYW4pO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgc3Bhd0J1bGxldHMoKSB7XG4gICAgICAgIFxuICAgIH1cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMucmFkaWFuID0gdGhpcy5yYWRpYW4gKyBkdCAqIDAuNTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3MoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EnemyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88c25kMA2JBeqILteM3k6Zn', 'EnemyController');
// Scripts/EnemyController.ts

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
var Bad_1 = require("./Bad");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyController = /** @class */ (function (_super) {
    __extends(EnemyController, _super);
    function EnemyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listEnemy1 = null;
        _this.listEnemy2 = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    EnemyController.prototype.start = function () {
    };
    EnemyController.prototype.decreaseEnemyList1 = function () {
        //kiêm tra
        if (this.listEnemy1.childrenCount <= 0) {
            for (var i = 0; i < this.listEnemy2.childrenCount; i++) {
                var e = this.listEnemy2.children[i];
                e.getComponent(Bad_1.default).die();
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], EnemyController.prototype, "listEnemy1", void 0);
    __decorate([
        property(cc.Node)
    ], EnemyController.prototype, "listEnemy2", void 0);
    EnemyController = __decorate([
        ccclass
    ], EnemyController);
    return EnemyController;
}(cc.Component));
exports.default = EnemyController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbXlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUF3QjtBQUdsQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXlCQztRQXJCRyxnQkFBVSxHQUFTLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFTLElBQUksQ0FBQzs7UUFrQnhCLGlCQUFpQjtJQUNyQixDQUFDO0lBbEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsK0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEI7UUFDSSxVQUFVO1FBQ1YsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsSUFBRSxDQUFDLEVBQUM7WUFDaEMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUM1QyxJQUFJLENBQUMsR0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUM3QjtTQUNKO0lBQ0wsQ0FBQztJQW5CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ007SUFOUCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBeUJuQztJQUFELHNCQUFDO0NBekJELEFBeUJDLENBekI0QyxFQUFFLENBQUMsU0FBUyxHQXlCeEQ7a0JBekJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhZCBmcm9tIFwiLi9CYWRcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0RW5lbXkxOmNjLk5vZGU9bnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0RW5lbXkyOmNjLk5vZGU9bnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgZGVjcmVhc2VFbmVteUxpc3QxKCl7XG4gICAgICAgIC8va2nDqm0gdHJhXG4gICAgICAgIGlmKHRoaXMubGlzdEVuZW15MS5jaGlsZHJlbkNvdW50PD0wKXtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5saXN0RW5lbXkyLmNoaWxkcmVuQ291bnQ7aSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgZT0gdGhpcy5saXN0RW5lbXkyLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KEJhZCkuZGllKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EnemyShip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ae26X9uchFM5PzXL6o/2wz', 'EnemyShip');
// Scripts/EnemyShip.ts

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
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () { };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.setMove = function () {
    };
    NewClass.prototype.spawnBullets = function () {
    };
    NewClass.prototype.update = function (dt) { };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbXlTaGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUJDO1FBcEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFpQjNCLENBQUM7SUFmRyx3QkFBd0I7SUFFdkIseUJBQU0sR0FBTixjQUFXLENBQUM7SUFFYix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDBCQUFPLEdBQVA7SUFFQSxDQUFDO0lBQ0QsK0JBQVksR0FBWjtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUFuQmQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUI1QjtJQUFELGVBQUM7Q0F2QkQsQUF1QkMsQ0F2QnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUJqRDtrQkF2Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgICBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICBzZXRNb3ZlKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgc3Bhd25CdWxsZXRzKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ExpolosionEnemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8eecetF6OBKuL/9wsyoOAcA', 'ExpolosionEnemy');
// Scripts/ExpolosionEnemy.ts

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
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.reMovenemy = function () {
        this.node.destroy();
        this.node.getComponent(cc.Animation).play('Eno');
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRXhwb2xvc2lvbkVuZW15LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0JDO1FBckJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFpQnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBaEJHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckQsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdCNUI7SUFBRCxlQUFDO0NBeEJELEFBd0JDLENBeEJxQyxFQUFFLENBQUMsU0FBUyxHQXdCakQ7a0JBeEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuICAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgcmVNb3ZlbmVteSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoJ0VubycpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5ccd8/j+pAiLBnFRIsPnu0', 'Game');
// Scripts/Game.ts

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
        _this.bullet = null;
        _this.gun = null;
        // LIFE-CYCLE CALLBACKS:
        _this.posX = 0;
        _this.posY = 0;
        _this.score = 0;
        _this.BulletSpeed = 500;
        _this.angle = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.spawn = function (event) {
        var newBullet = cc.instantiate(this.bullet);
        newBullet.setPosition(this.node.getChildByName('Bullets').position.x, this.node.getChildByName('Bullets').position.y);
        this.node.addChild(newBullet);
        console.log(newBullet);
        var touchPosition = event.getLocation();
        touchPosition = this.node.convertToNodeSpaceAR(touchPosition);
        this.posX = touchPosition.x * 1000;
        this.posY = touchPosition.y * 1000;
        var actionBy = cc.moveTo(0.5, cc.v2(this.posX, this.posY));
        var destruction = cc.callFunc(function () {
            newBullet.destroy();
        }, this);
        var sequence = cc.sequence(actionBy, destruction);
        newBullet.runAction(sequence);
        cc.audioEngine.playEffect(this.gun, false);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        this.node.on('touchmove', this.spawn, this);
        this.node.on('touchstart', this.spawn, this);
        this.node.stopAllActions();
    };
    NewClass.prototype.update = function (dt) {
        //this.node.setPosition(this.node.position.x = this.BulletSpeed*dt,this.node.position.y  = this.BulletSpeed*dt);
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bullet", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewClass.prototype, "gun", void 0);
    __decorate([
        property
    ], NewClass.prototype, "posX", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlEQztRQTlDRyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBSXhCLFNBQUcsR0FBQyxJQUFJLENBQUM7UUFDVCx3QkFBd0I7UUFFeEIsVUFBSSxHQUFVLENBQUMsQ0FBQztRQUNoQixVQUFJLEdBQVUsQ0FBQyxDQUFDO1FBQ2hCLFdBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsaUJBQVcsR0FBVSxHQUFHLENBQUM7UUFDekIsV0FBSyxHQUFTLENBQUMsQ0FBQzs7SUFtQ3BCLENBQUM7SUFqQ0csd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix3QkFBSyxHQUFMLFVBQU0sS0FBSztRQUNQLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRSxhQUFhLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDO1FBRWpDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzFCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDUixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0YseUJBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNDLHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ1AsZ0hBQWdIO0lBRXBILENBQUM7SUE3Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSTtJQUl4QjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUztTQUNwQixDQUFDO3lDQUNPO0lBR1Q7UUFEQyxRQUFROzBDQUNPO0lBVkMsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlENUI7SUFBRCxlQUFDO0NBakRELEFBaURDLENBakRxQyxFQUFFLENBQUMsU0FBUyxHQWlEakQ7a0JBakRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXQ6Y2MuUHJlZmFiID0gbnVsbDsgIFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwXG4gICAgfSlcbiAgICBndW49bnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBAcHJvcGVydHlcbiAgICBwb3NYOm51bWJlciA9IDA7XG4gICAgcG9zWTpudW1iZXIgPSAwO1xuICAgIHNjb3JlOm51bWJlciA9IDA7XG4gICAgQnVsbGV0U3BlZWQ6bnVtYmVyID0gNTAwO1xuICAgIGFuZ2xlOm51bWJlciA9MDtcbiAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgc3Bhd24oZXZlbnQpe1xuICAgICAgICB2YXIgbmV3QnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xuICAgICAgICBuZXdCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdCdWxsZXRzJykucG9zaXRpb24ueCx0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0J1bGxldHMnKS5wb3NpdGlvbi55KTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0J1bGxldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0J1bGxldCk7XG4gICAgICAgIHZhciB0b3VjaFBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdG91Y2hQb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5wb3NYID10b3VjaFBvc2l0aW9uLngqMTAwMDtcbiAgICAgICAgdGhpcy5wb3NZID0gdG91Y2hQb3NpdGlvbi55KjEwMDA7XG4gICAgICAgXG4gICAgICAgIHZhciBhY3Rpb25CeSA9IGNjLm1vdmVUbygwLjUsY2MudjIodGhpcy5wb3NYLHRoaXMucG9zWSkpO1xuICAgICAgICB2YXIgZGVzdHJ1Y3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xuICAgICAgICAgICAgbmV3QnVsbGV0LmRlc3Ryb3koKTtcbiAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgdmFyIHNlcXVlbmNlID0gY2Muc2VxdWVuY2UoYWN0aW9uQnksZGVzdHJ1Y3Rpb24pO1xuICAgICAgICBuZXdCdWxsZXQucnVuQWN0aW9uKHNlcXVlbmNlKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmd1bixmYWxzZSk7XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgIG9uTG9hZCgpe1xuICAgIHRoaXMubm9kZS5vbigndG91Y2htb3ZlJyx0aGlzLnNwYXduLHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsdGhpcy5zcGF3bix0aGlzKTtcbiAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgIH1cbiAgICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvL3RoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCA9IHRoaXMuQnVsbGV0U3BlZWQqZHQsdGhpcy5ub2RlLnBvc2l0aW9uLnkgID0gdGhpcy5CdWxsZXRTcGVlZCpkdCk7XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameUIcontroller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a550eLQCyBMbomV/4OkyXRb', 'GameUIcontroller');
// Scripts/GameUIcontroller.ts

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
var GameUIcontroller = /** @class */ (function (_super) {
    __extends(GameUIcontroller, _super);
    function GameUIcontroller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.revicePopup = null;
        return _this;
    }
    GameUIcontroller_1 = GameUIcontroller;
    // LIFE-CYCLE CALLBACKS:
    GameUIcontroller.prototype.onLoad = function () {
        GameUIcontroller_1.Instance = this;
    };
    GameUIcontroller.prototype.start = function () {
    };
    GameUIcontroller.prototype.showBanner = function () {
        if (window.matchMedia("(orientation: portrait)").matches) {
            cc.find("Canvas/Ship").active = false;
            cc.find("Canvas/Node3").active = false;
            console.log("màn hình dọc");
            cc.audioEngine.pauseMusic();
            cc.audioEngine.pauseAllEffects();
            this.revicePopup.active = true;
            // this.revicePopup.opacity=0;
            // this.revicePopup.scale=0.2;
            this.node = cc.find("Canvas/Popup/YES");
            this.node.setPosition(181, -210);
            this.node.setScale(1.4, 1.4);
            this.node = cc.find("Canvas/Popup/NO");
            this.node.setPosition(-187, -210);
            this.node.setScale(1.4, 1.4);
            this.node = cc.find("Canvas/Popup/Text");
            this.node.setPosition(72, 27);
            this.node.setScale(1.5, 1.5);
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
            cc.find("Canvas/Ship").active = false;
            cc.find("Canvas/Node3").active = false;
            console.log("màn hình ngang");
            cc.audioEngine.pauseMusic();
            cc.audioEngine.pauseAllEffects();
            //this.revicePopup.active = true;
            // this.revicePopup.opacity=0;
            // this.revicePopup.scale=0.2;
            this.revicePopup.active = true;
            // this.revicePopup.opacity=0;
            // this.revicePopup.scale=0.2;
            this.node = cc.find("Canvas/Popup/YES");
            this.node.setPosition(190, -210);
            this.node.setScale(1, 1);
            this.node = cc.find("Canvas/Popup/NO");
            this.node.setPosition(-141, -210);
            this.node.setScale(1, 1);
            this.node = cc.find("Canvas/Popup/Text");
            this.node.setPosition(60, 28);
            this.node.setScale(1, 1);
        }
    };
    GameUIcontroller.prototype.hideBanner = function () {
        this.revicePopup.active = false;
    };
    GameUIcontroller.prototype.update = function (dt) { };
    var GameUIcontroller_1;
    GameUIcontroller.Instance = null;
    __decorate([
        property(cc.Node)
    ], GameUIcontroller.prototype, "revicePopup", void 0);
    GameUIcontroller = GameUIcontroller_1 = __decorate([
        ccclass
    ], GameUIcontroller);
    return GameUIcontroller;
}(cc.Component));
exports.default = GameUIcontroller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZVVJY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQW9FQztRQWpFRyxpQkFBVyxHQUFTLElBQUksQ0FBQzs7SUFpRTdCLENBQUM7eUJBcEVvQixnQkFBZ0I7SUFPakMsd0JBQXdCO0lBRXhCLGlDQUFNLEdBQU47UUFDSSxrQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVILHFDQUFVLEdBQVY7UUFDRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDeEQsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDL0IsOEJBQThCO1lBQzlCLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMs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UyxHQW9FekQ7a0JBcEVvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUljb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIEluc3RhbmNlOiBHYW1lVUljb250cm9sbGVyPW51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmV2aWNlUG9wdXA6Y2MuTm9kZT1udWxsO1xuXG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVUljb250cm9sbGVyLkluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgXG4gICAgfVxuICBcbiAgc2hvd0Jhbm5lcigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSB7XG4gICAgICBjYy5maW5kKFwiQ2FudmFzL1NoaXBcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICBjYy5maW5kKFwiQ2FudmFzL05vZGUzXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2coXCJtw6BuIGjDrG5oIGThu41jXCIpO1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGxFZmZlY3RzKCk7XG4gICAgICB0aGlzLnJldmljZVBvcHVwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAvLyB0aGlzLnJldmljZVBvcHVwLm9wYWNpdHk9MDtcbiAgICAgIC8vIHRoaXMucmV2aWNlUG9wdXAuc2NhbGU9MC4yO1xuICAgICAgdGhpcy5ub2RlID0gY2MuZmluZChcIkNhbnZhcy9Qb3B1cC9ZRVNcIik7XG4gICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMTgxLCAtMjEwKTtcbiAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLjQsIDEuNCk7XG4gICAgICB0aGlzLm5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BvcHVwL05PXCIpO1xuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKC0xODcsIC0yMTApO1xuICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEuNCwgMS40KTtcbiAgICAgIHRoaXMubm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvUG9wdXAvVGV4dFwiKTtcbiAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbig3MiwgMjcpO1xuICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEuNSwgMS41KTtcbiAgIFxuICAgIH1cbiAgICAgICAgICAgICBcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykge1xuICAgICAgY2MuZmluZChcIkNhbnZhcy9TaGlwXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2MuZmluZChcIkNhbnZhcy9Ob2RlM1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKFwibcOgbiBow6xuaCBuZ2FuZ1wiKTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsRWZmZWN0cygpO1xuICAgICAgLy90aGlzLnJldmljZVBvcHVwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAvLyB0aGlzLnJldmljZVBvcHVwLm9wYWNpdHk9MDtcbiAgICAgIC8vIHRoaXMucmV2aWNlUG9wdXAuc2NhbGU9MC4yO1xuICAgICAgdGhpcy5yZXZpY2VQb3B1cC5hY3RpdmUgPSB0cnVlO1xuICAgICAgLy8gdGhpcy5yZXZpY2VQb3B1cC5vcGFjaXR5PTA7XG4gICAgICAvLyB0aGlzLnJldmljZVBvcHVwLnNjYWxlPTAuMjtcbiAgICAgIHRoaXMubm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvUG9wdXAvWUVTXCIpO1xuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDE5MCwgLTIxMCk7XG4gICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSwgMSk7XG4gICAgICB0aGlzLm5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BvcHVwL05PXCIpO1xuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKC0xNDEsIC0yMTApO1xuICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEsIDEpO1xuICAgICAgdGhpcy5ub2RlID0gY2MuZmluZChcIkNhbnZhcy9Qb3B1cC9UZXh0XCIpO1xuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDYwLCAyOCk7XG4gICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSwgMSk7XG4gICAgIFxuICAgIH1cbiBcbiAgICB9XG4gICAgaGlkZUJhbm5lcigpe1xuICAgICAgICB0aGlzLnJldmljZVBvcHVwLmFjdGl2ZT1mYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c15ew0qhJPXpQRPAe3poOf', 'Gameplay');
// Scripts/Gameplay.ts

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
        _this.bullet = null;
        _this.gun = null;
        // LIFE-CYCLE CALLBACKS:
        _this.posX = 0;
        _this.posY = 100;
        _this.score = 0;
        _this.BulletSpeed = 500;
        _this.angle = 0;
        _this.dt = 100;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.spawn = function (event) {
        // var newBullet = cc.instantiate(this.bullet);
        // newBullet.setPosition(this.node.getChildByName('Ship').position.x,this.node.getChildByName('Ship').position.y); 
        // this.node.addChild(newBullet);   
        // var touchPosition = event.getLocation();
        // touchPosition = this.node.convertToNodeSpaceAR(touchPosition);
        // this.posX =touchPosition.x;
        // this.posY = touchPosition.y;      
        // var actionBy = cc.moveTo(2,cc.v2(this.posX*10,this.posY*10));
        // var destruction = cc.callFunc(function(){
        //     newBullet.destroy();
        // },this);
        // var sequence = cc.sequence(actionBy,destruction);
        // newBullet.runAction(sequence);
        // cc.audioEngine.playEffect(this.gun,false);
        // //
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        this.node.on('touchmove', this.spawn, this);
        this.node.on('touchstart', this.spawn, this);
    };
    NewClass.prototype.update = function (dt) {
        //this.node.setPosition(this.node.position.x = this.BulletSpeed*dt,this.node.position.y  = this.BulletSpeed*dt);
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bullet", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewClass.prototype, "gun", void 0);
    __decorate([
        property
    ], NewClass.prototype, "posX", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnREM7UUE3Q0csWUFBTSxHQUFhLElBQUksQ0FBQztRQUl4QixTQUFHLEdBQUMsSUFBSSxDQUFDO1FBQ1Qsd0JBQXdCO1FBRXhCLFVBQUksR0FBVSxDQUFDLENBQUM7UUFDaEIsVUFBSSxHQUFVLEdBQUcsQ0FBQztRQUNsQixXQUFLLEdBQVUsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFXLEdBQVUsR0FBRyxDQUFDO1FBQ3pCLFdBQUssR0FBUyxDQUFDLENBQUM7UUFDaEIsUUFBRSxHQUFRLEdBQUcsQ0FBQzs7SUFpQ2xCLENBQUM7SUFoQ0csd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix3QkFBSyxHQUFMLFVBQU0sS0FBSztRQUNQLCtDQUErQztRQUMvQyxtSEFBbUg7UUFDbkgsb0NBQW9DO1FBQ3BDLDJDQUEyQztRQUMzQyxpRUFBaUU7UUFDakUsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxnRUFBZ0U7UUFDaEUsNENBQTRDO1FBQzVDLDJCQUEyQjtRQUMzQixXQUFXO1FBQ1gsb0RBQW9EO1FBQ3BELGlDQUFpQztRQUNqQyw2Q0FBNkM7UUFDN0MsS0FBSztJQUVULENBQUM7SUFDRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUNGLHlCQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBQ0MseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDUCxnSEFBZ0g7SUFFcEgsQ0FBQztJQTVDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNJO0lBSXhCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTO1NBQ3BCLENBQUM7eUNBQ087SUFHVDtRQURDLFFBQVE7MENBQ087SUFWQyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RqRDtrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1bGxldDpjYy5QcmVmYWIgPSBudWxsOyAgXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTpjYy5BdWRpb0NsaXBcbiAgICB9KVxuICAgIGd1bj1udWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eVxuICAgIHBvc1g6bnVtYmVyID0gMDtcbiAgICBwb3NZOm51bWJlciA9IDEwMDtcbiAgICBzY29yZTpudW1iZXIgPSAwOzBcbiAgICBCdWxsZXRTcGVlZDpudW1iZXIgPSA1MDA7XG4gICAgYW5nbGU6bnVtYmVyID0wO1xuICAgIGR0Om51bWJlcj0xMDA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBzcGF3bihldmVudCl7XG4gICAgICAgIC8vIHZhciBuZXdCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XG4gICAgICAgIC8vIG5ld0J1bGxldC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1NoaXAnKS5wb3NpdGlvbi54LHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU2hpcCcpLnBvc2l0aW9uLnkpOyBcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKG5ld0J1bGxldCk7ICAgXG4gICAgICAgIC8vIHZhciB0b3VjaFBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgLy8gdG91Y2hQb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvc2l0aW9uKTtcbiAgICAgICAgLy8gdGhpcy5wb3NYID10b3VjaFBvc2l0aW9uLng7XG4gICAgICAgIC8vIHRoaXMucG9zWSA9IHRvdWNoUG9zaXRpb24ueTsgICAgICBcbiAgICAgICAgLy8gdmFyIGFjdGlvbkJ5ID0gY2MubW92ZVRvKDIsY2MudjIodGhpcy5wb3NYKjEwLHRoaXMucG9zWSoxMCkpO1xuICAgICAgICAvLyB2YXIgZGVzdHJ1Y3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgbmV3QnVsbGV0LmRlc3Ryb3koKTtcbiAgICAgICAgLy8gfSx0aGlzKTtcbiAgICAgICAgLy8gdmFyIHNlcXVlbmNlID0gY2Muc2VxdWVuY2UoYWN0aW9uQnksZGVzdHJ1Y3Rpb24pO1xuICAgICAgICAvLyBuZXdCdWxsZXQucnVuQWN0aW9uKHNlcXVlbmNlKTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmd1bixmYWxzZSk7XG4gICAgICAgIC8vIC8vXG4gIFxuICAgIH1cbiAgICBzdGFydCAoKSB7XG4gICAgfVxuICAgb25Mb2FkKCl7XG4gICAgdGhpcy5ub2RlLm9uKCd0b3VjaG1vdmUnLHRoaXMuc3Bhd24sdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0Jyx0aGlzLnNwYXduLHRoaXMpO1xuICAgXG4gICB9XG4gICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy90aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggPSB0aGlzLkJ1bGxldFNwZWVkKmR0LHRoaXMubm9kZS5wb3NpdGlvbi55ICA9IHRoaXMuQnVsbGV0U3BlZWQqZHQpO1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/HandMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSGFuZE1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzQkM7UUFwQkQsY0FBUSxHQUFTLENBQUMsQ0FBQztRQUVuQixpQkFBVyxHQUFTLENBQUMsQ0FBQztRQUV0QixpQkFBVyxHQUFTLEVBQUUsQ0FBQzs7SUFnQnZCLENBQUM7SUFkRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxRQUFRLEdBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxTQUFTLEdBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNoRixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0kseUJBQU0sR0FBTjtRQUNBLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFuQkw7UUFEQyxRQUFROzhDQUNVO0lBRW5CO1FBREMsUUFBUTtpREFDYTtJQUV0QjtRQURDLFFBQVE7aURBQ2M7SUFORixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0I1QjtJQUFELGVBQUM7Q0F0QkQsQUFzQkMsQ0F0QnFDLEVBQUUsQ0FBQyxTQUFTLEdBc0JqRDtrQkF0Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbkBwcm9wZXJ0eVxuZHVyYXRpb246bnVtYmVyID0xO1xuQHByb3BlcnR5XG5tb3ZlQW1vdW50WDpudW1iZXIgPTA7XG5AcHJvcGVydHlcbm1vdmVBbW91bnRZOm51bWJlciA9MjA7XG5tb3ZlSGFuZDpjYy5BY3Rpb25JbnRlcnZhbDtcbnNldE1vdmVIYW5kKCl7XG4gICAgdmFyIG1vdmVMZWZ0PWNjLm1vdmVCeSh0aGlzLmR1cmF0aW9uLGNjLnYyKC10aGlzLm1vdmVBbW91bnRYLC10aGlzLm1vdmVBbW91bnRZKSk7XG4gICAgdmFyIG1vdmVSaWdodD1jYy5tb3ZlQnkodGhpcy5kdXJhdGlvbixjYy52Mih0aGlzLm1vdmVBbW91bnRYLHRoaXMubW92ZUFtb3VudFkpKTtcbiAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShtb3ZlTGVmdCxtb3ZlUmlnaHQpKTtcbn1cbiAgICAgb25Mb2FkICgpIHtcbiAgICAgdGhpcy5tb3ZlSGFuZD10aGlzLnNldE1vdmVIYW5kKCk7XG4gICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5tb3ZlSGFuZCk7XG4gICAgIGNjLmZpbmQoXCJDYW5ub24gMDEvQmFycmVsL1NGWFwiLCB0aGlzLm5vZGUpO1xuICAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BulletBossMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQnVsbGV0Qm9zc01vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwSEM7UUF2SEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFFakIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQzdCLHdCQUF3QjtRQUV6QixVQUFJLEdBQVMsSUFBSSxDQUFDOztJQW9HckIsQ0FBQztJQW5HRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsS0FBSztZQUN2RCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTtZQUNkLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1YsNENBQTRDO29CQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FB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QUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUUsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBdEhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVE7MENBQ1E7SUFFakI7UUFEQyxRQUFROzBDQUNRO0lBRWpCO1FBREMsUUFBUTs4Q0FDWTtJQUVyQjtRQURDLFFBQVE7MkNBQ1M7SUFFbEI7UUFEQyxRQUFROzBDQUNRO0lBRWpCO1FBREMsUUFBUTsyQ0FDUztJQUVsQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRzlCO1FBREUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0Q7SUF0QkEsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBINUI7SUFBRCxlQUFDO0NBMUhELEFBMEhDLENBMUhxQyxFQUFFLENBQUMsU0FBUyxHQTBIakQ7a0JBMUhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgU2hpcDogY2MuTm9kZSA9IG51bGw7IFxuICAgIEBwcm9wZXJ0eVxuICAgIHJhdGU6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgc3BpbjogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBnYW1lOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIGRlbGF5OiBudW1iZXIgPSAzO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYnVsbGV0Qm9zczogY2MuUHJlZmFiID0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIGJvc3M6Y2MuTm9kZT1udWxsO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5TaGlwLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZSArPSAxXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGVyZSBgdGhpc2AgaXMgcmVmZXJyaW5nIHRvIHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0QnVsbGV0KCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5yYXRlLCA0MCwgMik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgYHRoaXNgIGlzIHJlZmVycmluZyB0byB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJ1bGxldCgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucmF0ZSwgNDAsNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgYHRoaXNgIGlzIHJlZmVycmluZyB0byB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJ1bGxldCgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucmF0ZSwgNDAsIDYpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIGB0aGlzYCBpcyByZWZlcnJpbmcgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCdWxsZXQoKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnJhdGUsIDQwLCAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLlNoaXAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUgKz0gMVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgYHRoaXNgIGlzIHJlZmVycmluZyB0byB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJ1bGxldCgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucmF0ZSwgNDAsIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIGB0aGlzYCBpcyByZWZlcnJpbmcgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCdWxsZXQoKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnJhdGUsIDQwLCA3KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGVyZSBgdGhpc2AgaXMgcmVmZXJyaW5nIHRvIHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0QnVsbGV0KCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5yYXRlLCA0MCwgMTQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIGB0aGlzYCBpcyByZWZlcnJpbmcgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCdWxsZXQoKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnJhdGUsIDQwLCAyMCk7XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgIH0sIHRoaXMpOyAgXG4gICAgICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgaW5pdEJ1bGxldCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRCb3NzKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgIC8vbm9kZS5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuYm9zcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjYy52Mihwb3MueCsxMCwgcG9zLnkgLSAxMDApKVxuICAgICAgICAgICAgbm9kZS5zZXRTY2FsZSgwLjMsMC4zKVxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHRoaXMucm90YXRpb247XG4gICAgICAgICAgICBsZXQgZW5kUG9pbnQgPSBjYy52MigpO1xuICAgICAgICAgICAgZW5kUG9pbnQueCA9IGNjLndpblNpemUuaGVpZ2h0ICogTWF0aC5zaW4odGhpcy5yb3RhdGlvbiAvIDE4MCAqIE1hdGguUEkpO1xuICAgICAgICAgICAgZW5kUG9pbnQueSA9IGNjLndpblNpemUuaGVpZ2h0ICogTWF0aC5jb3ModGhpcy5yb3RhdGlvbiAvMTgwICogTWF0aC5QSSk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBlbmRQb2ludC5zdWIobm9kZS5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBsZXQgbW92ZUJ5ID0gY2MubW92ZUJ5KGR1cmF0aW9uLCBlbmRQb2ludCk7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlU2VsdCA9IGNjLnJlbW92ZVNlbGYoKTtcbiAgICAgICAgICAgIGxldCBzZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKG1vdmVCeSwgcmVtb3ZlU2VsdCk7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihzZXF1ZW5jZSk7IFxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRCb3NzKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgIC8vbm9kZS5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuYm9zcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjYy52Mihwb3MueCsxMCwgcG9zLnkgLSAyMDApKVxuICAgICAgICAgICAgbm9kZS5zZXRTY2FsZSgwLjUsMC41KVxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHRoaXMucm90YXRpb247XG4gICAgICAgICAgICBsZXQgZW5kUG9pbnQgPSBjYy52MigpO1xuICAgICAgICAgICAgZW5kUG9pbnQueCA9IGNjLndpblNpemUuaGVpZ2h0ICogTWF0aC5zaW4odGhpcy5yb3RhdGlvbiAvIDE4MCAqIE1hdGguUEkpO1xuICAgICAgICAgICAgZW5kUG9pbnQueSA9IGNjLndpblNpemUuaGVpZ2h0ICogTWF0aC5jb3ModGhpcy5yb3RhdGlvbiAvMTgwICogTWF0aC5QSSk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBlbmRQb2ludC5zdWIobm9kZS5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBsZXQgbW92ZUJ5ID0gY2MubW92ZUJ5KGR1cmF0aW9uLCBlbmRQb2ludCk7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlU2VsdCA9IGNjLnJlbW92ZVNlbGYoKTtcbiAgICAgICAgICAgIGxldCBzZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKG1vdmVCeSwgcmVtb3ZlU2VsdCk7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihzZXF1ZW5jZSk7IFxuICAgICAgICB9XG4gICAgXG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5zcGluPT09MCkge1xuICAgICAgICAgICAgcmV0dXJuOyAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSBkdCAqIHRoaXMuc3BpbjtcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb249PTApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InitBossController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '952f3+M8zNEC4X/PqVTOwxE', 'InitBossController');
// Scripts/InitBossController.ts

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
var InitBossController = /** @class */ (function (_super) {
    __extends(InitBossController, _super);
    function InitBossController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bossPrefab = null;
        return _this;
        // update (dt) {}
    }
    InitBossController_1 = InitBossController;
    InitBossController.prototype.onLoad = function () {
        InitBossController_1.Instance = this;
    };
    InitBossController.prototype.start = function () {
    };
    InitBossController.prototype.InitPrefab = function () {
        var boss = cc.instantiate(this.bossPrefab);
        boss.setPosition(cc.v2(0, 0));
    };
    var InitBossController_1;
    InitBossController.Instance = null;
    __decorate([
        property(cc.Prefab)
    ], InitBossController.prototype, "bossPrefab", void 0);
    InitBossController = InitBossController_1 = __decorate([
        ccclass
    ], InitBossController);
    return InitBossController;
}(cc.Component));
exports.default = InitBossController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSW5pdEJvc3NDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBc0JDO1FBakJHLGdCQUFVLEdBQVMsSUFBSSxDQUFDOztRQWdCeEIsaUJBQWlCO0lBQ3JCLENBQUM7MkJBdEJvQixrQkFBa0I7SUFPbkMsbUNBQU0sR0FBTjtRQUVJLG9CQUFrQixDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7SUFFckMsQ0FBQztJQUVELGtDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDOztJQWxCTSwyQkFBUSxHQUFvQixJQUFJLENBQUM7SUFHeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDSTtJQUxQLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBc0J0QztJQUFELHlCQUFDO0NBdEJELEFBc0JDLENBdEIrQyxFQUFFLENBQUMsU0FBUyxHQXNCM0Q7a0JBdEJvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0Qm9zc0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIEluc3RhbmNlOkluaXRCb3NzQ29udHJvbGxlcj1udWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYm9zc1ByZWZhYjpjYy5Ob2RlPW51bGw7XG5cbiAgICBvbkxvYWQgKCkge1xuXG4gICAgICAgIEluaXRCb3NzQ29udHJvbGxlci5JbnN0YW5jZT10aGlzO1xuICAgIFxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIEluaXRQcmVmYWIoKXtcbiAgICAgICAgdmFyIGJvc3MgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvc3NQcmVmYWIpO1xuICAgICAgICBib3NzLnNldFBvc2l0aW9uIChjYy52MigwLDApKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Lazer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6aa9zmGjJFQJlSG4/ONlXJ', 'Lazer');
// Scripts/Lazer.ts

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
        _this.isAttack = false;
        _this.timeAttack = 0.1;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.attackDamage = function () {
        //--dame
        var self = this;
        if (!this.isAttack) {
            this.isAttack = false;
            //--DAME
            this.scheduleOnce(function () {
                self.isAttack = false;
            }, this.timeAttack);
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGF6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1QkM7UUFyQkcsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFTLEdBQUcsQ0FBQzs7UUFtQnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBbEJHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLFFBQVE7UUFDUixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsUUFBUTtZQUNSLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDMUIsQ0FBQyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFuQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1QjVCO0lBQUQsZUFBQztDQXZCRCxBQXVCQyxDQXZCcUMsRUFBRSxDQUFDLFNBQVMsR0F1QmpEO2tCQXZCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGlzQXR0YWNrOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGltZUF0dGFjazogbnVtYmVyPTAuMTtcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIGF0dGFja0RhbWFnZSgpIHtcbiAgICAgICAgLy8tLWRhbWVcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuaXNBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vLS1EQU1FXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0F0dGFjayA9IGZhbHNlOyBcbiAgICAgICAgICAgIH0sdGhpcy50aW1lQXR0YWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LoadScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66ac1BqO1dP8KuvRbXHsiAw', 'LoadScene');
// Scripts/LoadScene.ts

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
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.director.loadScene("GameScene");
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTG9hZFNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUJDO1FBbEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFjdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFiRyx3QkFBd0I7SUFFdkIseUJBQU0sR0FBTjtRQUVLLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFCNUI7SUFBRCxlQUFDO0NBckJELEFBcUJDLENBckJxQyxFQUFFLENBQUMsU0FBUyxHQXFCakQ7a0JBckJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAgb25Mb2FkICgpIHtcbiAgICAgXG4gICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIpO1xufVxuICAgICBcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Meteror.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf940bh/eZPxpM1uz9OEv3i', 'Meteror');
// Scripts/Meteror.ts

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
        _this.meteorSprite = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.createMetetor = function () {
        var x = Math.random() * (this.meteorSpawnMaxX - this.meteorSpawnMinX) + this.meteorSpawnMinX;
        var y = Math.random() * (this.meteorSpawnMaxY - this.meteorSpawnMinY) + this.meteorSpawnMinY;
        console.log(x + "aa " + y);
        var angle = 90 + 25 + Math.random() * 20;
        console.log(angle);
        var velocity = Math.random() * (this.meteorMaxVelocity - this.meteorMinVelocity, this.meteorMinVelocity);
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property({
            type: cc.SpriteFrame
        })
    ], NewClass.prototype, "meteorSprite", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWV0ZXJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThCQztRQXpCSSxrQkFBWSxHQUFFLElBQUksQ0FBQzs7UUF3QnBCLGlCQUFpQjtJQUNyQixDQUFDO0lBakJJLHlCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0QsZ0NBQWEsR0FBYjtRQUNJLElBQU0sQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDdkYsSUFBTSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN0RixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBTSxLQUFLLEdBQUUsRUFBRSxHQUFDLEVBQUUsR0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUUzRyxDQUFDO0lBQ0Ysd0JBQUssR0FBTDtJQUVBLENBQUM7SUF0QkE7UUFIQSxRQUFRLENBQUM7WUFDUCxJQUFJLEVBQUMsRUFBRSxDQUFDLFdBQVc7U0FDbkIsQ0FBQztrREFDZ0I7SUFMSCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOEI1QjtJQUFELGVBQUM7Q0E5QkQsQUE4QkMsQ0E5QnFDLEVBQUUsQ0FBQyxTQUFTLEdBOEJqRDtrQkE5Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgIHR5cGU6Y2MuU3ByaXRlRnJhbWVcbiAgICAgIH0pXG4gICAgIG1ldGVvclNwcml0ZT0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBtZXRlb3JTcGF3bk1pblg6IDA7XG4gICAgbWV0ZW9yU3Bhd25NYXhYOiAwO1xuICAgIG1ldGVvclNwYXduTWluWTogMDtcbiAgICBtZXRlb3JTcGF3bk1heFk6IDA7XG4gICAgbWV0ZW9yTWluVmVsb2NpdHk6IDA7XG4gICAgbWV0ZW9yTWF4VmVsb2NpdHk6IDA7XG4gICAgIG9uTG9hZCAoKSB7XG4gICAgIFxuICAgICB9XG4gICAgIGNyZWF0ZU1ldGV0b3IoKXtcbiAgICAgICAgIGNvbnN0IHg9TWF0aC5yYW5kb20oKSoodGhpcy5tZXRlb3JTcGF3bk1heFgtdGhpcy5tZXRlb3JTcGF3bk1pblgpK3RoaXMubWV0ZW9yU3Bhd25NaW5YO1xuICAgICAgICAgY29uc3QgeT1NYXRoLnJhbmRvbSgpKih0aGlzLm1ldGVvclNwYXduTWF4WS10aGlzLm1ldGVvclNwYXduTWluWSkrdGhpcy5tZXRlb3JTcGF3bk1pblk7XG4gICAgICAgICAgY29uc29sZS5sb2coeCtcImFhIFwiK3kpO1xuICAgICAgICAgIGNvbnN0IGFuZ2xlPSA5MCsyNSsgTWF0aC5yYW5kb20oKSoyMDtcbiAgICAgICAgIGNvbnNvbGUubG9nKGFuZ2xlKTtcbiAgICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gTWF0aC5yYW5kb20oKSoodGhpcy5tZXRlb3JNYXhWZWxvY2l0eS10aGlzLm1ldGVvck1pblZlbG9jaXR5LCB0aGlzLm1ldGVvck1pblZlbG9jaXR5KTtcbiAgICAgICAgIFxuICAgICB9XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MoveBullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2352YdXABK+Y1wmyhWrI1m', 'MoveBullet');
// Scripts/MoveBullet.ts

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
        _this.Cavas = null;
        _this.bulletTime = 100;
        _this.radian = 0;
        _this.BulletSpeed = 1000;
        _this.radianNumber = 75;
        _this.expolosion = null;
        // LIFE-CYCLE CALLBACKS:
        _this.rotation = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
    };
    NewClass.prototype.update = function (dt) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            this.node.setScale(0.7, 0.7);
            this.BulletSpeed = 300;
            this.node.setRotation(this.rotation);
            var radian = this.radianNumber / 360 * 2 * Math.PI;
            this.bulletTime -= 3.5;
            this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.node.setScale(1.2, 1.2);
            this.BulletSpeed = 600;
            this.node.setRotation(this.rotation);
            var radian = this.radianNumber / 360 * 2 * Math.PI;
            this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Cavas", void 0);
    __decorate([
        property
    ], NewClass.prototype, "bulletTime", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radian", void 0);
    __decorate([
        property
    ], NewClass.prototype, "BulletSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radianNumber", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "expolosion", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rotation", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW92ZUJ1bGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVEQztRQXJERyxXQUFLLEdBQVMsSUFBSSxDQUFDO1FBRW5CLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBRXpCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFHbkIsaUJBQVcsR0FBUyxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0Isd0JBQXdCO1FBRXhCLGNBQVEsR0FBVyxDQUFDLENBQUM7O1FBc0NyQixpQkFBaUI7SUFDckIsQ0FBQztJQXRDRyxlQUFlO0lBQ2Ysd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7SUFFNUIsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxSixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixrREFBa0Q7YUFDckQ7U0FDSjtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUosSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsa0RBQWtEO2FBQ3JEO1NBRUo7SUFDTCxDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0M7SUFFbkI7UUFEQyxRQUFRO2dEQUNnQjtJQUV6QjtRQURDLFFBQVE7NENBQ1U7SUFHbkI7UUFEQyxRQUFRO2lEQUNnQjtJQUV6QjtRQURDLFFBQVE7a0RBQ2lCO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ087SUFHM0I7UUFEQyxRQUFROzhDQUNZO0lBaEJKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RDVCO0lBQUQsZUFBQztDQXZERCxBQXVEQyxDQXZEcUMsRUFBRSxDQUFDLFNBQVMsR0F1RGpEO2tCQXZEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBDYXZhczogTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgYnVsbGV0VGltZTogbnVtYmVyID0gMTAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHJhZGlhbjogbnVtYmVyID0gMDtcbiAgICBcbiAgICBAcHJvcGVydHlcbiAgICBCdWxsZXRTcGVlZDpudW1iZXIgPTEwMDA7XG4gICAgQHByb3BlcnR5XG4gICAgcmFkaWFuTnVtYmVyOiBudW1iZXIgPSA3NTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGV4cG9sb3Npb246IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eVxuICAgIHJvdGF0aW9uOiBudW1iZXIgPSAwO1xuICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG5cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMC43LDAuNylcbiAgICAgICAgICAgIHRoaXMuQnVsbGV0U3BlZWQgPSAzMDA7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24odGhpcy5yb3RhdGlvbik7XG4gICAgICAgICAgICBsZXQgcmFkaWFuID0gdGhpcy5yYWRpYW5OdW1iZXIgLyAzNjAgKiAyICogTWF0aC5QSTtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0VGltZSAtPSAzLjU7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MocmFkaWFuKSAqIGR0ICogdGhpcy5CdWxsZXRTcGVlZCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKz0gTWF0aC5zaW4ocmFkaWFuKSAqIHRoaXMuQnVsbGV0U3BlZWQgKiBkdCk7XG4gICAgICAgICAgICBpZiAodGhpcy5idWxsZXRUaW1lID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnBvc2l0aW9uLnkgPSB0aGlzLm5vZGUucG9zaXRpb24ueSArIDU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEuMiwxLjIpXG4gICAgICAgICAgICB0aGlzLkJ1bGxldFNwZWVkID0gNjAwO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgICAgbGV0IHJhZGlhbiA9IHRoaXMucmFkaWFuTnVtYmVyIC8gMzYwICogMiAqIE1hdGguUEk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MocmFkaWFuKSAqIGR0ICogdGhpcy5CdWxsZXRTcGVlZCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKz0gTWF0aC5zaW4ocmFkaWFuKSAqIHRoaXMuQnVsbGV0U3BlZWQgKiBkdCk7XG4gICAgICAgICAgICBpZiAodGhpcy5idWxsZXRUaW1lID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnBvc2l0aW9uLnkgPSB0aGlzLm5vZGUucG9zaXRpb24ueSArIDU7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MoveEnemyCirle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '913e4Mi4mdPzrccxq9gDUth', 'MoveEnemyCirle');
// Scripts/MoveEnemyCirle.ts

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
        _this.r = 220;
        _this.radian = 0;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.updatePos = function () {
        this.node.x = -6.123 + this.r * Math.cos(this.radian);
        this.node.y = 276.5389333 + this.r * Math.sin(this.radian);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.radian = this.radian + dt * 0.5;
        this.updatePos();
    };
    __decorate([
        property
    ], NewClass.prototype, "r", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radian", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW92ZUVuZW15Q2lybGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyQkM7UUF4QkcsT0FBQyxHQUFXLEdBQUcsQ0FBQztRQUVoQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFpQjNCLENBQUM7SUFmRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUNmLDRCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUF2QkQ7UUFEQyxRQUFRO3VDQUNPO0lBRWhCO1FBREMsUUFBUTs0Q0FDVTtJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQVZOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyQjVCO0lBQUQsZUFBQztDQTNCRCxBQTJCQyxDQTNCcUMsRUFBRSxDQUFDLFNBQVMsR0EyQmpEO2tCQTNCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgIFxuICAgIEBwcm9wZXJ0eVxuICAgIHI6IG51bWJlciA9IDIyMDtcbiAgICBAcHJvcGVydHlcbiAgICByYWRpYW46IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICB1cGRhdGVQb3MoKXtcbiAgICAgICAgdGhpcy5ub2RlLnggPS02LjEyMyt0aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnJhZGlhbik7XG4gICAgICAgIHRoaXMubm9kZS55ID0gMjc2LjUzODkzMzMrdGhpcy5yICogTWF0aC5zaW4odGhpcy5yYWRpYW4pO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMucmFkaWFuID0gdGhpcy5yYWRpYW4gKyBkdCAqIDAuNTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3MoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73f33mARVdPQ71NDTfIfA8e', 'NewScript');
// Scripts/NewScript.ts

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
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        console.log(other.name);
        console.log(self.name);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTmV3U2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUJDO1FBdEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFtQjNCLENBQUM7SUFqQkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTNCLENBQUM7SUFDRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO0lBRVIsQ0FBQztJQXJCRjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5QjVCO0lBQUQsZUFBQztDQXpCRCxBQXlCQyxDQXpCcUMsRUFBRSxDQUFDLFNBQVMsR0F5QmpEO2tCQXpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgIFxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG90aGVyLm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLm5hbWUpO1xuICBcbiAgICB9XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICBcbiAgICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Plane.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94b9atHwnpANKpaBo4scBsD', 'Plane');
// Scripts/Plane.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    Audio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onLoad: function onLoad() {
    // add key down and key up event
    this.node.on('touchmove', function (event) {
      var delta = event.touch.getDelta();
      this.x += delta.x;
      this.y += delta.y;
      console.log("â");
    }, this.node);
  } // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJBdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJub2RlIiwib24iLCJldmVudCIsImRlbHRhIiwidG91Y2giLCJnZXREZWx0YSIsIngiLCJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1pDLElBQUFBLEtBQUssRUFBQztBQUNKLGlCQUFRLElBREo7QUFFSkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkw7QUFETSxHQUhQO0FBV0w7QUFFQTtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFFQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxXQUFiLEVBQXlCLFVBQVNDLEtBQVQsRUFBZTtBQUNwQyxVQUFJQyxLQUFLLEdBQUVELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxRQUFaLEVBQVg7QUFDQSxXQUFLQyxDQUFMLElBQVNILEtBQUssQ0FBQ0csQ0FBZjtBQUNBLFdBQUtDLENBQUwsSUFBU0osS0FBSyxDQUFDSSxDQUFmO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFLSCxLQVRELEVBU0UsS0FBS1QsSUFUUDtBQVdILEdBNUJJLENBNkJMOztBQTdCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgXG4gICAgcHJvcGVydGllczoge1xuICAgIEF1ZGlvOntcbiAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICB9LFxuICBcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGFkZCBrZXkgZG93biBhbmQga2V5IHVwIGV2ZW50XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNobW92ZScsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgdmFyIGRlbHRhID1ldmVudC50b3VjaC5nZXREZWx0YSgpO1xuICAgICAgICAgICAgdGhpcy54ICs9ZGVsdGEueDtcbiAgICAgICAgICAgIHRoaXMueSArPWRlbHRhLnk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIsOiXCIpO1xuICAgICAgICAgICBcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgfSx0aGlzLm5vZGUpO1xuXG4gICAgfSxcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fc1fsdb4RLvodXdTtsgUlg', 'Player');
// Scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQTtBQUVBQyxFQUFBQSxLQXpCSyxtQkF5QkksQ0FFUixDQTNCSSxDQTZCTDs7QUE3QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Resize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4569jYTk5CqrWMdmYmW2Yt', 'Resize');
// Scripts/Resize.ts

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
        _this.width = 100;
        _this.height = 100;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var screen = cc.find("Canvas");
        this.node.setContentSize(screen.getContentSize().width * this.width / 100, screen.getContentSize().height * this.height / 100);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property
    ], NewClass.prototype, "width", void 0);
    __decorate([
        property
    ], NewClass.prototype, "height", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUmVzaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0JDO1FBcEJELFdBQUssR0FBUyxHQUFHLENBQUM7UUFFbEIsWUFBTSxHQUFTLEdBQUcsQ0FBQzs7SUFrQm5CLENBQUM7SUFoQkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQ2xJLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO0lBSVQsQ0FBQztJQW5CTDtRQURDLFFBQVE7MkNBQ1M7SUFFbEI7UUFEQyxRQUFROzRDQUNVO0lBSkUsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNCNUI7SUFBRCxlQUFDO0NBdEJELEFBc0JDLENBdEJxQyxFQUFFLENBQUMsU0FBUyxHQXNCakQ7a0JBdEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuQHByb3BlcnR5XG53aWR0aDogbnVtYmVyPTEwMDtcbkBwcm9wZXJ0eVxuaGVpZ2h0OiBudW1iZXI9MTAwO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB2YXIgc2NyZWVuID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKHNjcmVlbi5nZXRDb250ZW50U2l6ZSgpLndpZHRoICogdGhpcy53aWR0aCAvIDEwMCwgc2NyZWVuLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0ICogdGhpcy5oZWlnaHQgLyAxMDApXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICBcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Scroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBa0NDO1FBL0JHLGVBQWU7UUFFZixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQXdCakMsQ0FBQztJQXZCRyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvQix1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCx1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFFTCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVztJQUU3QjtRQURDLFFBQVE7eUNBQ1c7SUFUSCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBa0MxQjtJQUFELGFBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ21DLEVBQUUsQ0FBQyxTQUFTLEdBa0MvQztrQkFsQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFja2dyb3VuZF8xOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYWNrZ3JvdW5kXzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7XG4gICAgaW5pdFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdmFyIHNjcmVlbiA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG5cbiAgICAgICAgLy8gdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLmJhY2tncm91bmRfMi5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IGNjLnYyKHNjcmVlbi5nZXRDb250ZW50U2l6ZSgpLndpZHRoLDApO1xuICAgICAgICBjb25zb2xlLmxvZyhzY3JlZW4uZ2V0Q29udGVudFNpemUoKS53aWR0aCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZF8yLnNldFBvc2l0aW9uKCB0aGlzLmluaXRQb3NpdGlvbik7XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmRfMS54IC09IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kXzIueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRfMS5nZXRQb3NpdGlvbigpLnggPD0gLXRoaXMuYmFja2dyb3VuZF8xLmdldENvbnRlbnRTaXplKCkud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZF8xLnNldFBvc2l0aW9uKHRoaXMuaW5pdFBvc2l0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kXzIuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdW5kXzIuZ2V0UG9zaXRpb24oKS54IDw9IC10aGlzLmJhY2tncm91bmRfMi5nZXRDb250ZW50U2l6ZSgpLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRfMi5zZXRQb3NpdGlvbih0aGlzLmluaXRQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRfMS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ShieldMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60c40E2SMpEkoNsqeR4vlqC', 'ShieldMove');
// Scripts/ShieldMove.ts

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
        _this.text = 'hello';
        _this.Ship = null;
        _this.BulletSpeed = 10;
        _this.timeToLive = 700;
        _this.timeAlive = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.name == "Ship<BoxCollider>" && self.name == "SHield<BoxCollider>") {
            self.node.destroy();
        }
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            var shieldMove = cc.moveTo(3, this.node.parent.getChildByName('Ship').position.x, this.node.parent.getChildByName('Ship').position.y);
            this.node.runAction(shieldMove);
            this.node.setScale(1, 1);
        }
        if (window.matchMedia("(orientation:landscape)").matches) {
            var shieldMove = cc.moveTo(7, this.node.parent.getChildByName('Ship').position.x, this.node.parent.getChildByName('Ship').position.y);
            this.node.runAction(shieldMove);
            this.node.setScale(0.4, 0.4);
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Ship", void 0);
    __decorate([
        property
    ], NewClass.prototype, "BulletSpeed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2hpZWxkTW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNDQztRQW5DRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHdkIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixpQkFBVyxHQUFTLEVBQUUsQ0FBQztRQUN0QixnQkFBVSxHQUFDLEdBQUcsQ0FBQztRQUNmLGVBQVMsR0FBQyxDQUFDLENBQUM7O0lBeUJqQixDQUFDO0lBeEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBQ2YsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxtQkFBbUIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLHFCQUFxQixFQUFFO1lBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN0RCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN0RCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUVFLENBQUM7SUFsQ0o7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVE7aURBQ2M7SUFYTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0M1QjtJQUFELGVBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBc0NqRDtrQkF0Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBTaGlwOiBjYy5Ob2RlID0gbnVsbDsgICBcbiAgICBAcHJvcGVydHlcbiAgICBCdWxsZXRTcGVlZDpudW1iZXIgPTEwO1xuICAgICB0aW1lVG9MaXZlPTcwMDtcbiAgICAgdGltZUFsaXZlPTA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5uYW1lID09IFwiU2hpcDxCb3hDb2xsaWRlcj5cIiAmJiBzZWxmLm5hbWUgPT0gXCJTSGllbGQ8Qm94Q29sbGlkZXI+XCIpIHsgXG4gICAgICAgICAgICBzZWxmLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdmFyIHNoaWVsZE1vdmUgPSBjYy5tb3ZlVG8oMywgdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZSgnU2hpcCcpLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoJ1NoaXAnKS5wb3NpdGlvbi55KTsgXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHNoaWVsZE1vdmUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjpsYW5kc2NhcGUpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzaGllbGRNb3ZlID0gY2MubW92ZVRvKDcsIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoJ1NoaXAnKS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdTaGlwJykucG9zaXRpb24ueSk7ICBcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2hpZWxkTW92ZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMC40LCAwLjQpOyBcbiAgICB9XG5cbiAgICAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Scroll - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2287epPsQJKO777ThJ8DHMC', 'Scroll - 001');
// Scripts/Scroll - 001.ts

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
        _this.bg_1 = null;
        _this.bg_2 = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.bg_1.y = 0;
        this.bg_2.y = this.bg_1.y + this.bg_1.height;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.bg_1.y = this.bg_1.y - 2;
        this.bg_2.y = this.bg_2.y - 2;
        if (this.bg_1.y <= -this.bg_1.height) {
            this.bg_1.y = this.bg_2.y + this.bg_1.height;
        }
        if (this.bg_2.y <= -this.bg_1.height) {
            this.bg_2.y = this.bg_1.y + this.bg_1.height;
        }
        //console.log(this.node.parent.getContentSize().height);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bg_1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bg_2", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2Nyb2xsIC0gMDAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNkJDO1FBM0JHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQzs7SUF5QnpCLENBQUM7SUF4Qkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDM0MsQ0FBQztJQUVGLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtTQUMvQztRQUNGLHdEQUF3RDtJQUUzRCxDQUFDO0lBMUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUpKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2QjVCO0lBQUQsZUFBQztDQTdCRCxBQTZCQyxDQTdCcUMsRUFBRSxDQUFDLFNBQVMsR0E2QmpEO2tCQTdCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmdfMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmdfMjogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYmdfMS55ID0gMDtcbiAgICAgICAgdGhpcy5iZ18yLnk9dGhpcy5iZ18xLnkrdGhpcy5iZ18xLmhlaWdodFxuICAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmdfMS55ID0gdGhpcy5iZ18xLnkgLSAyO1xuICAgICAgICB0aGlzLmJnXzIueSA9IHRoaXMuYmdfMi55IC0gMjtcbiAgICAgICAgaWYgKHRoaXMuYmdfMS55PD0tdGhpcy5iZ18xLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5iZ18xLnkgPSB0aGlzLmJnXzIueSArIHRoaXMuYmdfMS5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZ18yLnk8PS10aGlzLmJnXzEuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmJnXzIueSA9IHRoaXMuYmdfMS55ICsgdGhpcy5iZ18xLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vZGUucGFyZW50LmdldENvbnRlbnRTaXplKCkuaGVpZ2h0KTtcbiAgICAgICBcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ShipMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b66a5dHLzRPhqi9f6GJFE1a', 'ShipMove');
// Scripts/ShipMove.ts

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
        _this.speed = 1000;
        _this.tmpPos = null;
        _this.Ship = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        this.tmpPos = this.node.position;
        var self = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            if (self.node) {
                var touches = event.getTouches();
                var moving = touches[0].getDelta();
                self.tmpPos.addSelf(moving);
            }
        });
    };
    NewClass.prototype.update = function (dt) {
        var currentPos = this.node.position;
        var delta = this.tmpPos.sub(currentPos);
        var distance = delta.magSqr();
        var maxSpeedPerFrame = this.speed * dt;
        this.node.position = this.node.position.add(delta);
        var screen = cc.Canvas.instance.node.getContentSize();
        this.node.x = cc.misc.clampf(this.node.x, -screen.width / 2, screen.width / 2);
        this.node.y = cc.misc.clampf(this.node.y, -screen.height / 2, screen.height / 2);
    };
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Ship", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2hpcE1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrQ0M7UUE5QkcsV0FBSyxHQUFXLElBQUksQ0FBQztRQUNyQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBMkJ6QixDQUFDO0lBMUJHLHlCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsS0FBSztZQUNwRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9CO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQTdCRDtRQURDLFFBQVE7MkNBQ1k7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQVBKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrQzVCO0lBQUQsZUFBQztDQWxDRCxBQWtDQyxDQWxDcUMsRUFBRSxDQUFDLFNBQVMsR0FrQ2pEO2tCQWxDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSAxMDAwO1xuICAgIHRtcFBvczogY2MuVmVjMiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgU2hpcDogY2MuTm9kZSA9IG51bGw7XG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy50bXBQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5ub2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoZXMgPSBldmVudC5nZXRUb3VjaGVzKCk7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmluZyA9IHRvdWNoZXNbMF0uZ2V0RGVsdGEoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnRtcFBvcy5hZGRTZWxmKG1vdmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgIGxldCBkZWx0YSA9IHRoaXMudG1wUG9zLnN1YihjdXJyZW50UG9zKTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gZGVsdGEubWFnU3FyKCk7XG4gICAgICAgIGxldCBtYXhTcGVlZFBlckZyYW1lID0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGRlbHRhKTtcbiAgICAgICAgbGV0IHNjcmVlbiA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIHRoaXMubm9kZS54ID0gY2MubWlzYy5jbGFtcGYodGhpcy5ub2RlLngsIC1zY3JlZW4ud2lkdGggLyAyLCBzY3JlZW4ud2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy5ub2RlLnkgPSBjYy5taXNjLmNsYW1wZih0aGlzLm5vZGUueSwgLXNjcmVlbi5oZWlnaHQgLyAyLCBzY3JlZW4uaGVpZ2h0IC8gMik7XG4gICAgfVxufVxuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PopupWindow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4a77KsIuFNgp4VyLGfEy52', 'PopupWindow');
// Scripts/PopupWindow.ts

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
var PopupWindow = /** @class */ (function (_super) {
    __extends(PopupWindow, _super);
    function PopupWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.popup = null;
        return _this;
        // update (dt) {}
    }
    PopupWindow.prototype.onLoad = function () {
        console.log("popup");
        this.popup.active = true;
    };
    PopupWindow.prototype.start = function () {
    };
    PopupWindow.prototype.show_Window = function () {
        console.log("popup");
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node).to(0.5, { scale: 1, opacity: 255 }, { easing: "quartInOut" }).start();
    };
    PopupWindow.Instance = null;
    __decorate([
        property(cc.Node)
    ], PopupWindow.prototype, "popup", void 0);
    PopupWindow = __decorate([
        ccclass
    ], PopupWindow);
    return PopupWindow;
}(cc.Component));
exports.default = PopupWindow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUG9wdXBXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF5QkM7UUF2Qkcsd0JBQXdCO1FBRXhCLFdBQUssR0FBUyxJQUFJLENBQUM7O1FBb0JuQixpQkFBaUI7SUFDckIsQ0FBQztJQXBCRyw0QkFBTSxHQUFOO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FDUCxPQUFPLENBQ1YsQ0FBQztRQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFDQSxpQ0FBVyxHQUFYO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FDSCxPQUFPLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7UUFDcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEYsQ0FBQztJQXJCRSxvQkFBUSxHQUFnQixJQUFJLENBQUM7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDQztJQUpGLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F5Qi9CO0lBQUQsa0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QndDLEVBQUUsQ0FBQyxTQUFTLEdBeUJwRDtrQkF6Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpbmRvdyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gc3RhdGljIEluc3RhbmNlOiBQb3B1cFdpbmRvdyA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXA6Y2MuTm9kZT1udWxsO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgXCJwb3B1cFwiXG4gICAgICk7XG4gICAgICAgdGhpcy5wb3B1cC5hY3RpdmU9dHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgXG4gICAgfVxuICAgICBzaG93X1dpbmRvdygpe1xuIGNvbnNvbGUubG9nKFxuICAgICAgICAgXCJwb3B1cFwiKTtcbiAgICAgIFxuICAgICAgdGhpcy5ub2RlLm9wYWNpdHk9MDtcbiAgICAgIHRoaXMubm9kZS5zY2FsZT0wLjI7XG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSx7c2NhbGU6MSxvcGFjaXR5OjI1NX0se2Vhc2luZzogXCJxdWFydEluT3V0XCJ9KS5zdGFydCgpO1xuICAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Spaceship.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd4ffn7FNBPxoB9pAlPpmnX', 'Spaceship');
// Scripts/Spaceship.ts

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
        //bullet 
        _this.greenBullet = null;
        _this.gun2 = null;
        _this.BulletSpeed = 500;
        return _this;
    }
    NewClass.prototype.shootBullets = function (x, y, angle) {
        var bullet = cc.instantiate(this.greenBullet);
        bullet.setPosition(this.node.position.x, this.node.position.y);
        this.node.parent.addChild(bullet);
        cc.audioEngine.playEffect(this.gun2, false);
        bullet.setRotation(angle);
        console.log(angle);
    };
    NewClass.prototype.onLoad = function () {
        // this.node.on('touchmove',function(event){
        //     var delta =event.touch.getDelta();
        //     this.x +=delta.x;
        //     this.y +=delta.y;      
        // },this.node);
        this.schedule(this.shootBullets, 0.2, cc.macro.REPEAT_FOREVER, 0);
        console.log("ban dan");
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.node.setPosition(this.node.position.x, this.node.position.y = this.BulletSpeed * dt);
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "greenBullet", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewClass.prototype, "gun2", void 0);
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "BulletSpeed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3BhY2VzaGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUNDO1FBeENHLFNBQVM7UUFFVCxpQkFBVyxHQUFhLElBQUksQ0FBQztRQU03QixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBS1IsaUJBQVcsR0FBVSxHQUFHLENBQUM7O0lBMkJqQyxDQUFDO0lBekJHLCtCQUFZLEdBQVosVUFBYSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUs7UUFDbEIsSUFBSSxNQUFNLEdBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBRUksNENBQTRDO1FBQzVDLHlDQUF5QztRQUN6Qyx3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFFekYsQ0FBQztJQXJDSjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNTO0lBTTdCO1FBTEMsUUFBUSxDQUNMO1lBQ0ksSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTO1NBQ3BCLENBQ0o7MENBQ1c7SUFFUjtRQURILFFBQVE7MkNBQ0k7SUFHVDtRQURDLFFBQVE7aURBQ2dCO0lBZFosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlDNUI7SUFBRCxlQUFDO0NBekNELEFBeUNDLENBekNxQyxFQUFFLENBQUMsU0FBUyxHQXlDakQ7a0JBekNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vYnVsbGV0IFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ3JlZW5CdWxsZXQ6Y2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwXG4gICAgICAgIH1cbiAgICApXG4gICAgZ3VuMiA9IG51bGw7XG4gICAgQHByb3BlcnR5IFxuICAgICAgICBzcGVlZDogMDtcbiAgICAgICAgcmVzZXRYOiAwO1xuICAgICAgICBAcHJvcGVydHlcbiAgICAgICAgQnVsbGV0U3BlZWQ6bnVtYmVyID0gNTAwO1xuICAgICAgICBhbmdsZTowO1xuICAgIHNob290QnVsbGV0cyh4LHksYW5nbGUpe1xuICAgICAgICB2YXIgYnVsbGV0ID1jYy5pbnN0YW50aWF0ZSh0aGlzLmdyZWVuQnVsbGV0KTsgICAgIFxuICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGJ1bGxldCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ndW4yLGZhbHNlKTtcbiAgICAgICAgYnVsbGV0LnNldFJvdGF0aW9uKGFuZ2xlKTtcbiAgICAgICAgY29uc29sZS5sb2coYW5nbGUpO1xuICAgIH1cbiAgICBvbkxvYWQoKXtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbigndG91Y2htb3ZlJyxmdW5jdGlvbihldmVudCl7XG4gICAgICAgIC8vICAgICB2YXIgZGVsdGEgPWV2ZW50LnRvdWNoLmdldERlbHRhKCk7XG4gICAgICAgIC8vICAgICB0aGlzLnggKz1kZWx0YS54O1xuICAgICAgICAvLyAgICAgdGhpcy55ICs9ZGVsdGEueTsgICAgICBcbiAgICAgICAgLy8gfSx0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc2hvb3RCdWxsZXRzLDAuMixjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwwKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiYW4gZGFuXCIpO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9ICAgXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsdGhpcy5ub2RlLnBvc2l0aW9uLnkgID0gdGhpcy5CdWxsZXRTcGVlZCpkdCk7XG4gICAgICAgXG4gICAgICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SpriteEx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b6c2viWZZEepIbA9eCBrjv', 'SpriteEx');
// Scripts/SpriteEx.js

"use strict";

/**
 * 精灵增加 
 */
var SpriteEx = cc.Class({
  "extends": cc.Sprite,
  properties: {
    spriteFrames: [cc.SpriteFrame],
    _index: 0,
    index: {
      type: cc.Integer,
      set: function set(value) {
        if (value < 0) {
          return;
        }

        this._index = value % this.spriteFrames.length;
        this.spriteFrame = this.spriteFrames[this._index];
      },
      get: function get() {
        return this._index;
      }
    }
  },
  next: function next() {
    this.index++;
  }
});
cc.Class.Attr.setClassAttr(SpriteEx, 'spriteFrame', 'visible', false);
cc.Class.Attr.setClassAttr(SpriteEx, '_atlas', 'visible', false);
cc.Class.Attr.setClassAttr(SpriteEx, 'fillType', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillCenter', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillStart', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillEnd', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillRange', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'srcBlendFactor', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'dstBlendFactor', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3ByaXRlRXguanMiXSwibmFtZXMiOlsiU3ByaXRlRXgiLCJjYyIsIkNsYXNzIiwiU3ByaXRlIiwicHJvcGVydGllcyIsInNwcml0ZUZyYW1lcyIsIlNwcml0ZUZyYW1lIiwiX2luZGV4IiwiaW5kZXgiLCJ0eXBlIiwiSW50ZWdlciIsInNldCIsInZhbHVlIiwibGVuZ3RoIiwic3ByaXRlRnJhbWUiLCJnZXQiLCJuZXh0IiwiQXR0ciIsInNldENsYXNzQXR0ciIsIl90eXBlIiwiVHlwZSIsIkZJTExFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUEsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQixhQUFTRCxFQUFFLENBQUNFLE1BRFE7QUFHcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxZQUFZLEVBQUUsQ0FBQ0osRUFBRSxDQUFDSyxXQUFKLENBRE47QUFHUkMsSUFBQUEsTUFBTSxFQUFFLENBSEE7QUFJUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hDLE1BQUFBLElBQUksRUFBRVIsRUFBRSxDQUFDUyxPQUROO0FBRUhDLE1BQUFBLEdBRkcsZUFFQ0MsS0FGRCxFQUVRO0FBQ1AsWUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYO0FBQ0g7O0FBQ0QsYUFBS0wsTUFBTCxHQUFjSyxLQUFLLEdBQUcsS0FBS1AsWUFBTCxDQUFrQlEsTUFBeEM7QUFDQSxhQUFLQyxXQUFMLEdBQW1CLEtBQUtULFlBQUwsQ0FBa0IsS0FBS0UsTUFBdkIsQ0FBbkI7QUFDSCxPQVJFO0FBU0hRLE1BQUFBLEdBVEcsaUJBU0c7QUFDRixlQUFPLEtBQUtSLE1BQVo7QUFDSDtBQVhFO0FBSkMsR0FIUTtBQXNCcEJTLEVBQUFBLElBdEJvQixrQkFzQmI7QUFDSCxTQUFLUixLQUFMO0FBQ0g7QUF4Qm1CLENBQVQsQ0FBZjtBQTRCQVAsRUFBRSxDQUFDQyxLQUFILENBQVNlLElBQVQsQ0FBY0MsWUFBZCxDQUEyQmxCLFFBQTNCLEVBQXFDLGFBQXJDLEVBQW9ELFNBQXBELEVBQStELEtBQS9EO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTZSxJQUFULENBQWNDLFlBQWQsQ0FBMkJsQixRQUEzQixFQUFxQyxRQUFyQyxFQUErQyxTQUEvQyxFQUEwRCxLQUExRDtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsVUFBckMsRUFBaUQsU0FBakQsRUFBNEQsWUFBVztBQUNuRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBSUFwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsWUFBckMsRUFBbUQsU0FBbkQsRUFBOEQsWUFBVztBQUNyRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBR0FwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsV0FBckMsRUFBa0QsU0FBbEQsRUFBNkQsWUFBVztBQUNwRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBR0FwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsU0FBckMsRUFBZ0QsU0FBaEQsRUFBMkQsWUFBVztBQUNsRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBR0FwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsV0FBckMsRUFBa0QsU0FBbEQsRUFBNkQsWUFBVztBQUNwRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBSUFwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsZ0JBQXJDLEVBQXVELFNBQXZELEVBQWtFLFlBQVc7QUFDekUsU0FBTyxLQUFLbUIsS0FBTCxLQUFlbEIsRUFBRSxDQUFDRSxNQUFILENBQVVpQixJQUFWLENBQWVDLE1BQXJDO0FBQ0gsQ0FGRDtBQUdBcEIsRUFBRSxDQUFDQyxLQUFILENBQVNlLElBQVQsQ0FBY0MsWUFBZCxDQUEyQmxCLFFBQTNCLEVBQXFDLGdCQUFyQyxFQUF1RCxTQUF2RCxFQUFrRSxZQUFXO0FBQ3pFLFNBQU8sS0FBS21CLEtBQUwsS0FBZWxCLEVBQUUsQ0FBQ0UsTUFBSCxDQUFVaUIsSUFBVixDQUFlQyxNQUFyQztBQUNILENBRkQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog57K+54G15aKe5YqgIFxuICovXG5cbmxldCBTcHJpdGVFeCA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5TcHJpdGUsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwcml0ZUZyYW1lczogW2NjLlNwcml0ZUZyYW1lXSxcblxuICAgICAgICBfaW5kZXg6IDAsXG4gICAgICAgIGluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gdmFsdWUgJSB0aGlzLnNwcml0ZUZyYW1lcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVzW3RoaXMuX2luZGV4XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrK1xuICAgIH1cbn0pO1xuXG5cbmNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKFNwcml0ZUV4LCAnc3ByaXRlRnJhbWUnLCAndmlzaWJsZScsIGZhbHNlKTtcbmNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKFNwcml0ZUV4LCAnX2F0bGFzJywgJ3Zpc2libGUnLCBmYWxzZSk7XG5cbmNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKFNwcml0ZUV4LCAnZmlsbFR5cGUnLCAndmlzaWJsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlID09PSBjYy5TcHJpdGUuVHlwZS5GSUxMRUQ7XG59KTtcblxuY2MuQ2xhc3MuQXR0ci5zZXRDbGFzc0F0dHIoU3ByaXRlRXgsICdmaWxsQ2VudGVyJywgJ3Zpc2libGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xufSk7XG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihTcHJpdGVFeCwgJ2ZpbGxTdGFydCcsICd2aXNpYmxlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGUgPT09IGNjLlNwcml0ZS5UeXBlLkZJTExFRDtcbn0pO1xuY2MuQ2xhc3MuQXR0ci5zZXRDbGFzc0F0dHIoU3ByaXRlRXgsICdmaWxsRW5kJywgJ3Zpc2libGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xufSk7XG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihTcHJpdGVFeCwgJ2ZpbGxSYW5nZScsICd2aXNpYmxlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGUgPT09IGNjLlNwcml0ZS5UeXBlLkZJTExFRDtcbn0pO1xuXG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihTcHJpdGVFeCwgJ3NyY0JsZW5kRmFjdG9yJywgJ3Zpc2libGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xufSk7XG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihTcHJpdGVFeCwgJ2RzdEJsZW5kRmFjdG9yJywgJ3Zpc2libGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TestBullets.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f830U7edBJ2r30+ZjAvitx', 'TestBullets');
// Scripts/TestBullets.ts

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
        _this.Cavas = null;
        _this.bulletTime = 100;
        _this.radian = 0;
        _this.BulletSpeed = 1000;
        _this.radianNumber = 75;
        _this.expolosion = null;
        // LIFE-CYCLE CALLBACKS:
        _this.rotation = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
    };
    NewClass.prototype.update = function (dt) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            this.node.setScale(0.4, 0.4);
            this.BulletSpeed = 400;
            this.node.setRotation(this.rotation);
            var radian = this.radianNumber / 360 * 2 * Math.PI;
            this.bulletTime -= 3.5;
            this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            //console.log("Run in function update() time : ", dt);
            this.node.setScale(1, 1);
            dt += dt;
            //console.log(dt);
            if (dt <= 0.035) {
                this.node.setPosition(this.node.position.x += Math.cos(35 / 360 * 2 * Math.PI) * dt * this.BulletSpeed, this.node.position.y += Math.sin(45 / 360 * 2 * Math.PI) * this.BulletSpeed * dt);
            }
            else if (dt > 0.035) {
                this.node.setPosition(this.node.position.x += Math.cos(125 / 360 * 2 * Math.PI) * dt * this.BulletSpeed, this.node.position.y += Math.sin(45 / 360 * 2 * Math.PI) * this.BulletSpeed * dt);
            }
            // 
            // this.BulletSpeed = 800;
            // this.node.setRotation(this.rotation);
            // let radian = this.radianNumber / 360 * 2 * Math.PI;
            // this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Cavas", void 0);
    __decorate([
        property
    ], NewClass.prototype, "bulletTime", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radian", void 0);
    __decorate([
        property
    ], NewClass.prototype, "BulletSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radianNumber", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "expolosion", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rotation", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGVzdEJ1bGxldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtRUM7UUFqRUcsV0FBSyxHQUFTLElBQUksQ0FBQztRQUVuQixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGlCQUFXLEdBQVMsSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLHdCQUF3QjtRQUV4QixjQUFRLEdBQVcsQ0FBQyxDQUFDOztRQWtEckIsaUJBQWlCO0lBQ3JCLENBQUM7SUFsREcsZUFBZTtJQUNmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO0lBRTVCLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FB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QyxNQUFNLENBQUM7Z0RBQ087SUFHM0I7UUFEQyxRQUFROzhDQUNZO0lBaEJKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRTVCO0lBQUQsZUFBQztDQW5FRCxBQW1FQyxDQW5FcUMsRUFBRSxDQUFDLFNBQVMsR0FtRWpEO2tCQW5Fb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBDYXZhczogTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgYnVsbGV0VGltZTogbnVtYmVyID0gMTAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHJhZGlhbjogbnVtYmVyID0gMDtcbiAgICBcbiAgICBAcHJvcGVydHlcbiAgICBCdWxsZXRTcGVlZDpudW1iZXIgPTEwMDA7XG4gICAgQHByb3BlcnR5XG4gICAgcmFkaWFuTnVtYmVyOiBudW1iZXIgPSA3NTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGV4cG9sb3Npb246IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eVxuICAgIHJvdGF0aW9uOiBudW1iZXIgPSAwO1xuICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG5cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMC40LDAuNClcbiAgICAgICAgICAgIHRoaXMuQnVsbGV0U3BlZWQgPSA0MDA7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24odGhpcy5yb3RhdGlvbik7XG4gICAgICAgICAgICBsZXQgcmFkaWFuID0gdGhpcy5yYWRpYW5OdW1iZXIgLyAzNjAgKiAyICogTWF0aC5QSTtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0VGltZSAtPSAzLjU7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MocmFkaWFuKSAqIGR0ICogdGhpcy5CdWxsZXRTcGVlZCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKz0gTWF0aC5zaW4ocmFkaWFuKSAqIHRoaXMuQnVsbGV0U3BlZWQgKiBkdCk7XG4gICAgICAgICAgICBpZiAodGhpcy5idWxsZXRUaW1lID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnBvc2l0aW9uLnkgPSB0aGlzLm5vZGUucG9zaXRpb24ueSArIDU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJ1biBpbiBmdW5jdGlvbiB1cGRhdGUoKSB0aW1lIDogXCIsIGR0KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLCAxKTtcbiAgICAgICAgICAgIGR0ICs9IGR0O1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChkdDw9MC4wMzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MoMzUvIDM2MCAqIDIgKiBNYXRoLlBJKSAqIGR0ICogdGhpcy5CdWxsZXRTcGVlZCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKz0gTWF0aC5zaW4oNDUvIDM2MCAqIDIgKiBNYXRoLlBJKSAqIHRoaXMuQnVsbGV0U3BlZWQgKiBkdCk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZHQ+MC4wMzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MoMTI1LyAzNjAgKiAyICogTWF0aC5QSSkgKiBkdCAqIHRoaXMuQnVsbGV0U3BlZWQsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IE1hdGguc2luKDQ1LyAzNjAgKiAyICogTWF0aC5QSSkgKiB0aGlzLkJ1bGxldFNwZWVkICogZHQpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgLy8gdGhpcy5CdWxsZXRTcGVlZCA9IDgwMDtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRSb3RhdGlvbih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgIC8vIGxldCByYWRpYW4gPSB0aGlzLnJhZGlhbk51bWJlciAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICs9IE1hdGguY29zKHJhZGlhbikgKiBkdCAqIHRoaXMuQnVsbGV0U3BlZWQsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IE1hdGguc2luKHJhZGlhbikgKiB0aGlzLkJ1bGxldFNwZWVkICogZHQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5wb3NpdGlvbi55ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyA1O1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90287ZZOqpDrKVOMMKUPzxt', 'Test');
// Scripts/Test.ts

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
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test.prototype.callTest = function () {
        console.log("test");
    };
    Test = __decorate([
        ccclass
    ], Test);
    return Test;
}(cc.Component));
exports.default = Test;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFPQSxDQUFDO0lBSkQsdUJBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUxvQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBT3hCO0lBQUQsV0FBQztDQVBELEFBT0MsQ0FQaUMsRUFBRSxDQUFDLFNBQVMsR0FPN0M7a0JBUG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuIFxuY2FsbFRlc3QoKXtcbiAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XG59XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TestLazer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGVzdExhemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMERDO1FBdkRHLFVBQUksR0FBUyxJQUFJLENBQUE7UUFFakIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUV2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFcEIsVUFBSSxHQUFTLEdBQUcsQ0FBQzs7SUErQ3RCLENBQUM7SUE5Q0csd0JBQXdCO0lBRXZCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLE9BQU8sR0FBRSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDL0MsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsOERBQThEO0lBQ25FLENBQUM7SUFDRCx3QkFBd0I7SUFDeEIseUNBQXlDO0lBQ3pDLEtBQUs7SUFDTCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELG1DQUFnQixHQUFoQixVQUFpQixhQUFhLEVBQUUsWUFBWTtRQUV4QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdkIsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN6QixVQUFVLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9DLCtDQUErQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQiwyQkFBMkI7SUFDL0IsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBRXhDO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN6QztRQUNELHNDQUFzQztRQUN0QyxpQ0FBaUM7UUFFakMsb0JBQW9CO1FBQ3BCLHdDQUF3QztRQUN4QyxJQUFJO0lBRVIsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNEO0lBRWpCO1FBREMsUUFBUTswQ0FDYztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUTs4Q0FDWTtJQUVwQjtRQURBLFFBQVE7MENBQ1M7SUFYRCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEQ1QjtJQUFELGVBQUM7Q0ExREQsQUEwREMsQ0ExRHFDLEVBQUUsQ0FBQyxTQUFTLEdBMERqRDtrQkExRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBTaGlwOmNjLk5vZGU9bnVsbFxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgTGFzZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGRpc3RhbmNlOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eVxuICAgICBsaW5lOm51bWJlciA9NDAwO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgIG9uTG9hZCAoKSB7XG4gICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoNDUsIGNjLndpblNpemUuaGVpZ2h0KTtcbiAgICAgICAgIHZhciBtYW5hZ2VyPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7ICAgIFxuICAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSAwO1xuICAgICAgICAgLy90aGlzLnNjaGVkdWxlKHRoaXMuc2V0SEVJR0hULCAwLjEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcbiAgICB9XG4gICAgLy8gc2V0SEVJR0hUKGRpc3RhbmNlKSB7XG4gICAgLy8gICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSg0NSwgNDAwKTtcbiAgICAvLyAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyQ29sbGlkZXIsIHNlbGZDb2xsaWRlcikgeyBcbiAgICAgICBcbiAgICAgICAgdmFyIGVuZFBvaW50ID0gY2MudjIoKTtcbiAgICAgICAgZW5kUG9pbnQueCA9IHRoaXMuU2hpcC5nZXRQb3NpdGlvbigpLng7XG4gICAgICAgIGVuZFBvaW50LnkgPSB0aGlzLlNoaXAuZ2V0UG9zaXRpb24oKS55O1xuICAgICAgICB2YXIgc3RhcnRQb2ludCA9IGNjLnYyKCk7XG4gICAgICAgIHN0YXJ0UG9pbnQueCA9IHNlbGZDb2xsaWRlci5ub2RlLmdldFBvc2l0aW9uKCkueDtcbiAgICAgICAgc3RhcnRQb2ludC55ID0gc2VsZkNvbGxpZGVyLm5vZGUuZ2V0UG9zaXRpb24oKS55O1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gZW5kUG9pbnQuc3ViKHN0YXJ0UG9pbnQpLm1hZygpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHNlbGZDb2xsaWRlci5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgLy90aGlzLnNldEhFSUdIVChkaXN0YW5jZSk7XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgXG4gICAgICAgIGlmICh0aGlzLmxpbmUgPiB0aGlzLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmUgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKDQ1LHRoaXMubGluZSlcbiAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmUgPSB0aGlzLmRpc3RhbmNlXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoNDUsdGhpcy5saW5lKVxuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5ub2RlLnNldFNjYWxlKDEsIHRoaXMubGluZS81MCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coY2Mud2luU2l6ZS5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKHRoaXMuWDw9NTApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuTGFzZXIuc2NhbGVZKz10aGlzLlggKiBkdCA7IFxuICAgICAgICAvLyB9XG4gICAgICAgXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TestMoveEnemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bef36kwaB1D05HB3otjFIyG', 'TestMoveEnemy');
// Scripts/TestMoveEnemy.ts

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
        _this.initBulletPosition2 = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var moveEnemy = node.getComponent(cc.Graphics);
        // moveEnemy.moveTo(20,20);
        moveEnemy.bezierCurveTo(20, 100, 200, 100, 200, 20);
        // moveEnemy.stroke ();
        var moveUpAction = cc.moveBy(1, cc.v2(0, 200)).easing(cc.easeCubicActionOut());
        this.node.runAction(moveEnemy);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "initBulletPosition2", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGVzdE1vdmVFbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9CSztRQWxCRCx5QkFBbUIsR0FBUyxJQUFJLENBQUM7O0lBa0JqQyxDQUFDO0lBakJELHlCQUFNLEdBQU47UUFDSyxJQUFJLFNBQVMsR0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQywyQkFBMkI7UUFDMUIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELHVCQUF1QjtRQUN2QixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRU4sQ0FBQztJQWpCTDtRQURGLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNrQjtJQUZoQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0J4QjtJQUFELGVBQUM7Q0FwQkwsQUFvQkssQ0FwQmlDLEVBQUUsQ0FBQyxTQUFTLEdBb0I3QztrQkFwQmdCLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpbml0QnVsbGV0UG9zaXRpb24yOmNjLk5vZGU9bnVsbDtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAgdmFyIG1vdmVFbmVteT0gbm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAvLyBtb3ZlRW5lbXkubW92ZVRvKDIwLDIwKTtcbiAgICAgICAgIG1vdmVFbmVteS5iZXppZXJDdXJ2ZVRvKDIwLDEwMCwyMDAsMTAwLDIwMCwyMCk7XG4gICAgICAgIC8vIG1vdmVFbmVteS5zdHJva2UgKCk7XG4gICAgICAgIHZhciBtb3ZlVXBBY3Rpb24gPSBjYy5tb3ZlQnkoMSwgY2MudjIoMCwgMjAwKSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihtb3ZlRW5lbXkpO1xuICAgIH1cblxuICAgIFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICBcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/bulletEnemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd7c5AtAh9JvJb6xgTjItGb', 'bulletEnemy');
// Scripts/bulletEnemy.ts

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
        _this.text = 'hello';
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.BulletSpeed = 500;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            this.node.setScale(0.4, 0.4);
            this.BulletSpeed = 300;
            this.node.setPosition(this.node.position.x, this.node.position.y -= this.BulletSpeed * dt);
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.node.setScale(1, 1);
            this.BulletSpeed = 500;
            this.node.setPosition(this.node.position.x, this.node.position.y -= this.BulletSpeed * dt);
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property
    ], NewClass.prototype, "BulletSpeed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcYnVsbGV0RW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErQkM7UUE1QkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRXZCLHdCQUF3QjtRQUV4QixlQUFlO1FBRWYsaUJBQVcsR0FBVyxHQUFHLENBQUM7O0lBbUI5QixDQUFDO0lBbEJHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFBO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUM5RjtRQUVELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUE7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQzlGO0lBQ0wsQ0FBQztJQTNCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU12QjtRQURDLFFBQVE7aURBQ2lCO0lBWlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStCNUI7SUFBRCxlQUFDO0NBL0JELEFBK0JDLENBL0JxQyxFQUFFLENBQUMsU0FBUyxHQStCakQ7a0JBL0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBAcHJvcGVydHlcbiAgICBCdWxsZXRTcGVlZDogbnVtYmVyID0gNTAwO1xuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgIFxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykgeyBcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgwLjQsIDAuNClcbiAgICAgICAgICAgIHRoaXMuQnVsbGV0U3BlZWQgPSAzMDBcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgLT0gdGhpcy5CdWxsZXRTcGVlZCAqIGR0KTtcbiAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykgeyBcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLCAxKVxuICAgICAgICAgICAgdGhpcy5CdWxsZXRTcGVlZCA9IDUwMFxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSAtPSB0aGlzLkJ1bGxldFNwZWVkICogZHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/bulletMove1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68d34hHq4FAVJBgzgGTpXUZ', 'bulletMove1');
// Scripts/bulletMove1.ts

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
        _this.Cavas = null;
        _this.bulletTime = 100;
        _this.radian = 0;
        _this.BulletSpeed = 1000;
        _this.radianNumber = 75;
        _this.expolosion = null;
        // LIFE-CYCLE CALLBACKS:
        _this.rotation = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
    };
    NewClass.prototype.update = function (dt) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            this.node.setScale(0.5, 0.5);
            this.BulletSpeed = 300;
            this.node.setRotation(this.rotation);
            var radian = this.radianNumber / 360 * 2 * Math.PI;
            this.bulletTime -= 3.5;
            this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.node.setScale(0.9, 0.9);
            this.BulletSpeed = 600;
            this.node.setRotation(this.rotation);
            var radian = this.radianNumber / 360 * 2 * Math.PI;
            this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Cavas", void 0);
    __decorate([
        property
    ], NewClass.prototype, "bulletTime", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radian", void 0);
    __decorate([
        property
    ], NewClass.prototype, "BulletSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radianNumber", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "expolosion", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rotation", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcYnVsbGV0TW92ZTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1REM7UUFyREcsV0FBSyxHQUFTLElBQUksQ0FBQztRQUVuQixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGlCQUFXLEdBQVMsSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLHdCQUF3QjtRQUV4QixjQUFRLEdBQVcsQ0FBQyxDQUFDOztRQXNDckIsaUJBQWlCO0lBQ3JCLENBQUM7SUF0Q0csZUFBZTtJQUNmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO0lBRTVCLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUosSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsa0RBQWtEO2FBQ3JEO1NBQ0o7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzFKLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLGtEQUFrRDthQUNyRDtTQUVKO0lBQ0wsQ0FBQztJQW5ERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNDO0lBRW5CO1FBREMsUUFBUTtnREFDZ0I7SUFFekI7UUFEQyxRQUFROzRDQUNVO0lBR25CO1FBREMsUUFBUTtpREFDZ0I7SUFFekI7UUFEQyxRQUFRO2tEQUNpQjtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNPO0lBRzNCO1FBREMsUUFBUTs4Q0FDWTtJQWhCSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUQ1QjtJQUFELGVBQUM7Q0F2REQsQUF1REMsQ0F2RHFDLEVBQUUsQ0FBQyxTQUFTLEdBdURqRDtrQkF2RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgQ2F2YXM6IE5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGJ1bGxldFRpbWU6IG51bWJlciA9IDEwMDtcbiAgICBAcHJvcGVydHlcbiAgICByYWRpYW46IG51bWJlciA9IDA7XG4gICAgXG4gICAgQHByb3BlcnR5XG4gICAgQnVsbGV0U3BlZWQ6bnVtYmVyID0xMDAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHJhZGlhbk51bWJlcjogbnVtYmVyID0gNzU7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBleHBvbG9zaW9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBAcHJvcGVydHlcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMDtcbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuXG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDAuNSwwLjUpXG4gICAgICAgICAgICB0aGlzLkJ1bGxldFNwZWVkID0gMzAwO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgICAgbGV0IHJhZGlhbiA9IHRoaXMucmFkaWFuTnVtYmVyIC8gMzYwICogMiAqIE1hdGguUEk7XG4gICAgICAgICAgICB0aGlzLmJ1bGxldFRpbWUgLT0gMy41O1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICs9IE1hdGguY29zKHJhZGlhbikgKiBkdCAqIHRoaXMuQnVsbGV0U3BlZWQsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IE1hdGguc2luKHJhZGlhbikgKiB0aGlzLkJ1bGxldFNwZWVkICogZHQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5wb3NpdGlvbi55ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyA1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgwLjksMC45KVxuICAgICAgICAgICAgdGhpcy5CdWxsZXRTcGVlZCA9IDYwMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgIGxldCByYWRpYW4gPSB0aGlzLnJhZGlhbk51bWJlciAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICs9IE1hdGguY29zKHJhZGlhbikgKiBkdCAqIHRoaXMuQnVsbGV0U3BlZWQsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IE1hdGguc2luKHJhZGlhbikgKiB0aGlzLkJ1bGxldFNwZWVkICogZHQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5wb3NpdGlvbi55ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyA1O1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/moveTest1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb460JAQyBBsaR69Cf699uA', 'moveTest1');
// Scripts/moveTest1.ts

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
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        //this.moveEnemy = this.moveTo();
        //this.node.runAction(this.moveEnemy);
        this.moveTo();
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.moveTo = function () {
        // var seq = cc.moveTo(0.5, -5.579, -87.869).easing(cc.easeCircleActionInOut())
        // var seq1= cc.moveTo(0.5, 5.661, 495.599).easing(cc.easeCircleActionInOut())
        //  return cc.sequence(seq,seq1);
        var bezier = [cc.v2(131.530291, -231.3225277), cc.v2(187, 141), cc.v2(300, 100), cc.v2(131.530291, -231.3225277)];
        this.node.runAction(cc.bezierTo(2, bezier));
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcbW92ZVRlc3QxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNEJDO1FBekJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFxQnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBcEJHLHdCQUF3QjtJQUd4Qix5QkFBTSxHQUFOO1FBQ0ksaUNBQWlDO1FBQ2pDLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNBLCtFQUErRTtRQUMvRSw4RUFBOEU7UUFDOUUsaUNBQWlDO1FBQ2pDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDakgsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRCNUI7SUFBRCxlQUFDO0NBNUJELEFBNEJDLENBNUJxQyxFQUFFLENBQUMsU0FBUyxHQTRCakQ7a0JBNUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuICAgIG1vdmVFbmVteTpjYy5BY3Rpb25JbnRlcnZhbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgICBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvL3RoaXMubW92ZUVuZW15ID0gdGhpcy5tb3ZlVG8oKTtcbiAgICAgICAgLy90aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMubW92ZUVuZW15KTtcbiAgICAgICAgdGhpcy5tb3ZlVG8oKVxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0gICBcbiAgICBtb3ZlVG8oKXtcbiAgICAvLyB2YXIgc2VxID0gY2MubW92ZVRvKDAuNSwgLTUuNTc5LCAtODcuODY5KS5lYXNpbmcoY2MuZWFzZUNpcmNsZUFjdGlvbkluT3V0KCkpXG4gICAgLy8gdmFyIHNlcTE9IGNjLm1vdmVUbygwLjUsIDUuNjYxLCA0OTUuNTk5KS5lYXNpbmcoY2MuZWFzZUNpcmNsZUFjdGlvbkluT3V0KCkpXG4gICAgLy8gIHJldHVybiBjYy5zZXF1ZW5jZShzZXEsc2VxMSk7XG4gICAgdmFyIGJlemllciA9IFtjYy52MigxMzEuNTMwMjkxLCAtMjMxLjMyMjUyNzcpLCBjYy52MigxODcsIDE0MSksIGNjLnYyKDMwMCwgMTAwKSxjYy52MigxMzEuNTMwMjkxLCAtMjMxLjMyMjUyNzcpXTtcbiAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLmJlemllclRvKDIsYmV6aWVyKSk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/smoke.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '936f11Dd2xJZrQE/j7J0vVS', 'smoke');
// Scripts/smoke.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var action = new cc.Blink(2, 20);
    this.node.runAction(action.repeatForever());
    console.log("chay dc");
  } // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc21va2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJhY3Rpb24iLCJCbGluayIsIm5vZGUiLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZlEsR0FIUDtBQXFCTDtBQUVDQyxFQUFBQSxNQUFNLEVBQUcsa0JBQVk7QUFFbEIsUUFBSUMsTUFBTSxHQUFHLElBQUlMLEVBQUUsQ0FBQ00sS0FBUCxDQUFhLENBQWIsRUFBZSxFQUFmLENBQWI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLFNBQVYsQ0FBb0JILE1BQU0sQ0FBQ0ksYUFBUCxFQUFwQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0gsR0E1QkksQ0FnQ0w7O0FBaENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgIG9uTG9hZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFxuICAgICAgICB2YXIgYWN0aW9uID0gbmV3IGNjLkJsaW5rKDIsMjApO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbi5yZXBlYXRGb3JldmVyKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXkgZGNcIik7XG4gICAgfSxcbiAgXG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/taptoplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6baa8wb5F9Gnor22dpULPOl', 'taptoplay');
// Scripts/taptoplay.ts

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
        _this.gameStar = false;
        _this.initBulletPosition = null;
        _this.touches = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.spawn = function (even) {
        this.node.destroy();
        //Boss.Instance.open();
    };
    NewClass.prototype.onLoad = function () {
        var node = cc.find('Canvas/ShipHero');
        console.log(node);
        node.on(cc.Node.EventType.TOUCH_START, this.spawn, this);
        //this.gameStar = true;
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property
    ], NewClass.prototype, "gameStar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "initBulletPosition", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdGFwdG9wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9NLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0JDO1FBdEJFLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsd0JBQWtCLEdBQVMsSUFBSSxDQUFDO1FBQ2hDLGFBQU8sR0FBYyxFQUFFLENBQUE7O1FBa0J0QixpQkFBaUI7SUFDckIsQ0FBQztJQWxCRyx3QkFBd0I7SUFDdkIsd0JBQUssR0FBTCxVQUFNLElBQUk7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLHVCQUF1QjtJQUMxQixDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsdUJBQXVCO0lBRTFCLENBQUM7SUFFRix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQW5CRjtRQURDLFFBQVE7OENBQ2lCO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2M7SUFKZCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0I1QjtJQUFELGVBQUM7Q0F4QkQsQUF3QkMsQ0F4QnFDLEVBQUUsQ0FBQyxTQUFTLEdBd0JqRDtrQkF4Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbmltcG9ydCBCb3NzIGZyb20gXCIuL0Jvc3NcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgQHByb3BlcnR5XG4gICBnYW1lU3RhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICBpbml0QnVsbGV0UG9zaXRpb246Y2MuTm9kZT1udWxsO1xuICAgdG91Y2hlczogY2MuVmVjMltdID0gW11cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICAgc3Bhd24oZXZlbil7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIC8vQm9zcy5JbnN0YW5jZS5vcGVuKCk7XG4gICAgIH1cbiAgICAgb25Mb2FkICgpIHtcbiAgICAgICB2YXIgbm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9TaGlwSGVybycpO1xuICAgICAgIGNvbnNvbGUubG9nKG5vZGUpXG4gICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuc3Bhd24sIHRoaXMpOyBcbiAgICAgICAgLy90aGlzLmdhbWVTdGFyID0gdHJ1ZTtcbiAgICAgIFxuICAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Bad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e941d4bJkJIcq8YGp0hd2Mt', 'Bad');
// Scripts/Bad.ts

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
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bad = /** @class */ (function (_super) {
    __extends(Bad, _super);
    function Bad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemyLife = 2;
        _this.enemyNumber = 46;
        _this.explosion = null;
        _this.fire = null;
        _this.shield = null;
        return _this;
        // showRevivePopup() {
        //   GameController.Instance.showPopup();
        //   };
        // removeEx() {
        //   this.node.destroy();
        //   // GameController.Instance.spawnShips();
        //   this.node.parent.getComponent('Game').spawnShips();
        //  }
        // update (dt) {}
    }
    Bad.prototype.onCollisionEnter = function (other, self) {
        console.log(other.name + self.name);
        GameController_1.default.Instance.decreaseEnemy();
        cc.audioEngine.playEffect(this.explosion, false);
        this.explosionRun();
        if (other.name == "Bullets<CircleCollider>" && self.name == "enemy2<BoxCollider>") {
            this.enemyLife -= 1;
            this.enemyNumber -= 1;
            console.log(this.enemyNumber);
            if ((this.enemyLife == 0)) {
                this.explosionRun();
                this.node.destroy();
                cc.audioEngine.playEffect(this.explosion, false);
                // var anim = this.getComponent(cc.Animation); 
                //
            }
        }
        if (other.name == "Bullets<CircleCollider>" && self.name == "enemy<BoxCollider>") {
            this.enemyLife -= 1;
            this.enemyNumber -= 1;
            console.log(this.enemyNumber);
            console.log("CHAY DUOC");
            if ((this.enemyLife == 0)) {
                //GameController.Instance.decreaseEnemy();
                cc.audioEngine.playEffect(this.explosion, false);
                //  var explosion =this.node.getPosition();
                // console.log(explosion);
                this.explosionRun();
                this.enemyNumber -= 1;
                this.node.destroy();
                //this.spawShield();
                console.log("CHAY DUOC");
            }
        }
        if (other.name == "Bullets<CircleCollider>" && self.name == "enemy3<PolygonCollider>") {
            this.enemyLife -= 1;
            this.enemyNumber -= 1;
            console.log(this.enemyNumber);
            if ((this.enemyLife == 0)) {
                cc.audioEngine.playEffect(this.explosion, false);
                //  var explosion =this.node.getPosition();
                // console.log(explosion);
                this.explosionRun();
                this.node.destroy();
                // this.spawShield();
            }
        }
        //  if (this.enemyNumber == 0) {
        //   this.showRevivePopup();
        //  }
    };
    //tao item shield
    Bad.prototype.spawShield = function () {
        var shield = this.node.getPosition();
        var shieldRun = cc.instantiate(this.shield);
        this.node.parent.addChild(shieldRun);
        shieldRun.setPosition(this.node.position.x, this.node.position.y);
    };
    // tao vu no 
    Bad.prototype.explosionRun = function () {
        var explosion = this.node.getPosition();
        // console.log(explosion);
        var explosionRun = cc.instantiate(this.fire);
        this.node.parent.addChild(explosionRun);
        explosionRun.setPosition(this.node.position.x, this.node.position.y);
        var animation = explosionRun.getComponent(cc.Animation);
        animation.on('finished', this.onFinished, explosionRun);
    };
    Bad.prototype.die = function () {
        ///
    };
    //  spawnBigGuy(){
    //   var newBoss = cc.instantiate(this.bigguy);
    //   newBoss.setPosition(this.node.getChildByName('bigguy').position.x,this.node.getChildByName('bigguy').position.y); 
    //   this.node.addChild(newBoss);
    //  } 
    Bad.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    //   spawn(even){
    //     var moveRight= cc.moveBy(2, 0, -200);
    //     this.node.runAction(moveRight);
    //  }
    Bad.prototype.start = function () {
    };
    __decorate([
        property
    ], Bad.prototype, "enemyLife", void 0);
    __decorate([
        property
    ], Bad.prototype, "enemyNumber", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        }),
        property({
            type: cc.AudioClip
        })
    ], Bad.prototype, "explosion", void 0);
    __decorate([
        property(cc.Prefab)
    ], Bad.prototype, "fire", void 0);
    __decorate([
        property(cc.Prefab)
    ], Bad.prototype, "shield", void 0);
    Bad = __decorate([
        ccclass
    ], Bad);
    return Bad;
}(cc.Component));
exports.default = Bad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUNBQ0M7SUFoQkYsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQWlJdkI7SUFBRCxVQUFDO0NBaklELEFBaUlDLENBaklnQyxFQUFFLENBQUMsU0FBUyxHQWlJNUM7a0JBaklvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvc3NNb3ZlIGZyb20gXCIuL0Jvc3NNb3ZlXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBJbml0Qm9zc0NvbnRyb2xsZXIgZnJvbSBcIi4vSW5pdEJvc3NDb250cm9sbGVyXCI7XG5pbXBvcnQgUG9wdXBXaW5kb3cgZnJvbSBcIi4vUG9wdXBXaW5kb3dcIjtcbmltcG9ydCBHYW1lVUljb250cm9sbGVyIGZyb20gXCIuL0dhbWVVSWNvbnRyb2xsZXJcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eVxuICBlbmVteUxpZmU6bnVtYmVyID0yO1xuICBAcHJvcGVydHlcbiAgZW5lbXlOdW1iZXI6bnVtYmVyID00NjtcbiAgYWN0aW9uOiBjYy5BY3Rpb25JbnRlcnZhbDtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOmNjLkF1ZGlvQ2xpcFxuICB9KVxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6Y2MuQXVkaW9DbGlwXG4gIH0pXG4gIGV4cGxvc2lvbiA9bnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgZmlyZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHNoaWVsZCA6Y2MuTm9kZT1udWxsO1xuIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsc2VsZil7XG4gICBjb25zb2xlLmxvZyhvdGhlci5uYW1lK3NlbGYubmFtZSk7XG4gICBHYW1lQ29udHJvbGxlci5JbnN0YW5jZS5kZWNyZWFzZUVuZW15KCk7XG4gICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhwbG9zaW9uLGZhbHNlKTsgICAgICAgXG4gICB0aGlzLmV4cGxvc2lvblJ1bigpOyBcbiAgICAgICAgaWYob3RoZXIubmFtZSA9PSBcIkJ1bGxldHM8Q2lyY2xlQ29sbGlkZXI+XCIgJiYgc2VsZi5uYW1lID09IFwiZW5lbXkyPEJveENvbGxpZGVyPlwiKXtcbiAgICAgICAgICB0aGlzLmVuZW15TGlmZS09IDE7XG4gICAgICAgICAgdGhpcy5lbmVteU51bWJlciAtPSAxO1xuICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5lbmVteU51bWJlcik7XG4gICAgICAgICAgICAgICAgICBpZigodGhpcy5lbmVteUxpZmU9PTApKXsgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uUnVuKCk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTsgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhwbG9zaW9uLGZhbHNlKTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7IFxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgfVxuICAgICAgaWYob3RoZXIubmFtZSA9PSBcIkJ1bGxldHM8Q2lyY2xlQ29sbGlkZXI+XCIgJiYgc2VsZi5uYW1lID09IFwiZW5lbXk8Qm94Q29sbGlkZXI+XCIpe1xuICAgICAgICB0aGlzLmVuZW15TGlmZS09IDE7XG4gICAgICAgIHRoaXMuZW5lbXlOdW1iZXIgLT0gMTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW5lbXlOdW1iZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNIQVkgRFVPQ1wiICk7XG4gICAgICAgICAgICAgICAgICBpZigodGhpcy5lbmVteUxpZmU9PTApKXtcbiAgICAgICAgICAgICAgICAgICAgLy9HYW1lQ29udHJvbGxlci5JbnN0YW5jZS5kZWNyZWFzZUVuZW15KCk7XG4gICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmV4cGxvc2lvbixmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAvLyAgdmFyIGV4cGxvc2lvbiA9dGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhleHBsb3Npb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvc2lvblJ1bigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15TnVtYmVyIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zcGF3U2hpZWxkKCk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNIQVkgRFVPQ1wiICk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgIH0gICAgIFxuICAgICAgaWYob3RoZXIubmFtZSA9PSBcIkJ1bGxldHM8Q2lyY2xlQ29sbGlkZXI+XCIgJiYgc2VsZi5uYW1lID09IFwiZW5lbXkzPFBvbHlnb25Db2xsaWRlcj5cIil7XG4gICAgICAgIHRoaXMuZW5lbXlMaWZlLT0gMTtcbiAgICAgICAgdGhpcy5lbmVteU51bWJlci09IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW5lbXlOdW1iZXIpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoKHRoaXMuZW5lbXlMaWZlPT0wKSl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5leHBsb3Npb24sZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgLy8gIHZhciBleHBsb3Npb24gPXRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXhwbG9zaW9uKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uUnVuKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zcGF3U2hpZWxkKCk7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgfVxuICAgXG4gICBcbiAgLy8gIGlmICh0aGlzLmVuZW15TnVtYmVyID09IDApIHtcbiAgLy8gICB0aGlzLnNob3dSZXZpdmVQb3B1cCgpO1xuICAvLyAgfVxuICB9XG4gIC8vdGFvIGl0ZW0gc2hpZWxkXG4gIHNwYXdTaGllbGQoKSB7XG4gICAgdmFyIHNoaWVsZCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgIHZhciBzaGllbGRSdW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaWVsZCk7XG4gICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzaGllbGRSdW4pO1xuICAgIHNoaWVsZFJ1bi5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xuICAgIFxufVxuICAgIC8vIHRhbyB2dSBubyBcbiAgICBleHBsb3Npb25SdW4oKXtcbiAgICAgIHZhciBleHBsb3Npb24gPXRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgLy8gY29uc29sZS5sb2coZXhwbG9zaW9uKTtcbiAgICAgIHZhciBleHBsb3Npb25SdW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZpcmUpO1xuICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChleHBsb3Npb25SdW4pO1xuICAgICAgZXhwbG9zaW9uUnVuLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LHRoaXMubm9kZS5wb3NpdGlvbi55KTtcbiAgICAgIHZhciBhbmltYXRpb24gPWV4cGxvc2lvblJ1bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgIGFuaW1hdGlvbi5vbignZmluaXNoZWQnLHRoaXMub25GaW5pc2hlZCwgZXhwbG9zaW9uUnVuKTtcbiAgICB9XG4gICAgZGllKCl7XG4gICAgICAvLy9cbiAgICB9XG4gIC8vICBzcGF3bkJpZ0d1eSgpe1xuICAvLyAgIHZhciBuZXdCb3NzID0gY2MuaW5zdGFudGlhdGUodGhpcy5iaWdndXkpO1xuICAvLyAgIG5ld0Jvc3Muc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdiaWdndXknKS5wb3NpdGlvbi54LHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYmlnZ3V5JykucG9zaXRpb24ueSk7IFxuICAvLyAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCb3NzKTtcbiAgLy8gIH0gXG4gICAgICBvbkxvYWQgKCkge1xuICAgICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICBcbiAgICAgIH1cbiAgICAvLyAgIHNwYXduKGV2ZW4pe1xuICAgIC8vICAgICB2YXIgbW92ZVJpZ2h0PSBjYy5tb3ZlQnkoMiwgMCwgLTIwMCk7XG4gICAgLy8gICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZVJpZ2h0KTtcbiAgICAvLyAgfVxuICAgIHN0YXJ0ICgpIHtcbiAgXG4gICAgfVxuXG4gICBcbiAgLy8gc2hvd1Jldml2ZVBvcHVwKCkge1xuICAvLyAgIEdhbWVDb250cm9sbGVyLkluc3RhbmNlLnNob3dQb3B1cCgpO1xuICAvLyAgIH07XG4gICAgXG4gIC8vIHJlbW92ZUV4KCkge1xuICAvLyAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gIC8vICAgLy8gR2FtZUNvbnRyb2xsZXIuSW5zdGFuY2Uuc3Bhd25TaGlwcygpO1xuICAvLyAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdHYW1lJykuc3Bhd25TaGlwcygpO1xuICAvLyAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AutoDestroy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1189CRpwpCWJxBb+3b90kN', 'AutoDestroy');
// Scripts/AutoDestroy.ts

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
var AutoDestroy = /** @class */ (function (_super) {
    __extends(AutoDestroy, _super);
    function AutoDestroy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDestroy.prototype.onEnable = function () {
        this.bazier();
    };
    AutoDestroy.prototype.onLoad = function () { this.bazier(); };
    AutoDestroy.prototype.bazier = function () {
        var ctx = this.node.getComponent(cc.Graphics);
        ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
        //ctx.stroke();
    };
    AutoDestroy.prototype.start = function () {
    };
    AutoDestroy = __decorate([
        ccclass
    ], AutoDestroy);
    return AutoDestroy;
}(cc.Component));
exports.default = AutoDestroy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQXV0b0Rlc3Ryb3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBa0JBLENBQUM7SUFoQkMsOEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsNEJBQU0sR0FBTixjQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUM7SUFDMUIsNEJBQU0sR0FBTjtRQUNFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsZUFBZTtJQUNqQixDQUFDO0lBQ0MsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFmZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtCL0I7SUFBRCxrQkFBQztDQWxCRCxBQWtCQyxDQWxCd0MsRUFBRSxDQUFDLFNBQVMsR0FrQnBEO2tCQWxCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9EZXN0cm95IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICBvbkVuYWJsZSgpe1xuICAgIHRoaXMuYmF6aWVyKCk7XG4gIH1cblxuICBvbkxvYWQoKSB7IHRoaXMuYmF6aWVyKCk7fVxuICBiYXppZXIoKXtcbiAgICB2YXIgY3R4ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgXG4gICAgY3R4LmJlemllckN1cnZlVG8oMjAsIDEwMCwgMjAwLCAxMDAsIDIwMCwgMjApO1xuICAgIC8vY3R4LnN0cm9rZSgpO1xuICB9XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
