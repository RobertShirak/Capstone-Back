const express = require('express')
const cors = require('cors')

const Dinner = require('../models/dinner')

router = express()
router.use(express.json())
router.use(cors())
router.set('json spaces', 4)

//////get
router.get('/', (req,res) => {
    Dinner.find({})
      .then((data)=> {
          res.json(data);
      })
})

router.get('/specific/:id', (req,res) => {
    Dinner.findById(req.params.id)
      .then((data)=> {
          res.json(data);
      })
})

//////post
router.post('/add', (req,res) => {
  var newDinner = Dinner(req.body)
  newDinner.save().then(()=> res.send("complete"))
})

//////put -----------------------------
router.put('/update/:id', (req,res) => {
  console.log(req.params.id)
  Dinner.findByIdAndUpdate(req.params.id, req.body)
    .then(()=> {
      res.send('Updated Dinner')
    })
})

//////delete
router.delete('/delete/:id', (req,res) => {
  console.log(req.params.id)
  Dinner.findByIdAndDelete(req.params.id)
    .then(()=> {
      res.send('Deleted Dinner')
    })
})


module.exports = router