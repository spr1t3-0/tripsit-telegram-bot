const {Composer} = require('telegraf');

module.exports = Composer.command('test', async (ctx) => {
    ctx.reply("Test successful!");
});