
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04fb20q+KJK+Iumls2Uv2+q', 'Bullet');
// Scripts/Bullet.ts

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
        _this.BulletSpeed = 1000;
        _this.radianNumber = 75;
        // LIFE-CYCLE CALLBACKS:
        _this.rotation = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.node.setRotation(this.rotation);
            this.node.setScale(1.4, 1.4);
            for (var radianNumber = 90; radianNumber < 100; radianNumber++) {
                var radian = this.radianNumber / 360 * 2 * Math.PI;
                this.bulletTime -= 3.5;
                this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
                if (this.bulletTime == 0) {
                    this.node.destroy();
                    //this.node.position.y = this.node.position.y + 5;
                }
                if (this.radianNumber == 100) {
                    this.radianNumber = 90;
                }
            }
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
            this.node.setRotation(this.rotation);
            this.node.setScale(0.8, 0.8);
            var radian = this.radianNumber / 360 * 2 * Math.PI;
            this.bulletTime -= 3.5;
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
    ], NewClass.prototype, "BulletSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "radianNumber", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0RDO1FBOUNHLFdBQUssR0FBUyxJQUFJLENBQUM7UUFFbkIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFFekIsaUJBQVcsR0FBUyxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsd0JBQXdCO1FBRXhCLGNBQVEsR0FBVyxDQUFDLENBQUM7O1FBb0NyQixpQkFBaUI7SUFDckIsQ0FBQztJQXBDRyxlQUFlO0lBQ2Ysd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRix5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUVMLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEtBQUssSUFBSSxZQUFZLEdBQUMsRUFBRSxFQUFFLFlBQVksR0FBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQUU7Z0JBQzVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDMUosSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDcEIsa0RBQWtEO2lCQUNyRDtnQkFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUUsR0FBRyxFQUFFO29CQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztpQkFDMUI7YUFDSjtTQUVKO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUMsT0FBTyxFQUFFO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxSixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixrREFBa0Q7YUFDckQ7U0FDRDtJQUNELENBQUM7SUE1Q0o7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDQztJQUVuQjtRQURDLFFBQVE7Z0RBQ2dCO0lBRXpCO1FBREMsUUFBUTtpREFDZ0I7SUFFekI7UUFEQyxRQUFRO2tEQUNpQjtJQUcxQjtRQURDLFFBQVE7OENBQ1k7SUFYSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RqRDtrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgQ2F2YXM6IE5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGJ1bGxldFRpbWU6IG51bWJlciA9IDEwMDtcbiAgICBAcHJvcGVydHlcbiAgICBCdWxsZXRTcGVlZDpudW1iZXIgPTEwMDA7XG4gICAgQHByb3BlcnR5XG4gICAgcmFkaWFuTnVtYmVyOiBudW1iZXIgPSA3NTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBAcHJvcGVydHlcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMDtcbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICB1cGRhdGUoZHQpIHtcbiAgICAgICBcbiAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEuNCwgMS40KTtcbiAgICAgICAgICAgZm9yIChsZXQgcmFkaWFuTnVtYmVyPTkwOyByYWRpYW5OdW1iZXIgPDEwMDsgcmFkaWFuTnVtYmVyKyspIHtcbiAgICAgICAgICAgIGxldCByYWRpYW4gPSB0aGlzLnJhZGlhbk51bWJlciAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgdGhpcy5idWxsZXRUaW1lIC09IDMuNTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCArPSBNYXRoLmNvcyhyYWRpYW4pICogZHQgKiB0aGlzLkJ1bGxldFNwZWVkLCB0aGlzLm5vZGUucG9zaXRpb24ueSArPSBNYXRoLnNpbihyYWRpYW4pICogdGhpcy5CdWxsZXRTcGVlZCAqIGR0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bGxldFRpbWUgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgLy90aGlzLm5vZGUucG9zaXRpb24ueSA9IHRoaXMubm9kZS5wb3NpdGlvbi55ICsgNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGlmICh0aGlzLnJhZGlhbk51bWJlcj09MTAwKSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5yYWRpYW5OdW1iZXIgPSA5MDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgXG4gICAgICAgfVxuICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7IFxuICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24odGhpcy5yb3RhdGlvbik7XG4gICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgwLjgsMC44KTtcbiAgICAgICAgbGV0IHJhZGlhbiA9IHRoaXMucmFkaWFuTnVtYmVyIC8gMzYwICogMiAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMuYnVsbGV0VGltZSAtPSAzLjU7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCArPSBNYXRoLmNvcyhyYWRpYW4pICogZHQgKiB0aGlzLkJ1bGxldFNwZWVkLCB0aGlzLm5vZGUucG9zaXRpb24ueSArPSBNYXRoLnNpbihyYWRpYW4pICogdGhpcy5CdWxsZXRTcGVlZCAqIGR0KTtcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy90aGlzLm5vZGUucG9zaXRpb24ueSA9IHRoaXMubm9kZS5wb3NpdGlvbi55ICsgNTtcbiAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==