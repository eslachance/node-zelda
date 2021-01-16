const Koa = require("koa");
const Router = require("koa-router");
const router = new Router();
const app = new Koa();

const Enmap = require("enmap");
const db = new Enmap('links');

db.defer.then(() => {
  db.ensure("dscount", {
    author: "root",
    code: 'dscount',
    created: Date.now(),
    target:
      "https://gist.github.com/eslachance/500fdab100e3625ca428a588e47138d8",
  });

  db.ensure("discord", {
    author: "root",
    code: "discord",
    created: Date.now(),
    target: "https://discord.com/invite/N7ZKH3P",
  });

  db.ensure("gh", {
    author: "root",
    code: "gh",
    created: Date.now(),
    target: "https://github.com/eslachance",
  });
});

app.use(ctx => {
  const code = ctx.url.split('/')[1];
  if(code && db.has(code)) {
    ctx.redirect(db.get(code).target);
  } else if(code && !db.has(code)) {
    ctx.body = `Redirect not found.`
  } else {
    ctx.body = `Evie's Link Redirection Service (Zelda) coming soon!`;
  }
});

app.listen(3000);