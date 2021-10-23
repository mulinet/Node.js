'use strict'
const schedule = require('node-schedule');

// hello = () => {
//     return "Hello World!";
//   }

const jobs1Start = () => { schedule.scheduleJob('tick1', '*/1 * * * * *', async () => { console.log('hi!') }) }
const jobs1stop = () => { schedule.cancelJob('tick1'); }

const jobs2 = (bool) => {
    if (bool){
        schedule.scheduleJob('tick2', '*/1 * * * * *', async () => {
            console.log('hello!!')
        })
    }else{
        schedule.cancelJob('tick2');
    }
}

module.exports = {
    jobs1Start: jobs1Start
    , jobs1stop: jobs1stop
    , jobs2: jobs2
}