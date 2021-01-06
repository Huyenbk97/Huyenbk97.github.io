
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PopupWindow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUG9wdXBXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF5QkM7UUF2Qkcsd0JBQXdCO1FBRXhCLFdBQUssR0FBUyxJQUFJLENBQUM7O1FBb0JuQixpQkFBaUI7SUFDckIsQ0FBQztJQXBCRyw0QkFBTSxHQUFOO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FDUCxPQUFPLENBQ1YsQ0FBQztRQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFDQSxpQ0FBVyxHQUFYO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FDSCxPQUFPLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7UUFDcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEYsQ0FBQztJQXJCRSxvQkFBUSxHQUFnQixJQUFJLENBQUM7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDQztJQUpGLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F5Qi9CO0lBQUQsa0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QndDLEVBQUUsQ0FBQyxTQUFTLEdBeUJwRDtrQkF6Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpbmRvdyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gc3RhdGljIEluc3RhbmNlOiBQb3B1cFdpbmRvdyA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXA6Y2MuTm9kZT1udWxsO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgXCJwb3B1cFwiXG4gICAgICk7XG4gICAgICAgdGhpcy5wb3B1cC5hY3RpdmU9dHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgXG4gICAgfVxuICAgICBzaG93X1dpbmRvdygpe1xuIGNvbnNvbGUubG9nKFxuICAgICAgICAgXCJwb3B1cFwiKTtcbiAgICAgIFxuICAgICAgdGhpcy5ub2RlLm9wYWNpdHk9MDtcbiAgICAgIHRoaXMubm9kZS5zY2FsZT0wLjI7XG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSx7c2NhbGU6MSxvcGFjaXR5OjI1NX0se2Vhc2luZzogXCJxdWFydEluT3V0XCJ9KS5zdGFydCgpO1xuICAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19