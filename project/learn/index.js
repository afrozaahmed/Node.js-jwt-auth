const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();


/*app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users',require('./routes/api/users'))*/

app.get('/api',(req,res)=>{
    res.json({
        message: "Hello There!  Welcome to this API Service.",
    });
});

app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretKey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message:"posts created...",
                authData
            });
        }
    })
});

app.post('/api/login',(req,res)=>{
    const user= {
        id:1,
       username :"john",
       email:"john@gmail.com"
    };
    jwt.sign({user:user},'secretKey',(err,token)=>{
        res.json({
            token,
        })
})
})

function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403)
    }
}

app.listen(3000,() => {
    console.log("server started on port 3000")
})