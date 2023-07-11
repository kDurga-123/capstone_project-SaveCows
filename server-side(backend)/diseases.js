// Import the required modules
const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
// const babel=require('@babel/polyfill');


// Create an instance of Express
const app = express();

app.use(cors(),express.json());
// Create a connection to the MySQL database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Durga@2002",
    database:'effects'
});

app.get("/data",async(req,res) =>{
        var getTableData = `SELECT *  FROM DiseasesTable`;
        con.query(getTableData, function(err, result){
            if(err) throw err;
            // alert("Data added successfully!")
            res.status(200).send(result);
        })
})

app.get("/search/:diseases",async(req,res) =>{
    var data = req.params.disease
    console.log(data)
    var getTableData = `SELECT * FROM DiseasesTable where DiseaseName='${data}'`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
})
const port = 8082;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
})