const con = require('../db/db')

//--------------------- get all employee data ---------------------
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

//--------------------- save employee data --------------------- 
exports.saveEmp = async (req) => {
    const empData = JSON.parse(req.body)
    console.log("emp save::", empData)
    const query = `insert into emp(id,emp_name,city) values(${empData.id},'${empData.emp_name}','${empData.city}')`;
    const result = await con.query(query).then((data) => {
        console.log("ddddd", data[0])
        return data[0];
    }).catch((err) => {
        console.log("erro", err)
        return err;
    });
    return result;
}

//--------------------- update employee data -----------------
exports.updateEmp = async (req) => {
    const empData = JSON.parse(req.body);
    console.log("emp save::", empData);
    const query = `update emp set emp_name='${empData.emp_name}' where id='${empData.id}'`;
    const result = await con.query(query).then(data => {
        console.log("update emp work::", data)
        return data;
    }).catch(err => {
        console.log("error :", err)
        return err;
    })
    return result
}