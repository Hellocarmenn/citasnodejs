const {Router} = require ('express');
const nodemailer = require('nodemailer');
const router = Router();


router.post('/send-email', async (req,res)=>{
    const {name,email,phone,fecha, hora} = req.body;
    contentHTML = `
    <h1>Nueva cita </h1>
    <ul>
        <li>Username:${name}</li>
        <li>Email:${email}</li>
        <li>Phone:${phone}</li>
        <li>Date:${fecha}</li>
        <li>Hora:${hora}</li>

    </ul>
    `;
    const transporter = nodemailer.createTransport({
        host:'',
        port:,
        secure:false,
        auth:{
            user:'carmenmtzunam97@gmail.com',
            pass:'contrasena'
        },
        tls:{
            rejectUnauthorized:false
        }

    });

    const info = await transporter.sendMail({
        from:"Nueva cita",
        to:'carmenmtzunam97@gmail.com',
        subject:'Fomulario de Citas',
        html:contentHTML
    })
    console.log('Mensaje enviado',info.messageId);


    res.redirect('/success.html');
});


module.exports =  router;

