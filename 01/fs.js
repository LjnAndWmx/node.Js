const fs = require('fs');

//同步
const data = fs.readFileSync('./conf.json');
console.log('data',data);