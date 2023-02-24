const googleController = (req, res) => {
  res.send(req.user);
};

module.exports = { googleController };
