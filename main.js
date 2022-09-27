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
        browser :['𝐴𝑁𝐽𝐴𝐿𝐼 𝑀𝐷','Chrome','1.0.0']
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
    {index: 1, urlButton: {displayText: 'COPY QR', url: `https://www.whatsapp.com/otp/copy/${btoa(data)}`}},
    {index: 2, urlButton: {displayText: 'CONTACT', url: `wa.me/918075641889?text=Hey%20Brooh`}},
   
]

const templateMessage = {
    text: `\n𝑻𝑯𝑰𝑺 𝑰𝑺 𝒀𝑶𝑼𝑹 𝑺𝑬𝑺𝑺𝑰𝑶𝑵 𝑪𝑶𝑫𝑬
          
◕ ⚠️ 𝑫𝑶𝑵𝑻 𝑺𝑯𝑨𝑹𝑬 𝑻𝑯𝑰𝑺 𝑪𝑶𝑫𝑬 𝑾𝑰𝑻𝑯 𝑨𝑵𝒀𝑶𝑵𝑬`,
    footer: 'Aɴᴊᴀʟɪ ᴍᴅ',
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
