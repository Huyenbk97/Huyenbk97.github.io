"use strict";
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