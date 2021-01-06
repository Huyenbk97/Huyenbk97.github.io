"use strict";
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