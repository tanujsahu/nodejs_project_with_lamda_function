const con = require('../db/db')

exports.EmpList = async (req, res) => {
    const query = "select * from emp";
    const result = await con.query(query).then((data) => {
        console.log("ddddd", data[0])
        return data[0];
    }).catch((err) => {
        console.log("erro", err)
        return err;
    });
    return result;
}