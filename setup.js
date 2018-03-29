'use strict';

// Copies the contents of .env.example to .env
const fs = require('fs');
fs.createReadStream('.env.example').pipe(fs.createWriteStream('.env'));
