
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BulletBossMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '996dfqfvzxDLq8jNSuxvKKg', 'BulletBossMove');
// Scripts/BulletBossMove.ts

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
        _this.label = null;
        _this.Ship = null;
        _this.rate = 0;
        _this.spin = 0;
        _this.rotation = 0;
        _this.speed = 0;
        _this.game = 0;
        _this.delay = 3;
        _this.bulletBoss = null;
        // LIFE-CYCLE CALLBACKS:
        _this.boss = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.Ship.on(cc.Node.EventType.TOUCH_START, function (event) {
            this.game += 1;
            if (this.game == 1) {
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 2);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 5);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 6);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 20);
            }
        }, this);
        this.Ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.game += 1;
            if (this.game == 1) {
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 2);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 7);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 14);
                this.schedule(function () {
                    // Here `this` is referring to the component
                    this.initBullet();
                }, this.rate, 40, 20);
            }
        }, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.initBullet = function () {
        if (window.matchMedia("(orientation: landscape)").matches) {
            var node = cc.instantiate(this.bulletBoss);
            node.parent = this.node.parent;
            //node.position = this.offset.add(this.node.position);
            var pos = this.boss.getPosition();
            node.setPosition(cc.v2(pos.x + 10, pos.y - 100));
            node.setScale(0.3, 0.3);
            node.rotation = this.rotation;
            var endPoint = cc.v2();
            endPoint.x = cc.winSize.height * Math.sin(this.rotation / 180 * Math.PI);
            endPoint.y = cc.winSize.height * Math.cos(this.rotation / 180 * Math.PI);
            var distance = endPoint.sub(node.position).mag();
            var duration = distance / this.speed;
            var moveBy = cc.moveBy(duration, endPoint);
            var removeSelt = cc.removeSelf();
            var sequence = cc.sequence(moveBy, removeSelt);
            node.runAction(sequence);
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            var node = cc.instantiate(this.bulletBoss);
            node.parent = this.node.parent;
            //node.position = this.offset.add(this.node.position);
            var pos = this.boss.getPosition();
            node.setPosition(cc.v2(pos.x + 10, pos.y - 200));
            node.setScale(0.5, 0.5);
            node.rotation = this.rotation;
            var endPoint = cc.v2();
            endPoint.x = cc.winSize.height * Math.sin(this.rotation / 180 * Math.PI);
            endPoint.y = cc.winSize.height * Math.cos(this.rotation / 180 * Math.PI);
            var distance = endPoint.sub(node.position).mag();
            var duration = distance / this.speed;
            var moveBy = cc.moveBy(duration, endPoint);
            var removeSelt = cc.removeSelf();
            var sequence = cc.sequence(moveBy, removeSelt);
            node.runAction(sequence);
        }
    };
    NewClass.prototype.update = function (dt) {
        if (this.spin === 0) {
            return;
        }
        this.rotation += dt * this.spin;
        if (this.rotation == 0) {
            this.node.destroy();
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Ship", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rate", void 0);
    __decorate([
        property
    ], NewClass.prototype, "spin", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rotation", void 0);
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "game", void 0);
    __decorate([
        property
    ], NewClass.prototype, "delay", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bulletBoss", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boss", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQnVsbGV0Qm9zc01vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwSEM7UUF2SEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFFakIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQzdCLHdCQUF3QjtRQUV6QixVQUFJLEdBQVMsSUFBSSxDQUFDOztJQW9HckIsQ0FBQztJQW5HRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsS0FBSztZQUN2RCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTtZQUNkLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1YsNENBQTRDO29CQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FB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QUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUUsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBdEhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVE7MENBQ1E7SUFFakI7UUFEQyxRQUFROzBDQUNRO0lBRWpCO1FBREMsUUFBUTs4Q0FDWTtJQUVyQjtRQURDLFFBQVE7MkNBQ1M7SUFFbEI7UUFEQyxRQUFROzBDQUNRO0lBRWpCO1FBREMsUUFBUTsyQ0FDUztJQUVsQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRzlCO1FBREUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0Q7SUF0QkEsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBINUI7SUFBRCxlQUFDO0NBMUhELEFBMEhDLENBMUhxQyxFQUFFLENBQUMsU0FBUyxHQTBIakQ7a0JBMUhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgU2hpcDogY2MuTm9kZSA9IG51bGw7IFxuICAgIEBwcm9wZXJ0eVxuICAgIHJhdGU6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgc3BpbjogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBnYW1lOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIGRlbGF5OiBudW1iZXIgPSAzO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYnVsbGV0Qm9zczogY2MuUHJlZmFiID0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIGJvc3M6Y2MuTm9kZT1udWxsO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5TaGlwLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZSArPSAxXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGVyZSBgdGhpc2AgaXMgcmVmZXJyaW5nIHRvIHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0QnVsbGV0KCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5yYXRlLCA0MCwgMik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgYHRoaXNgIGlzIHJlZmVycmluZyB0byB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJ1bGxldCgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucmF0ZSwgNDAsNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgYHRoaXNgIGlzIHJlZmVycmluZyB0byB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJ1bGxldCgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucmF0ZSwgNDAsIDYpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIGB0aGlzYCBpcyByZWZlcnJpbmcgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCdWxsZXQoKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnJhdGUsIDQwLCAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLlNoaXAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUgKz0gMVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgYHRoaXNgIGlzIHJlZmVycmluZyB0byB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJ1bGxldCgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucmF0ZSwgNDAsIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIGB0aGlzYCBpcyByZWZlcnJpbmcgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCdWxsZXQoKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnJhdGUsIDQwLCA3KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGVyZSBgdGhpc2AgaXMgcmVmZXJyaW5nIHRvIHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0QnVsbGV0KCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5yYXRlLCA0MCwgMTQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIGB0aGlzYCBpcyByZWZlcnJpbmcgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCdWxsZXQoKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnJhdGUsIDQwLCAyMCk7XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgIH0sIHRoaXMpOyAgXG4gICAgICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgaW5pdEJ1bGxldCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRCb3NzKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgIC8vbm9kZS5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuYm9zcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjYy52Mihwb3MueCsxMCwgcG9zLnkgLSAxMDApKVxuICAgICAgICAgICAgbm9kZS5zZXRTY2FsZSgwLjMsMC4zKVxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHRoaXMucm90YXRpb247XG4gICAgICAgICAgICBsZXQgZW5kUG9pbnQgPSBjYy52MigpO1xuICAgICAgICAgICAgZW5kUG9pbnQueCA9IGNjLndpblNpemUuaGVpZ2h0ICogTWF0aC5zaW4odGhpcy5yb3RhdGlvbiAvIDE4MCAqIE1hdGguUEkpO1xuICAgICAgICAgICAgZW5kUG9pbnQueSA9IGNjLndpblNpemUuaGVpZ2h0ICogTWF0aC5jb3ModGhpcy5yb3RhdGlvbiAvMTgwICogTWF0aC5QSSk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBlbmRQb2ludC5zdWIobm9kZS5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBsZXQgbW92ZUJ5ID0gY2MubW92ZUJ5KGR1cmF0aW9uLCBlbmRQb2ludCk7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlU2VsdCA9IGNjLnJlbW92ZVNlbGYoKTtcbiAgICAgICAgICAgIGxldCBzZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKG1vdmVCeSwgcmVtb3ZlU2VsdCk7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihzZXF1ZW5jZSk7IFxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRCb3NzKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgIC8vbm9kZS5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuYm9zcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjYy52Mihwb3MueCsxMCwgcG9zLnkgLSAyMDApKVxuICAgICAgICAgICAgbm9kZS5zZXRTY2FsZSgwLjUsMC41KVxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHRoaXMucm90YXRpb247XG4gICAgICAgICAgICBsZXQgZW5kUG9pbnQgPSBjYy52MigpO1xuICAgICAgICAgICAgZW5kUG9pbnQueCA9IGNjLndpblNpemUuaGVpZ2h0ICogTWF0aC5zaW4odGhpcy5yb3RhdGlvbiAvIDE4MCAqIE1hdGguUEkpO1xuICAgICAgICAgICAgZW5kUG9pbnQueSA9IGNjLndpblNpemUuaGVpZ2h0ICogTWF0aC5jb3ModGhpcy5yb3RhdGlvbiAvMTgwICogTWF0aC5QSSk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBlbmRQb2ludC5zdWIobm9kZS5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBsZXQgbW92ZUJ5ID0gY2MubW92ZUJ5KGR1cmF0aW9uLCBlbmRQb2ludCk7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlU2VsdCA9IGNjLnJlbW92ZVNlbGYoKTtcbiAgICAgICAgICAgIGxldCBzZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKG1vdmVCeSwgcmVtb3ZlU2VsdCk7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihzZXF1ZW5jZSk7IFxuICAgICAgICB9XG4gICAgXG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5zcGluPT09MCkge1xuICAgICAgICAgICAgcmV0dXJuOyAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSBkdCAqIHRoaXMuc3BpbjtcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb249PTApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=