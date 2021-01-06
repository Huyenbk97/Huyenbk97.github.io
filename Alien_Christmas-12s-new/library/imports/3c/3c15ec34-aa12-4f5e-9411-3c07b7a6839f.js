"use strict";
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