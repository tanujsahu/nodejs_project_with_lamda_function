const con = require('../db/db')

//---------------------------- Get All Testing ------------------------
exports.getAllTesting = async (req, res) => {
    const query = "select * from bookings";
    const result = await con.query(query).then((data) => {
        console.log("get live data::)", data[0])
        return data[0];
    }).catch((err) => {
        console.log("erro", err)
        return err;
    });
    return result;
}


