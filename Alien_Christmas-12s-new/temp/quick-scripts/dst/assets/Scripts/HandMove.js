
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