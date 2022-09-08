const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req) it is a giant object
    //res.write('Hello this is home page');
    //res.end('Hello this is home page');//send a signal to the server that all the header has been sent
    if(req.url === '/') {
        res.end('Hello this is Home Page');
    }

    if(req.url === '/about') {
        res.end('This is About page');
    }

    res.end(`
        <h1>Opps!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back to Home</a>
    `)// /error or any kind of resource that does not exist
})

server.listen(5000);
