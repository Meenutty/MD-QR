let express = require('express')
let app = express()
let {toBuffer} = require('qrcode')

const makeWASocket = require("@adiwajshing/baileys").default

const pino = require('pino')
let PORT = process.env.PORT ||3030
const { delay ,useSingleFileAuthState } = require("@adiwajshing/baileys")

const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('h4cO2gJEMwmgmBoteYufW6_weLvBYCqT');
app.use('/',(req, res) => {
  const authfile = `./tmp/${makeid()}.json`
  const { state } = useSingleFileAuthState(authfile, pino({ level: "silent" }));
  function Millie() {
    try{
    let session = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: pino({ level: 'silent' }),
        browser :['ᴀʙᴜ-ᴍᴅ','safari','1.0.0']
    })

    session.ev.on("connection.update",async  (s) => {
      if(s.qr){
        res.end(await toBuffer(s.qr))
      }
        const { connection, lastDisconnect } = s
        if (connection == "open") {
          await delay(500 * 10)
            let link = await  pastebin.createPasteFromFile(authfile, "Millie-MD session", null,0, "N")
            data = link.replace('https://pastebin.com/',"")
          
           


const templateButtons = [
    {index: 1, urlButton: {displayText: 'ᴄᴏᴘʏ ǫʀ ᴄᴏᴅᴇ', url: `https://www.whatsapp.com/otp/copy/'+("Abu~"${btoa(data)}`}},
    {index: 2, urlButton: {displayText: 'ɢɪᴛ ʟɪɴᴋ', url: `github.com/Afx-Abu/Abu-MD`}},
   
]

const templateMessage = {
    text: `\nᴅᴇᴀʀ ᴜsᴇʀ ᴛʜɪs ɪs ʏᴏᴜʀ sᴇssɪᴏɴ ɪᴅ
          
◕ ⚠️ *ᴘʟᴇᴀsᴇ ᴅᴏ ɴᴏᴛ sʜᴀʀᴇ ᴛʜɪs ᴄᴏᴅᴇ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ ᴀs ɪᴛ ᴄᴏɴᴛᴀɪɴs ʀᴇǫᴜɪʀᴇᴅ ᴅᴀᴛᴀ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ ᴄᴏɴᴛᴀᴄᴛ ᴅᴇᴛᴀɪʟs ᴀɴᴅ ᴀᴄᴄᴇss ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ*`,
    footer: 'sᴇssɪᴏɴ',
    templateButtons: templateButtons
}

await session.sendMessage(session.user.id, templateMessage)



          
          
            await delay(3000 * 10)           
          process.send('reset')
        }
        if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            Millie()
        }
      
    })
   }catch{
      console.log('Unknown Error Occured Please report to Owner and Stay tuned')
    } }


Millie()})
app.listen(PORT, () => console.log('App listened on port', PORT))







function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characters9 = characters.length;
    for ( var i = 0; i < 9; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 characters9));
   }
   return result;
}
