const path = require('path');
const fileURLToPath = require('url');
const express = require('express');
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;


