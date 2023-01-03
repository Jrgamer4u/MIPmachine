const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const file = new AttachmentBuilder("images/garfeild.png");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("lasaga")
		.setDescription("sends garfeild image, credit to Ibby"),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
