var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to the randomgame api! Please use /random to get a random game.");
  });
}

module.exports = appRouter;
