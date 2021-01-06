"use strict";
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