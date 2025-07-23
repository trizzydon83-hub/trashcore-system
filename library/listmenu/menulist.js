const chalk = require('chalk')
const fs = require('fs')
const Menu = `╭─⊷𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄─
│▢ Owner:${global.ownername}
│▢ Version: 1.3.5
│▢ Type: ${global.typebot}
╰────────────
╭─⊷🐦‍🔥MAIN-CMD─
│ • menu                    
│ • ping
│ • s
│ • botinfo
│ • listplugin        
╰────────────
╭─⊷🗿CTRL-BOT─
│ • public                    
│ • private
│ • addaccess
│ • delaccess    
│ • autoreact    
│ • block
│ • autotyping
│ • autorecord 
│ • autobio
│ • >
│ • $
╰────────────
╭─⊷🏓MEDIA-CMD─
│ • play       
│ • ytmp4 
│ • ytvid 
│ • pinterestdl 
│ • retrieve
│ • song
│ • twitterdl
│ • tt
│ • tiktok  
│ • igdl      
│ • ytmp3      
╰────────────
╭─⊷💀BUG-CMD─
│ • trash                    
╰────────────
╭─⊷🤖AI-CMD─
│ • gemma 
│ • indo-ai        
╰────────────
╭─⊷⚡GET-CMD─
│ • gethtml
│ • getpp 
│ • getplugin 
╰────────────
╭─⊷👥GRUP-CMD─
│ • add
│ • remove
│ • promote
│ • revoke
│ • approve
│ • reject
│ • tagall
│ • hidetag
│ • close
│ • open
│ • kickall
│ • linkgc
│ • setppgc
│ • tagme
╰────────────
╭─⊷⚓TOOL-CMD─
│ • enc
│ • idch 
│ • dev
╰────────────`

module.exports = Menu
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})