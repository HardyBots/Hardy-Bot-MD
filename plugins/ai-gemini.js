import fetch from 'node-fetch';
import fs from 'fs';
import uploader from '../lib/uploadImage.js';

const handler = async (m, {conn, text, command}) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`));
  const tradutor = _translate.BK9.BK9;

    if (command === 'gemini') {
    if (!text) throw `${tradutor.bk9text}`;

    try {
      let BK7 = m.quoted ? m.quoted : m;
    let BK8 = (BK7.msg || BK7).mimetype || BK7.mediaType || '';
    if (/image/g.test(BK8) && !/webp/g.test(BK8)) {
      let BK0 = await BK7.download();
      let BK9img = await uploader(BK0);
      let BK9api = await (await fetch(`https://api.bk9.site/ai/geminiimg?url=${BK9img}&q=${text}`)).json();
      conn.sendMessage(m.chat, { text: BK9api.BK9 }, { quoted: m });
      } else {
        conn.sendPresenceUpdate('composing', m.chat);
      const BK9api = `https://api.bk9.site/ai/gemini?q=${encodeURIComponent(text)}`;
      const BK99 = await fetch(BK9api);
      const BK8 = await BK99.json();
      if (BK8.status && BK8.BK9) {
        const respuestaAPI = BK8.BK9;
        conn.reply(m.chat, respuestaAPI, m);
      }
    } catch (error) {
      throw `${tradutor.bk9err}`;
    }
  }
};

handler.command = ['gemini'];
handler.tags = ['ai'];
export default handler;


let BK7 = m.quoted ? m.quoted : m;
    let BK8 = (BK7.msg || BK7).mimetype || BK7.mediaType || '';
    if (/image/g.test(BK8) && !/webp/g.test(BK8)) {
      let BK0 = await BK7.download();
      let BK9img = await uploader(BK0);
      let BK9api = await (await fetch(`https://api.bk9.site/ai/geminiimg?url=${BK9img}&q=${text}`)).json();
      conn.sendMessage(m.chat, { text: BK9api.BK9 }, { quoted: m });
