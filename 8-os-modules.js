//There are some built in modules

const os  = require('os');

//get information about user 
const userInfo = os.userInfo();
console.log(userInfo);

//method returns system uptime in seconds
console.log(os.uptime());