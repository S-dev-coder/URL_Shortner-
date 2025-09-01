const jwt = require('jsonwebtoken');
const secret = 'Sakshi$123@$'

function setUser(user) {
//  sessionIdToUserMap.set(id, user);
return jwt.sign({
  _id: user._id,
  name: user.name,
  email: user.email
}, secret);
}



function getUser(token) {
  if(!token) return null;
  try{
    return jwt.verify(token,secret)
  }catch (error){
    return null;
  
  }

}

module.exports = {
  setUser,
  getUser,
};