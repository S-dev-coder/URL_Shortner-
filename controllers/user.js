const { v4: uuidv4 } = require('uuid');
const User = require('../models/user')


const { setUser } = require('../service/auth');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        await User.create({
            name,
            email,
            password
        });
        return res.redirect('/');
    }

    catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            return res.status(400).send("Email already exists. Please use a different email.");
        }
        return res.status(500).send("Error creating user");
    }
}
async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
    }

    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    console.log(res)
    return res.redirect('/');
    
};



module.exports = {
    handleUserSignup,
    handleUserLogin
}