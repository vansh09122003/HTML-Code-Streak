class Anim3 extends Phaser.Scene{
    constructor(){
        super("Anim3");
    }

    preload(){
        this.load.image('yellow','assets/yellow.png');
    }

    create(){
        this.yellow = this.physics.add.image(1520,400,"bottom"),setScale(0.5);
        this.yellow=setVelocityY(-100);
    }

    update(){
        if(Math.floor(this.yellow.x)==1400 && Math.floor(this.yellow.y)==400){
            this.yellow.setVelocityY(0);
        }
    }
}