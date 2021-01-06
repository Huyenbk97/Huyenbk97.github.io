"use strict";
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