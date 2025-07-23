const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUtzWHBNem85aFNIQXNFUDFJRWFFT3Y3ZEVnS3h6RzBqM1lyRjE3RXpsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVh6OGNCNmUvNXBDSnI0ZEJHTURmcitMZEE4blBsdnpqVytzS1Rtd0ZYMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUE9WSzBOV2hnbXV2ZE1KekJaSjh5NmpESStPbmlGWW9uWkdUR3R6VEZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTzltYmNlRU1pRUNSc2hBZUtrZHJmVGZhaGwzdTNyclYvcmpMNjRrdTJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QWlU3TXFwYnU0Vi9hK2htR1hVeitIamw2NlBZUk8vMGdiMlBhY3JGRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt5NWxSMG1yVjMxVmhlUUYxSG5uY3lIWURBTk1taTNIdC9JNU96M3hBbHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUY1Zk9pSUpocFpqYXNoYytZS2FLNEFySmVOTDN3aXc1bVdNYXQzdkkwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUd6NlhURXJVeEg0SzFSMlhDZlpVSkVTTTdmeEhBUnltOFJPdUtuQlZCVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldiVTVDUG9kWkgyUEttQVJkbWkrMUdXV2k1MGxvRFhuR2k4WVB1aEc5SGxQRUpwUkJOY3YzRUtoNmVoWFo4c0lONVVkdFNwUEhYRW94bUdZNUVyNGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJFME1JaXU0cE96L0VaQ1ZkMmgxdytjeGdZUXgrV1FVTVAxRmRYbklWRUtRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDczODMxNjE1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNjc3RjMxNzIyMTIzOEZDRDdENDk0QzI1OTVEMTU0OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyODc5NDU5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MzgzMTYxNTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRThBQzQ3RDMxRTg4NkMzMEY5MURDM0JENUFDMjM0MEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Mjg3OTQ1OX1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiREdpSmNYQXlTMGVwcXYzclMwU0VxUSIsInBob25lSWQiOiI5MjE5MTZmOC00MmNiLTQ2MGItYWRhNi0zNzVhNTU4MmMwYjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2NNcmZ5OEl0dWsyVWlHTEg3NXlaT3BWVStjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVxUG40TEx3eGdxUlliUm1XRGZaRytWNGZGaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUUkFTSEJPVCIsIm1lIjp7ImlkIjoiMjU0NzM4MzE2MTU3Ojc3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjM3OTgwNjQ5NzE5NTU6NzdAbGlkIiwibmFtZSI6IuGWq+Kcp/Cdl5fwnZe/8J2XrvCdl57wnZey8J+SjCDwnZem8J2XvfCdl7LwnZeu8J2XpeKanCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWVLMU1BREVOU2k2OE1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUHFjK3pkbUZyc2V0S3U5SjNoaDJaVDRocGxYU00vcTRJSFU0cHk4M2N4OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYmlMbTN0TEdsZ2UxQmkxRXZTUlhIVU5DcW1YVXRvTVNZWDFEZGg2VllyTGJUZ3JYV1MwenZROG5nTmx5MlEwd29CbzVkV0RHc1lxalRtUUJNd3RNQmc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikh3RTZ1cnkxb1dyRnZZQmhQT3htYlJ1QXFJcHYwMXFmVUlDb0wwUnJ6bzBLOEIrWGVvdmo2d0t6TWJ4RUZQS3phUVd5UDJMaVJMSUFhWUc3TEU1bGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzM4MzE2MTU3Ojc3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQ2blBzM1poYTdIclNydlNkNFlkbVUrSWFaVjBqUDZ1Q0IxT0tjdk4zTWYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Mjg3OTQ1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKdVMifQ==' 
// Owner Setting
global.prefix = process.env.BOT_PREFIX ||'.'
global.owner = ["254104245659",]
global.error = ["6666",]
global.ownername = process.env.OWNER_NAME ||'Trashcore'
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "Trashcore"
global.botversion = "1.4.0"
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
