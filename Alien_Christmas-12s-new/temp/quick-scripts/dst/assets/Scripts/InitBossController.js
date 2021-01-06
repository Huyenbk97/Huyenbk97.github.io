
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