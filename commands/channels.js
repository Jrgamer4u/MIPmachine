const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('channels')
		.setDescription('says links to our channels'),
	async execute(interaction) {
		return interaction.reply('https://www.youtube.com/user/JRGAMER4U\nhttps://www.youtube.com/c/Jrgamer4uII\nhttps://www.youtube.com/channel/UCD8062Hi38pqCus8BDmGTJg\nhttps://www.youtube.com/channel/UCjUi7llG0oD8oFGcBfozp4A');
	},
};
