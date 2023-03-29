require('dotenv').config()
const PASSWORD = process.env.password
let nodemailer = require('nodemailer')

export default function (req: Request, res: any) {
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
    subject: `CUSTOMER - harryrussindev`,
    // @ts-ignore
    text: `Name: ${req.body.name}\n\nMessage: ${req.body.message}\n\nSelected Plan: ${req.body.plan.toUpperCase()}\n\nExpected Deadline: ${req.body.date}\n\nSender Email: ${req.body.email}`,
  }

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err)
    else {
      console.log(info)
    }
  })
  res.status(200).json({ message: 'message sent!' })
}
