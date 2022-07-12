require('dotenv').config()
const glob = require('glob'), path = require('path');


const { Telegraf }= require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// load bot commands
bot.use(require('./commands'));

bot.launch();

bot.on('text', ctx => ctx.reply("S"));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));