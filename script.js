function game1 {
  document.getElemantById("gameOneButton").innerhtml = "";
  var player;
  var playerY = 200;
  function startGame {
    gameCanvas.start();
    player = new createPlayer(30, 30, 10)
}
