(async () => {
  const keepAlive = require("./server.js");
  const Discord = require("discord.js");
  const Database = require("easy-json-database");
  const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const s4d = {
    Discord,
    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
    joiningMember: null,
    reply: null,
    tokenInvalid: false,
    tokenError: null,
    checkMessageExists() {
      if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
      if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
    }
  };
  s4d.client = new s4d.Discord.Client({
    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
    partials: ["REACTION"]
  });

  function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  s4d.client.login(process.env['TOKEN']).catch((e) => {
    s4d.tokenInvalid = true; s4d.tokenError = e;

  });

  s4d.client.on('ready', async () => {
    s4d.client.channels.cache.get(process.env['connected']).send(String('Connected'))
    s4d.client.user.setActivity('Click Commands', { type: 'PLAYING' });
  });

  keepAlive()

  s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'click') {
      s4d.database.set(String('Total Clicks'), (s4d.database.get(String('Total Clicks')) + 1));
      s4dmessage.channel.send(String('We gained 1 click.'));

    } else if ((s4dmessage.content) == 'totalclicks') {
      s4dmessage.channel.send(String((String(s4d.database.get(String('Total Clicks'))) + ' Clicks')));

    } else if ((s4dmessage.content) == 'version') {
      s4dmessage.channel.send(String('Click Game 1.0.0 | Base: OBR 1.3.0'));

    } else if ((s4dmessage.content) == 'Click Commands') {
        s4dmessage.channel.send(String((['Command List', '\n', 'click', '\n', 'totalclicks'].join(''))));
      }

  });


  return s4d;
})();
