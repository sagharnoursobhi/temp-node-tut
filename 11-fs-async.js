
const { readFile , writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
    }
    console.log(result);
})

//writing two file contents in a new file asynchronously

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
    }
    console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(result);
        const second = result;

        writeFile('./content/asynchResult.txt', `This is both ${first} and ${second}`,
        (err, result) => {
            if(err) {
                console.log(err);
            }
            console.log('done');
        });
    })
}) // call back must be included even if we don't want to use it

console.log('Starting next task');//Look at the console
