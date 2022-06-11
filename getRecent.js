const imessage = require('osa-imessage')
const fs = require('fs')
// const getRecentChats  = require('osa-imessage')


// let liveChatLinks = [];

// var logger = fs.createWriteStream('liveChat.txt', {
//     flags: 'a' // 'a' means appending (old data will be preserved)
//   })

  // var linkScrape = fs.createWriteStream('chatLinks.txt', {
  //   flags: 'a' // 'a' means appending (old data will be preserved)
  // })
  // var writeLink = (line) => linkScrape.write(`\n${line}`);

// var writeLine = (line) => logger.write(`\n${line}`);



// imessage.listen().on("message", (msg) => {
//     console.log(msg)
//     writeLine(msg.text);

//     // if (msg.group.indexOf("chat901667219280557236") !== -1) {

//         if (msg.text.indexOf("tiktok.com") !== -1) {
//             writeLink(msg.text);

//         }
//     // }
//   });





    



// imessage.listen().on("message", (msg) => {
//     console.log(msg.text, '\n', msg.handle, '\n', msg.date)
    
//     fs.writeFile('./liveChat.txt', msg.text);
//   });
async function getRecent() {



await imessage.getRecentChats(100) // Defaults to 10
//  console.log(`${process.env.HOME}/Library/Messages/chat.db`)




}
getRecent();