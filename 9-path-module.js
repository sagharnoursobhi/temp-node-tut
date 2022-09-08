const path =  require('path');

//seperator
console.log(path.sep);

//file path
const filePath = path.join('/content', 'sub-folder', 'text.txt');
console.log(filePath);
console.log(path.basename(filePath));

//absolute path
console.log(path.resolve(__dirname, 'content', 'sub-folder', 'text.txt'));