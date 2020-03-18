const express=require('express')
const Router=express.Router();
const fs=require('fs')

Router.get('/',(req,res)=>{

    fs.readFile('lang.txt','utf8',(err,data)=>{
        if (err) throw err;

        var fdata=data.split('\r\n');
        var result=fdata[Math.floor(Math.random()*fdata.length)]


       res.setHeader('Content-Type','text/html')

        res.send(`
        <h1 style="text-align:center">${result}</h1>
    
        <form method="post" action="/data"  style="text-align:center">
        <input type="text" name="message">
        <input type="submit">
    
        </form>
    
    
    
    `)

    })


    
})

Router.post('/data',(req,res)=>{
    fs.appendFileSync('data2.txt',req.body.message+'\n');
res.redirect('/')


})

Router.use((req,res)=>{
    res.send(`
    <h1>page not found</h1>
    `)
})

module.exports=Router