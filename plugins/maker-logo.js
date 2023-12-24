import * as mumaker from "mumaker";
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    // m.reply(
    //     "Hello, this is an experimental script that will be developed by Dr.Osman later !"
    // );

    let logoText = args[0];
    m.react("🕛");
    let res = await mumaker
        .textpro(
            "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html",
            [`${logoText}`]
        )
        .then((data) =>
            conn.sendMessage(m.chat, {
                image: { url: `${data.image}` },
                caption:
                    "✅ Done there is your logo \n\n Developed By ```Dr.Osman```",
            })
        )
        .catch((err) => m.reply(err));
    m.react("✅");
};

handler.help = ["makelogo"];
handler.tags = ["makelogo"];
handler.command = /^(makelogo)$/i;

export default handler;
/* 

https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html
sliced

https://textpro.me/make-a-batman-logo-online-free-1066.html
batman

https://textpro.me/create-thunder-text-effect-online-881.html
thunder

https://textpro.me/create-a-magma-hot-text-effect-online-1030.html
magma

https://textpro.me/create-impressive-glitch-text-effects-online-1027.html
glitch

https://textpro.me/create-green-horror-style-text-effect-online-1036.html
demon

https://textpro.me/create-realistic-3d-text-effect-frozen-winter-1099.html
frozen

https://textpro.me/ice-cold-text-effect-862.html
ice

https://textpro.me/create-artistic-typography-online-1086.html
typography

https://textpro.me/write-text-on-foggy-window-online-free-1015.html
foggy

https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
stone

https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
bear

https://textpro.me/double-exposure-text-effect-black-white-976.html
forest

https://textpro.me/create-burger-3d-text-effect-1111.html
burger

https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html
dragon

https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html
pokemon

https://textpro.me/natural-leaves-text-effect-931.html
natural

https://textpro.me/create-a-gradient-text-shadow-effect-online-1141.html
shadow

*/
