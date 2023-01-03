const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const file = new AttachmentBuilder("images/DOWNLOAD.png");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("download")
		.setDescription("shows funny image"),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
