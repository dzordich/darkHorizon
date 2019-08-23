var DarkHorizon = DarkHorizon || {};

DarkHorizon.Preload = function(){};
DarkHorizon.Preload.prototype = {
    preload: function(){

        this.load.tilemap('map', 'static/tilemaps/DarkHorizonMap1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('world', 'static/images/world_trans.png');

        this.load.spritesheet('player', 'static/images/all_creatures.png', 24, 24);

    },
    create: function(){
        this.state.start('Game');
    }
}
