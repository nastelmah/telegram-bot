const { Telegraf } = require("telegraf");
const BOT_TOKEN = "5584878083:AAG5QV3IUtFrG_Aks6Lw2GpDivf5H9IwfCI";
const bot = new Telegraf(BOT_TOKEN);

const web_link = "https://localhost:3000/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
