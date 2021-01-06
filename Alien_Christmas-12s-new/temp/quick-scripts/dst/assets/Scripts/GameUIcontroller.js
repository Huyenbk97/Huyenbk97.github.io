
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameUIcontroller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a550eLQCyBMbomV/4OkyXRb', 'GameUIcontroller');
// Scripts/GameUIcontroller.ts

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
var GameUIcontroller = /** @class */ (function (_super) {
    __extends(GameUIcontroller, _super);
    function GameUIcontroller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.revicePopup = null;
        return _this;
    }
    GameUIcontroller_1 = GameUIcontroller;
    // LIFE-CYCLE CALLBACKS:
    GameUIcontroller.prototype.onLoad = function () {
        GameUIcontroller_1.Instance = this;
    };
    GameUIcontroller.prototype.start = function () {
    };
    GameUIcontroller.prototype.showBanner = function () {
        if (window.matchMedia("(orientation: portrait)").matches) {
            cc.find("Canvas/Ship").active = false;
            cc.find("Canvas/Node3").active = false;
            console.log("màn hình dọc");
            cc.audioEngine.pauseMusic();
            cc.audioEngine.pauseAllEffects();
            this.revicePopup.active = true;
            // this.revicePopup.opacity=0;
            // this.revicePopup.scale=0.2;
            this.node = cc.find("Canvas/Popup/YES");
            this.node.setPosition(181, -210);
            this.node.setScale(1.4, 1.4);
            this.node = cc.find("Canvas/Popup/NO");
            this.node.setPosition(-187, -210);
            this.node.setScale(1.4, 1.4);
            this.node = cc.find("Canvas/Popup/Text");
            this.node.setPosition(72, 27);
            this.node.setScale(1.5, 1.5);
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
            cc.find("Canvas/Ship").active = false;
            cc.find("Canvas/Node3").active = false;
            console.log("màn hình ngang");
            cc.audioEngine.pauseMusic();
            cc.audioEngine.pauseAllEffects();
            //this.revicePopup.active = true;
            // this.revicePopup.opacity=0;
            // this.revicePopup.scale=0.2;
            this.revicePopup.active = true;
            // this.revicePopup.opacity=0;
            // this.revicePopup.scale=0.2;
            this.node = cc.find("Canvas/Popup/YES");
            this.node.setPosition(190, -210);
            this.node.setScale(1, 1);
            this.node = cc.find("Canvas/Popup/NO");
            this.node.setPosition(-141, -210);
            this.node.setScale(1, 1);
            this.node = cc.find("Canvas/Popup/Text");
            this.node.setPosition(60, 28);
            this.node.setScale(1, 1);
        }
    };
    GameUIcontroller.prototype.hideBanner = function () {
        this.revicePopup.active = false;
    };
    GameUIcontroller.prototype.update = function (dt) { };
    var GameUIcontroller_1;
    GameUIcontroller.Instance = null;
    __decorate([
        property(cc.Node)
    ], GameUIcontroller.prototype, "revicePopup", void 0);
    GameUIcontroller = GameUIcontroller_1 = __decorate([
        ccclass
    ], GameUIcontroller);
    return GameUIcontroller;
}(cc.Component));
exports.default = GameUIcontroller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZVVJY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQW9FQztRQWpFRyxpQkFBVyxHQUFTLElBQUksQ0FBQzs7SUFpRTdCLENBQUM7eUJBcEVvQixnQkFBZ0I7SUFPakMsd0JBQXdCO0lBRXhCLGlDQUFNLEdBQU47UUFDSSxrQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVILHFDQUFVLEdBQVY7UUFDRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDeEQsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDL0IsOEJBQThCO1lBQzlCLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMs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UyxHQW9FekQ7a0JBcEVvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUljb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIEluc3RhbmNlOiBHYW1lVUljb250cm9sbGVyPW51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmV2aWNlUG9wdXA6Y2MuTm9kZT1udWxsO1xuXG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVUljb250cm9sbGVyLkluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgXG4gICAgfVxuICBcbiAgc2hvd0Jhbm5lcigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSB7XG4gICAgICBjYy5maW5kKFwiQ2FudmFzL1NoaXBcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICBjYy5maW5kKFwiQ2FudmFzL05vZGUzXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2coXCJtw6BuIGjDrG5oIGThu41jXCIpO1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGxFZmZlY3RzKCk7XG4gICAgICB0aGlzLnJldmljZVBvcHVwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAvLyB0aGlzLnJldmljZVBvcHVwLm9wYWNpdHk9MDtcbiAgICAgIC8vIHRoaXMucmV2aWNlUG9wdXAuc2NhbGU9MC4yO1xuICAgICAgdGhpcy5ub2RlID0gY2MuZmluZChcIkNhbnZhcy9Qb3B1cC9ZRVNcIik7XG4gICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMTgxLCAtMjEwKTtcbiAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLjQsIDEuNCk7XG4gICAgICB0aGlzLm5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BvcHVwL05PXCIpO1xuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKC0xODcsIC0yMTApO1xuICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEuNCwgMS40KTtcbiAgICAgIHRoaXMubm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvUG9wdXAvVGV4dFwiKTtcbiAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbig3MiwgMjcpO1xuICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEuNSwgMS41KTtcbiAgIFxuICAgIH1cbiAgICAgICAgICAgICBcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykge1xuICAgICAgY2MuZmluZChcIkNhbnZhcy9TaGlwXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2MuZmluZChcIkNhbnZhcy9Ob2RlM1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKFwibcOgbiBow6xuaCBuZ2FuZ1wiKTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsRWZmZWN0cygpO1xuICAgICAgLy90aGlzLnJldmljZVBvcHVwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAvLyB0aGlzLnJldmljZVBvcHVwLm9wYWNpdHk9MDtcbiAgICAgIC8vIHRoaXMucmV2aWNlUG9wdXAuc2NhbGU9MC4yO1xuICAgICAgdGhpcy5yZXZpY2VQb3B1cC5hY3RpdmUgPSB0cnVlO1xuICAgICAgLy8gdGhpcy5yZXZpY2VQb3B1cC5vcGFjaXR5PTA7XG4gICAgICAvLyB0aGlzLnJldmljZVBvcHVwLnNjYWxlPTAuMjtcbiAgICAgIHRoaXMubm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvUG9wdXAvWUVTXCIpO1xuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDE5MCwgLTIxMCk7XG4gICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSwgMSk7XG4gICAgICB0aGlzLm5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BvcHVwL05PXCIpO1xuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKC0xNDEsIC0yMTApO1xuICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEsIDEpO1xuICAgICAgdGhpcy5ub2RlID0gY2MuZmluZChcIkNhbnZhcy9Qb3B1cC9UZXh0XCIpO1xuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDYwLCAyOCk7XG4gICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSwgMSk7XG4gICAgIFxuICAgIH1cbiBcbiAgICB9XG4gICAgaGlkZUJhbm5lcigpe1xuICAgICAgICB0aGlzLnJldmljZVBvcHVwLmFjdGl2ZT1mYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlIChkdCkge31cbn1cbiJdfQ==