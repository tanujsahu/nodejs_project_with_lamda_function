const con = require('../db/db')

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

exports.saveUser = async (req, res) => {
    const userData = JSON.parse(req.body)
    console.log("saveUser controller::)", userData)
    const query = `insert into user(id,u_name,age,phone,emailId) values(${userData.id},${userData.u_name},${userData.age},${userData.phone},${userData.emailId})`;
    const data = await con.query(query).then(obj => {
        console.log("1 record inserted", obj[0]);
        return obj[0]
    }).catch(err => {
        console.log("error", err);
        return err
    })
    console.log("datataaaa", data);
    return data


    // const result = await con.query(query).then((data) => {
    //     console.log("saveUser success", data)
    //     return data;
    // }).catch((err) => {
    //     console.log("erro", err)
    //     return err;
    // });
    // return result;
}
