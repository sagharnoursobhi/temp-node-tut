//package and dependency are the same just with different names we can install it globally or locally via using npm
//package.json is known as manifest file stores important information about project/packages
//npm init manual approach to create package.json
//npm init -y everything is set up by default.
//when you install the first dependency there will be node module folder which stores all the files of that package.
//and if a package does need another dependency it will be installed as well

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);