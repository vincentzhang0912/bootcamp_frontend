//steps
//get the hettp module
//create a server object using that moduke
//set headers
//respond to requests

let http=require('http');
let server=http.createServer(
    (req,res)=>{
        res.setHeader('content-type','text/plain');
        res.statusCode=200;
        res.end("Welcom from Node sercer!");
      
    }
);
//decide on the port number
let port=4000;
server.listen(port,()=>console.log("server listen at port :"+port));
//server.listen(3000)//-will not show message but server will be listen