const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({
        message:"Get Request in orders"
    });
});

router.post("/",(req,res,next)=>{
    const order = {
        name: req.body.name,
        price:req.body.price
    }
    res.status(201).json({
        message:"Orders created successfully",
        createdOrder:order
    });
});

router.get("/:orderId",(req,res,next)=>{
    
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

router.delete("/:orderId",(req,res,next)=>{
   
    res.status(200).json({
        message: 'Order Deleted',
        orderId: req.params.orderId
    });
});
module.exports = router;