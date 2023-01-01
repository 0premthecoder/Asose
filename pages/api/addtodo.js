import Todo from "../../models/Todo"
import connectdb from '../../middleware/mongoose'


async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, user } = req.body
        let t = new Todo({ title: title, description: description, user: user })
        await t.save()
        res.status(200).json({success: true, user: user})
    }else{
        res.status(400).json({error: "Not allowed"});
    }
}

export default connectdb(handler);