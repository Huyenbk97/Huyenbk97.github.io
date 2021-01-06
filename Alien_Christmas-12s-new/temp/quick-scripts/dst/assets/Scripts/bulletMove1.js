
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/bulletMove1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68d34hHq4FAVJBgzgGTpXUZ', 'bulletMove1');
// Scripts/bulletMove1.ts

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
        _this.Cavas = null;
        _this.bulletTime = 100;
        _this.radian = 0;
        _this.BulletSpeed = 1000;
        _this.radianNumber = 75;
        _this.expolosion = null;
        // LIFE-CYCLE CALLBACKS:
        _this.rotation = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
    };
    NewClass.prototype.update = function (dt) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            this.node.setScale(0.5, 0.5);
            this.BulletSpeed = 300;
            this.node.setRotation(this.rotation);
            var radian = this.radianNumber / 360 * 2 * Math.PI;
            this.bulletTime -= 3.5;
            this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.node.setScale(0.9, 0.9);
            this.BulletSpeed = 600;
            this.node.setRotation(this.rotation);
            var radian = this.radianNumber / 360 * 2 * Math.PI;
            this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Cavas", void 0);
    __decorate([
        property
    ], NewClass.prototype, "bulletTime", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radian", void 0);
    __decorate([
        property
    ], NewClass.prototype, "BulletSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radianNumber", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "expolosion", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rotation", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcYnVsbGV0TW92ZTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1REM7UUFyREcsV0FBSyxHQUFTLElBQUksQ0FBQztRQUVuQixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGlCQUFXLEdBQVMsSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLHdCQUF3QjtRQUV4QixjQUFRLEdBQVcsQ0FBQyxDQUFDOztRQXNDckIsaUJBQWlCO0lBQ3JCLENBQUM7SUF0Q0csZUFBZTtJQUNmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO0lBRTVCLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUosSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsa0RBQWtEO2FBQ3JEO1NBQ0o7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzFKLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLGtEQUFrRDthQUNyRDtTQUVKO0lBQ0wsQ0FBQztJQW5ERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNDO0lBRW5CO1FBREMsUUFBUTtnREFDZ0I7SUFFekI7UUFEQyxRQUFROzRDQUNVO0lBR25CO1FBREMsUUFBUTtpREFDZ0I7SUFFekI7UUFEQyxRQUFRO2tEQUNpQjtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNPO0lBRzNCO1FBREMsUUFBUTs4Q0FDWTtJQWhCSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUQ1QjtJQUFELGVBQUM7Q0F2REQsQUF1REMsQ0F2RHFDLEVBQUUsQ0FBQyxTQUFTLEdBdURqRDtrQkF2RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgQ2F2YXM6IE5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGJ1bGxldFRpbWU6IG51bWJlciA9IDEwMDtcbiAgICBAcHJvcGVydHlcbiAgICByYWRpYW46IG51bWJlciA9IDA7XG4gICAgXG4gICAgQHByb3BlcnR5XG4gICAgQnVsbGV0U3BlZWQ6bnVtYmVyID0xMDAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHJhZGlhbk51bWJlcjogbnVtYmVyID0gNzU7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBleHBvbG9zaW9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBAcHJvcGVydHlcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMDtcbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuXG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDAuNSwwLjUpXG4gICAgICAgICAgICB0aGlzLkJ1bGxldFNwZWVkID0gMzAwO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgICAgbGV0IHJhZGlhbiA9IHRoaXMucmFkaWFuTnVtYmVyIC8gMzYwICogMiAqIE1hdGguUEk7XG4gICAgICAgICAgICB0aGlzLmJ1bGxldFRpbWUgLT0gMy41O1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICs9IE1hdGguY29zKHJhZGlhbikgKiBkdCAqIHRoaXMuQnVsbGV0U3BlZWQsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IE1hdGguc2luKHJhZGlhbikgKiB0aGlzLkJ1bGxldFNwZWVkICogZHQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5wb3NpdGlvbi55ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyA1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgwLjksMC45KVxuICAgICAgICAgICAgdGhpcy5CdWxsZXRTcGVlZCA9IDYwMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgIGxldCByYWRpYW4gPSB0aGlzLnJhZGlhbk51bWJlciAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICs9IE1hdGguY29zKHJhZGlhbikgKiBkdCAqIHRoaXMuQnVsbGV0U3BlZWQsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IE1hdGguc2luKHJhZGlhbikgKiB0aGlzLkJ1bGxldFNwZWVkICogZHQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5wb3NpdGlvbi55ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyA1O1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19