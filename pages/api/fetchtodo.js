import Todo from "../../models/Todo"
import connectdb from '../../middleware/mongoose'


async function handler(req, res) {
    if (req.method === 'GET') {
        let todo = await Todo.find({ user: req.body.user })
        res.status(200).json(todo)
    }else{
        res.status(400).json({error: "Not allowed"});
    }
}

export default connectdb(handler);