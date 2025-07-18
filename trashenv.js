const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01qSUhsS0xwUEtPc1E4MjlMOFpIMTBiQm9PT2lBMWpwcXZsbTJUZlRHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFVhWURGTUNyQ3pEbXNrTkExOXR6SSswSDBsNFRwZXllYzR0cHJndytCTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVRSUUlpUno0RVpZT2U4Z3lraC9nTXFjcHE2OVFHcGFxM2s3SjZ0YlZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1bnFCV2tXUkdYOUtPcExpcDM2Q0pGOWNFbDJ0cWd2YlRYaGNlRlNxUVJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQTzBRMllIYUVKQUZ5VlBHOXlGWlhndHFRZ0MwS29yR3NCM3VkMFdzR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik14QXlweFNTalFCR25yNDVodWlmZ2d3VW5xUzMrSCs4THlpWklHRDNtR3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU8zSWVIbDhESFE2Q0hTWDhLT2xsbEF0cnJWbXFDNEtmT0FndkJmUXVYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NpODY5NCtIVDJhcFVRUXJXdkZXL0NFL0xPOEFQbDdZSy9mRHhHb2cwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9xQXM4N2NYQ3BJTHdCNDhJM2ZWeS94R3FkRmJaSnMvd0crNVlzaDh5c0RXdFBCUlhRQUdOQ1doNURyaFM2N1BjREhNM0NKY3lFNTZCaHB5ZzVjMURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJUWGVJc21iRW5aTFlLb2ZaWnVVS203SzNIZ2JsN00ydk03UnV1ZjFVVnJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIXzdzQU9Ob1E5eThYM3JUdEl0YW1RIiwicGhvbmVJZCI6IjY2NTBiYzg1LTJiMTUtNGIxMi05Y2M2LWJlNjY0MTdmYzdkMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNS0FNaFJHNjNMaE0vbWk2QzRTdG96ZGVvdE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkt6SEs0VXpWQnRJZ1ptbE0rajZKVGw0R09NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1CVVZJSU1EIiwibWUiOnsiaWQiOiIyNTQxMDQyNDU2NTk6MzZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMTk3NTY3MzI5MDc3MjI6MzZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLNjM3cjRERUlXUjZjTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvcWF0bGxmOGtjRWRZdDM5REhVMnZPUFcxeHZnaWR2NG9reGxFanIrUjBnPSIsImFjY291bnRTaWduYXR1cmUiOiJDelJTdEVETUxhSURvZ1BRYjdiaXZVQmJYUUw1SjlpUUxsSGxFUkp0VUd5Y09EeGdJbnJnaEswaDRycmRwSndJbnNCaVZsS3hhR0V0dmdFcnJQa2FBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQW56b2kxODZEYVhxQzB1ZmI5MktFa1NMWUJDZkdVYWdTWkMvK0Q0aG9YaE1jc3NaZWJEODVWcFpqaW14M2c3ZHBNdmNmRW9BOEU0Q0dGVngxK2JzQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMDQyNDU2NTk6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjZtclpaWC9KSEJIV0xkL1F4MU5yemoxdGNiNEluYitLSk1aUkk2L2tkSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyODQ0NDM0LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUY4MyJ9' 
// Owner Setting
global.owner = ["254104245659",]
global.error = ["6666",]
global.ownername = "Trashcore"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "Trashcore"
global.botversion = "1.2.0"
global.typebot = "Plugin"
global.session = "trashsession"
global.connect = true
global.statusview = true
global.thumb = "https://files.catbox.moe/4ryp6k.jpg"
global.wagc = "https://chat.whatsapp.com/BPyIptm3ZH68y4pSPrLMyq?mode=r_t"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Sticker Marker
global.packname = "𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄"
global.author = "©𝐏𝐚𝐂𝐊𝐒"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Respon Message
global.mess = {
    success: '✅ Done.',
    admin: '🚨 Admin only.',
    premium: '🆘must be a premium user.',
    botAdmin: '🤖 Make me admin first.',
    owner: '👑 Owner only.',
    OnlyGrup: '👥 Group only.',
    private: '📩 Private chat only.',
    wait: '⏳ Processing...',
    error: '⚠️ Error occurred.',
}
//━━━━━━━━━━━━━━━━━━━━━━━━//
// File Update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File 📁 : ${__filename}`)
delete require.cache[file]
require(file)
})