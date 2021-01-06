
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TestBullets.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f830U7edBJ2r30+ZjAvitx', 'TestBullets');
// Scripts/TestBullets.ts

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
            this.node.setScale(0.4, 0.4);
            this.BulletSpeed = 400;
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
            //console.log("Run in function update() time : ", dt);
            this.node.setScale(1, 1);
            dt += dt;
            //console.log(dt);
            if (dt <= 0.035) {
                this.node.setPosition(this.node.position.x += Math.cos(35 / 360 * 2 * Math.PI) * dt * this.BulletSpeed, this.node.position.y += Math.sin(45 / 360 * 2 * Math.PI) * this.BulletSpeed * dt);
            }
            else if (dt > 0.035) {
                this.node.setPosition(this.node.position.x += Math.cos(125 / 360 * 2 * Math.PI) * dt * this.BulletSpeed, this.node.position.y += Math.sin(45 / 360 * 2 * Math.PI) * this.BulletSpeed * dt);
            }
            // 
            // this.BulletSpeed = 800;
            // this.node.setRotation(this.rotation);
            // let radian = this.radianNumber / 360 * 2 * Math.PI;
            // this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGVzdEJ1bGxldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtRUM7UUFqRUcsV0FBSyxHQUFTLElBQUksQ0FBQztRQUVuQixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGlCQUFXLEdBQVMsSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLHdCQUF3QjtRQUV4QixjQUFRLEdBQVcsQ0FBQyxDQUFDOztRQWtEckIsaUJBQWlCO0lBQ3JCLENBQUM7SUFsREcsZUFBZTtJQUNmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO0lBRTVCLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FB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QyxNQUFNLENBQUM7Z0RBQ087SUFHM0I7UUFEQyxRQUFROzhDQUNZO0lBaEJKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRTVCO0lBQUQsZUFBQztDQW5FRCxBQW1FQyxDQW5FcUMsRUFBRSxDQUFDLFNBQVMsR0FtRWpEO2tCQW5Fb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBDYXZhczogTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgYnVsbGV0VGltZTogbnVtYmVyID0gMTAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHJhZGlhbjogbnVtYmVyID0gMDtcbiAgICBcbiAgICBAcHJvcGVydHlcbiAgICBCdWxsZXRTcGVlZDpudW1iZXIgPTEwMDA7XG4gICAgQHByb3BlcnR5XG4gICAgcmFkaWFuTnVtYmVyOiBudW1iZXIgPSA3NTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGV4cG9sb3Npb246IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eVxuICAgIHJvdGF0aW9uOiBudW1iZXIgPSAwO1xuICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG5cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMC40LDAuNClcbiAgICAgICAgICAgIHRoaXMuQnVsbGV0U3BlZWQgPSA0MDA7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24odGhpcy5yb3RhdGlvbik7XG4gICAgICAgICAgICBsZXQgcmFkaWFuID0gdGhpcy5yYWRpYW5OdW1iZXIgLyAzNjAgKiAyICogTWF0aC5QSTtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0VGltZSAtPSAzLjU7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MocmFkaWFuKSAqIGR0ICogdGhpcy5CdWxsZXRTcGVlZCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKz0gTWF0aC5zaW4ocmFkaWFuKSAqIHRoaXMuQnVsbGV0U3BlZWQgKiBkdCk7XG4gICAgICAgICAgICBpZiAodGhpcy5idWxsZXRUaW1lID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnBvc2l0aW9uLnkgPSB0aGlzLm5vZGUucG9zaXRpb24ueSArIDU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJ1biBpbiBmdW5jdGlvbiB1cGRhdGUoKSB0aW1lIDogXCIsIGR0KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLCAxKTtcbiAgICAgICAgICAgIGR0ICs9IGR0O1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChkdDw9MC4wMzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MoMzUvIDM2MCAqIDIgKiBNYXRoLlBJKSAqIGR0ICogdGhpcy5CdWxsZXRTcGVlZCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKz0gTWF0aC5zaW4oNDUvIDM2MCAqIDIgKiBNYXRoLlBJKSAqIHRoaXMuQnVsbGV0U3BlZWQgKiBkdCk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZHQ+MC4wMzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MoMTI1LyAzNjAgKiAyICogTWF0aC5QSSkgKiBkdCAqIHRoaXMuQnVsbGV0U3BlZWQsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IE1hdGguc2luKDQ1LyAzNjAgKiAyICogTWF0aC5QSSkgKiB0aGlzLkJ1bGxldFNwZWVkICogZHQpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgLy8gdGhpcy5CdWxsZXRTcGVlZCA9IDgwMDtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRSb3RhdGlvbih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgIC8vIGxldCByYWRpYW4gPSB0aGlzLnJhZGlhbk51bWJlciAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICs9IE1hdGguY29zKHJhZGlhbikgKiBkdCAqIHRoaXMuQnVsbGV0U3BlZWQsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IE1hdGguc2luKHJhZGlhbikgKiB0aGlzLkJ1bGxldFNwZWVkICogZHQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5wb3NpdGlvbi55ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyA1O1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19