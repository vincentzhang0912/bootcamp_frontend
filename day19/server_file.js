let http = require('http');
let url = require('url');
let fs = require('fs')
let server = http.createServer(
    (req, res) => {
        //get the file name from url
        let filename = url.parse(req.url).pathname; //returns file name
        console.log("file name" + filename)
        switch (filename) {
            case "/":
                res.setHeader('content-type', 'text/plain');
                res.statusCode = 200;
                res.write("reached / .Welcom root sercer!")
                res.end();
                break;
            case '/index.html':
            case '/about.html':
                //read the file using fs library
                fs.readFile(__dirname + filename, (err, data) => {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end("404 Not Found");
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write(data);
                        res.end();
                    }
                });
                break;
            default:
                res.setHeader('content-type', 'text/plain');
                res.statusCode = 200;
                res.end("Welcome from Node server!");}});
//decide on the port number
let port = 4000;
server.listen(port, () => console.log("server listen at port :" + port));
