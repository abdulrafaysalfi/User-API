const router = require('express').Router();
const User = require('../models/User');

//GET
router.get('/',(req,res)=>{
    User.find({},{__v:0},(err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

//GET BY SPECIFIC ID
router.get('/:id',(req,res)=>{
    User.findById(req.params.id,{__v:0},(err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

//POST
router.post('/',(req,res)=>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    });
    user.save((err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

//PUT
router.put('/:id',(req,res)=>{
    User.updateOne({_id:req.params.id},{$set:{
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    }},(err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})
//DELETE
router.delete('/:id',(req,res)=>{
    User.deleteOne({_id:req.params.id},(err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

module.exports = router;