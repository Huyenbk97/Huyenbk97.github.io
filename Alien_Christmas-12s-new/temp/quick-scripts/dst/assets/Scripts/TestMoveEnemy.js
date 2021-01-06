
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