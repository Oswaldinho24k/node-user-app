const router = require('express').Router()
const User = require('../models/User')


router.get('/', (req, res, next)=>{
  User.findById(req.user.id)
    .then(user=>{
      res.render('user/profile',user)
    }).catch(e=>next(e))
})

router.get('/edit', (req, res, next)=>{
  User.findById(req.user.id)
    .then(user=>{
      res.render('user/edit',user)
    }).catch(e=>next(e))
})

router.post('/edit', (req, res, next)=>{
  
  User.findByIdAndUpdate(req.user.id,{$set:req.body})
    .then(user=>{
      res.redirect('/profile')
    }).catch(e=>next(e))
})



module.exports = router