
const { getUser } = require("../service/auth")

async function restrictToLoggedInUserOnly(req, res, next) {
    
    const userUid = req.cookies?.uid;
    console.log("Restricting access to logged in users only")
    console.log(req.cookies);
    console.log("All headers:", req.headers);

    if (!userUid) return res.redirect("/login")
    const user = getUser(userUid);

    if (!user) return res.redirect("/login");

    req.user = user;
    next();

}

module.exports = {
    restrictToLoggedInUserOnly,
};