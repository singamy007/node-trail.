import * as dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

// Define __dirname for ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables
dotenv.config({ path: `${__dirname}/.env` });
import fs from'fs/promises';
import url from 'url';//to get filename and dirname
import path from 'path';//bunch of utilities to work with file path 
//setting variable for port number which is stored in the env variables
const PORT = process.env.PORT||3000;//anything and everything thast is after process.env represent that is imported from .env file
const __filename = url.fileURLToPath(import.meta.url);//takes url converts to path
//const __dirname =path.dirname(__filename);//verify sshot in gallery 
 const server =http.createServer((req,res) =>{
   try{
    if(req.method=== 'GET'){
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
   }else{
    throw new Error('method not allowed ')
   }
}
   catch(error){
    res.writeHead(500,{'content-type':'text/html'});
    res.end('<h1>server not found</h1>');
    }
    
});

server.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
    
});