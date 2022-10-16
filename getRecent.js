const imessage = require('osa-imessage')
const fs = require('fs')
const DATE_OFFSET = 978307200
let chatGrabStart = getAppleTime(2022,7,31,0,0)   //dont worry about looking at chats before August 31 2022 ( months = 0-11, hours = 0-23)
//console.log(chatGrabStart)

async function getRecent() {

await imessage.getRecentChats(chatGrabStart) // Defaults to 10
//  console.log(`${process.env.HOME}/Library/Messages/chat.db`)

}
getRecent();

function getAppleTime (y,m,d,h,mi){

    let unixMS = Date.UTC(y,m,d,h,mi)
    let ts = (unixMS - (DATE_OFFSET*1000))* 1000000

    return ts
}
