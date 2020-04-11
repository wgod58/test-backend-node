const helper = require('sendgrid').mail

export function sendEmail({ from, to, subject, text }) {
  const fromEmail = new helper.Email(from)
  const toEmail = new helper.Email(to)

  var content = new helper.Content('text/plain', text)
  var mail = new helper.Mail(fromEmail, subject, toEmail, content)

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
  console.log(process.env.SENDGRID_API_KEY)
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  })

  return sg.API(request)
}
