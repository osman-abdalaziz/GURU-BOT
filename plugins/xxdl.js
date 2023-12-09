
import { xnxxSearch, xnxxdl } from '../lib/scraper.js';



let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    m.react('🚫');
  m.relpy("This Command Is Disabled By Dr.Osman");
};

handler.help = ['xnxx'];
handler.tags = ['nsfw', 'premium'];
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'];
handler.group = true;
handler.premium = false;
handler.register = true;

export default handler;
