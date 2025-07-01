module.exports = {
    SESSION_ID: process.env.SESSION_ID || '',
    PREFIX: process.env.PREFIX || '.',
    PORT: process.env.PORT || 8030,
    MODE: 'public',
    AUTO_REPLY: false,
    READ_MSG: false,
    ANTI_LINK: true,
    GENUX_API_KEY: process.env.GENUX_API_KEY || 'GENUX-XGSGG',
    OWNER_NUMBER: process.env.OWNER_NUMBER || ['94771029271', '94786802371'],
}