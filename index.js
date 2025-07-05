const express = require('express')
const mongoose = require('mongoose');
const model =require('./src/models/movieModel')
const userRouter = require('./src/routes/userRouter')
// mongoose.connect('mongodb+srv://sharinhansha:lfvuCVTsUlQGstQn@main.wj79a2v.mongodb.net/?retryWrites=true&w=majority&appName=main')

mongoose.connect('mongodb+srv://sharinhansha:lfvuCVTsUlQGstQn@main.wj79a2v.mongodb.net/movieDB?retryWrites=true&w=majority&appName=main')

.then(res=>{
console.log("mongodb connected");

}).catch(err=>{
  console.log("error");


  
})
const movieRouter = require('./src/routes/movieRouter')
const sample = require('./src/middlewares/middleware')
const app = express()
const port = 3000
var cors = require('cors')

var corsOptions = {
  origin: 'https://movie-rating-two.vercel.app',
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(sample)
app.use("",movieRouter)
app.use("/user",userRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

