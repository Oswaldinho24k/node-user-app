const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service:'Gmail',
  auth:{
    user:'oswaldinho963@gmail.com',
    pass:'largatedeaqui'
  }
})


exports.sendMail=(email)=>{
  transporter.sendMail({
    from:'Oswaldinho  🔥🔥🔥',
    to:email,
    subject:'Bienvenido al des"·$%&/',
    text:'Saquen las beeers',
    html:'<h1>Es en serio, vamos a beber... o no! 🤓</h1>'
  })
}