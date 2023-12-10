import express from "express";
const app = express();
const port = 1000;

app.use('/about',(req,res,next) => {
    res.send('MiddleWare:Welcome'); 
    next();
});
app.use("/next",(req,res,next) => {
    res.send("Next Middleware");
});
app.get("",(req,res) => {
    res.send("This is home page");
});

app.get('/help',(req,res) => {
   console.log("Welcome to Help Page"); 
   res.send('this is a help page');
});

app.listen(port, () => {
    console.log("site running at port "+`http://localhost:${port}`);
});