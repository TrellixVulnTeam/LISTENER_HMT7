const imessage = require('osa-imessage')
const fs = require('fs')


//this only works using node version v8.17.0 on the socialScrape Computer




// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: csvPath,
//     header: [
//         {id: 'date', title: 'DATE GATHERED'},
//         {id: 'link', title: 'LINK'},
//         {id: 'handle', title: 'CLIP GETTER'}
//     ]
// });

// const csvPath = '/Users/socialscrape/Social Wake Dropbox/Tylers Tests/masterLog.csv'
const linkPath = '/Users/socialscrape/Social Wake Dropbox/Tylers Tests/chatScrape.txt'
const chatLogPath = '/Users/socialscrape/Social Wake Dropbox/Tylers Tests/chatLog.txt'
const testLogPath ='/Users/socialscrape/Social Wake Dropbox/Tylers Tests/testLog.txt'
let tempDate =''
var logger = fs.createWriteStream('liveChat.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })
var writeLine = (line) => logger.write(`\n${line}`);


var linkScrape = fs.createWriteStream(linkPath, {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })
var writeLink = (line) => linkScrape.write(`\n${line}`);


var chatLogger = fs.createWriteStream(chatLogPath, {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })
var writeChatLog = (line) => chatLogger.write(`\n${line}`);

var TestLogger = fs.createWriteStream(testLogPath, {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })

var writeTestLog = (line) => TestLogger.write(`\n${line}`);



imessage.listen().on("message", (msg) => {
    console.log(msg)
    
    // console.log(msg.date)
    // const records = [
    //     {date: msg.date,  link: msg.text, handle: msg.handle},
    // ];
    
    // csvWriter.writeRecords(records)       // returns a promise
    // .then(() => {
    //     console.log('...Done');
    // });
    
    writeLine(`${msg.date}, ${msg.text}, ${msg.handle}`);

    if (msg.group !== null && msg.group.indexOf("chat652293730519823796") !== -1) {

        if (msg.text !== null && msg.text.indexOf("tiktok.com") !== -1 && !chats[i].text.includes('Disliked')) {
           
            writeChatLog(`${msg.date.toLocaleString('en-US', {
                timeZone: 'America/New_York',
                year: "2-digit",
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}, ${msg.text}, ${msg.handle}`);
            writeLink(msg.text);
        }

    }

    if (msg.text.indexOf("tiktok.com") !== -1) {
        // console.log(msg.date)
        // tempDate = msg.date;
        // console.log(tempDate)
        
        // let longDateString = longDate.toString()
        // let shortDate = tempDate.substring(0,24)
        // console.log(shortDate)
        writeTestLog(`${msg.date.toLocaleString('en-US', {
            timeZone: 'America/New_York',
            year: "2-digit",
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })}, ${msg.text}, ${msg.handle}`);
    }
        
  });




