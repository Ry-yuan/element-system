// import express from 'express'
var express = require('express');
// import mongodb
var mongoose = require('mongoose');


let app = express();

app.listen(8090,()=>{
    console.log('server start at 8090');
})
app.get('/',(req,res)=>{
    res.send('hello');
})
app.get('/api/user_info',(req,res)=>{
    res.send('express');
})

app.post('/api/login',(req,res)=>{
    res.send('login success');
})