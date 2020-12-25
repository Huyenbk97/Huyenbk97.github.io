const {ccclass, property} = cc._decorator;
@ccclass
export default class Boss extends cc.Component {
    static Instance: Boss = null;
    @property(cc.AudioClip)
    ExpolosionBoss = null;
    @property
    duration: number = 0;
    @property
    moveAmountX:number = 300;
    @property
    moveAmountY: number = 75;
    moveEnemy:cc.ActionInterval;
    @property(cc.Prefab)
    BulletBoss: cc.Prefab = null;
    @property(cc.Sprite)
    hp: cc.Sprite = null;
    @property
    ShootFrequency: number = 3.0;
    @property
    enemyLife: number = 200;
    @property
    progress: number = 1;
    @property
    game: number = 0;
    @property
    gameStar: boolean = false;
    @property
    enemyClear: boolean = false;
    @property
    bossClear: boolean = false;
    @property
    playAnimation: boolean = true;
    @property(cc.Prefab)
    explosion: cc.Node = null;
    @property(cc.Node)
    Ship: cc.Node = null;
    @property(cc.Node)
    Boss: cc.Node = null;
    @property(cc.Node)
    text: cc.Node = null;
    @property(cc.Node)
    cavas: cc.Node = null;
    @property(cc.Node)
    redDes: cc.Node = null;
    @property(cc.Node)
    bgBlack: cc.Node = null;
    @property(cc.Prefab)
    explosion1: cc.Node = null;
    @property
    enemyNumber: number = 9;
    @property
    shieldHp: number = 10;
    @property
    BossHp: number = 10;
    @property
    BossMove: number = 10;
    @property(cc.Node)
    textHand: cc.Node = null; 
    @property(cc.Node)
    redDis: cc.Node = null; 
    @property(cc.Prefab)
    expolosionNode: cc.Node = null;
    @property({
        type:cc.AudioClip
    })
    Boss_explosion = null;
    onLoad() {

        Boss.Instance = this;
        var manager= cc.director.getCollisionManager();
        manager.enabled = true;
           
    }
    open() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
       //this.moveEnemy = this.setMove();
        this.node.runAction(this.moveEnemy);
        this.schedule(this.spawnBullet, 3, cc.macro.REPEAT_FOREVER, 3.0);  
    }
    setMove() {
        // if (window.matchMedia("(orientation: portrait)").matches) {
        //     var moveLeft = cc.moveTo(this.duration, cc.v2(-193.894, 620.445));
        //     var moveRight = cc.moveTo(this.duration, cc.v2(190.69, 620.445));
        //     return cc.repeatForever(cc.sequence(moveLeft, moveRight));
        // }
        // if (window.matchMedia("(orientation: landscape)").matches) {
        //     var moveLeft = cc.moveTo(this.duration, cc.v2(-146.539, 200));
        //     var moveRight = cc.moveTo(this.duration, cc.v2(146.539, 200));
        //     return cc.repeatForever(cc.sequence(moveLeft, moveRight));
        //  }
    }
    spawnBullet() {
       this.enemyNumber--
        //console.log(this.enemyNumber);
        if (this.enemyNumber==0) {
            console.log("enemyNumber==0");
            this.enemyClear = true;
        }
        if (this.enemyNumber == 4) {
            
        
            if (window.matchMedia("(orientation: portrait)").matches) {
               this.schedule(function() {
                    // Here `this` is referring to the component
                    this.schedule(this.spawnBullet, 2, cc.macro.REPEAT_FOREVER, 3.0);
                    Bullet.setPosition(this.node.position.x , this.node.position.y);
                    this.node.parent.addChild(Bullet);
                }, 3, cc.macro.REPEAT_FOREVER, 1);
                var Bullet = cc.instantiate(this.BulletBoss);

               
                // var Bullet = cc.instantiate(this.BulletBoss);
                // Bullet.setPosition(this.node.position.x + 130, this.node.position.y);
                // this.node.parent.addChild(Bullet);
                // var Bullet = cc.instantiate(this.BulletBoss);
                // Bullet.setPosition(this.node.position.x, this.node.position.y - 230);
                // this.node.parent.addChild(Bullet);
            }
            if (window.matchMedia("(orientation: landscape)").matches) { 
                var Bullet = cc.instantiate(this.BulletBoss);
                Bullet.setPosition(this.node.position.x=30, this.node.position.y-200);
                this.node.parent.parent.addChild(Bullet);
                this.schedule(this.spawnBullet, 2, cc.macro.REPEAT_FOREVER, 3.0);
                // var Bullet = cc.instantiate(this.BulletBoss);
                // Bullet.setPosition(this.node.position.x + 130, this.node.position.y);
                // this.node.parent.addChild(Bullet);
                // var Bullet = cc.instantiate(this.BulletBoss);
                // Bullet.setPosition(this.node.position.x, this.node.position.y - 230);
                // this.node.parent.addChild(Bullet);
            }
        }
    }
    onCollisionEnter(otherCollider, selfCollider) {
        this.redDes.getComponent(cc.Animation).play('shakeCamera');
        //    if (otherCollider.name=="Bullet33<BoxCollider>"||otherCollider.name=="Bullet2<BoxCollider>"||otherCollider.name=="Bullet33 copy<BoxCollider>"||otherCollider.name=="Bullet33 copy<BoxCollider>") {
        //        this.enemyLife -= 1;
        //        this.progress -= 0.004;
        //        this.hp.fillRange = this.progress;
        //        //console.log(this.enemyLife);
           
        //        if (this.progress <= 0) {
           
        //             // Here `this` is referring to the component
                
           
        //         //this.node.getComponent(cc.Animation).play();
        //         //this.node = cc.find("Canvas/Boss");  
        //         seftCollider.node.destroy();
        //            cc.audioEngine.playEffect(this.Boss_explosion, false);
        //            //cc.audioEngine.play(this.shoot, false, 0.2);
        //            this.explosionRun();
        //            cc.audioEngine.pauseAll();
        //            this.clickPopup();
              
         
        //     }
        //         otherCollider.node.destroy();
        //     //    this.node = otherCollider.node;
        //     //    var explosion =this.node.getPosition();
        //     //    // console.log(explosion);
        //     //    var explosionRun = cc.instantiate(this.explosion1);
        //     //   this.node.parent.addChild(explosionRun);
        //     //    explosionRun.setPosition(this.node.position.x,this.node.position.y);
        //     //    var animation =explosionRun.getComponent(cc.Animation);
        //     //    animation.on('finished',this.onFinished, explosionRun);
        //console.log(selfCollider.name+"self");
        //console.log(otherCollider.name+"other");
        otherCollider.node.destroy();
        // if (selfCollider == "Giap<BoxCollider>") {
        //     otherCollider.node.destroy();
        //     this.shieldHp--;
        //     if (this.shieldHp == 0) {
        //      
        //         this.node.getChildByName('Giap').runAction(action);
        //         //this.node.getChildByName('Giap').runAction(action);
        //     }  
        // }
        if (selfCollider.name=="boss_worldcup_bullet_4<BoxCollider>") {
            this.redDes.getComponent(cc.Animation).play('shakeCamera'); 
            this.redDis.active = true;
            this.redDis.getComponent(cc.Animation).play('effectRed');
        }
        if (selfCollider.name == "Boss<PolygonCollider>") {
            //console.log(selfCollider.name+"self");
            this.BossHp--;
            this.shieldHp--;
            //console.log("chay duoc");
            if (this.shieldHp == 20) {
                //console.log("chay shield");
                
                var action = cc.fadeOut(1.5);
                this.node.getChildByName('Giap1').destroy()
                this.node.getChildByName('Giap2').destroy();
            }
            if (this.BossHp == 0) {
                this.bossClear = true;
                console.log("bosshp==0");
                
                //var action = cc.fadeOut(2);
                //this.node.getChildByName('ball').getComponent(cc.Animation).play('No');
                //this.expolosionNode.setScale(3);
                var explosion = cc.instantiate(this.expolosionNode);
                explosion.setPosition(selfCollider.node.position);
                cc.audioEngine.playEffect(this.ExpolosionBoss,false);
                this.node.parent.addChild(explosion) 
                this.node.destroy();
                //this.Bossactive();
               
                //this.cavas.getComponent('GameController').Bossactive1()
                if (this.enemyClear == true) {
                    if (window.matchMedia("(orientation: portrait)").matches) { 
                      
                        var move = cc.moveTo(1, 10, 277)
                        this.Boss.runAction(move);
                    }
                    
                    console.log("chay ddddd");
                    this.spawBullet();
                    if (window.matchMedia("(orientation: landscape)").matches) { 
                     
                        var move = cc.moveTo(1,8, 100)
                        this.Boss.runAction(move);
                    }
            
                    //this.scheduleOnce(this.clickPopup,1);
                 }
            }
          
        }
       
    }

    spawBullet() {
        this.node.parent.parent.on(cc.Node.EventType.TOUCH_START, this.clickPopup)
        this.node.parent.parent.on(cc.Node.EventType.TOUCH_MOVE, this.clickPopup)
    }

    
    clickPopup() {
        
            if (cc.sys.os == cc.sys.OS_ANDROID) {
              cc.sys.openURL("https://play.google.com/store/apps/details?id=com.alien.shooter.galaxy.attack&hl=vi&gl=US");
            } else {
                cc.sys.openURL("https://apps.apple.com/us/app/galaxy-attack-alien-shooter/id1176011642");
            }
      
    }
    explosionRun(){
    
        var explosion =this.node.getPosition();
        // console.log(explosion);
        var explosionRun = cc.instantiate(this.explosion);
        this.node.parent.addChild(explosionRun);
        explosionRun.setPosition(this.node.position.x,this.node.position.y);
        var animation =explosionRun.getComponent(cc.Animation);
        animation.on('finished',this.onFinished, explosionRun);
    }
    start () {

    }
 
    update(dt) {

        this.setMove();
        var screen = cc.find("Canvas");
       //console.log(screen.getContentSize().width);
       //console.log(screen.getContentSize().height);
     }
}
      