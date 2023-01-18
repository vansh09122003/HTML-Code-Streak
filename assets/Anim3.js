class Anim3 extends Phaser.Scene{
    constructor(){
        super("Anim3");
    }

    preload(){

        this.load.image('bk','assets/Background_2.png');
        this.load.image('yellow','assets/yellow.jpg');
        this.load.image('red','assets/red.jpg');
    }

    create(){

        this.add.image(500,400,'bk');
        this.yellow=this.physics.add.image(300,0,'yellow').setScale(0.3); 
        this.yellow.setVelocityY(200);

        this.red=this.physics.add.image(1075,800,'red').setScale(0.3); 
        this.red.setVelocityY(-200);
    }

   
}