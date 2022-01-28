const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config()


const PORT = process.env.PORT || 5000;
//midelware 
app.use(express.static('public'));
app.use(express.json())
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/contactform.html')
    
   
})

app.post('/', (req, res)=>{
    console.log(req.body);
    

    const transpoter = nodemailer.createTransport({
        service: "gmail",
        auth :{
            user : process.env.mail,
            pass: process.env.pass
        }
    })

    const mailOptions = {
        from : req.body.email,
        to:process.env.mail,
        subject : `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transpoter.sendMail(mailOptions, (error, info)=> {
        if(error){
            console.log(error);
            res.send('error');
        }else {
            console.log('Email sent :'+info.response)
            res.send('success')
            
        }
    })
} )
app.listen(PORT , ()=>{
    console.log(`Server  running on port ${PORT}`)
})