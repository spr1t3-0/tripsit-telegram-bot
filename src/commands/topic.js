const { Composer } = require('telegraf');
const logger = require('../util/logger');

const fs = require('fs');
const path=require('path');


const topics = require('../assets/topics.json');
const PREFIX = path.parse(__filename).name;

module.exports = Composer.command('topic', async (ctx) => {
    ctx.reply(topics[Math.floor(Math.random() * Object.keys(topics).length).toString()]);
});