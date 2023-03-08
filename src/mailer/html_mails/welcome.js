const getMailWelcome = (name) => {
    return (`<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
        style="font-family:arial, 'helvetica neue', helvetica, sans-serif">

    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title>Were working on it</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]--><!--[if !mso]><!-- -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"><!--<![endif]-->
        <style type="text/css">
            #outlook a {
                padding: 0;
            }

            .es-button {
                mso-style-priority: 100 !important;
                text-decoration: none !important;
            }

            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }

            .es-desk-hidden {
                display: none;
                float: left;
                overflow: hidden;
                width: 0;
                max-height: 0;
                line-height: 0;
                mso-hide: all;
            }

            @media only screen and (max-width:600px) {

                p,
                ul li,
                ol li,
                a {
                    line-height: 150% !important
                }

                h1,
                h2,
                h3,
                h1 a,
                h2 a,
                h3 a {
                    line-height: 120%
                }

                h1 {
                    font-size: 50px !important;
                    text-align: center
                }

                h2 {
                    font-size: 24px !important;
                    text-align: center
                }

                h3 {
                    font-size: 20px !important;
                    text-align: left
                }

                .es-header-body h1 a,
                .es-content-body h1 a,
                .es-footer-body h1 a {
                    font-size: 50px !important;
                    text-align: center
                }

                .es-header-body h2 a,
                .es-content-body h2 a,
                .es-footer-body h2 a {
                    font-size: 24px !important;
                    text-align: center
                }

                .es-header-body h3 a,
                .es-content-body h3 a,
                .es-footer-body h3 a {
                    font-size: 20px !important;
                    text-align: left
                }

                .es-menu td a {
                    font-size: 14px !important
                }

                .es-header-body p,
                .es-header-body ul li,
                .es-header-body ol li,
                .es-header-body a {
                    font-size: 14px !important
                }

                .es-content-body p,
                .es-content-body ul li,
                .es-content-body ol li,
                .es-content-body a {
                    font-size: 14px !important
                }

                .es-footer-body p,
                .es-footer-body ul li,
                .es-footer-body ol li,
                .es-footer-body a {
                    font-size: 14px !important
                }

                .es-infoblock p,
                .es-infoblock ul li,
                .es-infoblock ol li,
                .es-infoblock a {
                    font-size: 12px !important
                }

                *[class="gmail-fix"] {
                    display: none !important
                }

                .es-m-txt-c,
                .es-m-txt-c h1,
                .es-m-txt-c h2,
                .es-m-txt-c h3 {
                    text-align: center !important
                }

                .es-m-txt-r,
                .es-m-txt-r h1,
                .es-m-txt-r h2,
                .es-m-txt-r h3 {
                    text-align: right !important
                }

                .es-m-txt-l,
                .es-m-txt-l h1,
                .es-m-txt-l h2,
                .es-m-txt-l h3 {
                    text-align: left !important
                }

                .es-m-txt-r img,
                .es-m-txt-c img,
                .es-m-txt-l img {
                    display: inline !important
                }

                .es-button-border {
                    display: inline-block !important
                }

                a.es-button,
                button.es-button {
                    font-size: 18px !important;
                    display: inline-block !important
                }

                .es-adaptive table,
                .es-left,
                .es-right {
                    width: 100% !important
                }

                .es-content table,
                .es-header table,
                .es-footer table,
                .es-content,
                .es-footer,
                .es-header {
                    width: 100% !important;
                    max-width: 600px !important
                }

                .es-adapt-td {
                    display: block !important;
                    width: 100% !important
                }

                .adapt-img {
                    width: 100% !important;
                    height: auto !important
                }

                .es-m-p0 {
                    padding: 0 !important
                }

                .es-m-p0r {
                    padding-right: 0 !important
                }

                .es-m-p0l {
                    padding-left: 0 !important
                }

                .es-m-p0t {
                    padding-top: 0 !important
                }

                .es-m-p0b {
                    padding-bottom: 0 !important
                }

                .es-m-p20b {
                    padding-bottom: 20px !important
                }

                .es-mobile-hidden,
                .es-hidden {
                    display: none !important
                }

                tr.es-desk-hidden,
                td.es-desk-hidden,
                table.es-desk-hidden {
                    width: auto !important;
                    overflow: visible !important;
                    float: none !important;
                    max-height: inherit !important;
                    line-height: inherit !important
                }

                tr.es-desk-hidden {
                    display: table-row !important
                }

                table.es-desk-hidden {
                    display: table !important
                }

                td.es-desk-menu-hidden {
                    display: table-cell !important
                }

                .es-menu td {
                    width: 1% !important
                }

                table.es-table-not-adapt,
                .esd-block-html table {
                    width: auto !important
                }

                table.es-social {
                    display: inline-block !important
                }

                table.es-social td {
                    display: inline-block !important
                }

                .es-m-p5 {
                    padding: 5px !important
                }

                .es-m-p5t {
                    padding-top: 5px !important
                }

                .es-m-p5b {
                    padding-bottom: 5px !important
                }

                .es-m-p5r {
                    padding-right: 5px !important
                }

                .es-m-p5l {
                    padding-left: 5px !important
                }

                .es-m-p10 {
                    padding: 10px !important
                }

                .es-m-p10t {
                    padding-top: 10px !important
                }

                .es-m-p10b {
                    padding-bottom: 10px !important
                }

                .es-m-p10r {
                    padding-right: 10px !important
                }

                .es-m-p10l {
                    padding-left: 10px !important
                }

                .es-m-p15 {
                    padding: 15px !important
                }

                .es-m-p15t {
                    padding-top: 15px !important
                }

                .es-m-p15b {
                    padding-bottom: 15px !important
                }

                .es-m-p15r {
                    padding-right: 15px !important
                }

                .es-m-p15l {
                    padding-left: 15px !important
                }

                .es-m-p20 {
                    padding: 20px !important
                }

                .es-m-p20t {
                    padding-top: 20px !important
                }

                .es-m-p20r {
                    padding-right: 20px !important
                }

                .es-m-p20l {
                    padding-left: 20px !important
                }

                .es-m-p25 {
                    padding: 25px !important
                }

                .es-m-p25t {
                    padding-top: 25px !important
                }

                .es-m-p25b {
                    padding-bottom: 25px !important
                }

                .es-m-p25r {
                    padding-right: 25px !important
                }

                .es-m-p25l {
                    padding-left: 25px !important
                }

                .es-m-p30 {
                    padding: 30px !important
                }

                .es-m-p30t {
                    padding-top: 30px !important
                }

                .es-m-p30b {
                    padding-bottom: 30px !important
                }

                .es-m-p30r {
                    padding-right: 30px !important
                }

                .es-m-p30l {
                    padding-left: 30px !important
                }

                .es-m-p35 {
                    padding: 35px !important
                }

                .es-m-p35t {
                    padding-top: 35px !important
                }

                .es-m-p35b {
                    padding-bottom: 35px !important
                }

                .es-m-p35r {
                    padding-right: 35px !important
                }

                .es-m-p35l {
                    padding-left: 35px !important
                }

                .es-m-p40 {
                    padding: 40px !important
                }

                .es-m-p40t {
                    padding-top: 40px !important
                }

                .es-m-p40b {
                    padding-bottom: 40px !important
                }

                .es-m-p40r {
                    padding-right: 40px !important
                }

                .es-m-p40l {
                    padding-left: 40px !important
                }

                button.es-button {
                    width: 100%
                }

                .es-desk-hidden {
                    display: table-row !important;
                    width: auto !important;
                    overflow: visible !important;
                    max-height: inherit !important
                }
            }
        </style>
    </head>

    <body
        style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
        <div class="es-wrapper-color" style="background-color:#EFEFEF"><!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    <v:fill type="tile" color="#efefef"></v:fill>
    </v:background>
    <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EFEFEF">
                <tr>
                    <td valign="top" style="padding:0;Margin:0">
                        <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table class="es-content-body"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:560px"
                                        cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                        <tr>
                                            <td align="left" style="padding:20px;Margin:0">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td class="es-m-p0r" valign="top" align="center"
                                                            style="padding:0;Margin:0;width:520px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                bgcolor="#ffffff"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:15px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;font-size:0px"><img
                                                                            class="adapt-img"
                                                                            src="https://mhyorf.stripocdn.email/content/guids/CABINET_1864c3bb62e3a5771c608480f4151dbf3251e29babecdaf7716ad8c365437d70/images/logo0303.png"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="120"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left"
                                                style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-bottom:30px">
                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td class="es-m-p0r es-m-p20b" valign="top" align="center"
                                                            style="padding:0;Margin:0;width:520px">
                                                            <table width="100%" cellspacing="0" cellpadding="0"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" class="es-m-p0r es-m-p0l"
                                                                        style="padding:0;Margin:0;padding-left:40px;padding-right:40px">
                                                                        <h1
                                                                            style="Margin:0;line-height:60px;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;font-size:50px;font-style:normal;font-weight:bold;color:#9cc199">
                                                                            <b>¡</b>&nbsp;Bienvenid@ a SocialCuak!</h1>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left"
                                                                        style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;color:#333333;font-size:18px">
                                                                            Hola ${name}!
                                                                            <br><br>
                                                                        </p>
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;color:#333333;font-size:18px">
                                                                            Estamos emocionados de tenerte como parte de nuestra comunidad dedicada a la programación y todo lo relacionado con ella. 
                                                                            Aquí podrás conectarte con otros profesionales, compartir sus experiencias, aprender de otros y tener acceso a recursos y oportunidades únicas.
                                                                            <br><br>
                                                                            SocialCuak, la red social por y para programadores.
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-footer" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:560px">
                                        <tr>
                                            <td align="left" style="padding:20px;Margin:0">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="left" style="padding:0;Margin:0;width:520px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                        <h2
                                                                            style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#999999">
                                                                            Estamos listos para ayudarte!</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#999999;font-size:14px">
                                                                            Contéstanos a este email o contáctanos al siguiente número:
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:40px"><span
                                                                            class="es-button-border"
                                                                            style="border-style:solid;border-color:#999999;background:#35d0a6;border-width:2px;display:inline-block;border-radius:15px;width:auto"><a
                                                                                href="tel:+(000)123456789" class="es-button"
                                                                                target="_blank"
                                                                                style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;display:inline-block;background:#35D0A6;border-radius:15px;font-family:Montserrat, sans-serif;font-weight:bold;font-style:normal;line-height:24px;width:auto;text-align:center;padding:10px 20px 10px 20px">+
                                                                                (000) 123 456 789</a></span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding:0;Margin:0">
                                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                                            class="es-menu" role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr class="links">
                                                                                <td align="center" valign="top"
                                                                                    width="33.33%" id="esd-menu-id-1"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0">
                                                                                    <a target="_blank"
                                                                                        href="mailto:?subject=codecuak%40gmail.com"
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:14px">Contacto</a>
                                                                                </td>
                                                                                <td align="center" valign="top"
                                                                                    width="33.33%" id="esd-menu-id-2"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0">
                                                                                    <a target="_blank"
                                                                                        href="https://front-end-six-black.vercel.app/about"
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:14px">Conócenos</a>
                                                                                </td>
                                                                                <td align="center" valign="top"
                                                                                    width="33.33%" id="esd-menu-id-2"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0">
                                                                                    <a target="_blank"
                                                                                        href="https://front-end-six-black.vercel.app/about"
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:14px">Privacidad</a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-footer" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table bgcolor="#efefef" class="es-footer-body" align="center" cellpadding="0"
                                        cellspacing="0"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#efefef;width:560px">
                                        <tr>
                                            <td align="left"
                                                style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="left" style="padding:0;Margin:0;width:520px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;display:none"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>

    </html>
    `)
}

module.exports = { getMailWelcome }