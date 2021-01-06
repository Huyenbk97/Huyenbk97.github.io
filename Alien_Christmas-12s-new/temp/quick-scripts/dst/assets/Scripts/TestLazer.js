
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TestLazer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87140QN6OhHP6mq0QAL6lDc', 'TestLazer');
// Scripts/TestLazer.ts

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
        _this.Ship = null;
        _this.text = 'hello';
        _this.Laser = null;
        _this.distance = 0;
        _this.line = 400;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.node.setContentSize(45, cc.winSize.height);
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.distance = 0;
        //this.schedule(this.setHEIGHT, 0.1, cc.macro.REPEAT_FOREVER);
    };
    // setHEIGHT(distance) {
    //     this.node.setContentSize(45, 400);
    //  }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        var endPoint = cc.v2();
        endPoint.x = this.Ship.getPosition().x;
        endPoint.y = this.Ship.getPosition().y;
        var startPoint = cc.v2();
        startPoint.x = selfCollider.node.getPosition().x;
        startPoint.y = selfCollider.node.getPosition().y;
        this.distance = endPoint.sub(startPoint).mag();
        //console.log(selfCollider.node.getPosition());
        console.log(this.distance);
        //this.setHEIGHT(distance);
    };
    NewClass.prototype.update = function (dt) {
        if (this.line > this.distance) {
            this.line = cc.winSize.height;
            this.node.setContentSize(45, this.line);
        }
        else {
            this.line = this.distance;
            this.node.setContentSize(45, this.line);
        }
        //this.node.setScale(1, this.line/50);
        //console.log(cc.winSize.height);
        // if (this.X<=50) {
        //     this.Laser.scaleY+=this.X * dt ; 
        // }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Ship", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Laser", void 0);
    __decorate([
        property
    ], NewClass.prototype, "distance", void 0);
    __decorate([
        property
    ], NewClass.prototype, "line", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGVzdExhemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMERDO1FBdkRHLFVBQUksR0FBUyxJQUFJLENBQUE7UUFFakIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUV2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFcEIsVUFBSSxHQUFTLEdBQUcsQ0FBQzs7SUErQ3RCLENBQUM7SUE5Q0csd0JBQXdCO0lBRXZCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLE9BQU8sR0FBRSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDL0MsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsOERBQThEO0lBQ25FLENBQUM7SUFDRCx3QkFBd0I7SUFDeEIseUNBQXlDO0lBQ3pDLEtBQUs7SUFDTCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELG1DQUFnQixHQUFoQixVQUFpQixhQUFhLEVBQUUsWUFBWTtRQUV4QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdkIsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN6QixVQUFVLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9DLCtDQUErQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQiwyQkFBMkI7SUFDL0IsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBRXhDO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN6QztRQUNELHNDQUFzQztRQUN0QyxpQ0FBaUM7UUFFakMsb0JBQW9CO1FBQ3BCLHdDQUF3QztRQUN4QyxJQUFJO0lBRVIsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNEO0lBRWpCO1FBREMsUUFBUTswQ0FDYztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUTs4Q0FDWTtJQUVwQjtRQURBLFFBQVE7MENBQ1M7SUFYRCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEQ1QjtJQUFELGVBQUM7Q0ExREQsQUEwREMsQ0ExRHFDLEVBQUUsQ0FBQyxTQUFTLEdBMERqRDtrQkExRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBTaGlwOmNjLk5vZGU9bnVsbFxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgTGFzZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGRpc3RhbmNlOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eVxuICAgICBsaW5lOm51bWJlciA9NDAwO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgIG9uTG9hZCAoKSB7XG4gICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoNDUsIGNjLndpblNpemUuaGVpZ2h0KTtcbiAgICAgICAgIHZhciBtYW5hZ2VyPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7ICAgIFxuICAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSAwO1xuICAgICAgICAgLy90aGlzLnNjaGVkdWxlKHRoaXMuc2V0SEVJR0hULCAwLjEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcbiAgICB9XG4gICAgLy8gc2V0SEVJR0hUKGRpc3RhbmNlKSB7XG4gICAgLy8gICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSg0NSwgNDAwKTtcbiAgICAvLyAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyQ29sbGlkZXIsIHNlbGZDb2xsaWRlcikgeyBcbiAgICAgICBcbiAgICAgICAgdmFyIGVuZFBvaW50ID0gY2MudjIoKTtcbiAgICAgICAgZW5kUG9pbnQueCA9IHRoaXMuU2hpcC5nZXRQb3NpdGlvbigpLng7XG4gICAgICAgIGVuZFBvaW50LnkgPSB0aGlzLlNoaXAuZ2V0UG9zaXRpb24oKS55O1xuICAgICAgICB2YXIgc3RhcnRQb2ludCA9IGNjLnYyKCk7XG4gICAgICAgIHN0YXJ0UG9pbnQueCA9IHNlbGZDb2xsaWRlci5ub2RlLmdldFBvc2l0aW9uKCkueDtcbiAgICAgICAgc3RhcnRQb2ludC55ID0gc2VsZkNvbGxpZGVyLm5vZGUuZ2V0UG9zaXRpb24oKS55O1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gZW5kUG9pbnQuc3ViKHN0YXJ0UG9pbnQpLm1hZygpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHNlbGZDb2xsaWRlci5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgLy90aGlzLnNldEhFSUdIVChkaXN0YW5jZSk7XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgXG4gICAgICAgIGlmICh0aGlzLmxpbmUgPiB0aGlzLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmUgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKDQ1LHRoaXMubGluZSlcbiAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmUgPSB0aGlzLmRpc3RhbmNlXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoNDUsdGhpcy5saW5lKVxuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5ub2RlLnNldFNjYWxlKDEsIHRoaXMubGluZS81MCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coY2Mud2luU2l6ZS5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gaWYgKHRoaXMuWDw9NTApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuTGFzZXIuc2NhbGVZKz10aGlzLlggKiBkdCA7IFxuICAgICAgICAvLyB9XG4gICAgICAgXG4gICAgfVxufVxuIl19