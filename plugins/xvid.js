import { xvideosSearch, xvideosdl } from '../lib/scraper.js';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  
  m.react('🚫');
  m.relpy("This Command Is Disabled By Dr.Osman")
  };

  handler.help = ['xvid']
  handler.tags = ['nsfw']
handler.command = ['xvid'];
handler.group = true;
handler.premium = false;
handler.register = true;

handler.premium = false;

export default handler;
