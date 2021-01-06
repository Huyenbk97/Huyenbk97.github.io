"use strict";
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