
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Bad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e941d4bJkJIcq8YGp0hd2Mt', 'Bad');
// Scripts/Bad.ts

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
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bad = /** @class */ (function (_super) {
    __extends(Bad, _super);
    function Bad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemyLife = 2;
        _this.enemyNumber = 46;
        _this.explosion = null;
        _this.fire = null;
        _this.shield = null;
        return _this;
        // showRevivePopup() {
        //   GameController.Instance.showPopup();
        //   };
        // removeEx() {
        //   this.node.destroy();
        //   // GameController.Instance.spawnShips();
        //   this.node.parent.getComponent('Game').spawnShips();
        //  }
        // update (dt) {}
    }
    Bad.prototype.onCollisionEnter = function (other, self) {
        console.log(other.name + self.name);
        GameController_1.default.Instance.decreaseEnemy();
        cc.audioEngine.playEffect(this.explosion, false);
        this.explosionRun();
        if (other.name == "Bullets<CircleCollider>" && self.name == "enemy2<BoxCollider>") {
            this.enemyLife -= 1;
            this.enemyNumber -= 1;
            console.log(this.enemyNumber);
            if ((this.enemyLife == 0)) {
                this.explosionRun();
                this.node.destroy();
                cc.audioEngine.playEffect(this.explosion, false);
                // var anim = this.getComponent(cc.Animation); 
                //
            }
        }
        if (other.name == "Bullets<CircleCollider>" && self.name == "enemy<BoxCollider>") {
            this.enemyLife -= 1;
            this.enemyNumber -= 1;
            console.log(this.enemyNumber);
            console.log("CHAY DUOC");
            if ((this.enemyLife == 0)) {
                //GameController.Instance.decreaseEnemy();
                cc.audioEngine.playEffect(this.explosion, false);
                //  var explosion =this.node.getPosition();
                // console.log(explosion);
                this.explosionRun();
                this.enemyNumber -= 1;
                this.node.destroy();
                //this.spawShield();
                console.log("CHAY DUOC");
            }
        }
        if (other.name == "Bullets<CircleCollider>" && self.name == "enemy3<PolygonCollider>") {
            this.enemyLife -= 1;
            this.enemyNumber -= 1;
            console.log(this.enemyNumber);
            if ((this.enemyLife == 0)) {
                cc.audioEngine.playEffect(this.explosion, false);
                //  var explosion =this.node.getPosition();
                // console.log(explosion);
                this.explosionRun();
                this.node.destroy();
                // this.spawShield();
            }
        }
        //  if (this.enemyNumber == 0) {
        //   this.showRevivePopup();
        //  }
    };
    //tao item shield
    Bad.prototype.spawShield = function () {
        var shield = this.node.getPosition();
        var shieldRun = cc.instantiate(this.shield);
        this.node.parent.addChild(shieldRun);
        shieldRun.setPosition(this.node.position.x, this.node.position.y);
    };
    // tao vu no 
    Bad.prototype.explosionRun = function () {
        var explosion = this.node.getPosition();
        // console.log(explosion);
        var explosionRun = cc.instantiate(this.fire);
        this.node.parent.addChild(explosionRun);
        explosionRun.setPosition(this.node.position.x, this.node.position.y);
        var animation = explosionRun.getComponent(cc.Animation);
        animation.on('finished', this.onFinished, explosionRun);
    };
    Bad.prototype.die = function () {
        ///
    };
    //  spawnBigGuy(){
    //   var newBoss = cc.instantiate(this.bigguy);
    //   newBoss.setPosition(this.node.getChildByName('bigguy').position.x,this.node.getChildByName('bigguy').position.y); 
    //   this.node.addChild(newBoss);
    //  } 
    Bad.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    //   spawn(even){
    //     var moveRight= cc.moveBy(2, 0, -200);
    //     this.node.runAction(moveRight);
    //  }
    Bad.prototype.start = function () {
    };
    __decorate([
        property
    ], Bad.prototype, "enemyLife", void 0);
    __decorate([
        property
    ], Bad.prototype, "enemyNumber", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        }),
        property({
            type: cc.AudioClip
        })
    ], Bad.prototype, "explosion", void 0);
    __decorate([
        property(cc.Prefab)
    ], Bad.prototype, "fire", void 0);
    __decorate([
        property(cc.Prefab)
    ], Bad.prototype, "shield", void 0);
    Bad = __decorate([
        ccclass
    ], Bad);
    return Bad;
}(cc.Component));
exports.default = Bad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUNBQ0M7SUFoQkYsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQWlJdkI7SUFBRCxVQUFDO0NBaklELEFBaUlDLENBaklnQyxFQUFFLENBQUMsU0FBUyxHQWlJNUM7a0JBaklvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvc3NNb3ZlIGZyb20gXCIuL0Jvc3NNb3ZlXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBJbml0Qm9zc0NvbnRyb2xsZXIgZnJvbSBcIi4vSW5pdEJvc3NDb250cm9sbGVyXCI7XG5pbXBvcnQgUG9wdXBXaW5kb3cgZnJvbSBcIi4vUG9wdXBXaW5kb3dcIjtcbmltcG9ydCBHYW1lVUljb250cm9sbGVyIGZyb20gXCIuL0dhbWVVSWNvbnRyb2xsZXJcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eVxuICBlbmVteUxpZmU6bnVtYmVyID0yO1xuICBAcHJvcGVydHlcbiAgZW5lbXlOdW1iZXI6bnVtYmVyID00NjtcbiAgYWN0aW9uOiBjYy5BY3Rpb25JbnRlcnZhbDtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOmNjLkF1ZGlvQ2xpcFxuICB9KVxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6Y2MuQXVkaW9DbGlwXG4gIH0pXG4gIGV4cGxvc2lvbiA9bnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgZmlyZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHNoaWVsZCA6Y2MuTm9kZT1udWxsO1xuIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsc2VsZil7XG4gICBjb25zb2xlLmxvZyhvdGhlci5uYW1lK3NlbGYubmFtZSk7XG4gICBHYW1lQ29udHJvbGxlci5JbnN0YW5jZS5kZWNyZWFzZUVuZW15KCk7XG4gICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhwbG9zaW9uLGZhbHNlKTsgICAgICAgXG4gICB0aGlzLmV4cGxvc2lvblJ1bigpOyBcbiAgICAgICAgaWYob3RoZXIubmFtZSA9PSBcIkJ1bGxldHM8Q2lyY2xlQ29sbGlkZXI+XCIgJiYgc2VsZi5uYW1lID09IFwiZW5lbXkyPEJveENvbGxpZGVyPlwiKXtcbiAgICAgICAgICB0aGlzLmVuZW15TGlmZS09IDE7XG4gICAgICAgICAgdGhpcy5lbmVteU51bWJlciAtPSAxO1xuICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5lbmVteU51bWJlcik7XG4gICAgICAgICAgICAgICAgICBpZigodGhpcy5lbmVteUxpZmU9PTApKXsgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uUnVuKCk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTsgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhwbG9zaW9uLGZhbHNlKTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7IFxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgfVxuICAgICAgaWYob3RoZXIubmFtZSA9PSBcIkJ1bGxldHM8Q2lyY2xlQ29sbGlkZXI+XCIgJiYgc2VsZi5uYW1lID09IFwiZW5lbXk8Qm94Q29sbGlkZXI+XCIpe1xuICAgICAgICB0aGlzLmVuZW15TGlmZS09IDE7XG4gICAgICAgIHRoaXMuZW5lbXlOdW1iZXIgLT0gMTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW5lbXlOdW1iZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNIQVkgRFVPQ1wiICk7XG4gICAgICAgICAgICAgICAgICBpZigodGhpcy5lbmVteUxpZmU9PTApKXtcbiAgICAgICAgICAgICAgICAgICAgLy9HYW1lQ29udHJvbGxlci5JbnN0YW5jZS5kZWNyZWFzZUVuZW15KCk7XG4gICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmV4cGxvc2lvbixmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAvLyAgdmFyIGV4cGxvc2lvbiA9dGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhleHBsb3Npb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvc2lvblJ1bigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15TnVtYmVyIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zcGF3U2hpZWxkKCk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNIQVkgRFVPQ1wiICk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgIH0gICAgIFxuICAgICAgaWYob3RoZXIubmFtZSA9PSBcIkJ1bGxldHM8Q2lyY2xlQ29sbGlkZXI+XCIgJiYgc2VsZi5uYW1lID09IFwiZW5lbXkzPFBvbHlnb25Db2xsaWRlcj5cIil7XG4gICAgICAgIHRoaXMuZW5lbXlMaWZlLT0gMTtcbiAgICAgICAgdGhpcy5lbmVteU51bWJlci09IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW5lbXlOdW1iZXIpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoKHRoaXMuZW5lbXlMaWZlPT0wKSl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5leHBsb3Npb24sZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgLy8gIHZhciBleHBsb3Npb24gPXRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXhwbG9zaW9uKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uUnVuKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zcGF3U2hpZWxkKCk7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgfVxuICAgXG4gICBcbiAgLy8gIGlmICh0aGlzLmVuZW15TnVtYmVyID09IDApIHtcbiAgLy8gICB0aGlzLnNob3dSZXZpdmVQb3B1cCgpO1xuICAvLyAgfVxuICB9XG4gIC8vdGFvIGl0ZW0gc2hpZWxkXG4gIHNwYXdTaGllbGQoKSB7XG4gICAgdmFyIHNoaWVsZCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgIHZhciBzaGllbGRSdW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoaWVsZCk7XG4gICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzaGllbGRSdW4pO1xuICAgIHNoaWVsZFJ1bi5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xuICAgIFxufVxuICAgIC8vIHRhbyB2dSBubyBcbiAgICBleHBsb3Npb25SdW4oKXtcbiAgICAgIHZhciBleHBsb3Npb24gPXRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgLy8gY29uc29sZS5sb2coZXhwbG9zaW9uKTtcbiAgICAgIHZhciBleHBsb3Npb25SdW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZpcmUpO1xuICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChleHBsb3Npb25SdW4pO1xuICAgICAgZXhwbG9zaW9uUnVuLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LHRoaXMubm9kZS5wb3NpdGlvbi55KTtcbiAgICAgIHZhciBhbmltYXRpb24gPWV4cGxvc2lvblJ1bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgIGFuaW1hdGlvbi5vbignZmluaXNoZWQnLHRoaXMub25GaW5pc2hlZCwgZXhwbG9zaW9uUnVuKTtcbiAgICB9XG4gICAgZGllKCl7XG4gICAgICAvLy9cbiAgICB9XG4gIC8vICBzcGF3bkJpZ0d1eSgpe1xuICAvLyAgIHZhciBuZXdCb3NzID0gY2MuaW5zdGFudGlhdGUodGhpcy5iaWdndXkpO1xuICAvLyAgIG5ld0Jvc3Muc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdiaWdndXknKS5wb3NpdGlvbi54LHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYmlnZ3V5JykucG9zaXRpb24ueSk7IFxuICAvLyAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCb3NzKTtcbiAgLy8gIH0gXG4gICAgICBvbkxvYWQgKCkge1xuICAgICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICBcbiAgICAgIH1cbiAgICAvLyAgIHNwYXduKGV2ZW4pe1xuICAgIC8vICAgICB2YXIgbW92ZVJpZ2h0PSBjYy5tb3ZlQnkoMiwgMCwgLTIwMCk7XG4gICAgLy8gICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZVJpZ2h0KTtcbiAgICAvLyAgfVxuICAgIHN0YXJ0ICgpIHtcbiAgXG4gICAgfVxuXG4gICBcbiAgLy8gc2hvd1Jldml2ZVBvcHVwKCkge1xuICAvLyAgIEdhbWVDb250cm9sbGVyLkluc3RhbmNlLnNob3dQb3B1cCgpO1xuICAvLyAgIH07XG4gICAgXG4gIC8vIHJlbW92ZUV4KCkge1xuICAvLyAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gIC8vICAgLy8gR2FtZUNvbnRyb2xsZXIuSW5zdGFuY2Uuc3Bhd25TaGlwcygpO1xuICAvLyAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdHYW1lJykuc3Bhd25TaGlwcygpO1xuICAvLyAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gXG59XG4iXX0=