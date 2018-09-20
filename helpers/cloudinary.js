const cloudinary        = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer            = require('multer');

cloudinary.config({
  cloud_name: "diurivj",
  api_key: "722289662448675",
  api_secret: "IctCtzBR9sjoz2YjVnNpPGXGqFo"
})

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'profile-pictures', 
  allowedFormats: ['jpg', 'png'],
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;