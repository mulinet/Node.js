'use strict'
const express = require('express')
const file_system = require('fs')
const admz = require('adm-zip')
const app = express()
const port = 3000;
  
var to_zip = file_system.readdirSync(__dirname+'/'+'upload_data')
  
app.get('/',function(req,res){
    res.sendFile(__dirname+'/'+'index.html')
    var zp = new admz();
    let file_after_download = 'downloaded_file.zip';
    let data = zp.toBuffer();
  
    for(let k=0 ; k<to_zip.length ; k++){
        zp.addLocalFile(__dirname+'/'+'upload_data'+'/'+to_zip[k])
    }

    res.set('Content-Type','application/octet-stream');
    res.set('Content-Disposition',`attachment; filename=${file_after_download}`);
    res.set('Content-Length',data.length);
    res.send(data);
  
})

app.listen(port, function () {
    console.log('Example app listening on port : ' + port);
});

