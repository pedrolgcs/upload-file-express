const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const PostSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String
}, { timestamps: true })

PostSchema.pre('save', function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`
  }
})

PostSchema.pre('remove', function () {
  // unlinkSync
  return promisify(fs.unlink)(
    path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', this.key)
  )
})

module.exports = mongoose.model('Post', PostSchema)
