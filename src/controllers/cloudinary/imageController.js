const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const multer = require('multer');
const { Cloudinaryimage } = require("../../db");


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

function uploadImage(req, res, next) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage }).single('image');
  
  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).send(err.message);
    }

    const publicId = req.body.publicId;
    try {
      const result = await cloudinary.uploader.upload(req.file.path, { public_id: publicId });
      const url = cloudinary.url(publicId);
      const newImage = await Cloudinaryimage.create({publicId: publicId})
      fs.readdir('uploads', (err, files) => {
        if (err) throw err;
        for (const file of files) {
          fs.unlink(`uploads/${file}`, (err) => {
            if (err) throw err;
          });
        }
      });

      res.status(200).send(url);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
}

module.exports = { uploadImage };