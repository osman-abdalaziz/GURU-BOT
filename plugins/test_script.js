import { promises } from "fs";
import { join } from "path";
import axios from "axios";

let handler = async (m, { conn, text, usedPrefix, command }) => {
    // m.reply(
    //     "Hello, this is an experimental script that will be developed by Dr.Osman later !"
    // );
    let who;
    let name = conn.getName(m.sender);
    // Format the repository information with emojis
    const formattedInfo = `
👤 Member Name: ${who}
⭐ Admin: ${name}
📝 Description: ${text}`.trim();

    // Send the formatted information as a message
    await conn.relayMessage(
        m.chat,
        {
            requestPaymentMessage: {
                currencyCodeIso4217: "EGP",
                amount1000: 10000,
                requestFrom: m.sender,
                noteMessage: {
                    extendedTextMessage: {
                        text: formattedInfo,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                            },
                        },
                    },
                },
            },
            mentions: [who],
        },
        {}
    );
    m.react("🧑‍💻");
};

handler.help = ["Osman"];
handler.tags = ["Osman"];
handler.command = /^(Osman)$/i;

export default handler;
