const express=require('express');
const body= require('body-parser');
const PORT = process.env.PORT || 8080;
const bookRoutes=require('./routes/bookRoutes');
const authRoutes=require('./routes/authRoutes');

const app= express();

app.use(body.json());

app.use('/', authRoutes);
app.use('/', bookRoutes);


app.listen(8080,()=>{
    console.log("Server is running on 8080");
})