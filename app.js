const http = require('http');
const port = 3000;
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write("Hello Readers!");
    res.end();
}).listen(port, "34.145.252.50");
console.log(`Node Server is running on port : ${port}`)