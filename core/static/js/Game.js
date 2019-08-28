var DarkHorizon = DarkHorizon || {};

var JUMPS = 0;
var FACING_RIGHT = true;

DarkHorizon.Game = function(){};

DarkHorizon.Game.prototype = {
    create: function(){
        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('world', 'world');
        // this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'bg');
        this.backgroundLayer = this.map.createLayer('background');
        this.blockedLayer = this.map.createLayer('blocked');

        this.map.setCollisionBetween(0, 218, true, 'blocked');
        this.game.physics.arcade.enableBody(this.blockedLayer);
        this.backgroundLayer.resizeWorld();

        this.player = this.game.add.sprite(300, 300, 'spritesheet');
        this.player.anchor.setTo(0.5, 0.5);
        // this.player.animations.add('left', [0, 1], 4, true);
        // this.player.animations.add('right', [62, 63], 4, true);
        // this.player.animations.play('right');
        this.player.animations.add('stand-right', [0, 1, 2, 3, 4], 9, true);
        this.player.animations.add('stand-left', [8, 9, 10, 11, 12], 9, true);
        this.player.animations.add('run-right', [16, 17, 18, 19, 20, 21, 22, 23], 18, true);
        this.player.animations.add('run-left', [24, 25, 26, 27, 28, 29, 30, 31], 18, true);
        this.player.animations.add('jump-right', [22], 1, true);
        this.player.animations.add('jump-left', [30], 1, true);

        

        this.game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.game.camera.follow(this.player);
        this.player.body.gravity.y = 800;

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.rightKey = this.game.input.keyboard.addKey(Phaser.KeyCode.D);
        this.leftKey = this.game.input.keyboard.addKey(Phaser.KeyCode.A);
        this.jumpKey = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    },
    update: function(){
        console.log(this.player.centerX, this.player.centerY)
        this.game.physics.arcade.collide(this.player, this.blockedLayer, this.resetJumps, null, this);

        let left = this.cursors.left.isDown || this.leftKey.isDown;
        let right = this.cursors.right.isDown || this.rightKey.isDown;

        if(right){
            FACING_RIGHT = true;
            this.player.animations.play('run-right');
            this.player.body.velocity.x = 170;
        }
        else if(left){
            FACING_RIGHT = false;
            this.player.animations.play('run-left');
            this.player.body.velocity.x = -170;
        }
        else{
            if(FACING_RIGHT){
                this.player.animations.play('stand-right');
            }
            else{
                this.player.animations.play('stand-left');
            }
            this.player.body.velocity.x = 0;
        }
        this.jumpKey.onDown.add(this.jump, this);
    },
    jump: function(){
        if(JUMPS < 2){
            // this.player.animations.paused = true;
            this.player.body.velocity.y = -320;
            JUMPS++;
            if (!FACING_RIGHT){
                this.player.animations.play('jump-left');
            }
            else {
                this.player.animations.play('jump-right');
            }
        }
    },
    resetJumps: function(player, body){
        JUMPS = 0;
        // if (!FACING_RIGHT) {
        //     this.player.animations.play('jump-left');
        // }
        // else {
        //     this.player.animations.play('jump-right');
        // }
    },
    chase: function(sprite){
        if(sprite.centerX > this.player.centerX){
            sprite.body.velocity.x = -70;
        }
        else if(sprite.centerX <  this.player.centerX) {
            sprite.body.velocity.x = 70;
        }
        else{
            sprite.body.velocity.x = 0;
        }
    }

}
