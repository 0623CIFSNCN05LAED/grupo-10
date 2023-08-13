const express = require(`express`);
const path = require(`path`);
const app = express();

app.use(express.static(path.join(__dirname,`../public`)));

const PORT = 4001;
app.listen(PORT, function(){
    console.log(`servidor corriendo en el puerto ${PORT}`)
});

app.get(`/`, function(req,res){
    res.sendFile(path.join(__dirname,`views/index.html`))
});

app.get(`/productDetail`, function(req,res){
    res.sendFile(path.join(__dirname,`views/productDetail.html`))
});

app.get(`/productCart`, function(req,res){
    res.sendFile(path.join(__dirname,`views/productCart.html`))
});

app.get(`/register`, function(req,res){
    res.sendFile(path.join(__dirname,`views/register.html`))
});

app.get(`/login`, function(req,res){
    res.sendFile(path.join(__dirname,`views/login.html`))
});