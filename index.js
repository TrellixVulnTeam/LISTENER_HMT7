const imessage = require('osa-imessage')
const fs = require('fs')

//this only works using node version v8.17.0 on the socialScrape Computer

const yourUsername = 'tylerharper';
const dropBoxFolder = '_socialScrape'
const masterLogPath =  `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/masterCompletedLog.txt`
const linkPath =  `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/chatScrapeLinks.txt`
const testLogPath =  `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/testLog.txt'
const chatLogPath=  `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/chatLog.txt'


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
    
    writeLine(`${msg.date}, ${msg.text}, ${msg.handle}`);

    if (msg.group !== null && msg.group.indexOf('chat652293730519823796') !== -1) {
    //if (msg.group !== null && msg.group.indexOf("chat674751436891709568") !== -1) {

        if (msg.text !== null && msg.text.indexOf("tiktok.com") !== -1 /*&& !msg.text.includes('Disliked')*/)
        {
            writeChatLog(`${msg.date.toLocaleString('en-US', {
                timeZone: 'America/New_York',
                year: "2-digit",
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit', })}, ${msg.text}, ${msg.handle}`);

          let time = new Date();
          try {
            fs.utimesSync(chatLogPath, time, time);  //https://remarkablemark.org/blog/2017/12/17/touch-file-nodejs/
          } catch (err) {
            fs.closeSync(fs.openSync(chatLogPath, 'w'));
          }


          writeLink(msg.text);
          let timeLink = new Date();
          try {
            fs.utimesSync(linkPath, timeLink, timeLink);  //https://remarkablemark.org/blog/2017/12/17/touch-file-nodejs/
          } catch (err) {
            fs.closeSync(fs.openSync(linkPath, 'w'));
          }
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

          const time = new Date();
          try {
            fs.utimesSync(testLogPath, time, time);  //https://remarkablemark.org/blog/2017/12/17/touch-file-nodejs/
          } catch (err) {
            fs.closeSync(fs.openSync(testLogPath, 'w'));
          }
    }
        
  });




