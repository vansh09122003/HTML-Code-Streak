class Anim2 extends Phaser.Scene{
    constructor(){
        super("Anim2")
    }
    preload(){
        this.load.image('Girl','assets/Girl.png')
    }
    create(){
        this.add.image(500,400,'bk');
        this.leftHand=this.physics.add.image(700,600,"leftHand").setScale(0.5);
        this.rightHand=this.physics.add.image(700,600,"rightHand").setScale(0.5);
        this.girl = this.add.image(700,300,'Girl').setScale(0.2);
        this.girl.fadeIn(1000);
        this.add.image(100,100,'logo').setScale(1);
    }
}