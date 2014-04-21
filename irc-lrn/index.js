// Create the configuration
var config = {
  channels: ["#davidwalshblog", "#mootools"],
  server: "irc.freenode.net",
  botName: "walshbot"
}

// Get the lib
var irc = require("irc");

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});


