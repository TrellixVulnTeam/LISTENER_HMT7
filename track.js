
//Change these parameters
let monthNumber = 9;

let chatGrabStart = getAppleTime(2022,7,31,0,0)   //dont worry about looking at chats before August 31 2022 ( months = 0-11, hours = 0-23)


const imessage = require('osa-imessage')
const fs = require('fs')
const yourUsername = 'socialscrape';
const dropBoxFolder = '_socialScrape'
const completedPath =  `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/masterCompletedLog.txt`
const linkPath =  `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/chatScrapeLinks.txt`
const missedLinkPath =  `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/missedLinks.txt`
const missedLogPath =  `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/missedLinksLog.txt`
const logPath = `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/chatLog.txt`
const IGLogPath ='/Users/socialscrape/Social Wake Dropbox/_socialScrape/logs/IGLog.txt'
const DATE_OFFSET = 978307200
const ttID = "'chat652293730519823796'"
const igID = "'chat222048912579693603'"
const otherID = "'chat951176133862785356'"


const calendar = [
    {mnth:"Custom", wks:[]},
    {mnth:"January",wks:[1,2,3,4]},
    {mnth:"February",wks:[5,6,7,8]},
    {mnth:"March",wks:[9,10,11,12,13]},
    {mnth:"April",wks:[14,15,16, 17]},
    {mnth:"May",wks:[18,19,20,21]},
    {mnth:"June",wks:[22,23,24,25,26]},
    {mnth:"July",wks:[27,28,29,30]},
    {mnth:"August",wks:[31,32,33,34]},
    {mnth:"September",wks:[35,36,37,38]},
    {mnth:"October",wks:[39,40,41,42,43]},
    {mnth:"November",wks:[44,45,46,47]},
    {mnth:"December",wks:[48,49,50,51,52]},
]

const weekRange = [
    {wk:27, wkRng:"7/4-7/10"},{wk:28, wkRng:"7/11-7/17"},
    {wk:29, wkRng:"7/18-7/24"},{wk:30, wkRng:"7/25-7/31"},
    {wk:31, wkRng:"8/1-8/7"},{wk:32, wkRng:"8/8-8/14"},
    {wk:33, wkRng:"8/15-8/21"},{wk:34, wkRng:"8/22-8/28"},
    {wk:35, wkRng:"8/29-9/4"},{wk:36, wkRng:"9/5-9/11"},
    {wk:37, wkRng:"9/12-9/18"},{wk:38, wkRng:"9/19-9/25"},
    {wk:39, wkRng:"9/26-10/2"},{wk:40, wkRng:"10/3-10/9"},
    {wk:41, wkRng:"10/10-10/16"},{wk:42, wkRng:"10/17-10/23"},
    {wk:43, wkRng:"10/24-10/30"},{wk:44, wkRng:"10/31-11/6"},
    {wk:45, wkRng:"11/7-11/13"},{wk:46, wkRng:"11/14-11/20"},
    {wk:47, wkRng:"11/21-11/27"},{wk:48, wkRng:"11/28-12/4"},
    {wk:49, wkRng:"12/5-12/11"},{wk:50, wkRng:"12/12-12/18"},
    {wk:51, wkRng:"12/19-12/25"},{wk:52, wkRng:"12/26-1/1"},
    {wk:1, wkRng:"1/2-1/8"},{wk:2, wkRng:"1/9-1/15"},
    {wk:3, wkRng:"1/16-1/22"},{wk:4, wkRng:"1/23-1/29"},
    {wk:5, wkRng:"1/30-2/5"},{wk:6, wkRng:"2/6-2/12"},
    {wk:7, wkRng:"2/13-2/19"},{wk:8, wkRng:"2/20-2/26"},
    {wk:9, wkRng:"2/27-3/5"},{wk:10, wkRng:"3/6-3/12"},
    {wk:11, wkRng:"3/13-3/19"},{wk:12, wkRng:"3/20-3/26"},
    {wk:13, wkRng:"3/27-4/2"},{wk:14, wkRng:"4/3-4/9"},
    {wk:15, wkRng:"4/10-4/16"},{wk:16, wkRng:"4/17-4/23"},
    {wk:17, wkRng:"4/24-4/30"},{wk:18, wkRng:"5/1-5/7"},
    {wk:19, wkRng:"5/8-5/14"},{wk:20, wkRng:"5/15-5/21"},
    {wk:21, wkRng:"5/22-5/28"},{wk:22, wkRng:"5/29-6/4"},
    {wk:23, wkRng:"6/5-6/11"},{wk:24, wkRng:"6/12-6/18"},
    {wk:25, wkRng:"6/19-6/25"},{wk:26, wkRng:"6/26-7/2"},
]

const jakeWoodruff = {handle:'+19374087623', name:'Jake Woodruff'}
const alannaPearson = {handle:'+15874338477',name:'Alanna Pearson'}
const davidOrin = {handle:'+13524844336',name:'David Orin'}
const bb = {handle:'+14034652209',name:'Andrew Borys'}
const lesleyAtkins = {handle:'+18259940771',name:'Lesley Atkins'}
const jonThomas = {handle:'+17402481926',name:'Jon Thomas'}
const rossSmith = {handle:'+16143158315',name:'Ross Smith'}
const dustinHowell = {handle:'+19372435942',name:'Dustin Howell'}
const karsonFunderburgh = {handle:'+19375083228',name:'Karson Funderburgh'}
const kelseyFunderburgh = {handle:'+19375089855',name:'Kelsey Funderburgh'}
const abeMohmed = {handle:'+14404520711',name:'Abe Mohmed'}
const loganThompson = {handle:'+17403957577',name:'Logan Thompson'}
const salma = {handle:'+16148007185',name:'Salma Abdel Latif'}
const kearstyn = {handle:'+15137487421',name:'Kearstyn Sage'}


//$4 per clip approval
//Daily Bonus
//  $10 for 10 clips in 1 day
//  $30 for 20 clips in 1 day
//  $100 for 40 clips in 1 day
//Weekly Bonus
//  $50 for 50 clips in 1 week
//  $125 for 100 clips in 1 day
//  $250 for 150 clips in 1 day


let currentMonth = calendar[monthNumber];
let monthName = calendar[monthNumber].mnth

const bonusLogPath = `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/${monthName}bonusReport.txt`
const bonusCSVPath = `/Users/${yourUsername}/Social Wake Dropbox/${dropBoxFolder}/logs/${monthName}bonusReport.csv`


console.log(monthName)
console.log("Herro")

var bonusLogger = fs.createWriteStream(bonusLogPath, {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })
var writeBonusLog = (line) => bonusLogger.write(`\n${line}`);

var bonusCSV = fs.createWriteStream(bonusCSVPath, {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })
var writeBonusCSV = (line) => bonusCSV.write(`\n${line}`);


async function bonusCounting() {

    let chats = await imessage.globalLog(chatGrabStart) //get applicable chats (with links)
    console.log("Messages retrieved!")
    let clippers = [
         
         
         new UserMonth(rossSmith.name,rossSmith.handle, currentMonth.wks),
         new UserMonth(jakeWoodruff.name,jakeWoodruff.handle, currentMonth.wks),
         new UserMonth(bb.name,bb.handle, currentMonth.wks),
         new UserMonth(dustinHowell.name,dustinHowell.handle, currentMonth.wks),
         new UserMonth(karsonFunderburgh.name,karsonFunderburgh.handle, currentMonth.wks),
         new UserMonth(davidOrin.name,davidOrin.handle, currentMonth.wks),
         new UserMonth(loganThompson.name,loganThompson.handle, currentMonth.wks),
         new UserMonth(kelseyFunderburgh.name,kelseyFunderburgh.handle, currentMonth.wks),
         new UserMonth(alannaPearson.name,alannaPearson.handle, currentMonth.wks),
         new UserMonth(lesleyAtkins.name,lesleyAtkins.handle, currentMonth.wks),
         new UserMonth(jonThomas.name,jonThomas.handle, currentMonth.wks),
         new UserMonth(salma.name,salma.handle, currentMonth.wks),
         new UserMonth(kearstyn.name,kearstyn.handle, currentMonth.wks),
         new UserMonth(abeMohmed.name,abeMohmed.handle, currentMonth.wks),
    ]

    //Preset Cliiper Paramters
    clippers[0].getBonus = false; //No Bonus for Ross
    clippers[0].perClip = false; //No per clip pay for Ross

    clippers[3].getBonus = false; //No Bonus for Dustin
    clippers[3].perClip = false; //No per clip pay for Dustin

    clippers[1].perClip = false; //No per clip pay for Jake
    clippers[2].perClip = false; //No per clip pay for BB
    clippers[4].perClip = false; //No per clip pay for Karson
    clippers[13].perClip = false; //No per clip pay for Abe






    //counter for each applicable link 
    for (let i = 0; i < chats.length; i++)//loop through chats pulled
    {
                let fullDate = fromAppleTime(chats[i].date)
                let shortDate = fullDate.toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    year: "2-digit",
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'}) 
                //console.log(`${shortDate}`)
                //console.log(chats[i].date)    
            
               
                // cutting short date to only mm/dd/yyyy prevents week # issues
                let weekNum = getWeekNumber(shortDate.substring(0,8))
                let dayNum = getDayNumber(shortDate.substring(0,8))
                //console.log(dayNum);
                //console.log(weekNum);
                 
                console.log(`${shortDate}, ${chats[i].text}, ${chats[i].handle} day: ${dayNum} week: ${weekNum}` )
                //if link was sent during applicalbe weeks/month..
                if(currentMonth.wks.includes(weekNum)) {
                    //console.log(shortDate)
                   

                    //loop through clippers to find match
                    for(let j = 0; j < clippers.length; j++){
                        // if matched..

                        if(chats[i].handle == clippers[j].handle){
                            //console.log("user");
                            //cycle through users mnthLog arrays to find match with weeknum
                            for( let w = 0; w < clippers[j].mnthLog.length; w++)
                            {   
                                //console.log(clippers[j].mnthLog[w].week)

                                // its a match! -Log 1 clip found by clipper j in week w on day weekNum
                                if(clippers[j].mnthLog[w].week == weekNum){
                                   // console.log("text matches user");
                                    //console.log("text "+chats[i].text+".")

                                    //add 1 to that weeks day clip was found
                                    clippers[j].mnthLog[w].dayCount[dayNum] += 1; 
                                    clippers[j].mnthLog[w].totalWeek +=1;
                                    clippers[j].totalClips +=1;

                                    //if clipper[j] gets 4 dollars per clip, count it
                                    if(clippers[j].perClip == true){
                                    
                                        clippers[j].clipPayout += 4;
                                    }

                                    //if this is a person who get bonus (all but Dustin+Ross)
                                    if (clippers[j].getBonus == true){
                                    
                                        //count daily bonuses
                                        if (clippers[j].mnthLog[w].dayCount[dayNum] == 10)
                                        {
                                            clippers[j].dailyBonus += 10;
                                        }
                                        if (clippers[j].mnthLog[w].dayCount[dayNum] == 20)
                                        {
                                            clippers[j].dailyBonus += 20;
                                        }
                                        if (clippers[j].mnthLog[w].dayCount[dayNum] == 40)
                                        {
                                            clippers[j].dailyBonus += 70;
                                        }
                                        
                                        // weekly bonuses
                                        if (clippers[j].mnthLog[w].totalWeek == 50)
                                        {
                                            clippers[j].weeklyBonus += 50;
                                        }
                                        if (clippers[j].mnthLog[w].totalWeek == 100)
                                        {
                                            clippers[j].weeklyBonus += 75;
                                        }
                                        if (clippers[j].mnthLog[w].totalWeek == 150)
                                        {
                                            clippers[j].weeklyBonus += 125;
                                        }
                                    }
                                } 
                            }
                        }
                    }


                }
                
                        
    }

   
    //FINAL REPORT

    //cycle through Clippers
    for(let j = 0; j < clippers.length; j++){

        console.log(`${clippers[j].name}:\n`)
        writeBonusLog(`${clippers[j].name}:\n`)


        //sets total payout HERE
        clippers[j].totalPayout = clippers[j].weeklyBonus + clippers[j].dailyBonus + clippers[j].clipPayout;

        //Cycle through each week for particular clip getter
        for( let w = 0; w < clippers[j].mnthLog.length; w++){
           
           console.log(`Week: ${clippers[j].mnthLog[w].week} [${clippers[j].mnthLog[w].dayCount}] = ${clippers[j].mnthLog[w].totalWeek}`)
           writeBonusLog(`Week: ${clippers[j].mnthLog[w].week} [${clippers[j].mnthLog[w].dayCount}] = ${clippers[j].mnthLog[w].totalWeek}`)

        }
        console.log(`Total Clips : ${clippers[j].totalClips}`)
        writeBonusLog(`Total Clips : ${clippers[j].totalClips}`)

        console.log(`Clip Payout : $${clippers[j].clipPayout}`)
        writeBonusLog(`Clip Payout : $${clippers[j].clipPayout}`)

        console.log(`Weekly Bonus : $${clippers[j].weeklyBonus}`)
        writeBonusLog(`Weekly Bonus : $${clippers[j].weeklyBonus}`)
        console.log(`Daily Bonus : $${clippers[j].dailyBonus}`)
        writeBonusLog(`Daily Bonus : $${clippers[j].dailyBonus}`)     
        console.log(`Total Payout : $${clippers[j].totalPayout}`)
        writeBonusLog(`Total Payout : $${clippers[j].totalPayout}`)

        console.log('\n')
        writeBonusLog('\n')


    }

        let date = new Date();
        let now = date.toLocaleString('en-US', {
            timeZone: 'America/New_York',
            year: "2-digit",
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'}) 
        console.log(`^^^ Date Ran: ${now}`); 
        writeBonusLog(`^^^ Date Ran: ${now}`); 
        console.log('\n')
        writeBonusLog('\n')

        let range = "";
        //csv log for importing into excel/sheets
        for(let j = 0; j < clippers.length; j++){
            writeBonusCSV(`${clippers[j].name}`)
            writeBonusCSV(`${clippers[j].handle}`)
        
            writeBonusCSV(`${currentMonth.mnth},Mon,Tues,Wed,Thur,Fri,Sat,Sun,Total`)

            for( let w = 0; w < clippers[j].mnthLog.length; w++){

                for( let x = 0; x < weekRange.length; x++){

                    //console.log(`Week Range Week #: ${weekRange[x].wk}`)
                    //console.log(`Clipper Week #: ${clippers[j].mnthLog[w].week}`)

                    if (weekRange[x].wk == clippers[j].mnthLog[w].week){
                        range = weekRange[x].wkRng;
                        writeBonusCSV(`Week: ${clippers[j].mnthLog[w].week} (${range}),${clippers[j].mnthLog[w].dayCount[0]},${clippers[j].mnthLog[w].dayCount[1]},${clippers[j].mnthLog[w].dayCount[2]},${clippers[j].mnthLog[w].dayCount[3]},${clippers[j].mnthLog[w].dayCount[4]},${clippers[j].mnthLog[w].dayCount[5]},${clippers[j].mnthLog[w].dayCount[6]},${clippers[j].mnthLog[w].totalWeek}`)
                    }
                //     else{ range = "Undefined";
                //     writeBonusCSV(`Week: ${clippers[j].mnthLog[w].week} (${range}),${clippers[j].mnthLog[w].dayCount[0]},${clippers[j].mnthLog[w].dayCount[1]},${clippers[j].mnthLog[w].dayCount[2]},${clippers[j].mnthLog[w].dayCount[3]},${clippers[j].mnthLog[w].dayCount[4]},${clippers[j].mnthLog[w].dayCount[5]},${clippers[j].mnthLog[w].dayCount[6]},${clippers[j].mnthLog[w].totalWeek}`)
                // }
                }

        

            }
            writeBonusCSV(`Total Clips:,${clippers[j].totalClips}`)
            writeBonusCSV(`Clip Payout:,$${clippers[j].clipPayout}`)
            writeBonusCSV(`Daily Bonuses:,$${clippers[j].dailyBonus}`)
            writeBonusCSV(`Weekly Bonuses:,$${clippers[j].weeklyBonus}`)
            writeBonusCSV(`Thumb/BestClip Bonuses:,`)
            writeBonusCSV(`Misc Bonuses:,`)
            writeBonusCSV(`Total Payout:,$${clippers[j].totalPayout}`)
            writeBonusCSV(`,,,,,,,,`)
            writeBonusCSV(`,,,,,,,,`)
            
        }
        date = new Date();
        now = date.toLocaleString('en-US', {
            timeZone: 'America/New_York',
            year: "2-digit",
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'}) 

        writeBonusCSV(`^^^ Date Ran: ${now}`);            
}

bonusCounting();


// "Timecard" for a clip getter (Clipper)
class UserMonth {
   constructor(name, handle, month){
        this.name = name;
        this.handle = handle;
        this.month = month;
        this.mnthLog = [];
        // console.log(this.month.length)
        // console.log(this.mnthLog.length)
        for( let i = 0; i < this.month.length; i++){
            this.mnthLog.push({week: this.month[i],dayCount: [0,0,0,0,0,0,0], totalWeek:0});
        }
        this.perClip = true;
        this.getBonus = true;
        this.totalClips = 0;
        this.clipPayout = 0;
        this.dailyBonus = 0;
        this.weeklyBonus = 0;
        this.totalPayout = 0;
        
        //console.log(`Template for ${this.name} has been created for weeks: ${this.month}`)
   }

}


function weeklyTotal (week, dayCount, name)
{
   
    let sum = 0;

    for (let i = 0; i < dayCount.length; i++) {
        sum += dayCount[i];
    }
    console.log(`Total Clips for ${name} during week ${week} is: ${sum}`)
    return sum;
 }



function checkIfContainsSync(filename, str) {

    let contents = fs.readFileSync(filename, 'utf-8');
    const result = contents.includes(str);
    return result;
}



function getWeekNumber(atDate){
        currentDate = new Date(atDate);
        //console.log(currentDate)

        startDate = new Date(currentDate.getFullYear(), 0, 1);
        var days = Math.floor((currentDate - startDate) /
                (24 * 60 * 60 * 1000));
                
            var weekNumber = Math.ceil(days / 7);
            //console.log("Week number: " + weekNumber); 
            return weekNumber
}


function getDayNumber(date) {
    let input = new Date(date)
    //remap to where monday = 0, sunday = 6
    let normalDayNum = input.getDay()

    if (normalDayNum == 0){
        mappedDayNum = normalDayNum + 6;
        //console.log(mappedDayNum)
        return mappedDayNum;
    }
    else {
        mappedDayNum = normalDayNum -1;
        //console.log(mappedDayNum)
        return mappedDayNum
    }
}



// Gets the current Apple-style timestamp
function appleTimeNow() {
    return Math.floor(Date.now() / 1000) - DATE_OFFSET
}

// Transforms an Apple-style timestamp to a proper unix timestamp
function fromAppleTime(ts) {
    if (ts == 0) {
        return null
    }
    // unpackTime returns 0 if the timestamp wasn't packed
    // TODO: see `packTimeConditionally`'s comment
    if (unpackTime(ts) != 0) {
        ts = unpackTime(ts)
    }

    return new Date((ts + DATE_OFFSET/*-14400*/) * 1000)
}

// Since macOS 10.13 High Sierra, some timestamps appear to have extra data
// packed. Dividing by 10^9 seems to get an Apple-style timestamp back.
// According to a StackOverflow user, timestamps now have nanosecond precision
function unpackTime(ts) {
    return Math.floor(ts / Math.pow(10, 9))
}

function getAppleTime (y,m,d,h,mi){
    const DATE_OFFSET = 978307200
    let unixMS = Date.UTC(y,m,d,h,mi)
    let ts = (unixMS - (DATE_OFFSET*1000))* 1000000

    return ts
}
