import fetch from 'node-fetch';
import fs from 'fs';
import uploader from '../lib/uploadImage.js';

const handler = async (m, {conn, text, command}) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`));
  const tradutor = _translate.BK9.BK9;

    if (!text) throw `يـرجـى إدخـال نـص، مـثـال (.bard مرحبا كيف حالك)`;

    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const BK9api = `https://api.bk9.site/ai/gemini?q=${encodeURIComponent(text)}`;
      const BK99 = await fetch(BK9api);
      const BK8 = await BK99.json();
      if (BK8.status && BK8.BK9) {
        const respuestaAPI = BK8.BK9;
        conn.reply(m.chat, respuestaAPI, m);
      } else {
        throw `${tradutor.bk9err}`;
      }
    } catch (error) {
      throw `${tradutor.bk9err}`;
    }
  }
};

handler.command = ['gemini'];
handler.tags = ['ai'];
export default handler;
