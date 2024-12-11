
import http from 'http';

//setting variable for port number which is stored in the env variables
const PORT = process.env.PORT||3000;//anything and everything thast is after process.env represent that is imported from .env file
 
const server =http.createServer((req,res) =>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>homepage</h1>');
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>sbout</h1>');
    }else{res.writeHead(404,{'content-type':'text/html'});
    res.end('<h1>not found</h1>');
     };
    
});

server.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
    
});