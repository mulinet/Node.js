'use strict'
const xlsx = require("xlsx");

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


const book = xlsx.utils.book_new();
const firstTab = xlsx.utils.aoa_to_sheet([
    ["title1", "title2", "title3", "title4"]
    , ["content1", "content2", "content3", "content4"]
]);

firstTab["!cols"] = [ { wpx: 130 } , { wpx: 100 } , { wpx: 80 } , { wch: 60 } ]
xlsx.utils.book_append_sheet(book, firstTab, "firstSheet");

const secondTab = xlsx.utils.json_to_sheet(myCars, { skipHeader: true });
secondTab["!cols"] = [{ wpx: 130 }  , { wpx: 100 } , { wpx: 80 } , { wch: 60 }]
xlsx.utils.book_append_sheet(book, secondTab, "mycar");
xlsx.writeFile(book, "marcar.xlsx");


