const { connect } = require('../db/db');
const con = require('../db/db')

//---------------------------- get all user data ------------------------
exports.UserList = async (req, res) => {
    const query = "select * from user";
    const result = await con.query(query).then((data) => {
        console.log("ddddd", data[0])
        return data[0];
    }).catch((err) => {
        console.log("erro", err)
        return err;
    });
    return result;
}

//---------------------------- save user ------------------------
exports.saveUser = async (req, res) => {
    const userData = JSON.parse(req.body)
    console.log("saveUser controller::)", userData)
    const query = `insert into user(id,u_name,age,phone,emailId) values(${userData.id},'${userData.u_name}',${userData.age},${userData.phone},'${userData.emailId}')`;
    const data = await con.query(query).then(obj => {
        console.log("1 record inserted", obj[0]);
        return obj[0]
    }).catch(err => {
        console.log("error", err);
        return err
    })
    console.log("datataaaa", data);
    return data
}

//---------------------------- update user data ------------------------
exports.updateUser = async (req) => {
    const userData = JSON.parse(req.body)
    console.log("update user::", userData);
    const query = `update user set u_name=${userData.u_name} where id='${userData.id}'`;
    const data = await con.query(query).then(obj => {
        console.log("updatedd", obj);
        return obj
    }).catch(err => {
        console.log("error!!", err);
        return err
    })
    console.log("datataaaa", data);
    return data
}

//---------------------------- delete user ------------------------
exports.deleteUser = async (req) => {
    const userId = JSON.parse(req.body);
    console.log("User ID:)", userId);
    const query = `delete from user where id = '${userId.id}'`
    const data = await con.query(query).then(obj => {
        console.log("Deleted Success !!", obj)
        return obj;
    }).catch(err => {
        console.log("error!", err)
        return err;
    })
    return data;
}
