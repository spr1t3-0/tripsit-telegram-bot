require('dotenv').config()
const glob = require('glob'), path = require('path');


const { Telegraf }= require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// load bot commands
bot.use(require('./commands'));

bot.launch();

const errorMessages = [
    "Task failed successfully! π", "π€ TripBot smoked too much pot and fell asleep. Please try again later.", "Huh, what was thatβ Even my dog can code better! πΆ\nReach out and help us fixing this. :)", "π Sorry, i don't know this command.", "π€ Beep boop beep-- something went wrong."
];


let m = `${errorMessages.sort(() => 0.5 - Math.random()).slice(0, 30).join(' ')}`
bot.on('text', ctx => ctx.reply(errorMessages[Math.floor(Math.random()*errorMessages.length)]));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));