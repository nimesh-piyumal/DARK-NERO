const { exec } = require('../command')

exec({
    command: 'alive',
    react: '📚',
    catogory: 'general'
}, async (darknero, mek, m, { from, reply, pushname }) => {
    const caption = `Hello, ${pushname}`
    await darknero.sendMessage(from, { text: caption }, { quoted: m })
});
