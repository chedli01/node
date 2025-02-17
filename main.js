import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("this is a tuto")
})

app.listen(3000,()=>{
    console.log("running on 3000")
})