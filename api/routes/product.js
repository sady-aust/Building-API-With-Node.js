const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"myrestapi"
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("DB COnnection Succeed");
        
    }
    else{
        console.log("DB Connection Failed "+JSON.stringify(err,undefined,2));
        
    }
});

router.get("/",(req,res,next)=>{
    res.status(200).json({
        message: "Handling Get request to /products"
    });
});

router.post("/",(req,res,next)=>{
    const product = {
        name:req.body.name,
        price:req.body.price
    };

    let sql = "INSERT INTO products(name,price) VALUES('"+product.name+"','"+product.price+"')";
    mysqlConnection.query(sql,(err,rows,field)=>{
        if(err){
            res.status(200).json({
                message: 'Not Inserted',
            });
        }
        else{
            res.status(200).json({
                message: 'Inserted Successfully',
            });
        }
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