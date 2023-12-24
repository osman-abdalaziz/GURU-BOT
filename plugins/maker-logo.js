const make = require("mumaker");

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    m.react("🕛");

    // let type = args[0].toLowerCase();
    let logoText = args[1];
    if (!text) {
        conn.reply(
            `🌟 This is an explanation of how to use \n ${usedPrefix}(mlogo or makelogo) (Type) (Your Text) \n\n Example: \n ${usedPrefix}mlogo thunder Dr.Osman \n\n To get a list of logo types use ${usedPrefix}(mlogo or makelogo) list`
        );
        m.react("❎");
    }
    make.textpro(
        "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html",
        [`${logoText}`]
    )
        .then((data) =>
            conn.sendMessage(
                m.chat,
                {
                    image: { url: data.image },
                    caption: `✅ Done this is your logo`,
                },
                { quoted: m }
            )
        )
        .catch((err) => console.log(err));
    m.react("✅");
    // switch (type) {
    //     case "sliced":
    //         break;
    // }
};

handler.help = ["mlogo", "makelogo"];
handler.tags = ["mlogo", "makelogo"];
handler.command = /^(mlogo|makelogo)$/i;
// handler.diamond = false;

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
