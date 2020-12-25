// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    Cavas: Node = null;
    @property
    bulletTime: number = 100;
    @property
    radian: number = 0;
    
    @property
    BulletSpeed:number =1000;
    @property
    radianNumber: number = 75;
    @property(cc.Prefab)
    expolosion: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:
    @property
    rotation: number = 0;
    // onLoad () {}
    start () {

    }
    onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }
    onCollisionEnter(other, self) {

    }
    update(dt) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            this.node.setScale(0.4,0.4)
            this.BulletSpeed = 400;
            this.node.setRotation(this.rotation);
            let radian = this.radianNumber / 360 * 2 * Math.PI;
            this.bulletTime -= 3.5;
            this.node.setPosition(this.node.position.x += Math.cos(radian) * dt * this.BulletSpeed, this.node.position.y += Math.sin(radian) * this.BulletSpeed * dt);
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.node.setScale(0.8,0.8)
            this.BulletSpeed = 500;
            this.node.setRotation(this.rotation);
            let radian1 = this.radianNumber / 360 * 2 * Math.PI;
            this.radian+=0.4
            this.bulletTime -= 3.5;
            if (this.radian<=3) {
                this.node.setPosition(this.node.position.x +=3+Math.cos(this.radian) * dt * this.BulletSpeed, this.node.position.y += 5+ this.BulletSpeed * dt);
            }
            else
            if (this.radian>3) {
                this.node.setPosition(this.node.position.x += Math.cos(this.radianNumber / 360 * 2 * Math.PI) * dt * this.BulletSpeed, this.node.position.y += Math.sin(this.radianNumber / 360 * 2 * Math.PI) * this.BulletSpeed * dt);
            }
            if (this.bulletTime == 0) {
                this.node.destroy();
                //this.node.position.y = this.node.position.y + 5;
            }
        }
    }
    // update (dt) {}
}
