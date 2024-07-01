import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.menu_labiblia

  try {
    const pp = imagen1;
    const vn = './media/menu.mp3';
    const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *Ｈａｒｄｙ － Ｂｏｔ* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤  Welcome ${taguser}*
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃     𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝕄𝔼ℕ𝕌
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 _*${usedPrefix}yta*_
┣ ඬ⃟ 📥 _*${usedPrefix}ytadoc*_
┣ ඬ⃟ 📥 _*${usedPrefix}ytv*_
┣ ඬ⃟ 📥 _*${usedPrefix}ytvdoc*_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃     𝕊𝔼𝔸ℝℂℍ 𝕄𝔼ℕ𝕌
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 _*${usedPrefix}audio* (youtube audio)_
┣ ඬ⃟ 🔍 _*${usedPrefix}video* (youtube video)_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃     𝔸𝕀 𝕄𝔼ℕ𝕌
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🤖 _*${usedPrefix}bard*_
┣ ඬ⃟ 🤖 _*${usedPrefix}bardimg*_
┣ ඬ⃟ 🤖 _*${usedPrefix}ia*_
┣ ඬ⃟ 🤖 _*${usedPrefix}ia2*_
┣ ඬ⃟ 🤖 _*${usedPrefix}gpt*_
┣ ඬ⃟ 🤖 _*${usedPrefix}gpt2*_
┣ ඬ⃟ 🤖 _*${usedPrefix}gpt3*_
┣ ඬ⃟ 🤖 _*${usedPrefix}gpt4*_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃     𝔾ℝ𝕆𝕌ℙ 𝕄𝔼ℕ𝕌
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👥 _*${usedPrefix}cmd*_
┣ ඬ⃟ 👥 _*${usedPrefix}cmd*_
┣ ඬ⃟ 👥 _*${usedPrefix}cmd*_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃     𝕋𝕆𝕆𝕃𝕊 𝕄𝔼ℕ𝕌
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ⚙️ _*${usedPrefix}upload*_
┣ ඬ⃟ ⚙️ _*${usedPrefix}cmd*_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃           𝕆𝕎ℕ𝔼ℝ 𝕄𝔼ℕ𝕌
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 _*${usedPrefix}$*_
┣ ඬ⃟ 👑 _*${usedPrefix}=>*_
┣ ඬ⃟ 👑 _*${usedPrefix}update*_
┣ ඬ⃟ 👑 _*${usedPrefix}fetch*_
┣ ඬ⃟ 👑 _*${usedPrefix}join*_
┗━━━━━━━━━━━━━━━━┛
`.trim();
    if (m.isGroup) {
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
      await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    }
  } catch {
    
  }
};
handler.command = /^(menu|help|hardy)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
