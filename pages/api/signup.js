import User from '../../models/User'
import connectdb from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");

const handler = async (req, res) =>{
    if (req.method === 'POST'){
        const {name , email, password} = req.body
        let u = new User({name : name, email : email, password : CryptoJS.AES.encrypt(password, "401304").toString()})
        await u.save()
        res.status(200).json({success: "success"});
    }
    else{
        res.status(400).json({error: "Not allowed"});
    }
}

export default connectdb(handler);