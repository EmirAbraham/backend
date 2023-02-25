// SDK de Mercado Pago
const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token: process.env.PAYMENT_TOKEN,
});

// Crea un objeto de preferencia
const pay = (req,res) => {
  let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: req.body.unit_price,
        quantity: req.body.quantity,
        currency_id: req.body.currency_id
      },
    ],
    back_urls: {
      success: "http://localhost:5173/gracias",
      failure: "https://backend-production-c946.up.railway.app/payment/feedback",
      pending: "https://backend-production-c946.up.railway.app/payment/feedback",
    },
    auto_return: "approved",

  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json(response.body.init_point);
    })
    .catch(function (error) {
      res.status(200).send( {error: error.message} );
    });
};

const feedback = (req, res) => {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
};

module.exports = { pay, feedback };
