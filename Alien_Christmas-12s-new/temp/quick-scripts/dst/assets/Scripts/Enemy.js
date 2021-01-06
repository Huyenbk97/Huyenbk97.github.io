
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7e7fpcnt5A7JcfvPCOS7GP', 'Enemy');
// Scripts/Enemy.ts

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
        _this.enemyNumber = 9;
        _this.explosion = null;
        _this.BulletEnemy = null;
        _this.test = null;
        _this.enemy1 = null;
        _this.enemy2 = null;
        _this.enemy3 = null;
        _this.enemy4 = null;
        _this.enemy5 = null;
        _this.enemy6 = null;
        _this.cavas = null;
        _this.enemy7 = null;
        _this.enemy8 = null;
        _this.enemy9 = null;
        _this.redDes = null;
        _this.expolosion = null;
        _this.shield = null;
        _this.ShootFrequency = 3.0;
        _this.duration = 0.5;
        _this.moveAmountX = 0.01;
        _this.moveAmountY = 0.01;
        _this.enemyLife = 100;
        _this.enemyHp = 6;
        _this.shieldHave = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        var anim = this.getComponent(cc.Animation);
        this.schedule(this.spawBullet, 1.5, cc.macro.REPEAT_FOREVER);
    };
    NewClass.prototype.spawBullet = function () {
        try {
            if (window.matchMedia("(orientation: portrait)").matches) {
                var enemys = [this.enemy1, this.enemy2, this.enemy3, this.enemy4, this.enemy5, this.enemy6, this.enemy7, this.enemy8, this.enemy9];
                var random = Math.floor(Math.random() * enemys.length);
                var newBullet = cc.instantiate(this.BulletEnemy);
                newBullet.setPosition(enemys[random].position.x, enemys[random].position.y);
                this.node.addChild(newBullet);
            }
            if (window.matchMedia("(orientation: landscape)").matches) {
                var enemys = [this.enemy1, this.enemy2, this.enemy3, this.enemy4, this.enemy5, this.enemy6, this.enemy7, this.enemy8, this.enemy9];
                var random = Math.floor(Math.random() * enemys.length);
                var newBullet = cc.instantiate(this.BulletEnemy);
                newBullet.setPosition(enemys[random].position.x + 100, enemys[random].position.y - 100);
                this.node.addChild(newBullet);
            }
        }
        catch (error) {
        }
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.name == "Bullet33<BoxCollider>" || other.name == "Bullet1<BoxCollider>" || other.name == "Bullet1<BoxCollider>" || other.name == "Bullet2<BoxCollider>" || other.name == "Bullet3<BoxCollider>" || other.name == "Bullet4<BoxCollider>" || other.name == "Bullet5<BoxCollider>" || other.name == "Bullet6<BoxCollider>") {
            this.enemyHp -= 1;
            other.node.destroy();
            if (this.enemyHp == 0) {
                this.enemyNumber--;
                var explosion = cc.instantiate(this.expolosion);
                explosion.setPosition(self.node.position);
                this.node.parent.addChild(explosion);
                self.node.destroy();
                cc.audioEngine.playEffect(this.explosion, false);
                this.redDes.getComponent(cc.Animation).play('shakeCamera');
                this.node.parent.parent.getComponent('GameController').spawShield(self.node.position.x, self.node.position.y);
                this.node.parent.getChildByName('Boss').getComponent('Boss').spawnBullet();
            }
        }
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.schedule(this.spawBullet, 1.5, cc.macro.REPEAT_FOREVER);
    };
    __decorate([
        property
    ], NewClass.prototype, "enemyNumber", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewClass.prototype, "explosion", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "BulletEnemy", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "test", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy5", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy6", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cavas", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy7", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy8", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemy9", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "redDes", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "expolosion", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "shield", void 0);
    __decorate([
        property
    ], NewClass.prototype, "ShootFrequency", void 0);
    __decorate([
        property
    ], NewClass.prototype, "Animation_Node", void 0);
    __decorate([
        property
    ], NewClass.prototype, "duration", void 0);
    __decorate([
        property
    ], NewClass.prototype, "moveAmountX", void 0);
    __decorate([
        property
    ], NewClass.prototype, "moveAmountY", void 0);
    __decorate([
        property
    ], NewClass.prototype, "enemyLife", void 0);
    __decorate([
        property
    ], NewClass.prototype, "enemyHp", void 0);
    __decorate([
        property
    ], NewClass.prototype, "shieldHave", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFJMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxSEM7UUFuSEQsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFLcEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUVqQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLG9CQUFjLEdBQVEsR0FBRyxDQUFDO1FBSTFCLGNBQVEsR0FBVSxHQUFHLENBQUM7UUFFdEIsaUJBQVcsR0FBVSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBUyxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUV4QixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FB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QUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDRztJQUV2QjtRQURDLFFBQVE7b0RBQ2lCO0lBRTFCO1FBREMsUUFBUTtvREFDbUI7SUFFNUI7UUFEQyxRQUFROzhDQUNhO0lBRXRCO1FBREMsUUFBUTtpREFDaUI7SUFFMUI7UUFEQyxRQUFRO2lEQUNnQjtJQUd6QjtRQURDLFFBQVE7K0NBQ2U7SUFFeEI7UUFEQyxRQUFROzZDQUNXO0lBR3BCO1FBREMsUUFBUTtnREFDbUI7SUF2RFgsUUFBUTtRQUY1QixPQUFPO09BRWEsUUFBUSxDQXFINUI7SUFBRCxlQUFDO0NBckhELEFBcUhDLENBckhxQyxFQUFFLENBQUMsU0FBUyxHQXFIakQ7a0JBckhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5XG5lbmVteU51bWJlcjogbnVtYmVyID0gOTsgXG4gICAgYWN0aW9uOiBjYy5BY3Rpb25JbnRlcnZhbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICB9KVxuICAgIGV4cGxvc2lvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBCdWxsZXRFbmVteTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVteTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZW15MjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lbXkzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVteTQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZW15NTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lbXk2OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYXZhczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lbXk3OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVteTg6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZW15OTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVkRGVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGV4cG9sb3Npb246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2hpZWxkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHlcbiAgICBTaG9vdEZyZXF1ZW5jeTpudW1iZXI9My4wO1xuICAgIEBwcm9wZXJ0eVxuICAgIEFuaW1hdGlvbl9Ob2RlOmNjLkFuaW1hdGlvbjtcbiAgICBAcHJvcGVydHlcbiAgICBkdXJhdGlvbjpudW1iZXIgPSAwLjU7XG4gICAgQHByb3BlcnR5XG4gICAgbW92ZUFtb3VudFg6bnVtYmVyID0gMC4wMTtcbiAgICBAcHJvcGVydHlcbiAgICBtb3ZlQW1vdW50WTpudW1iZXIgPTAuMDE7XG4gICAgbW92ZUVuZW15OmNjLkFjdGlvbkludGVydmFsO1xuICAgIEBwcm9wZXJ0eVxuICAgIGVuZW15TGlmZTogbnVtYmVyID0gMTAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIGVuZW15SHA6IG51bWJlciA9IDY7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzaGllbGRIYXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB2YXIgbWFuYWdlcj0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7IFxuICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zcGF3QnVsbGV0LDEuNSxjYy5tYWNyby5SRVBFQVRfRk9SRVZFUik7ICAgXG4gICAgICBcbiAgICAgXG4gICAgfVxuXG4gICAgc3Bhd0J1bGxldCgpIHtcbiAgICAgICAgdHJ5IHsgXG4gICAgICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVuZW15cyA9IFt0aGlzLmVuZW15MSwgdGhpcy5lbmVteTIsIHRoaXMuZW5lbXkzLCB0aGlzLmVuZW15NCwgdGhpcy5lbmVteTUsIHRoaXMuZW5lbXk2LCB0aGlzLmVuZW15NywgdGhpcy5lbmVteTgsIHRoaXMuZW5lbXk5XVxuICAgICAgICAgICAgICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmVteXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIHZhciBuZXdCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJ1bGxldEVuZW15KTtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXdCdWxsZXQuc2V0UG9zaXRpb24oZW5lbXlzW3JhbmRvbV0ucG9zaXRpb24ueCAsIGVuZW15c1tyYW5kb21dLnBvc2l0aW9uLnkgKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3QnVsbGV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7IFxuICAgICAgICAgICAgICAgIHZhciBlbmVteXMgPSBbdGhpcy5lbmVteTEsIHRoaXMuZW5lbXkyLCB0aGlzLmVuZW15MywgdGhpcy5lbmVteTQsIHRoaXMuZW5lbXk1LCB0aGlzLmVuZW15NiwgdGhpcy5lbmVteTcsIHRoaXMuZW5lbXk4LCB0aGlzLmVuZW15OV1cbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW5lbXlzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV3QnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5CdWxsZXRFbmVteSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3QnVsbGV0LnNldFBvc2l0aW9uKGVuZW15c1tyYW5kb21dLnBvc2l0aW9uLnggKyAxMDAsIGVuZW15c1tyYW5kb21dLnBvc2l0aW9uLnkgLSAxMDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0J1bGxldCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7IFxuICAgICAgICBpZiAob3RoZXIubmFtZSA9PSBcIkJ1bGxldDMzPEJveENvbGxpZGVyPlwifHxvdGhlci5uYW1lID09IFwiQnVsbGV0MTxCb3hDb2xsaWRlcj5cInx8b3RoZXIubmFtZSA9PSBcIkJ1bGxldDE8Qm94Q29sbGlkZXI+XCJ8fG90aGVyLm5hbWUgPT0gXCJCdWxsZXQyPEJveENvbGxpZGVyPlwifHxvdGhlci5uYW1lID09IFwiQnVsbGV0MzxCb3hDb2xsaWRlcj5cInx8b3RoZXIubmFtZSA9PSBcIkJ1bGxldDQ8Qm94Q29sbGlkZXI+XCJ8fG90aGVyLm5hbWUgPT0gXCJCdWxsZXQ1PEJveENvbGxpZGVyPlwifHxvdGhlci5uYW1lID09IFwiQnVsbGV0NjxCb3hDb2xsaWRlcj5cIikge1xuICAgICAgICAgICAgdGhpcy5lbmVteUhwIC09IDE7XG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW15SHAgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlOdW1iZXItLSBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBleHBsb3Npb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmV4cG9sb3Npb24pO1xuICAgICAgICAgICAgICAgIGV4cGxvc2lvbi5zZXRQb3NpdGlvbihzZWxmLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZXhwbG9zaW9uKSBcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5leHBsb3Npb24sZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVkRGVzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoJ3NoYWtlQ2FtZXJhJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KCdHYW1lQ29udHJvbGxlcicpLnNwYXdTaGllbGQoc2VsZi5ub2RlLnBvc2l0aW9uLngsIHNlbGYubm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdCb3NzJykuZ2V0Q29tcG9uZW50KCdCb3NzJykuc3Bhd25CdWxsZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd0J1bGxldCwxLjUsY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpOyBcbiAgICAgfVxufVxuIl19