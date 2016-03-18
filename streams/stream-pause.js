'use strict';

import fs from 'fs'
import path from 'path'

let bigFile = '/Users/roybailey/Temp/JT.csv';
let processed = 0;
let total = 0;
let dataStream = fs.createReadStream(bigFile);

dataStream.on('data', (chunk) => {

    if ((++total % 500) === 0) {
        console.log("File Data Loading...", total);
    }

    let key = total;
    dataStream.pause();
    console.log(`Processing..${key} (${processed}/${total}) ` + ("" + chunk).length);

    setTimeout(()=> {
        console.log(`Processed...${key} (${processed}/${total})`);
        ++processed;
        if (processed === total) {
            dataStream.resume();
        }
    }, (total - processed) * 1000);

})
    .on('end', ()=> {
        console.log("File Data Loaded...", total);
    });
