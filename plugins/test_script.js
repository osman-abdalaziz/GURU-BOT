let handler = async (m, { conn, text, usedPrefix, command }) => {
    // m.reply(
    //     "Hello, this is an experimental script that will be developed by Dr.Osman later !"
    // );

    const id = '966530740094@s.whatsapp.net' // the WhatsApp ID
    const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Testing Script',
    buttons: buttons,
    headerType: 1
}

const sendMsg = await conn.sendMessage(id, buttonMessage)
    m.react("🧑‍💻");
};

handler.help = ["Osman"];
handler.tags = ["Osman"];
handler.command = /^(Osman)$/i;

export default handler;
