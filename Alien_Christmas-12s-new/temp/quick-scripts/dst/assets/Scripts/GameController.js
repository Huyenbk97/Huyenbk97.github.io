
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