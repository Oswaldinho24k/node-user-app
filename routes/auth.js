const router = require('express').Router()
const User = require('../models/User')
const passport = require('passport')



router.get('/signup',(req, res, next)=>{
  res.render('auth/signup')
})
router.post('/signup',(req, res, next)=>{
  User.register(req.body,req.body.password)
    .then(r=>{
      res.redirect('/login')
    }).catch(e=>console.log(e))
})


router.get('/login',(req, res, next)=>{
  res.render('auth/login')
})

router.post('/login',passport.authenticate('local'),(req, res, next)=>{
  res.redirect('/profile')
})

router.get('logout', (req, res, next)=>{
  req.logout()
  res.redirect('/login')
})




module.exports = router
