const { Composer } = require('telegraf');

module.exports = Composer.compose([
    require('./start'),
]);