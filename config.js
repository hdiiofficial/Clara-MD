import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285700921759', 'Punya Dinda', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285700912979'
global.author = '© ADINDA TASYA'
global.namebot = '​Punya Dinda'
global.wm = '© HADI DEV'
// Link Sosmed
global.sig = 'https://www.instagram.com/hdiiofficial'
global.sgh = 'https://github.com/'
global.sgc = 'https://chat.whatsapp.com/LJaNeWnBWuH4nZ7tpxrdzu'
// Donasi
global.psaweria = 'https://saweria.co/hdiiofficial'
global.ptrakterr = 'https://trakteer.id/hdiiofficial'
global.povo = '085700921759'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.openai = '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' 
global.org = 'org-VKTbfzIGL0EfLb8RgRfbLvbu'
global.rose = 'Rs-bangsat'
global.zeltoria = 'Elistz'
global.ibeng = 'APIKEY'
global.xcode = 'Frieren'
global.APIs = {
  rose: 'https://api.itsrose.site',
  xcoders : 'https://api-xcoders.site',
  zeltoria: 'https://api.zeltoria.my.id'
}

global.APIKeys = { 
  'https://api.itsrose.site': 'Rs-bangsat',
  'https://api-xcoders.site': 'Frieren',
  'https://api.zeltoria.my.id': 'Elistz'
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
