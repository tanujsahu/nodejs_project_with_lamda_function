var mysql = require("mysql2");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "testing_db",
});
con.connect(function (err) {
    if (err) {
        console.log("Error!::)", err);
        throw err;
    }
    else {
        console.log('Db connected!');
    }
});
module.exports = con.promise();
//# sourceMappingURL=db.js.map