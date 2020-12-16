const express = require('express')
const cors = require('cors')

const Desserts = require('../models/desserts')

router = express()
router.use(express.json())
router.use(cors())
router.set('json spaces', 4)

///// get
router.get('/', (req,res) => {
  Desserts.find({})
      .then((data)=> {
          res.json(data);
      })
})

router.get('/specific/:id', (req,res) => {
  Desserts.findById(req.params.id)
      .then((data)=> {
          res.json(data);
      })
})

///// post
router.post('/add', (req,res) => {
  var newDesserts = Desserts(req.body)
  newDesserts.save().then(()=> res.send("complete"))
})

/////// put
router.put('/update/:id', (req,res) => {
  console.log(req.params.id)
  Desserts.findByIdAndUpdate(req.params.id, req.body)
    .then(()=> {
      res.send('Updated Desserts')
    })
})

////// delete
router.delete('/delete/:id', (req,res) => {
  console.log(req.params.id)
  Desserts.findByIdAndDelete(req.params.id)
    .then(()=> {
      res.send('Deleted Desserts')
    })
})


module.exports = router