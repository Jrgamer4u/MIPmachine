module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setActivity('MIPmachine 3');
	},
};
