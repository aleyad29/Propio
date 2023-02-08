let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*▪𝐁𝐨𝐭𝐉𝐞𝐧𝐧𝐱𝐓𝐚𝐭𝐢:* ${pesan}`
let teks = `*⺀𝐀𝐂𝐓𝐈𝐕𝐄𝐍𝐒𝐄 𝐏𝐔𝐓𝐀𝐒⺀*\n\n▪ ${oi}\n\n▪ *𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐠𝐞𝐧𝐞𝐫𝐚𝐥:*\n`
for (let mem of participants) {
teks += `┣✉️ @${mem.id.split('@')[0]}\n`}
teks += `└𝐉𝐞𝐧𝐧𝐱𝐓𝐚𝐭𝐢`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['teg <mesaje>','jenn <mesaje>']
handler.tags = ['group']
handler.command = /^(teg|jenn)$/i
handler.admin = true
handler.group = true
export default handler
