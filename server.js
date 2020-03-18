const fs=require('fs')
var server=(req,res)=>{
    if(req.method==="GET"&&req.url==="/"){

        fs.readFile('lang.txt','utf8',(err,data)=>{
            if (err) throw err;
    
            var fdata=data.split('\r\n');
            var result=fdata[Math.floor(Math.random()*fdata.length)]
    
    
            res.setHeader('Content-Type','text/html')
    
            res.write(`
            <h1 style="text-align:center">${result}</h1>
        
            <form method="post" action="/data"  style="text-align:center">
            <input type="text" name="message">
            <input type="submit">
        
            </form>
        
        
        
        `)
    
        res.end()
    
    
    
    
    
    
    
    
    
        })
    
          
    
     
    
    
    
        
    
    
    }else if(req.method==="POST"&&req.url==="/data"){
    var data=[]
    req.on('data',(chuck)=>{
        data.push(chuck)
    })
    
    req.on('end',()=>{
        var fdata=Buffer.concat(data).toString();
        fs.appendFileSync('data.txt',fdata+'\n');
        
        res.statusCode=302;
        res.setHeader('Location','/')
    
        res.end()
        
    })
    
    // add data
    
    }else{
    
        res.setHeader('Content-Type','text/html')
    
        res.write(`
        <h1>page not found</h1>
        
        
        
        `)
        res.end()
    
    
    
    
    }
    
    
    
}

var sayMyname=()=>{
    console.log('my name')
}


module.exports={
    ser:server,
    name:sayMyname


}