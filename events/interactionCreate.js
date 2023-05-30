const { InteractionType } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (interaction.type === InteractionType.ApplicationCommand){
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) return;

			try {
				command.execute(interaction);
			} catch (error) {
				console.error(error);
				interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}

		if (interaction.isSelectMenu()){
			if (interaction.customId === 'select') {
				interaction.update({ content: interaction.values[0], components: [] });
			}
		}
	},
};