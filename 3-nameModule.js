// node used CommonJS under the hood, every file in node is a module  

// Modules are encapsulated code (only share the minimum)

const peter = 'Peter';
const john = 'John';

//console.log(module);// export object will be empty if we don't export anything

module.exports = { peter, john }
