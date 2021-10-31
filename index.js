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

  function colourRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
  }

  s4d.client.login(process.env['TOKEN']).catch((e) => {
    s4d.tokenInvalid = true; s4d.tokenError = e;

  });

  s4d.client.on('ready', async () => {
    s4d.client.channels.cache.get(process.env['Connected']).send(String('Connected'));
  });

  keepAlive()

  s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.channel) != s4d.client.channels.cache.get(process.env['SpyEye'])) {
      if ((s4dmessage.channel) != s4d.client.channels.cache.get(process.env['Connected'])) {
        if ((s4dmessage.channel) != s4d.client.channels.cache.get(process.env['Test'])) {
          if (([s4dmessage.content].join('')) != null) {
            s4d.client.channels.cache.get(process.env['SpyEye']).send(String(([s4dmessage.content].join(''))));
          }
        }
      }
    }
    if ((s4dmessage.content) == '/hi') {
      s4dmessage.channel.send(String('nah'));
    } else if ((s4dmessage.content) == '/pi') {
      s4dmessage.channel.send(String((Math.PI)));
    } else if (((s4dmessage.content) || '').startsWith('I\'m not racist but' || '')) {
      s4dmessage.delete();
      s4dmessage.channel.send(String('You are racist.'));
    } else if ((s4dmessage.content) == ((s4dmessage.member || await s4dmessage.guild.members.fetch(s4dmessage.author.id)).nickname)) {
      s4dmessage.channel.send(String((s4dmessage.author.username)));
    } else if ((s4dmessage.content) == '/color') {
      s4dmessage.channel.send(String((String(colourRandom()))));
    } else if ((s4dmessage.content) == '/milkshake') {
      (s4dmessage.channel).send(String('MIP'));
      (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (0.166 * 60 * 1000), max: 1 }).then(async (collected) => {
        s4d.reply = collected.first().content;
        s4dmessage.channel.send(String('hmm.'));

        s4d.reply = null;
      }).catch(async (e) => {
        console.error(e); s4dmessage.channel.send(String('https://cdn.discordapp.com/attachments/870522417079017474/870760305179910155/Cake_BFN_asset.png'));
      });
    } else if ((s4dmessage.content) == '/click') {
      s4d.database.set(String((String(s4dmessage.member) + ' Clicks')), 0)
      s4d.database.set(String((String('Total Clicks') + ' Clicks')), 0)
      s4d.database.set(String((String(s4dmessage.member) + ' Clicks')), (s4d.database.get(String((String(s4dmessage.member) + ' Clicks'))) + 1));
      s4d.database.set(String('Total Clicks'), (s4d.database.get(String('Total Clicks')) + 0.5));
      s4dmessage.channel.send(String('You gained 1 click.'));
    } else if ((s4dmessage.content) == '/myclicks') {
      s4dmessage.channel.send(String((String(s4d.database.get(String((String(s4dmessage.member) + ' Clicks')))) + ' Clicks')));
    } else if ((s4dmessage.content) == '/totalclicks') {
      s4dmessage.channel.send(String((String(s4d.database.get(String('Total Clicks'))) + ' Clicks')));
    } else if ((s4dmessage.content) == 'Version') {
      s4dmessage.channel.send(String('Version 1 + SpyEye'));
    } else if ((s4dmessage.content) == '/time') {
      s4dmessage.channel.send(String(([(new Date().getDay()), ' / ', (new Date().getDate()), ' / ', (new Date().getHours()), ' / ', (new Date().getMinutes()), ' / ', (new Date().getSeconds())].join(''))));
    } else if ((s4dmessage.content) == '/clicksoftrisk') {
      s4d.database.set(String((String(s4dmessage.member) + ' Clicks')), 0)
      s4d.database.set(String('Total Clicks'), 0)
      s4d.database.set(String((String(s4dmessage.member) + ' Soft Risk')), (mathRandomInt(-10, 10)));
      while (!((s4d.database.get(String((String(s4dmessage.member) + ' Clicks'))) + s4d.database.get(String((String(s4dmessage.member) + ' Soft Risk')))) > 0)) {
        s4d.database.set(String((String(s4dmessage.member) + ' Soft Risk')), (mathRandomInt(-10, 10)));
        s4dmessage.channel.send(String('Rolling again...'));
      }
      s4d.database.set(String((String(s4dmessage.member) + ' Clicks')), (s4d.database.get(String((String(s4dmessage.member) + ' Clicks'))) + s4d.database.get(String((String(s4dmessage.member) + ' Soft Risk')))));
      s4d.database.set(String('Total Clicks'), (s4d.database.get(String('Total Clicks')) + s4d.database.get(String((String(s4dmessage.member) + ' Soft Risk')))));
      s4dmessage.channel.send(String((String(s4d.database.get(String((String(s4dmessage.member) + ' Soft Risk')))) + ' Clicks')));
    } else if ((s4dmessage.content) == '/clickhardrisk') {
      s4d.database.set(String((String(s4dmessage.member) + ' Clicks')), 0)
      s4d.database.set(String('Total Clicks'), 0)
      s4d.database.set(String((String(s4dmessage.member) + ' Hard Risk')), (mathRandomInt(-100, 100)));
      while (!((s4d.database.get(String((String(s4dmessage.member) + ' Clicks'))) + s4d.database.get(String((String(s4dmessage.member) + ' Hard Risk')))) > 0)) {
        s4d.database.set(String((String(s4dmessage.member) + ' Hard Risk')), (mathRandomInt(-100, 100)));
        s4dmessage.channel.send(String('Rolling again...'));
      }
      s4d.database.set(String((String(s4dmessage.member) + ' Clicks')), (s4d.database.get(String((String(s4dmessage.member) + ' Clicks'))) + s4d.database.get(String((String(s4dmessage.member) + ' Hard Risk')))));
      s4d.database.set(String('Total Clicks'), (s4d.database.get(String('Total Clicks')) + s4d.database.get(String((String(s4dmessage.member) + ' Hard Risk')))));
      s4dmessage.channel.send(String((String(s4d.database.get(String((String(s4dmessage.member) + ' Hard Risk')))) + ' Clicks')));
    } else if (((s4dmessage.content) || '').startsWith('/suggestion' || '')) {
      if ((s4dmessage.content) != 'To Send Suggestions, Just Say "/suggestion" at the beginning then say what you suggest.') {
        s4dmessage.channel.send(String('Thanks For the Suggestions!'));
        s4d.client.channels.cache.get('871495748829728838').send(String((String((s4dmessage.content)).replace(new RegExp(String('/suggestion'), 'g'), String('Suggestion')))));
      }
    } else if ((s4dmessage.content) == '/simcity') {
      (s4dmessage.channel).send(String('milkshake'));
      (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (0.016 * 60 * 1000), max: 1 }).then(async (collected) => {
        s4d.reply = collected.first().content;
        s4dmessage.channel.send(String('GodSmack'));

        s4d.reply = null;
      }).catch(async (e) => {
        console.error(e); s4dmessage.channel.send(String('https://www.youtube.com/watch?v=_51_YJQpeg0'));
      });
    }
    if ((s4dmessage.content) == 'Obr, help!') {
      s4dmessage.channel.send(String((['Command List', '\n', 'Commands created in 7/30/2021', '\n', '/hi', '\n', 'Obr, help!', '\n', (s4dmessage.member || await s4dmessage.guild.members.fetch(s4dmessage.author.id)).nickname, '\n', '/pi', '\n', 'I\'m not racist but', '\n', '/color', '\n', '/milkshake'].join(''))));
      s4dmessage.channel.send(String((['Command List', '\n', 'Commands created in 7/31/2021', '\n', '/time', '\n', '/version'].join(''))));
      s4dmessage.channel.send(String((['Command List', '\n', 'Command created in 8/28/2021', '\n', '/simcity'].join(''))));
      s4dmessage.channel.send(String((['Command List', '\n', 'Commands fixed in 10/24/21', '\n', '/click', '\n', '/myclicks', '\n', '/totalclicks', '\n', '/clicksoftrisk', '\n', '/clickhardrisk'].join(''))));
      s4dmessage.channel.send(String('To Send Suggestions, Just Say "/suggestion" at the beginning then say what you suggest.'));
    }

  });


  return s4d;
})();
