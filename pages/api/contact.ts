require('dotenv').config()
const PASSWORD = process.env.password
let nodemailer = require('nodemailer')


export default function (req: any, res: any) {
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.gmail.com',
    auth: {
      user: 'spamharryr@gmail.com',
      pass: PASSWORD,
    },
    secure: false,
  })

  const mailData = {
    from: 'spamharryr@gmail.com',
    to: 'harryrussindev@gmail.com',
    // @ts-ignore
    subject: `Message From ${req.body.name}`,
    // @ts-ignore
    text: req.body.message,
  }

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err)
    else console.log(info)
  })
  res.status(200)
}
