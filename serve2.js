import http from 'http';
import fs from 'fs/promises';
import url,{fileURLToPath} from 'url';
import path,{dirname} from 'path';
import * as dotenv from 'dotenv';

// Setting the port number



// Load environment variables

// Resolving __dirname and __filename
const __filename = url.fileURLToPath(import.meta.url);//imp both
const __dirname = path.dirname(__filename);
dotenv.config({ path: `${__dirname}/.env` });
const PORT = process.env.PORT||5000;
// Creating the server
const server = http.createServer(async (req, res) => {
    try {
        if (req.method === 'GET') {
            let filePath;

            // Define file path based on route
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Page Not Found</h1>');
                return;
            }

            // Read and serve the file
            const data = await fs.readFile(filePath);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } else {
            // Handle unsupported methods
            res.writeHead(405, { 'Content-Type': 'text/html' });
            res.end('<h1>405 - Method Not Allowed</h1>');
        }
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Internal Server Error</h1>');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${PORT}`);
});
