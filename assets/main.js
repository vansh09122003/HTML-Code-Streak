var config={
    type:Phaser.AUTO,
    width: 1400,
    height: 800,
    backgroundColor: 0x000000,
    scene:[Anim3, Anim1, Anim2],
    physics: {
        default: "arcade",
    },
};
var game = new Phaser.Game(config);