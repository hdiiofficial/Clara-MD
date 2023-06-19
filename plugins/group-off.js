let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh, Cycy Baru Bangun Nih >,<* ')
}


handler.command = /^(grupon)$/i
handler.group = true
handler.admin = true

export default handler