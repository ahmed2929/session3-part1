const express=require('express');
const fs=require('fs')
const app=express();
const bodyParser=require('body-parser');
const Router=require('./routes')


app.use(bodyParser.urlencoded({extended:false}))
app.use(Router)




app.listen(3000,()=>{
    console.log('server is up')
})
