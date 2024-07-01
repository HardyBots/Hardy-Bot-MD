import fetch from 'node-fetch';
import fs from 'fs';
import uploader from '../lib/uploadImage.js';

const handler = async (m, {conn, text, command}) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`));
  const tradutor = _translate.BK9.BK9;

  if (command === 'ai') {
    if (!text) throw `${tradutor.bk9text}`;

    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const BK9api = `https://api.bk9.site/ai/gpt4?q=${encodeURIComponent(text)}`;
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
    } else if (command === 'ai2') {
    if (!text) throw `${tradutor.bk9text}`;

    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const BK9api = `https://api.bk9.site/ai/gptt4?q=${encodeURIComponent(text)}`;
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
    } else if (command === 'gpt') {
    if (!text) throw `${tradutor.bk9text}`;

    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const BK9api = `https://api.bk9.site/ai/chatgpt?q=${encodeURIComponent(text)}`;
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
    } else if (command === 'gpt2') {
    if (!text) throw `${tradutor.bk9text}`;

    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const BK9api = `https://api.bk9.site/ai/chatgpt2?q=${encodeURIComponent(text)}`;
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
    } else if (command === 'gpt3') {
    if (!text) throw `${tradutor.bk9text}`;

    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const BK9api = `https://api.bk9.site/ai/chatgpt3?q=${encodeURIComponent(text)}`;
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
    } else if (command === 'gpt4') {
    if (!text) throw `${tradutor.bk9text}`;

    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const BK9api = `https://api.bk9.site/ai/chatgpt4?q=${encodeURIComponent(text)}`;
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
    } else if (command === 'maths') {
    if (!text) throw `${tradutor.bk9text}`;

    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const BK9api = `https://api.bk9.site/ai/mathssolve?q=${encodeURIComponent(text)}`;
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

handler.command = ['ai', 'ai2', 'gpt', 'gpt2', 'gpt3', 'gpt4'];
handler.tags = ['ai'];
export default handler;
