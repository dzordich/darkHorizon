var DarkHorizon = DarkHorizon || {};

DarkHorizon.Preload = function(){};
DarkHorizon.Preload.prototype = {
    preload: function(){

        this.load.tilemap('map', 'static/tilemaps/DarkHorizonMap1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('world', 'static/images/world_trans.png');
        this.load.image('bg', 'static/images/Background.png');

        this.load.spritesheet('spritesheet', 'static/images/result-1.png', 32, 32);

    },
    create: function(){
        this.state.start('Game');
    }
}
