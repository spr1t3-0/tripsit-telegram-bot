const {Composer} = require('telegraf');

module.exports = Composer.command('start', async (ctx) => {
    console.log(ctx.update.message.text.split(' '));
    ctx.replyWithHTML("<b>Welcome to TripBot</b>!👋\n\nThis bot is created by https://tripsit.me, an online harm reduction community offering 24/7 life chat assistance and information about various substances and safer use practices.\nHave a look at the <a href='https://wiki.tripsit.me/'>Wiki</a>, if you want :)\n\nWith this bot you can <b>[...]</b>.\n\n💞 <b>If you're in need of assistance right now, issue /tripsit.</b>\n\nFor a list of all commands, execute /help.\nStay safe! ❤️");
});