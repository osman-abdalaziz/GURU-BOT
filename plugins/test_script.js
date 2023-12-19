import { promises } from "fs";
import { join } from "path";
import axios from "axios";

let handler = async (m, { conn, text, usedPrefix, command }) => {
    // m.reply(
    //     "Hello, this is an experimental script that will be developed by Dr.Osman later !"
    // );
    let who;
    if (m.isGroup)
        who = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : false;
    else who = m.chat;
    if (!who)
        throw `✳️ Tag or mention someone\n\n📌 Example : ${
            usedPrefix + command
        } @user`;
    let name = conn.getName(m.sender);
    // Format the repository information with emojis
    const formattedInfo = `
👤 Member Name: @${who.split("@")[0]}
⭐ Admin: ${name}
📝 Description: ${text}`.trim();

    // Send the formatted information as a message
    await conn.relayMessage(
        m.chat,
        {
            requestPaymentMessage: {
                currencyCodeIso4217: "USD",
                amount1000: 5000,
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

    //send a template message!
    const templateButtons = [
        {
            index: 1,
            urlButton: {
                displayText: "⭐ Star Baileys on GitHub!",
                url: "https://github.com/adiwajshing/Baileys",
            },
        },
        {
            index: 2,
            callButton: {
                displayText: "Call me!",
                phoneNumber: "+1 (234) 5678-901",
            },
        },
        {
            index: 3,
            quickReplyButton: {
                displayText: "This is a reply, just like normal buttons!",
                id: "id-like-buttons-message",
            },
        },
    ];

    const templateMessage = {
        text: "Hi it's a template message",
        footer: "Hello World",
        templateButtons: templateButtons,
    };

    const sendMsg = await conn.sendMessage(m.chat, templateMessage);
};

handler.help = ["penalty"];
handler.tags = ["penalty"];
handler.command = /^(penalty)$/i;
handler.admin = true;
handler.group = true;

export default handler;
