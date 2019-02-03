const express = require('express');
const app = express();
const morgan = require('morgan')

const productRoutes = require("./api/routes/product")
const orderRouter = require('./api/routes/order');

app.use(morgan('dev'));

//routes which should handle the request
app.use("/products",productRoutes);
app.use("/orders",orderRouter)

app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports = app;