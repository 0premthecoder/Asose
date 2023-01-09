import Todo from "../../models/Todo"
import connectdb from '../../middleware/mongoose'


async function handler(req, res) {
    if (req.method === 'POST') {
        const { todo, pending, user } = req.body
        let t = new Todo({ todo: todo, pending: pending, user: user })
        await t.save()
        res.status(200).json({success: true, user: user})
    }else{
        res.status(400).json({error: "Not allowed"});
    }
}

export default connectdb(handler);