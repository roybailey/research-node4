import fs from 'fs'
import zlib from 'zlib'

// Compress the file input.txt to input.txt.gz
fs.createReadStream('package.json')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('package.json.gz'));

console.log("File Compressed.");
