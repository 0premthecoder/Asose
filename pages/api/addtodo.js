import Todo from "../../models/Todo"
import connectdb from '../../middleware/mongoose'
var jwt = require('jsonwebtoken');

async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description } = req.body
        let token = localStorage.getItem('token')
        var dec = jwt.decode(token)
        let t = new Todo({ title: title, description: description, user: dec.email })
        await t.save()
    }else{
        res.status(400).json({error: "Not allowed"});
    }
    res.status(200).json({ name: 'It\'s Yo Boy Prem' })
}

export default connectdb(handler);