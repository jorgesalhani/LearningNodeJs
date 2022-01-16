const fs = require('fs');

// READING FILES
// =============
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('Last line');

// WRITING FILES
// =============
// fs.writeFile('./docs/blog1.txt', 'Hello, world', () => {
//     console.log('file was written');
// });

// DIRECTORIES
// ===========
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log('err');
//         }
//         console.log('Folder deleted');
//     });
// }


// DELETING FILES
// ==============
// if (fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('File deleted');
//     })
// }