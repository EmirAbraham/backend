const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const OAuth2_client1 = new OAuth2("487694085693-58ejvs6bqur1b1p5i0u3010ea77rn8h5.apps.googleusercontent.com", "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");
OAuth2_client1.setCredentials( { refresh_token : "1//04vqw53dHeNGzCgYIARAAGAQSNwF-L9IrBYb1A1iFvCifMqVueJLMuNkflEpr2vxC880cNYOj5rMZQJeLaxYwygbeFP3pCa0-2M0" } );


async function send_mail (mailOptions) {
  const accessToken = await OAuth2_client1.getAccessToken();
  console.log(accessToken, "/////////////////");
  const tranporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          type: 'OAuth2',
          user: "peraltasantiago21@gmail.com",
          clientId: "487694085693-58ejvs6bqur1b1p5i0u3010ea77rn8h5.apps.googleusercontent.com",
          clientSecret: "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",
          refreshToken: "1//04vqw53dHeNGzCgYIARAAGAQSNwF-L9IrBYb1A1iFvCifMqVueJLMuNkflEpr2vxC880cNYOj5rMZQJeLaxYwygbeFP3pCa0-2M0",
          accessToken: accessToken
      },
      tls: {
          rejectUnauthorized: false
      }
  })

  // const mailOptions = {
  //     from: config.user,
  //     to: recipient,
  //     subject: 'Un Mail de prueba',
  //     html: get_html_message(name)
  // }

  tranporter.sendMail(mailOptions, function(error, result) {
      if (error) {
          console.log('Error: ', error);
      } else {
          console.log('Success: ', result);
      }
      tranporter.close()
  })
}



  
module.exports = { send_mail };