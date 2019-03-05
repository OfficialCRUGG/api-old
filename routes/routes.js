const games = require("../games.json")
const cutepets = require("../cutepets.json")
const airplanes = require("../airplanes.json")

var appRouter = function (app) {
  app.get("/", function(req, res) {
    // res.status(200).send("APIs:\n/randomgame\n/cutepets");
    res.status(200).sendFile(__dirname + "/web/index.html");
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

  app.get("/cutepets", function(req, res) {
    res.status(200).send(`Welcome to the cute pets api. We currently have ${cutepets.length} images and gifs in our database!\n\nEndpoints:\n/all - Display all images and gifs from our database\n/random - Display a random image or gif from our database\n/amount - Gives you the amount of entries in our database`);
  });

  app.get("/cutepets/all", function(req, res) {
    res.status(200).send(cutepets);
  });

  app.get("/cutepets/random", function(req, res) {
    let data = cutepets[Math.floor(Math.random()*cutepets.length)];
    res.status(200).send(data);
  });

  app.get("/cutepets/amount", function(req, res) {
    res.status(200).send(`${cutepets.length}`);
  });

  app.get("/airplanes", function(req, res) {
    res.status(200).send(`Welcome to the airplanes api. We currently have ${cutepets.length} images and gifs in our database!\n\nEndpoints:\n/all - Display all images and gifs from our database\n/random - Display a random image or gif from our database\n/amount - Gives you the amount of entries in our database`);
  });

  app.get("/airplanes/all", function(req, res) {
    res.status(200).send(airplanes);
  });

  app.get("/airplanes/random", function(req, res) {
    let data = airplanes[Math.floor(Math.random()*airplanes.length)];
    res.status(200).send(data);
  });

  app.get("/airplanes/amount", function(req, res) {
    res.status(200).send(`${airplanes.length}`);
  });

  // Old APIs

  app.get("/cute", function(req, res) {
    res.status(200).send("Moved to http://api.crugg.de:3000/cutepets");
  });

  app.get("/cute/all", function(req, res) {
    res.status(200).send("Moved to http://api.crugg.de:3000/cutepets/all");
  });

  app.get("/cute/random", function(req, res) {
    res.status(200).send("Moved to http://api.crugg.de:3000/cutepets/random");
  });

  app.get("/cute/amount", function(req, res) {
    res.status(200).send("Moved to http://api.crugg.de:3000/cutepets/amount");
  });
}

module.exports = appRouter;
