const router = require('express').Router()
const User = require('../models/User')
const multer = require('multer')
//const uploads = multer({dest:'public/uploads'})
const uploadCloud = require('../helpers/cloudinary')

router.get('/', (req, res, next)=>{
  User.findById(req.user._id)
    .then(user=>{
      console.log(user)
      res.render('user/profile',user)
    }).catch(e=>next(e))
})

router.get('/edit', (req, res, next)=>{
  User.findById(req.user._id)
    .then(user=>{
      res.render('user/edit',user)
    }).catch(e=>next(e))
})

router.post('/edit', uploadCloud.single('image'), (req, res, next) => {
  // if(req.file) req.body['photoURL'] = `/uploads/${req.file.filename}`
  console.log(req.file.secure_url)
  if (req.file) req.body['photoURL'] = req.file.url
  User.findByIdAndUpdate(req.user._id, {$set:req.body}, {new:true})
    .then(user=>{
      res.redirect('/profile')
    }).catch(e=>next(e))
})

module.exports = router