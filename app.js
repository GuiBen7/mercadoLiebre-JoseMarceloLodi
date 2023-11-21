const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.sendFile(path.resolve('./views/home.html'));
})

app.get("/register", (req,res)=>{
    res.sendFile(path.resolve('./views/register.html'));
})

app.get("/login", (req,res)=>{
    res.sendFile(path.resolve('./views/login.html'));
})

app.listen(PORT, ()=>{
    console.log(`Servidor Funcionando en el puerto ${PORT}`);
})