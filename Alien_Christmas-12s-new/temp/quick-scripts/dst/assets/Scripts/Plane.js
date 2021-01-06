
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Plane.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94b9atHwnpANKpaBo4scBsD', 'Plane');
// Scripts/Plane.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    Audio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onLoad: function onLoad() {
    // add key down and key up event
    this.node.on('touchmove', function (event) {
      var delta = event.touch.getDelta();
      this.x += delta.x;
      this.y += delta.y;
      console.log("â");
    }, this.node);
  } // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJBdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJub2RlIiwib24iLCJldmVudCIsImRlbHRhIiwidG91Y2giLCJnZXREZWx0YSIsIngiLCJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1pDLElBQUFBLEtBQUssRUFBQztBQUNKLGlCQUFRLElBREo7QUFFSkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkw7QUFETSxHQUhQO0FBV0w7QUFFQTtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFFQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxXQUFiLEVBQXlCLFVBQVNDLEtBQVQsRUFBZTtBQUNwQyxVQUFJQyxLQUFLLEdBQUVELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxRQUFaLEVBQVg7QUFDQSxXQUFLQyxDQUFMLElBQVNILEtBQUssQ0FBQ0csQ0FBZjtBQUNBLFdBQUtDLENBQUwsSUFBU0osS0FBSyxDQUFDSSxDQUFmO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFLSCxLQVRELEVBU0UsS0FBS1QsSUFUUDtBQVdILEdBNUJJLENBNkJMOztBQTdCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgXG4gICAgcHJvcGVydGllczoge1xuICAgIEF1ZGlvOntcbiAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICB9LFxuICBcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGFkZCBrZXkgZG93biBhbmQga2V5IHVwIGV2ZW50XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNobW92ZScsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgdmFyIGRlbHRhID1ldmVudC50b3VjaC5nZXREZWx0YSgpO1xuICAgICAgICAgICAgdGhpcy54ICs9ZGVsdGEueDtcbiAgICAgICAgICAgIHRoaXMueSArPWRlbHRhLnk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIsOiXCIpO1xuICAgICAgICAgICBcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgfSx0aGlzLm5vZGUpO1xuXG4gICAgfSxcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBcbn0pO1xuIl19