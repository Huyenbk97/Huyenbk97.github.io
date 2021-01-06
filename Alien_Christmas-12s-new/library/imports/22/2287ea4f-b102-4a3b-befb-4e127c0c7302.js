"use strict";
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