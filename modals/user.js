let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    bio: { type: String, required: true },
    hobbies: { type: String, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('User',userSchema)