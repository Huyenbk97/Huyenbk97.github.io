import bullet from "./Bullet";
import GameUIcontroller from "./GameUIcontroller";
const {ccclass, property} = cc._decorator;
@ccclass
export default class Ship extends cc.Component {
    static Instance: Ship = null;
    // @property(cc.Node)
    // initBulletPosition: cc.Node = null;
    // @property(cc.Node)
    // initBulletPosition1: cc.Node = null;
    @property(cc.Node)
    ship: cc.Node = null;
    @property(cc.Node)
    popup: cc.Node = null;
    @property(cc.Node)
    text: cc.Node = null;
    @property(cc.Node)
    hand: cc.Node = null;
    @property(cc.Node)
    bgblack: cc.Node = null;
    @property(cc.Prefab)
    shield: cc.Prefab = null;
    
    @property(cc.Node)
    bulletPo: cc.Node = null;
    @property(cc.Node)
    redDis: cc.Node = null;
    // @property()
    @property(cc.Prefab)
    shipBullet: cc.Node = null;
    @property
    bulletPool: number = 0;
    @property
    game: number = 0;
    @property
    bullet1: number = 1;
    @property(cc.Animation)
    redDisplay: cc.AnimationClip = null;
    @property
    bullet2: boolean = false;
    @property(cc.Prefab)
    shipBullet1: cc.Node = null;
    @property(cc.Prefab)
    shipBullet2: cc.Node = null;
    @property(cc.Prefab)
    shipBullet3: cc.Node = null;
    @property(cc.Prefab)
    shipBullet4: cc.Node = null;
    @property(cc.Prefab)
    shipBullet5: cc.Node = null;
    @property(cc.Prefab)
    shipBullet6: cc.Node = null;
    @property(cc.Prefab)
    shipBullet7: cc.Node = null;
    @property(cc.Prefab)
    shipBullet8: cc.Node = null;
    @property(cc.Node)
    redD: cc.Node = null;
    @property({
        type: cc.AudioClip
    })
    shoot: null;
  
    @property({
        type: cc.AudioClip
    })
    backgroundSound = null;
    @property(cc.Prefab)
    BulletSkill2: cc.Prefab = null;
    @property(cc.Node)
    bulletParent: cc.Node = null;
    fireRate: number = 1;
    isGamestart: boolean = false;
    positionXY(event) {
        // //lay toa do xy tim ra goc xoay
        // var playerPosition =cc.v2(this.node.position.x,this.node.position.y);
        // var touchPosition=event.getLocation();
        // touchPosition=this.node.parent.convertToNodeSpaceAR( touchPosition);
        // // console.log(mousePosition); 
        // var angle= touchPosition.signAngle(playerPosition);
        // // console.log(angle);
        // var angleD=cc.misc.radiansToDegrees(angle);
        // angleD=(angleD* -1)-180;
        // this.node.angle=angleD;
    }
    onLoad() {
        Ship.Instance = this;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        //if (this.popup.active==false) {
        //this.bulletTime = 0;
        this.ship.on(cc.Node.EventType.TOUCH_START, function (event) {
           
                
            //this.Ship.getComponent(cc.Animation).play();
 
            this.schedule(this.createBullet, 0.15, cc.macro.REPEAT_FOREVER);
  
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.schedule(this.createBullet, 0.15, cc.macro.REPEAT_FOREVER);
  
        }, this);
        
        //   this.scheduleOnce(function() {
        //     // Here `this` is referring to the component
        //            GameUIcontroller.Instance.showBanner();
        // }, 12);
        //this.node.parent.on('touchmove',this.startShotting,this);
        // }
        //console.log(this.bullet1);
       
    }
    start() {
    }
    SpawnBullet() {
        // var Bullet = cc.instantiate(this.BulletSkill2);
        // Bullet.setPosition(this.ship.position.x,this.ship.position.y+this.ship.height/2);
        // this.ship.parent.addChild(Bullet);
    }
    spawShield1() {
        console.log("spawShieldShip11111");
        this.bullet1 += 1
        console.log("so dan" + this.bullet1);
        
    }
    createBullet() {
        if (this.text.active == false) {
           
            var Bullet = cc.instantiate(this.shipBullet1);
            Bullet.setPosition(this.node.position.x + 20, this.node.position.y + this.node.height / 2);
            this.node.parent.addChild(Bullet);

            var Bullet = cc.instantiate(this.shipBullet1);
            Bullet.setPosition(this.node.position.x - 20, this.node.position.y + this.node.height / 2);
            this.node.parent.addChild(Bullet);
            

        }
      
    }
    
    
    onKill() {
        //this.bulletPool.put(bullet);
    }
    InitBullet() {
        // var bullet = cc.instantiate(this.shipBullet);
        // //bullet.setPosition(this.initBulletPosition.position);
        // //this.node.parent.addChild(bullet);
        // bullet.parent = this.node;
        // var pos = this.initBulletPosition.getPosition();
        // bullet.setPosition(cc.v2(pos.x,pos.y+this.initBulletPosition.height/2))
        // cc.audioEngine.playEffect(this.shoot, false);
        // // var bullet1 = cc.instantiate(this.shipBullet);
        // // bullet1.setPosition(this.initBulletPosition1.position);
        // // bullet1.parent = this.bulletParent;
        // // var bullet1 = cc.instantiate(this.shipBullet);
        // // bullet1.setPosition(this.initBulletPosition2.position);
        // // bullet1.parent = this.bulletParent; 
        // cc.audioEngine.setVolume(this.shoot, 0.5);
        // cc.audioEngine.playEffect(this.shoot,false); 
    }
    startShotting() {
        // var self=this;
        // this.schedule(function(){
        //     self.shotting();
        // },this.fireRate);
        this.schedule(this.createBullet, 0.18, cc.macro.REPEAT_FOREVER, 0);
    }

    shotting() {
        this.InitBullet();
    }
    update(dt) {
        this.ship.on(cc.Node.EventType.TOUCH_END, function (event) {
            this.text.active = true;
            this.bgblack.active = true;
            this.hand.active = true;
        }, this);
        this.ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.text.active = false;
            this.bgblack.active = false;
            this.hand.active = false;
        }, this);
        this.ship.on(cc.Node.EventType.TOUCH_START, function (event) {

        }, this);
    }
    onCollisionEnter(other, self) {
        console.log(self.name);
        console.log(other.name);
        if (other.name == "boss26_bullet_2<BoxCollider>") {
            this.redD.getComponent(cc.Animation).play('shakeCamera');
            this.redDis.active = true;
            this.redDis.getComponent(cc.Animation).play('effectRed');
            //this.redDis.active = false;

        }
        if (self.name == "Bullet33<BoxCollider>") {
          console.log("test");
          
        }
    }
}