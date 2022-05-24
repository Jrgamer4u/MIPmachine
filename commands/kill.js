const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('kills person who used the command'),
	async execute(interaction) {
		return interaction.reply('apolgy for bad english\nwhere were you wen ' + interaction.user.username + ' die\ni was at house eating dorito when phone ring\n"' + interaction.user.username + ' is kil"\n"no"');
	},
};
