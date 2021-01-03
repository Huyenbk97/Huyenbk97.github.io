import GameUIcontroller from "./GameUIcontroller";
import Test from "./Test";

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameController extends cc.Component {
    static Instance: GameController = null;
    @property
    numOfEnemy: number =47;
    @property(cc.Node)
    popup: cc.Node = null;
    @property(cc.Node)
    popupopen: cc.Node = null;
    @property(cc.Node)
    text: cc.Node = null;
    @property(cc.Node)
    Boss2: cc.Node = null;
    @property(cc.Node)
    play: cc.Node = null;
    @property(cc.Node)
    Ship: cc.Node = null;
    @property(cc.Node)
    moveHand: cc.Node = null;
    @property
    enemyemty = false
    @property
    bossemty=false
    @property(cc.Node)
    boss2: cc.Node = null;
    @property(cc.Node)
    iconGame: cc.Node = null;
    @property(cc.Node)
    initBulletPosition:cc.Node=null;
    // @property()
    @property(cc.Prefab)
    shipBullet: cc.Node = null;
    @property(cc.Prefab)
    sheild: cc.Node = null;
    @property
    sheildNumber: number = 0;
    @property
    wight: number = 0;
    @property
    height: number = 0;
    @property
    wightBf: number = 0;
    @property
    heightBf: number = 0;
    @property
    enemyemty1: number = 9;
    @property
    setPositionDoc: boolean = true;
    @property
    setPositionNgang: boolean =true;
    @property({
        type:cc.AudioClip
      })
    Victory = null;
    @property({
        type:cc.AudioClip
      })
     backgroundSound =null;
    onLoad() {
        this.wight = screen.width;
        this.height = screen.height;
        var manager= cc.director.getCollisionManager();
        manager.enabled = true;
        cc.audioEngine.play(this.backgroundSound, true,0.5);
    }
    start() {
    }

    setTouch() {
        this.Ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos_ship = this.Ship.getPosition()
            var pos_move = event.getDelta();
            this.Ship.setPosition(cc.v2(pos_ship.x+pos_move.x,pos_move.y+pos_ship.y))
        }, this);
    }
    delay() {
        this.node = cc.find("Canvas");
        this.node.on(cc.Node.EventType.TOUCH_START, this.clickPopup);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.clickPopup);
        this.scheduleOnce(this.clickPopup, 3);
    }
    decreaseEnemy() {
        this.numOfEnemy-=1;
        console.log(this.numOfEnemy);
        if (this.numOfEnemy == 0) {
            this.showPopup();
        }
    }
    InitBullet(){
        var bullet = cc.instantiate(this.shipBullet);
        var pos = this.initBulletPosition.getPosition();
        bullet.setPosition(cc.v2(pos.x,pos.y+this.initBulletPosition.height/2))
        bullet.parent = this.initBulletPosition;

    }   

    spawShield(x,y) {
        this.sheildNumber++
        if (this.sheildNumber<=2) {
            var shield = cc.instantiate(this.sheild)
            shield.setPosition(x,y);
            this.node.parent.addChild(shield); 
        }
        
    }
    showPopup() {
        cc.audioEngine.playEffect(this.Victory,false);  
        var action = cc.moveBy(0.5, 0, 1000);
        var seq = cc.sequence(cc.moveBy(0.5, 0, 1000), cc.hide());
        this.Ship.runAction(seq);
        GameUIcontroller.Instance.showBanner();
    }
    clickPopup() {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
               cc.sys.openURL("https://play.google.com/store/apps/details?id=com.alien.shooter.galaxy.attack&hl=vi&gl=US");
             } else {
                cc.sys.openURL("https://apps.apple.com/us/app/galaxy-attack-alien-shooter/id1176011642");
             }
    }  
    update() {
   
        if (window.matchMedia("(orientation: portrait)").matches) { 
            if (screen.width==375) {
                this.iconGame.setScale(0.8, 0.8);
                 this.play.setScale(0.8, 0.8);
                this.text.setScale(0.8, 0.8);
                this.text.setPosition(8.234, -55.209)
             
            }
            else {
                this.Boss2.setScale(0.9,0.9)
                 this.iconGame.setScale(1, 1); 
                 this.play.setScale(0.9, 0.9);
                this.text.setScale(1, 1);
                this.text.setPosition(8.234, -55.209)
            }
            this.node = cc.find("Canvas/resize");
        //     this.node.setScale(1.9, 1.9);
            this.node.setScale(1, 1);
            this.Ship.setScale(0.6,0.6)
         
            if (this.setPositionDoc==false) {
                this.Ship.setPosition(16, -382.86);
                this.setPositionNgang = false;
                this.setPositionDoc = true;              
            }        
        }
        if (window.matchMedia("(orientation: landscape)").matches) { 
            this.node = cc.find("Canvas/resize");
            this.node.setScale(0.4, 0.4);
            this.node.setPosition(21,-10)
            this.play.setPosition(-236.899,-148.714)
            this.play.setScale(0.4, 0.4);
            this.iconGame.setPosition(239,-134)
            this.iconGame.setScale(0.4, 0.4);
            this.text.setScale(0.5, 0.5);
            this.text.setPosition(8.234, -10)
            this.Ship.setScale(0.3, 0.3);
            this.Boss2.setScale(0.4,0.4)
            if (this.setPositionNgang==false) {
                this.Ship.setPosition(8.808,-144.453)
                this.setPositionNgang = true;
                this.setPositionDoc = false;  
            }  
        }
    }
}
