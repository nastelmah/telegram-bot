const { Telegraf, Markup } = require("telegraf");
const BOT_TOKEN = "5584878083:AAG5QV3IUtFrG_Aks6Lw2GpDivf5H9IwfCI";
const bot = new Telegraf(BOT_TOKEN);
const textHelp = `
/start - Start bot
/help - Show commands
/menu - show menu
`;

const web_link = "https://nastelmah.github.io/telegram-bot/";

bot.start((ctx) => ctx.reply(`Hi! ${ctx.message.from.first_name} ${textHelp}`));
bot.help((ctx) => ctx.reply(textHelp));

bot.command("menu", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Menu</b>",
      Markup.inlineKeyboard([
        [Markup.button.callback("Show menu order", "menu_1")],
      ])
    );
  } catch (error) {
    console.error(error);
  }
});
bot.action("menu_1", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply("Welcome :)))))", {
      reply_markup: {
        inline_keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
      },
    });
  } catch (error) {
    console.error(error);
  }
});
bot.launch();
