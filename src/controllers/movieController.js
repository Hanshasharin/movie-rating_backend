const movies = require('../data/movieData')
const model = require('../models/movieModel')
const staticController = (req, res) => {
  res.send('<h1>Hello World! updated</h1>')
}

const contactController = (req, res) => {
  res.send('contact')
}

const movielistController= async(req, res) => {
    const movies= await model.find()
  res.json(movies)
}
const movieDetailController= async(req, res) => {
  const movieID = req.params.id
    const movies= await model.findById(movieID)
  res.json(movies)
}
const movieratingController = async(req, res) => {
  console.log(req.user);
  
  console.log(req.body);
    const id = req.body.id
    // const rating = req.body.rating
    const mov = await model.findById(id)
    mov.rating = req.body.rating
    await mov.save()

  // movies[id].rating = rating
  res.json("rating added")
}

const newmovieController = async (req, res) => {
  console.log("added");
  console.log(req.body);
const newmovie= {        
      title:req.body.title,
            rating: req.body.rating,
            image:req.body.image,}

            const newMovieDocumet = new model(newmovie)
            await newMovieDocumet.save()

            // movies.push(newmovie)
  
  res.json("movie added backend mssg")
}

const deletemovieController = async (req, res) => {
  console.log(req.query);

  await model.findByIdAndDelete(req.query.id)
    res.send("deleted")

}
module.exports = {staticController,contactController,movielistController,movieratingController,newmovieController,deletemovieController,movieDetailController}