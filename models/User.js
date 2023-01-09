const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true,},
    category: {type:String, default: 'Student'},
    studentId: {type:String}

}, {timestamps: true})

mongoose.models = {}

export default mongoose.model('User', UserSchema);