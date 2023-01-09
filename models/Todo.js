const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    user: { type: String, required: true },
    pending: { type: Boolean, default: true },
    todo: { type: String, required: true },

}, { timestamps: true })

mongoose.models = {}

export default mongoose.model('Todo', TodoSchema);