let event = require('events');

let fs = require('fs');

let eEmmitter = new event.EventEmitter();

function newData(){
    console.log("We have received some event");
}

eEmmitter.on('data', newData);

eEmmitter.emit('data');

let rdStream = fs.createReadStream('./log.txt');

rdStream.on('open', function(){
    console.log("File is opened");
})

rdStream.on('error', (e)=>{console.log('Error', e)});

rdStream.on('data',(data)=>{console.log(data)});

//NPM
