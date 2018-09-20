const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service:'Gmail',
  auth:{
    user:'oswaldinho963@gmail.com',
    pass:'largatedeaqui'
  }
})

exports.sendWelcomeMail=(email)=>{
  transporter.sendMail({
    from:'Oswaldinho 😎',
    to:email,
    subject:'Saken la fiestinha',
    text:'Vamonos a beber porque la próxima semana hay que hacer el proyecto del módulo 2',
    html:'<h1>🍺 Beers para todos</h1>'

  })
}