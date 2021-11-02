'use strict'

const { Parser } = require('json2csv');
const fs = require('fs');

const myCars = [
    {
        "car": "Audi",
        "price": 40000,
        "color": "blue"
    }, {
        "car": "BMW",
        "price": 35000,
        "color": "black"
    }, {
        "car": "Porsche",
        "price": 60000,
        "color": "green"
    }
];

const json2csvParser = new Parser();
const csv = json2csvParser.parse(myCars);

console.log(csv);


fs.promises.writeFile('./readme.txt', '글이 입력됩니다.')
.then(() => {
    // return fs.readFile('./readme.txt');
})
.then((data) => {
    // console.log(data.toString());
})
.catch ((err) => {
    throw err;
});


let filename = 'mycar.csv';
fs.promises.writeFile(filename, csv)
.then(() => {
    let stats = fs.statSync(filename);
    let fileSizeInBytes = stats.size;
    return fileSizeInBytes;
})
.then((data) => {
    console.log(data.toString());
})
.catch ((err) => {
    throw err;
});



