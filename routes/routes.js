const games = require("../games.json")
const cute = require("../cute.json")

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("APIs:\n/randomgame\n/cute");
  });

  app.get("/randomgame", function(req, res) {
    res.status(200).send(`Welcome to the randomgame api. We currently have ${games.length} games in our database!\n\nEndpoints:\n/all - Display all games from our database\n/random - Display a random game from our database\n/amount - Gives you the amount of entries in our database`);
  });

  app.get("/randomgame/all", function(req, res) {
    res.status(200).send(games);
  });

  app.get("/randomgame/random", function(req, res) {
    let data = games[Math.floor(Math.random()*games.length)];
    res.status(200).send(data);
  });

  app.get("/randomgame/amount", function(req, res) {
    res.status(200).send(`${games.length}`);
  });

  app.get("/cute", function(req, res) {
    res.status(200).send(`Welcome to the cute api. We currently have ${cute.length} images and gifs in our database!\n\nEndpoints:\n/all - Display all images and gifs from our database\n/random - Display a random image or gif from our database\n/amount - Gives you the amount of entries in our database`);
  });

  app.get("/cute/all", function(req, res) {
    res.status(200).send(cute);
  });

  app.get("/cute/random", function(req, res) {
    let data = cute[Math.floor(Math.random()*cute.length)];
    res.status(200).send(data);
  });

  app.get("/cute/amount", function(req, res) {
    res.status(200).send(`${cute.length}`);
  });
}

module.exports = appRouter;
