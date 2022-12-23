import User from '../../models/User'
import connectdb from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ email: req.body.email })
        console.log(user)
        if (user) {
            var bytes = CryptoJS.AES.decrypt(user.password, '401304');
            var decryptedpassword = bytes.toString(CryptoJS.enc.Utf8)
            if (req.body.email === user.email && req.body.password === decryptedpassword) {
                var token = jwt.sign({ success: true, name: user.name, email: user.email }, 'shhhhhs', {expiresIn: '2d'})
                
                res.status(200).json({success: true, token});
            }
            else {
                res.status(400).json({ success: false, Credential: "Invalid" });
            }
        }
        else {
            res.status(400).json({ success: false, notfound: "User Not Found " });
        }

    }
    else {
        res.status(400).json({ error: "Not allowed" });
    }
}

export default connectdb(handler);