

let handler = async(m, { conn, text, usedPrefix, command }) => {
    m.reply("I am Alive")
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
