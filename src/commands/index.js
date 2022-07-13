const { Composer } = require('telegraf');

module.exports = Composer.compose([
    require('./start'),
    require('./drug'),
    require('./topic'),
    require('./combo')
]);