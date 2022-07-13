const { Composer } = require('telegraf');
const path= require('path');
const logger = require('../util/logger');
const drugDataAll = require('../assets/drug_db_combined.json');
const comboDefs = require('../assets/combo_definitions.json');
const { info } = require('../util/logger');

const PREFIX = path.parse(__filename).name;

module.exports = Composer.command('combo', async (ctx) => {


    const splitCommand = ctx.update.message.text.split(' ');

    const drugA = splitCommand[1];
    const drugB = splitCommand[2];

    logger.debug(`[${PREFIX}] drug_a: ${drugA} | drug_b: ${drugB}`);

    for (let i = 0; i < Object.keys(drugDataAll).length; i += 1) {

        if (drugDataAll[i]) {


            if (drugDataAll[i].name.toLowerCase() === drugA.toLowerCase() || drugDataAll[i].aliases.map(element =>  {return element.toLowerCase()}).includes(drugA.toLowerCase())) {
                logger.debug(`[${PREFIX}] Found drug_a: ${drugA}`);


                if (drugDataAll[i].interactions) {
                    logger.debug(`[${PREFIX}] drug_a has interactions`);
                    let result = '';

                    for (let j = 0; j < drugDataAll[i].interactions.length; j++) {

                        if (drugDataAll[i].interactions[j].name.toLowerCase() === drugB.toLowerCase() || drugDataAll[i].aliases.map(element =>  {return element.toLowerCase()}).includes(drugB.toLowerCase())) {

                            logger.debug(`[${PREFIX}] Found drug_b: ${drugB}`);
                            result = drugDataAll[i].interactions[j].status;

                            for (let k = 0; k < comboDefs.length; k++) {
                                if (comboDefs[k].status === result) {
                                    logger.debug(`[${PREFIX}] Found combo_defs: ${comboDefs[k].status}`);
                                    const { definition } = comboDefs[k];
                                    const { emoji } = comboDefs[k];
                                    const output = `${emoji} ${result} ${emoji}`;
                                    ctx.replyWithHTML(`<b>${output}</b>\n\n${definition}`);
                                    break;
                                }
                            }
                        }

                    }

                    if (result === '') { 

                        ctx.reply(`Sorry, there're no known interactions between ${drugA} and ${drugB}.\nThis does not mean combining them is safe! It just means, we have no information on this combo!`);

                    }
                } else {
                    ctx.reply(`Sorry, there're no known interactions between ${drugA} and ${drugB}.\nThis does not mean combining them is safe! It just means, we have no information on this combo!`);
                }
            }

        }

    }
    logger.debug(`[${PREFIX}] finished!`);
    return;

});