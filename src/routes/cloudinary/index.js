const { Router } = require('express');
const router = Router();
const { uploadImage } = require('../../controllers/cloudinary/index');
const cloudinary = require('cloudinary').v2;
// validators 
const { 
  validatePublicId 
} = require('../../validators/cloudinary');


router.post("/",validatePublicId, (req, res) => {
  uploadImage(req, res, cloudinary);
});

module.exports = router;