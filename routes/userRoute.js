let express = require('express')
let user = require('../modals/user')
let router = express.Router()

router.get('/new', (req, res) => {
  res.render('form')
})

// insert a data inside database
router.post('/', (req, res, next) => {
  user.create(req.body, (err, createUser) => {
    if (err) return next(err)
    user.find({}, (err, createUser) => {
      res.render('userlist', { createUser })
    })
  })
})



// find a singal user detail

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  user.findById(id, (err, user) => {
    if (err) return next(err)
    res.render('singalUser', { user })
  })
})

// update

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id
  user.findById(id, req.body, (err, user) => {
    if (err) return next(err)
    res.render('editForm', { user })
  })
})

router.post('/:id', (req, res, next) => {
  let id = req.params.id
  user.findByIdAndUpdate(id, req.body, (err, updateuser) => {
    if (err) return next(err)
    res.redirect('/user/' + id)
  })
})

// delete

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id
  user.findByIdAndDelete(id, (err, createUser) => {
    if (err) return next(err)
    user.find({}, (err, createUser) => {
      res.render('userlist', { createUser })
    })
  })
})

module.exports = router
