const { Composer } = require('telegraf');

module.exports = Composer.command('irc', async (ctx) => {


    ctx.replyWithHTML(`<b>Join us on the IRC! ā¤ļø</b>\nQuick access: š <a href="https://chat.tripsit.me">click here</a>\nInformation on how to connect using a local client: š <a href="https://wiki.tripsit.me/wiki/Connecting_to_TripSit">click here</a>\nš <a href="https://wiki.tripsit.me/wiki/IRC_User_Guide">Click here</a> for TripSit's IRC user guide `)

});