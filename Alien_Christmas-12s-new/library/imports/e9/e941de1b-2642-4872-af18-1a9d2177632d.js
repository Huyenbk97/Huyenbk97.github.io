"use strict";
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