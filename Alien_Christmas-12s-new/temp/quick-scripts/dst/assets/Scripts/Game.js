
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5ccd8/j+pAiLBnFRIsPnu0', 'Game');
// Scripts/Game.ts

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
        _this.bullet = null;
        _this.gun = null;
        // LIFE-CYCLE CALLBACKS:
        _this.posX = 0;
        _this.posY = 0;
        _this.score = 0;
        _this.BulletSpeed = 500;
        _this.angle = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.spawn = function (event) {
        var newBullet = cc.instantiate(this.bullet);
        newBullet.setPosition(this.node.getChildByName('Bullets').position.x, this.node.getChildByName('Bullets').position.y);
        this.node.addChild(newBullet);
        console.log(newBullet);
        var touchPosition = event.getLocation();
        touchPosition = this.node.convertToNodeSpaceAR(touchPosition);
        this.posX = touchPosition.x * 1000;
        this.posY = touchPosition.y * 1000;
        var actionBy = cc.moveTo(0.5, cc.v2(this.posX, this.posY));
        var destruction = cc.callFunc(function () {
            newBullet.destroy();
        }, this);
        var sequence = cc.sequence(actionBy, destruction);
        newBullet.runAction(sequence);
        cc.audioEngine.playEffect(this.gun, false);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        this.node.on('touchmove', this.spawn, this);
        this.node.on('touchstart', this.spawn, this);
        this.node.stopAllActions();
    };
    NewClass.prototype.update = function (dt) {
        //this.node.setPosition(this.node.position.x = this.BulletSpeed*dt,this.node.position.y  = this.BulletSpeed*dt);
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bullet", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewClass.prototype, "gun", void 0);
    __decorate([
        property
    ], NewClass.prototype, "posX", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlEQztRQTlDRyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBSXhCLFNBQUcsR0FBQyxJQUFJLENBQUM7UUFDVCx3QkFBd0I7UUFFeEIsVUFBSSxHQUFVLENBQUMsQ0FBQztRQUNoQixVQUFJLEdBQVUsQ0FBQyxDQUFDO1FBQ2hCLFdBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsaUJBQVcsR0FBVSxHQUFHLENBQUM7UUFDekIsV0FBSyxHQUFTLENBQUMsQ0FBQzs7SUFtQ3BCLENBQUM7SUFqQ0csd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix3QkFBSyxHQUFMLFVBQU0sS0FBSztRQUNQLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRSxhQUFhLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDO1FBRWpDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzFCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDUixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0YseUJBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNDLHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ1AsZ0hBQWdIO0lBRXBILENBQUM7SUE3Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSTtJQUl4QjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUztTQUNwQixDQUFDO3lDQUNPO0lBR1Q7UUFEQyxRQUFROzBDQUNPO0lBVkMsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlENUI7SUFBRCxlQUFDO0NBakRELEFBaURDLENBakRxQyxFQUFFLENBQUMsU0FBUyxHQWlEakQ7a0JBakRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXQ6Y2MuUHJlZmFiID0gbnVsbDsgIFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwXG4gICAgfSlcbiAgICBndW49bnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBAcHJvcGVydHlcbiAgICBwb3NYOm51bWJlciA9IDA7XG4gICAgcG9zWTpudW1iZXIgPSAwO1xuICAgIHNjb3JlOm51bWJlciA9IDA7XG4gICAgQnVsbGV0U3BlZWQ6bnVtYmVyID0gNTAwO1xuICAgIGFuZ2xlOm51bWJlciA9MDtcbiAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgc3Bhd24oZXZlbnQpe1xuICAgICAgICB2YXIgbmV3QnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xuICAgICAgICBuZXdCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdCdWxsZXRzJykucG9zaXRpb24ueCx0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0J1bGxldHMnKS5wb3NpdGlvbi55KTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0J1bGxldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0J1bGxldCk7XG4gICAgICAgIHZhciB0b3VjaFBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdG91Y2hQb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5wb3NYID10b3VjaFBvc2l0aW9uLngqMTAwMDtcbiAgICAgICAgdGhpcy5wb3NZID0gdG91Y2hQb3NpdGlvbi55KjEwMDA7XG4gICAgICAgXG4gICAgICAgIHZhciBhY3Rpb25CeSA9IGNjLm1vdmVUbygwLjUsY2MudjIodGhpcy5wb3NYLHRoaXMucG9zWSkpO1xuICAgICAgICB2YXIgZGVzdHJ1Y3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xuICAgICAgICAgICAgbmV3QnVsbGV0LmRlc3Ryb3koKTtcbiAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgdmFyIHNlcXVlbmNlID0gY2Muc2VxdWVuY2UoYWN0aW9uQnksZGVzdHJ1Y3Rpb24pO1xuICAgICAgICBuZXdCdWxsZXQucnVuQWN0aW9uKHNlcXVlbmNlKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmd1bixmYWxzZSk7XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgIG9uTG9hZCgpe1xuICAgIHRoaXMubm9kZS5vbigndG91Y2htb3ZlJyx0aGlzLnNwYXduLHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsdGhpcy5zcGF3bix0aGlzKTtcbiAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgIH1cbiAgICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvL3RoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCA9IHRoaXMuQnVsbGV0U3BlZWQqZHQsdGhpcy5ub2RlLnBvc2l0aW9uLnkgID0gdGhpcy5CdWxsZXRTcGVlZCpkdCk7XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==