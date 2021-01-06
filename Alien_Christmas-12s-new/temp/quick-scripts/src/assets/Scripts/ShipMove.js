"use strict";
cc._RF.push(module, 'b66a5dHLzRPhqi9f6GJFE1a', 'ShipMove');
// Scripts/ShipMove.ts

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
        _this.speed = 1000;
        _this.tmpPos = null;
        _this.Ship = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        this.tmpPos = this.node.position;
        var self = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            if (self.node) {
                var touches = event.getTouches();
                var moving = touches[0].getDelta();
                self.tmpPos.addSelf(moving);
            }
        });
    };
    NewClass.prototype.update = function (dt) {
        var currentPos = this.node.position;
        var delta = this.tmpPos.sub(currentPos);
        var distance = delta.magSqr();
        var maxSpeedPerFrame = this.speed * dt;
        this.node.position = this.node.position.add(delta);
        var screen = cc.Canvas.instance.node.getContentSize();
        this.node.x = cc.misc.clampf(this.node.x, -screen.width / 2, screen.width / 2);
        this.node.y = cc.misc.clampf(this.node.y, -screen.height / 2, screen.height / 2);
    };
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Ship", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();