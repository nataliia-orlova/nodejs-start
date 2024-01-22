const fs = require('fs');

// reading a file - async

fs.readFile('demo_file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// reading a file sync

// try {
//     const data = fs.readFileSync('demo_file.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }
