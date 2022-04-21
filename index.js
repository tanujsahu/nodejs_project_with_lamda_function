
const responseMessage = require('./utils/responseMessage');
const parseBody = require('./utils/parseBody');
const Test = require('./controllers/user');
const Emp = require('./controllers/employee');

exports.testing = async (event) => {
  console.log("api Call!!");
  try {
    const data = await Test.UserList(event)
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
    const data = await Test.saveUser(event)
    console.log("saveUser:response)__", data);
    return responseMessage(null, data)
  } catch (err) {
    console.log("saveUser Error::index.js))", err);
    return responseMessage(err, null)
  }
};

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