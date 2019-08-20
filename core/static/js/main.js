var DarkHorizon = DarkHorizon || {};

DarkHorizon.game = new Phaser.Game(900, 600, Phaser.AUTO, '');

DarkHorizon.game.state.add('Boot', DarkHorizon.Boot);
DarkHorizon.game.state.add('Preload', DarkHorizon.Preload);
DarkHorizon.game.state.add('MainMenu', DarkHorizon.MainMenu);
DarkHorizon.game.state.add('Game', DarkHorizon.Game);

DarkHorizon.game.state.start('Boot');
