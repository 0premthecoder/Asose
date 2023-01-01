import Todo from "../../models/Todo"
import connectdb from '../../middleware/mongoose'


async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, user } = req.body
        let t = new Todo({ title: title, description: description, user: user })
        await t.save()
    }else{
        res.status(400).json({error: "Not allowed"});
    }
    res.status(200).json({ name: 'It\'s Yo Boy Prem' })
}

export default connectdb(handler);