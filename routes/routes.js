const games = require("../games.json")

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("APIs:\n/randomgame");
  });

  app.get("/randomgame", function(req, res) {
    res.status(200).send(`Welcome to the randomgame api. We currently have ${games.length} games in our database!\n\nEndpoints:\n/all - Display all games from our database\n/random - Display a random game from our database`);
  });

  app.get("/randomgame/all", function(req, res) {
    res.status(200).send(games);
  });

  app.get("/randomgame/random", function(req, res) {
    let data = games[Math.floor(Math.random()*games.length)];
    res.status(200).send(data);
  });
}

module.exports = appRouter;
