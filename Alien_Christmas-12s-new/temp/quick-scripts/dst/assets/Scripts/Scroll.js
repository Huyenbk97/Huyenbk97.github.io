
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Scroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9fa31UQMPtN0KXrzHrZTwAO', 'Scroll');
// Scripts/Scroll.ts

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
var Scroll = /** @class */ (function (_super) {
    __extends(Scroll, _super);
    function Scroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.background_1 = null;
        _this.background_2 = null;
        _this.speed = 200;
        _this.initPosition = null;
        return _this;
    }
    Scroll.prototype.start = function () {
        var screen = cc.find("Canvas");
        // this.initPosition = this.background_2.getPosition();
        this.initPosition = cc.v2(screen.getContentSize().width, 0);
        console.log(screen.getContentSize().width);
        this.background_2.setPosition(this.initPosition);
    };
    Scroll.prototype.update = function (dt) {
        this.background_1.x -= this.speed * dt;
        this.background_2.x -= this.speed * dt;
        if (this.background_1.getPosition().x <= -this.background_1.getContentSize().width) {
            this.background_1.setPosition(this.initPosition);
            this.background_2.setPosition(0, 0);
        }
        if (this.background_2.getPosition().x <= -this.background_2.getContentSize().width) {
            this.background_2.setPosition(this.initPosition);
            this.background_1.setPosition(0, 0);
        }
    };
    __decorate([
        property(cc.Node)
    ], Scroll.prototype, "background_1", void 0);
    __decorate([
        property(cc.Node)
    ], Scroll.prototype, "background_2", void 0);
    __decorate([
        property
    ], Scroll.prototype, "speed", void 0);
    Scroll = __decorate([
        ccclass
    ], Scroll);
    return Scroll;
}(cc.Component));
exports.default = Scroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBa0NDO1FBL0JHLGVBQWU7UUFFZixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQXdCakMsQ0FBQztJQXZCRyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvQix1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCx1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFFTCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVztJQUU3QjtRQURDLFFBQVE7eUNBQ1c7SUFUSCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBa0MxQjtJQUFELGFBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ21DLEVBQUUsQ0FBQyxTQUFTLEdBa0MvQztrQkFsQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFja2dyb3VuZF8xOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYWNrZ3JvdW5kXzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7XG4gICAgaW5pdFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdmFyIHNjcmVlbiA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG5cbiAgICAgICAgLy8gdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLmJhY2tncm91bmRfMi5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IGNjLnYyKHNjcmVlbi5nZXRDb250ZW50U2l6ZSgpLndpZHRoLDApO1xuICAgICAgICBjb25zb2xlLmxvZyhzY3JlZW4uZ2V0Q29udGVudFNpemUoKS53aWR0aCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZF8yLnNldFBvc2l0aW9uKCB0aGlzLmluaXRQb3NpdGlvbik7XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmRfMS54IC09IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kXzIueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRfMS5nZXRQb3NpdGlvbigpLnggPD0gLXRoaXMuYmFja2dyb3VuZF8xLmdldENvbnRlbnRTaXplKCkud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZF8xLnNldFBvc2l0aW9uKHRoaXMuaW5pdFBvc2l0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kXzIuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdW5kXzIuZ2V0UG9zaXRpb24oKS54IDw9IC10aGlzLmJhY2tncm91bmRfMi5nZXRDb250ZW50U2l6ZSgpLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRfMi5zZXRQb3NpdGlvbih0aGlzLmluaXRQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRfMS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19