const Post = require('../models/Post')

module.exports = {
  async store (req, res) {
    const { originalname: name, size, filename: key } = req.file
    const post = await Post.create({
      name: name,
      size: size,
      key: key,
      url: ''
    })
    return res.json(post)
  }
}
