const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const file = new AttachmentBuilder("images/fakelad.png");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("fakelad")
		.setDescription("shows fakelad image"),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
