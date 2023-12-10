import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Custom Page for Practice');
})

app.get('/info',(req,res) => {
  console.log(req.params("name"));
})

app.listen(port, () => {
  console.log('Port number',`${port}`)
})
