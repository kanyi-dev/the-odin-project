function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = () => {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName();
player2.sayName();

console.log(Object.getPrototypeOf(player1) === Player.prototype);

console.log(player1.valueOf());