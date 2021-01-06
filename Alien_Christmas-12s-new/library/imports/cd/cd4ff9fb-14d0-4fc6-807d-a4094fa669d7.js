"use strict";
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