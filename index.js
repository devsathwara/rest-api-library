const express=require('express');
const body= require('body-parser');
const PORT = process.env.PORT || 8080;
const bookRoutes=require('./routes/bookRoutes');
const authRoutes=require('./routes/authRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const app= express();
var options = {
    swaggerOptions: {
      validatorUrl: null
    }
  };

app.use(body.json());

app.use('/', authRoutes);
app.use('/', bookRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options,CSS_URL));


app.listen(8080,()=>{
    console.log("Server is running on 8080");
})