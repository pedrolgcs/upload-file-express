const routes = require('express').Router()
const PostController = require('../../../app/controllers/PostController')
const multer = require('multer')
const multerConfig = require('../../../config/multer')

routes.post('/', multer(multerConfig).single('file'), PostController.store)

module.exports = routes
