var DarkHorizon = DarkHorizon || {};

DarkHorizon.Game = function(){};

DarkHorizon.Game.prototype = {
    create: function(){
        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('world', 'world');
        this.backgroundLayer = this.map.createLayer('background');
        this.blockedLayer = this.map.createLayer('blocked');

        this.map.setCollisionBetween(0, 218, true, 'blocked');
        this.backgroundLayer.resizeWorld();

        this.player = this.game.add.sprite(300, 300, 'player');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.animations.add('stand', [0, 5], 4, true);
        
        this.game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.game.camera.follow(this.player);

    }
}
