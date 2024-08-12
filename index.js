require('dotenv').config();
const express = require('express');
const app  = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hello");
})
app.listen(process.env.PORT,()=>{
    console.log(`Example is listing on port ${port}`);
})