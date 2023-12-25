import * as mumaker from "mumaker";
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    // m.reply(
    //     "Hello, this is an experimental script that will be developed by Dr.Osman later !"
    // );

    if (text.toLowerCase() == "list") {
        m.reply(`
*Logo Types List*:

» sliced
» batman
» thunder
» magma
» glitch
» demon
» frozen
» ice
» typography
» foggy
» stone
» bear
» forest
» burger
» dragon
» pokemon
» natural
» shadow`);
        m.react("📃");
    }
    if (!text) {
        m.reply(
            `📜 To use this command: \n\n ${usedPrefix}makelogo type Your_Text \n\n *Example:* ${usedPrefix}makelogo batman One_Two \n\n *Note:* Use "_" to separate words`
        );
        m.react("❎");
    }
    let types = [
        "sliced",
        "batman",
        "thunder",
        "magma",
        "glitch",
        "demon",
        "frozen",
        "ice",
        "typography",
        "foggy",
        "stone",
        "bear",
        "forest",
        "burger",
        "dragon",
        "pokemon",
        "natural",
        "shadow",
    ];
    if (args.length > 1) {
        let type = args[0].toLowerCase();
        let logoText = args[1].replace("_", " ");

        m.react("🕛");
        if (types.includes(type)) {
            let txtProLink;
            switch (type) {
                case "sliced":
                    txtProLink =
                        "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html";
                    break;
                case "batman":
                    txtProLink =
                        "https://textpro.me/make-a-batman-logo-online-free-1066.html";
                    break;
                case "thunder":
                    txtProLink =
                        "https://textpro.me/create-thunder-text-effect-online-881.html";
                    break;
                case "magma":
                    txtProLink =
                        "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html";
                    break;
                case "glitch":
                    txtProLink =
                        "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html";
                    break;
                case "demon":
                    txtProLink =
                        "https://textpro.me/create-green-horror-style-text-effect-online-1036.html";
                    break;
                case "frozen":
                    txtProLink =
                        "https://textpro.me/create-realistic-3d-text-effect-frozen-winter-1099.html";
                    break;
                case "ice":
                    txtProLink =
                        "https://textpro.me/ice-cold-text-effect-862.html";
                    break;
                case "typography":
                    txtProLink =
                        "https://textpro.me/create-artistic-typography-online-1086.html";
                    break;
                case "foggy":
                    txtProLink =
                        "https://textpro.me/write-text-on-foggy-window-online-free-1015.html";
                    break;
                case "stone":
                    txtProLink =
                        "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html";
                    break;
                case "bear":
                    txtProLink =
                        "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html";
                    break;
                case "forest":
                    txtProLink =
                        "https://textpro.me/double-exposure-text-effect-black-white-976.html";
                    break;
                case "burger":
                    txtProLink =
                        "https://textpro.me/create-burger-3d-text-effect-1111.html";
                    break;
                case "dragon":
                    txtProLink =
                        "https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html";
                    break;
                case "pokemon":
                    txtProLink =
                        "https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html";
                    break;
                case "natural":
                    txtProLink =
                        "https://textpro.me/natural-leaves-text-effect-931.html";
                    break;
                case "shadow":
                    txtProLink =
                        "https://textpro.me/create-a-gradient-text-shadow-effect-online-1141.html";
                    break;
            }
            let res = await mumaker
                .textpro(txtProLink, [`${logoText}`])
                .then((data) =>
                    conn.sendMessage(m.chat, {
                        image: { url: `${data.image}` },
                        caption: "✅ Done this is your logo",
                    })
                )
                .catch((err) => m.reply(err));
            m.react("✅");
        }
    }
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
