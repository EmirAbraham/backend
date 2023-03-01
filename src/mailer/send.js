const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const OAuth2_client1 = new OAuth2(process.env.GMAIL_CLIENT, process.env.GMAIL_SECRET);
OAuth2_client1.setCredentials( { refresh_token : process.env.REFRESH_TOKEN } );


async function send_mail (mailOptions) {
  const accessToken = await OAuth2_client1.getAccessToken();
  
  const tranporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          type: 'OAuth2',
          user: process.env.GMAIL,
          clientId: process.env.GMAIL_CLIENT,
          clientSecret: process.env.GMAIL_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accessToken
      },
      tls: {
          rejectUnauthorized: false
      }
  })

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