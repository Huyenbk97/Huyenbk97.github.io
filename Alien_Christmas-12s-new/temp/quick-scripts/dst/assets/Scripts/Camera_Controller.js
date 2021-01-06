
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Camera_Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d268yDDhdOSb6Zem32oNno', 'Camera_Controller');
// Scripts/Camera_Controller.ts

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
var Camera_Controller = /** @class */ (function (_super) {
    __extends(Camera_Controller, _super);
    function Camera_Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shipMove = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Camera_Controller.prototype.start = function () {
    };
    Camera_Controller.prototype.update = function () {
        var target_position = this.shipMove.getPosition();
        var curren_position = this.node.getPosition();
        curren_position.lerp(target_position, 0.1, curren_position);
        this.node.setPosition(curren_position);
        // update (dt) {}
    };
    Camera_Controller.instance = null;
    __decorate([
        property(cc.Node)
    ], Camera_Controller.prototype, "shipMove", void 0);
    Camera_Controller = __decorate([
        ccclass
    ], Camera_Controller);
    return Camera_Controller;
}(cc.Component));
exports.default = Camera_Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ2FtZXJhX0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFvQkM7UUFqQkcsY0FBUSxHQUFVLElBQUksQ0FBQzs7SUFpQjNCLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLGlDQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0Qsa0NBQU0sR0FBTjtRQUNJLElBQUksZUFBZSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsSUFBSSxlQUFlLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxHQUFHLEVBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0MsaUJBQWlCO0lBQ3JCLENBQUM7SUFsQlUsMEJBQVEsR0FBb0IsSUFBSSxDQUFDO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ0s7SUFITixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQW9CckM7SUFBRCx3QkFBQztDQXBCRCxBQW9CQyxDQXBCOEMsRUFBRSxDQUFDLFNBQVMsR0FvQjFEO2tCQXBCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhX0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHN0YXRpYyBpbnN0YW5jZTogQ2FtZXJhX0NvbnRyb2xsZXI9bnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaGlwTW92ZTogY2MuTm9kZT1udWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuICAgIHVwZGF0ZSgpe1xuICAgICAgICB2YXIgdGFyZ2V0X3Bvc2l0aW9uPXRoaXMuc2hpcE1vdmUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgdmFyIGN1cnJlbl9wb3NpdGlvbj10aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY3VycmVuX3Bvc2l0aW9uLmxlcnAodGFyZ2V0X3Bvc2l0aW9uLDAuMSxjdXJyZW5fcG9zaXRpb24pO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVuX3Bvc2l0aW9uKTtcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxufVxuIl19