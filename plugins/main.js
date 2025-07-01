const { exec } = require('../command')

exec({
    command: 'alive',
    react: '📚',
    catogory: 'general'
}, async (darknero, mek, m, { from, reply }) => {
    const caption = `I'm alive`
    await darknero.sendMessage(from, { text: caption }, { quoted: m })
});