# Zelda

## Your Link Redirection Management Service

Zelda is a very simple node-based Link redirection services. And yes, that's clearly a reference to a video game. Excuuuuuuuse me, Princess!

Right now it's not configurable at all, there's no website or editor or form or whatever. It's just meant for 3 hardcoded links I created.

But if you insist on using every single thing I do, please, by all means, clone this repo, edit the links in the `src/server.js` file and host this on your own.

I won't stop you. I mean I could, by making this repo private, but apparently I'm like a half-assed celebrity or something and people like seeing my code so... knock
yourself out, buddy!

## Modules Used

This project uses [Enmap](https://enmap.evie.dev) to store data, making it very fast, but using a bit more memory than a system without caching.

For the webserver, I'm using [koa](https://koajs.com/) since it's faster than express.js, and also this entire thing is like 25 lines right now (but with a lot of
node_modules data, as usual, because thanks, Node.js!)
