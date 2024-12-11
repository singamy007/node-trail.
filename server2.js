
import http from 'http';
import fs from'fs/promises';
import url from 'url';//to get filename and dirname
import path from 'path';//bunch of utilities to work with file path 
//setting variable for port number which is stored in the env variables

const PORT = process.env.PORT||8000;//anything and everything thast is after process.env represent that is imported from .env file

const __filename = url.fileURLToPath(import.meta.url);//takes url converts to path

const __dirname =path.dirname(__filename);//verify sshot 301 in gallery 
 const server =http.createServer(async(req,res) =>{
   try{
    if(req.method=== 'GET'){
        let filePath;
        if(req.url==='/'){
          filePath = path.join(__dirname,'public','index.html');
    }
        else if(req.url==='/about'){
            filePath = path.join(__dirname,'public','about.html');
    }else{
        throw new Error('not found');
    };
     const data = await fs.readFile(filePath);
     res.setHead('content-type','text/html');
     res.write(data);
     res.end('<h1>end</h1>');
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