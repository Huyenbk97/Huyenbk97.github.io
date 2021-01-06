
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c15ew0qhJPXpQRPAe3poOf', 'Gameplay');
// Scripts/Gameplay.ts

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
        _this.posY = 100;
        _this.score = 0;
        _this.BulletSpeed = 500;
        _this.angle = 0;
        _this.dt = 100;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.spawn = function (event) {
        // var newBullet = cc.instantiate(this.bullet);
        // newBullet.setPosition(this.node.getChildByName('Ship').position.x,this.node.getChildByName('Ship').position.y); 
        // this.node.addChild(newBullet);   
        // var touchPosition = event.getLocation();
        // touchPosition = this.node.convertToNodeSpaceAR(touchPosition);
        // this.posX =touchPosition.x;
        // this.posY = touchPosition.y;      
        // var actionBy = cc.moveTo(2,cc.v2(this.posX*10,this.posY*10));
        // var destruction = cc.callFunc(function(){
        //     newBullet.destroy();
        // },this);
        // var sequence = cc.sequence(actionBy,destruction);
        // newBullet.runAction(sequence);
        // cc.audioEngine.playEffect(this.gun,false);
        // //
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        this.node.on('touchmove', this.spawn, this);
        this.node.on('touchstart', this.spawn, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnREM7UUE3Q0csWUFBTSxHQUFhLElBQUksQ0FBQztRQUl4QixTQUFHLEdBQUMsSUFBSSxDQUFDO1FBQ1Qsd0JBQXdCO1FBRXhCLFVBQUksR0FBVSxDQUFDLENBQUM7UUFDaEIsVUFBSSxHQUFVLEdBQUcsQ0FBQztRQUNsQixXQUFLLEdBQVUsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFXLEdBQVUsR0FBRyxDQUFDO1FBQ3pCLFdBQUssR0FBUyxDQUFDLENBQUM7UUFDaEIsUUFBRSxHQUFRLEdBQUcsQ0FBQzs7SUFpQ2xCLENBQUM7SUFoQ0csd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix3QkFBSyxHQUFMLFVBQU0sS0FBSztRQUNQLCtDQUErQztRQUMvQyxtSEFBbUg7UUFDbkgsb0NBQW9DO1FBQ3BDLDJDQUEyQztRQUMzQyxpRUFBaUU7UUFDakUsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxnRUFBZ0U7UUFDaEUsNENBQTRDO1FBQzVDLDJCQUEyQjtRQUMzQixXQUFXO1FBQ1gsb0RBQW9EO1FBQ3BELGlDQUFpQztRQUNqQyw2Q0FBNkM7UUFDN0MsS0FBSztJQUVULENBQUM7SUFDRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUNGLHlCQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBQ0MseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDUCxnSEFBZ0g7SUFFcEgsQ0FBQztJQTVDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNJO0lBSXhCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTO1NBQ3BCLENBQUM7eUNBQ087SUFHVDtRQURDLFFBQVE7MENBQ087SUFWQyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RqRDtrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1bGxldDpjYy5QcmVmYWIgPSBudWxsOyAgXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTpjYy5BdWRpb0NsaXBcbiAgICB9KVxuICAgIGd1bj1udWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eVxuICAgIHBvc1g6bnVtYmVyID0gMDtcbiAgICBwb3NZOm51bWJlciA9IDEwMDtcbiAgICBzY29yZTpudW1iZXIgPSAwOzBcbiAgICBCdWxsZXRTcGVlZDpudW1iZXIgPSA1MDA7XG4gICAgYW5nbGU6bnVtYmVyID0wO1xuICAgIGR0Om51bWJlcj0xMDA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBzcGF3bihldmVudCl7XG4gICAgICAgIC8vIHZhciBuZXdCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XG4gICAgICAgIC8vIG5ld0J1bGxldC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1NoaXAnKS5wb3NpdGlvbi54LHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU2hpcCcpLnBvc2l0aW9uLnkpOyBcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKG5ld0J1bGxldCk7ICAgXG4gICAgICAgIC8vIHZhciB0b3VjaFBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgLy8gdG91Y2hQb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvc2l0aW9uKTtcbiAgICAgICAgLy8gdGhpcy5wb3NYID10b3VjaFBvc2l0aW9uLng7XG4gICAgICAgIC8vIHRoaXMucG9zWSA9IHRvdWNoUG9zaXRpb24ueTsgICAgICBcbiAgICAgICAgLy8gdmFyIGFjdGlvbkJ5ID0gY2MubW92ZVRvKDIsY2MudjIodGhpcy5wb3NYKjEwLHRoaXMucG9zWSoxMCkpO1xuICAgICAgICAvLyB2YXIgZGVzdHJ1Y3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgbmV3QnVsbGV0LmRlc3Ryb3koKTtcbiAgICAgICAgLy8gfSx0aGlzKTtcbiAgICAgICAgLy8gdmFyIHNlcXVlbmNlID0gY2Muc2VxdWVuY2UoYWN0aW9uQnksZGVzdHJ1Y3Rpb24pO1xuICAgICAgICAvLyBuZXdCdWxsZXQucnVuQWN0aW9uKHNlcXVlbmNlKTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmd1bixmYWxzZSk7XG4gICAgICAgIC8vIC8vXG4gIFxuICAgIH1cbiAgICBzdGFydCAoKSB7XG4gICAgfVxuICAgb25Mb2FkKCl7XG4gICAgdGhpcy5ub2RlLm9uKCd0b3VjaG1vdmUnLHRoaXMuc3Bhd24sdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0Jyx0aGlzLnNwYXduLHRoaXMpO1xuICAgXG4gICB9XG4gICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy90aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggPSB0aGlzLkJ1bGxldFNwZWVkKmR0LHRoaXMubm9kZS5wb3NpdGlvbi55ICA9IHRoaXMuQnVsbGV0U3BlZWQqZHQpO1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=