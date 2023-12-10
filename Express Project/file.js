import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 1000;

app.get('/', (req, res) => {
  res.send('Express is running on VS Code');
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'about.html'));
})

app.get('/package',(req,res) => {
  res.sendFile(path.join(__dirname,'package.json'));
});

app.listen(port, () => {
  console.log('Example app listening on port',`${port}`)
})
