var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"shopdb"
});

con.connect(function(err) {
    if (err) throw err;
        console.log("Connection !! "); 
        var sql = "SELECT * FROM products" ;
   con.query(sql,function(err,result,fileds){
    if (err) throw err;
        // console.log(result);
        result.forEach(function(data){
            console.log("name:"+data.name);
            console.log("Description:"+data.description);
            console.log("price:"+data.price);
        });
   });
});