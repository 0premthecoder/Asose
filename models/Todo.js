const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    user: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },

}, { timestamps: true })

mongoose.models = {}

export default mongoose.model('Todo', TodoSchema);