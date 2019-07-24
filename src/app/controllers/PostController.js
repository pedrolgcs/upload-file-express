const Post = require('../models/Post')

module.exports = {
  async index (req, res) {
    const posts = await Post.find()
    return res.json(posts)
  },
  async store (req, res) {
    const { originalname: name, size, key, location: url = '' } = req.file
    const post = await Post.create({
      name,
      size,
      key,
      url
    })
    return res.json(post)
  },
  // async show (req, res) {}
  // async update (req, res) {}
  async destroy (req, res) {
    try {
      const post = await Post.findById(req.params.id)
      await post.remove()
      return res.json({ message: 'ok' })
    } catch (error) {
      return res.status(400).json({ error: error })
    }
  }
}
