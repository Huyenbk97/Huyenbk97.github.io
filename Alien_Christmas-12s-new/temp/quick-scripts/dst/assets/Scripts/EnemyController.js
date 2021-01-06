
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EnemyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88c25kMA2JBeqILteM3k6Zn', 'EnemyController');
// Scripts/EnemyController.ts

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
var Bad_1 = require("./Bad");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyController = /** @class */ (function (_super) {
    __extends(EnemyController, _super);
    function EnemyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listEnemy1 = null;
        _this.listEnemy2 = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    EnemyController.prototype.start = function () {
    };
    EnemyController.prototype.decreaseEnemyList1 = function () {
        //kiêm tra
        if (this.listEnemy1.childrenCount <= 0) {
            for (var i = 0; i < this.listEnemy2.childrenCount; i++) {
                var e = this.listEnemy2.children[i];
                e.getComponent(Bad_1.default).die();
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], EnemyController.prototype, "listEnemy1", void 0);
    __decorate([
        property(cc.Node)
    ], EnemyController.prototype, "listEnemy2", void 0);
    EnemyController = __decorate([
        ccclass
    ], EnemyController);
    return EnemyController;
}(cc.Component));
exports.default = EnemyController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbXlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUF3QjtBQUdsQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXlCQztRQXJCRyxnQkFBVSxHQUFTLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFTLElBQUksQ0FBQzs7UUFrQnhCLGlCQUFpQjtJQUNyQixDQUFDO0lBbEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsK0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEI7UUFDSSxVQUFVO1FBQ1YsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsSUFBRSxDQUFDLEVBQUM7WUFDaEMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUM1QyxJQUFJLENBQUMsR0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUM3QjtTQUNKO0lBQ0wsQ0FBQztJQW5CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ007SUFOUCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBeUJuQztJQUFELHNCQUFDO0NBekJELEFBeUJDLENBekI0QyxFQUFFLENBQUMsU0FBUyxHQXlCeEQ7a0JBekJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhZCBmcm9tIFwiLi9CYWRcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0RW5lbXkxOmNjLk5vZGU9bnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0RW5lbXkyOmNjLk5vZGU9bnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgZGVjcmVhc2VFbmVteUxpc3QxKCl7XG4gICAgICAgIC8va2nDqm0gdHJhXG4gICAgICAgIGlmKHRoaXMubGlzdEVuZW15MS5jaGlsZHJlbkNvdW50PD0wKXtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5saXN0RW5lbXkyLmNoaWxkcmVuQ291bnQ7aSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgZT0gdGhpcy5saXN0RW5lbXkyLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KEJhZCkuZGllKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==