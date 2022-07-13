const { Composer } = require('telegraf');
const logger = require('../util/logger');
const path = require('path');

const PREFIX = path.parse(__filename).name;

module.exports = Composer.command('combochart', async (ctx) => {


    ctx.reply("https://i.imgur.com/juzYjDl.png");

    logger.debug(`[${PREFIX}] finish!`);


});