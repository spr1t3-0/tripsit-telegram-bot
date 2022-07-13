const { Composer } = require('telegraf');

const logger = require('../util/logger');
const path = require('path');
const { loggers } = require('winston');


const PREFIX = path.parse(__filename).name;

module.exports = Composer.command('breathe', async (ctx) => {

    const splitCommand = ctx.update.message.text.split(' ');

    const choice = splitCommand[1];

    logger.debug(choice)

    let url;

    switch (choice) {

        case '1':
            url = 'https://i.imgur.com/n5jBp45.gif';
            break;
        case '2': 

            url = 'https://i.imgur.com/XbH6gP4.gif';
            break;
        case '3':
            url = 'https://i.imgur.com/g57i96f.gif';
            break;
        case '4':
            url = 'https://i.imgur.com/MkUcTPl.gif';
            break;

        default:
            url = 'https://i.imgur.com/n5jBp45.gif';
            break;

    }

    ctx.reply(url);


});