
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