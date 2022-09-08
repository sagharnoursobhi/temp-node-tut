//file interacting can be synchronously or asynchronously

//Encoding means converting string to steam of bytes and decoding means converting stream of bytes
//to string

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');//encoding
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

//When using writeFileSync if the files does not exist it will be created.
const result = writeFileSync('./content/result.txt', `this is the result: ${first}, ${second}`, { flag: 'a'});
// It will get overwriten without flag a
// the biggest defect of using synch is that programme is not cabaple to use other features at the same time for instance 
// if a user is using this app node is not gonna be able to let other users to use the app at the same time
// and it is so time consuming.