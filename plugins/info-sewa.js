import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/336fa2ab6cbddea256e0a.jpg'
let info = `
╭━━━━「 *SEWA* 」
┊• *1 Minggu:* 5K
┊• *1 Bulan:* 15K
┊• *Permanen:* Dibicarakan 
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊• *1 Bulan:* 10K
╰═┅═━––––––๑

*PAYMENT:*

• *DANA:* [${povo}]
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: pay }, m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main','info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
