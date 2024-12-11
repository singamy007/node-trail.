
import http from 'http';

//setting variable for port number which is stored in the env variables
const PORT = process.env.PORT||8000;//anything and everything thast is after process.env represent that is imported from .env file
 
const server =http.createServer((req,res) =>{
    //res.setHeader{'content-type','text/html'};
    //res.statusCode=404;
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>end</h1>');
});

server.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
    
});