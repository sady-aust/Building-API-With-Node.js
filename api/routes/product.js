const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({
        message: "Handling Get request to /products"
    });
});

router.post("/",(req,res,next)=>{
    res.status(201).json({
        message: 'Handling Post requst to /products'
    });
});

router.get("/:productId",(req,res,next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You descoverd the special Id',
            id: id
        });
    }
    else{
        res.status(200).json({
            message: 'You descoverd the an Id'
           
        });
    }
});

router.patch("/:productId",(req,res,next)=>{
   res.status(200).json({
       message: 'Updated Successfully'
   });
});

router.delete("/:productId",(req,res,next)=>{
    res.status(200).json({
        message: 'Delete Successfully'
    });
 });
module.exports = router;