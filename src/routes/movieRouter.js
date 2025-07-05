const express = require('express')
const router = express.Router()
const movies = require('../data/movieData')
const {staticController,contactController,movielistController,movieratingController,newmovieController,deletemovieController, movieDetailController} = require('../controllers/movieController')
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/', staticController)
router.get('/contact', contactController)
router.get('/movies',movielistController )
router.get('/movies/:id',movieDetailController )

router.put('/rating',authMiddleware ,movieratingController )
router.post('/creat', newmovieController)


router.delete('/delete',deletemovieController )

module.exports=router
