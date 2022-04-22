
const responseMessage = require('./utils/responseMessage');
const parseBody = require('./utils/parseBody');
const User = require('./controllers/user');
const Emp = require('./controllers/employee');

//---------------------- USER ---------------------------
exports.testing = async (event) => {
  console.log("api Call!!");
  try {
    const data = await User.UserList(event)
    console.log("data:response)__", data);
    return responseMessage(null, data)
  } catch (err) {
    console.log("Error::index.js))", err);
    return responseMessage(err, null)
  }
};

exports.saveUser = async (event) => {
  console.log("saveUser api Call!!");
  try {
    const data = await User.saveUser(event)
    console.log("saveUser:response)__", data);
    return responseMessage(null, data)
  } catch (err) {
    console.log("saveUser Error::index.js))", err);
    return responseMessage(err, null)
  }
};

exports.updateUser = async (event) => {
  console.log("update user", event);
  try {
    const data = await User.updateUser(event)
    console.log("updateUser : response)__", data);
    return responseMessage(null, data)
  } catch (err) {
    console.log("updateUser Error::index.js))", err);
    return responseMessage(err, null)
  }
}

//------------- delete user 
exports.deleteUser = async (event) => {
  console.log("delete user", event);
  try {
    const data = await User.deleteUser(event);
    console.log("delete user response__", data);
    return responseMessage(null, data)
  } catch (err) {
    console.log("deleteUser Error::index.js))", err);
    return responseMessage(err, null)
  }
}


//---------------------- EMPLOYEE ---------------------------
exports.getAllEmp = async (event) => {
  console.log("api Call!!");
  try {
    const data = await Emp.EmpList(event)
    console.log("data:response)__", data);
    return responseMessage(null, data)
  } catch (err) {
    console.log("Error::index.js))", err);
    return responseMessage(err, null)
  }
};