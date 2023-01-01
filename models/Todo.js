const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag:{type: String, required: true}

}, { timestamps: true })

mongoose.models = {}

export default mongoose.model('Todo', TodoSchema);