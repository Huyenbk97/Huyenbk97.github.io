
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SpriteEx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b6c2viWZZEepIbA9eCBrjv', 'SpriteEx');
// Scripts/SpriteEx.js

"use strict";

/**
 * 精灵增加 
 */
var SpriteEx = cc.Class({
  "extends": cc.Sprite,
  properties: {
    spriteFrames: [cc.SpriteFrame],
    _index: 0,
    index: {
      type: cc.Integer,
      set: function set(value) {
        if (value < 0) {
          return;
        }

        this._index = value % this.spriteFrames.length;
        this.spriteFrame = this.spriteFrames[this._index];
      },
      get: function get() {
        return this._index;
      }
    }
  },
  next: function next() {
    this.index++;
  }
});
cc.Class.Attr.setClassAttr(SpriteEx, 'spriteFrame', 'visible', false);
cc.Class.Attr.setClassAttr(SpriteEx, '_atlas', 'visible', false);
cc.Class.Attr.setClassAttr(SpriteEx, 'fillType', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillCenter', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillStart', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillEnd', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillRange', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'srcBlendFactor', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'dstBlendFactor', 'visible', function () {
  return this._type === cc.Sprite.Type.FILLED;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3ByaXRlRXguanMiXSwibmFtZXMiOlsiU3ByaXRlRXgiLCJjYyIsIkNsYXNzIiwiU3ByaXRlIiwicHJvcGVydGllcyIsInNwcml0ZUZyYW1lcyIsIlNwcml0ZUZyYW1lIiwiX2luZGV4IiwiaW5kZXgiLCJ0eXBlIiwiSW50ZWdlciIsInNldCIsInZhbHVlIiwibGVuZ3RoIiwic3ByaXRlRnJhbWUiLCJnZXQiLCJuZXh0IiwiQXR0ciIsInNldENsYXNzQXR0ciIsIl90eXBlIiwiVHlwZSIsIkZJTExFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUEsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQixhQUFTRCxFQUFFLENBQUNFLE1BRFE7QUFHcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxZQUFZLEVBQUUsQ0FBQ0osRUFBRSxDQUFDSyxXQUFKLENBRE47QUFHUkMsSUFBQUEsTUFBTSxFQUFFLENBSEE7QUFJUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hDLE1BQUFBLElBQUksRUFBRVIsRUFBRSxDQUFDUyxPQUROO0FBRUhDLE1BQUFBLEdBRkcsZUFFQ0MsS0FGRCxFQUVRO0FBQ1AsWUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYO0FBQ0g7O0FBQ0QsYUFBS0wsTUFBTCxHQUFjSyxLQUFLLEdBQUcsS0FBS1AsWUFBTCxDQUFrQlEsTUFBeEM7QUFDQSxhQUFLQyxXQUFMLEdBQW1CLEtBQUtULFlBQUwsQ0FBa0IsS0FBS0UsTUFBdkIsQ0FBbkI7QUFDSCxPQVJFO0FBU0hRLE1BQUFBLEdBVEcsaUJBU0c7QUFDRixlQUFPLEtBQUtSLE1BQVo7QUFDSDtBQVhFO0FBSkMsR0FIUTtBQXNCcEJTLEVBQUFBLElBdEJvQixrQkFzQmI7QUFDSCxTQUFLUixLQUFMO0FBQ0g7QUF4Qm1CLENBQVQsQ0FBZjtBQTRCQVAsRUFBRSxDQUFDQyxLQUFILENBQVNlLElBQVQsQ0FBY0MsWUFBZCxDQUEyQmxCLFFBQTNCLEVBQXFDLGFBQXJDLEVBQW9ELFNBQXBELEVBQStELEtBQS9EO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTZSxJQUFULENBQWNDLFlBQWQsQ0FBMkJsQixRQUEzQixFQUFxQyxRQUFyQyxFQUErQyxTQUEvQyxFQUEwRCxLQUExRDtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsVUFBckMsRUFBaUQsU0FBakQsRUFBNEQsWUFBVztBQUNuRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBSUFwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsWUFBckMsRUFBbUQsU0FBbkQsRUFBOEQsWUFBVztBQUNyRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBR0FwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsV0FBckMsRUFBa0QsU0FBbEQsRUFBNkQsWUFBVztBQUNwRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBR0FwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsU0FBckMsRUFBZ0QsU0FBaEQsRUFBMkQsWUFBVztBQUNsRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBR0FwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsV0FBckMsRUFBa0QsU0FBbEQsRUFBNkQsWUFBVztBQUNwRSxTQUFPLEtBQUttQixLQUFMLEtBQWVsQixFQUFFLENBQUNFLE1BQUgsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBckM7QUFDSCxDQUZEO0FBSUFwQixFQUFFLENBQUNDLEtBQUgsQ0FBU2UsSUFBVCxDQUFjQyxZQUFkLENBQTJCbEIsUUFBM0IsRUFBcUMsZ0JBQXJDLEVBQXVELFNBQXZELEVBQWtFLFlBQVc7QUFDekUsU0FBTyxLQUFLbUIsS0FBTCxLQUFlbEIsRUFBRSxDQUFDRSxNQUFILENBQVVpQixJQUFWLENBQWVDLE1BQXJDO0FBQ0gsQ0FGRDtBQUdBcEIsRUFBRSxDQUFDQyxLQUFILENBQVNlLElBQVQsQ0FBY0MsWUFBZCxDQUEyQmxCLFFBQTNCLEVBQXFDLGdCQUFyQyxFQUF1RCxTQUF2RCxFQUFrRSxZQUFXO0FBQ3pFLFNBQU8sS0FBS21CLEtBQUwsS0FBZWxCLEVBQUUsQ0FBQ0UsTUFBSCxDQUFVaUIsSUFBVixDQUFlQyxNQUFyQztBQUNILENBRkQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog57K+54G15aKe5YqgIFxuICovXG5cbmxldCBTcHJpdGVFeCA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5TcHJpdGUsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwcml0ZUZyYW1lczogW2NjLlNwcml0ZUZyYW1lXSxcblxuICAgICAgICBfaW5kZXg6IDAsXG4gICAgICAgIGluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gdmFsdWUgJSB0aGlzLnNwcml0ZUZyYW1lcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVzW3RoaXMuX2luZGV4XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrK1xuICAgIH1cbn0pO1xuXG5cbmNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKFNwcml0ZUV4LCAnc3ByaXRlRnJhbWUnLCAndmlzaWJsZScsIGZhbHNlKTtcbmNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKFNwcml0ZUV4LCAnX2F0bGFzJywgJ3Zpc2libGUnLCBmYWxzZSk7XG5cbmNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKFNwcml0ZUV4LCAnZmlsbFR5cGUnLCAndmlzaWJsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlID09PSBjYy5TcHJpdGUuVHlwZS5GSUxMRUQ7XG59KTtcblxuY2MuQ2xhc3MuQXR0ci5zZXRDbGFzc0F0dHIoU3ByaXRlRXgsICdmaWxsQ2VudGVyJywgJ3Zpc2libGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xufSk7XG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihTcHJpdGVFeCwgJ2ZpbGxTdGFydCcsICd2aXNpYmxlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGUgPT09IGNjLlNwcml0ZS5UeXBlLkZJTExFRDtcbn0pO1xuY2MuQ2xhc3MuQXR0ci5zZXRDbGFzc0F0dHIoU3ByaXRlRXgsICdmaWxsRW5kJywgJ3Zpc2libGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xufSk7XG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihTcHJpdGVFeCwgJ2ZpbGxSYW5nZScsICd2aXNpYmxlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGUgPT09IGNjLlNwcml0ZS5UeXBlLkZJTExFRDtcbn0pO1xuXG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihTcHJpdGVFeCwgJ3NyY0JsZW5kRmFjdG9yJywgJ3Zpc2libGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xufSk7XG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihTcHJpdGVFeCwgJ2RzdEJsZW5kRmFjdG9yJywgJ3Zpc2libGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xufSk7Il19