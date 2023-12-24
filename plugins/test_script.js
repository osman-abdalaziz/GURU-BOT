import { promises } from "fs";
import { join } from "path";
import axios from "axios";

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    m.reply(
        `Hello, this is an experimental script that will be developed by ${args[1]} later !`
    );
//     let who;
//     if (m.isGroup)
//         who = m.mentionedJid[0]
//             ? m.mentionedJid[0]
//             : m.quoted
//             ? m.quoted.sender
//             : false;
//     else who = m.chat;
//     if (!who)
//         throw `✳️ Tag or mention someone\n\n📌 Example : ${
//             usedPrefix + command
//         } @user`;
//     let name = conn.getName(m.sender);
//     // Format the repository information with emojis
//     const formattedInfo = `
// 👤 Member Name: @${who.split`@`[0]}

// 📝 Description: ${text}

// ⭐ Admin: ${name}`;

//     // Send the formatted information as a message
//     await conn.relayMessage(
//         m.chat,
//         {
//             requestPaymentMessage: {
//                 currencyCodeIso4217: "USD",
//                 amount1000: 5000,
//                 requestFrom: m.sender,
//                 noteMessage: {
//                     extendedTextMessage: {
//                         text: formattedInfo,
//                         contextInfo: {
//                             externalAdReply: {
//                                 showAdAttribution: true,
//                             },
//                         },
//                     },
//                 },
//             },
//             mentions: [who],
//         },
//         {}
//     );
//     m.react("✒️");
};

handler.help = ["penalty"];
handler.tags = ["penalty"];
handler.command = /^(penalty)$/i;
handler.admin = true;
handler.group = true;

export default handler;
