
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Spaceship.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd4ffn7FNBPxoB9pAlPpmnX', 'Spaceship');
// Scripts/Spaceship.ts

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
        //bullet 
        _this.greenBullet = null;
        _this.gun2 = null;
        _this.BulletSpeed = 500;
        return _this;
    }
    NewClass.prototype.shootBullets = function (x, y, angle) {
        var bullet = cc.instantiate(this.greenBullet);
        bullet.setPosition(this.node.position.x, this.node.position.y);
        this.node.parent.addChild(bullet);
        cc.audioEngine.playEffect(this.gun2, false);
        bullet.setRotation(angle);
        console.log(angle);
    };
    NewClass.prototype.onLoad = function () {
        // this.node.on('touchmove',function(event){
        //     var delta =event.touch.getDelta();
        //     this.x +=delta.x;
        //     this.y +=delta.y;      
        // },this.node);
        this.schedule(this.shootBullets, 0.2, cc.macro.REPEAT_FOREVER, 0);
        console.log("ban dan");
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.node.setPosition(this.node.position.x, this.node.position.y = this.BulletSpeed * dt);
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "greenBullet", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewClass.prototype, "gun2", void 0);
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "BulletSpeed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3BhY2VzaGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUNDO1FBeENHLFNBQVM7UUFFVCxpQkFBVyxHQUFhLElBQUksQ0FBQztRQU03QixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBS1IsaUJBQVcsR0FBVSxHQUFHLENBQUM7O0lBMkJqQyxDQUFDO0lBekJHLCtCQUFZLEdBQVosVUFBYSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUs7UUFDbEIsSUFBSSxNQUFNLEdBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBRUksNENBQTRDO1FBQzVDLHlDQUF5QztRQUN6Qyx3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFFekYsQ0FBQztJQXJDSjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNTO0lBTTdCO1FBTEMsUUFBUSxDQUNMO1lBQ0ksSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTO1NBQ3BCLENBQ0o7MENBQ1c7SUFFUjtRQURILFFBQVE7MkNBQ0k7SUFHVDtRQURDLFFBQVE7aURBQ2dCO0lBZFosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlDNUI7SUFBRCxlQUFDO0NBekNELEFBeUNDLENBekNxQyxFQUFFLENBQUMsU0FBUyxHQXlDakQ7a0JBekNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vYnVsbGV0IFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ3JlZW5CdWxsZXQ6Y2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwXG4gICAgICAgIH1cbiAgICApXG4gICAgZ3VuMiA9IG51bGw7XG4gICAgQHByb3BlcnR5IFxuICAgICAgICBzcGVlZDogMDtcbiAgICAgICAgcmVzZXRYOiAwO1xuICAgICAgICBAcHJvcGVydHlcbiAgICAgICAgQnVsbGV0U3BlZWQ6bnVtYmVyID0gNTAwO1xuICAgICAgICBhbmdsZTowO1xuICAgIHNob290QnVsbGV0cyh4LHksYW5nbGUpe1xuICAgICAgICB2YXIgYnVsbGV0ID1jYy5pbnN0YW50aWF0ZSh0aGlzLmdyZWVuQnVsbGV0KTsgICAgIFxuICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGJ1bGxldCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ndW4yLGZhbHNlKTtcbiAgICAgICAgYnVsbGV0LnNldFJvdGF0aW9uKGFuZ2xlKTtcbiAgICAgICAgY29uc29sZS5sb2coYW5nbGUpO1xuICAgIH1cbiAgICBvbkxvYWQoKXtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbigndG91Y2htb3ZlJyxmdW5jdGlvbihldmVudCl7XG4gICAgICAgIC8vICAgICB2YXIgZGVsdGEgPWV2ZW50LnRvdWNoLmdldERlbHRhKCk7XG4gICAgICAgIC8vICAgICB0aGlzLnggKz1kZWx0YS54O1xuICAgICAgICAvLyAgICAgdGhpcy55ICs9ZGVsdGEueTsgICAgICBcbiAgICAgICAgLy8gfSx0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc2hvb3RCdWxsZXRzLDAuMixjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwwKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiYW4gZGFuXCIpO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9ICAgXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsdGhpcy5ub2RlLnBvc2l0aW9uLnkgID0gdGhpcy5CdWxsZXRTcGVlZCpkdCk7XG4gICAgICAgXG4gICAgICAgfVxufVxuIl19