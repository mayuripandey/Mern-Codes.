const http = require('http');
// const { console } = require('node:console');

const server =http.createServer((req, res) => {
    console.log('INCOMING REQUEST');
    console.log(req.method, req.url);

    res.end('Success!');
});

server.listen(5000);




// const fs = require('fs');
// const userName = 'Max';
// fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// console.log('WROTE FILE');
// });

