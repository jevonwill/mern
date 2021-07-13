const http = require('http');
const port = 3000;
const studentsData = require(' ./student_data.json');
http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.write(JSON.stringify(studentsData));
    res.end();
}).listen(port);
console.log(`Node Server is running on port : ${port}`)