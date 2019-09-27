const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN, {username: 'AlexanderGrothenbot'})

/*
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('test', Telegraf.reply('λ'))
*/

bot.telegram.getMe().then((botInfo) => {
    console.log('botinfo')
    bot.options.username = botInfo.username
})

bot.hears(/category/gi, Telegraf.reply('🐈 Yes?'))
bot.launch()

