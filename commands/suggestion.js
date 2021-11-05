const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggestion')
		.setDescription('send suggestions to MIP')
    .addStringOption(option =>
		  option.setName('input')
		  	.setDescription('suggestion')
		  	.setRequired(true)),
	async execute(interaction) {
    client.on('message', async (message) => {
		return interaction.reply('Thanks For the Suggestions!');
    client.channels.cache.get('871495748829728838').send(String((String((message.content)))));
    })
  },
};
