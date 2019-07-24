const routes = require('express').Router()
const PostController = require('../../../app/controllers/PostController')
const multer = require('multer')
const multerConfig = require('../../../config/multer')

routes.get('/', PostController.index)
routes.post('/', multer(multerConfig).single('file'), PostController.store)
routes.delete('/:id', PostController.destroy)

module.exports = routes
