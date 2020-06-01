import Phaser from 'phaser';


const config: Phaser.Types.Core.GameConfig = {
  title: "Starfall1",
  width: 800,
  height: 660,
  parent: "game",
  backgroundColor: "#11111"
};

export class StarfallGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
    console.log('hi1111')
  }
}

window.onload = () => {
  var game = new StarfallGame(config);
};