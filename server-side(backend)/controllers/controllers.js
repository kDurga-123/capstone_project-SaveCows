async function getDiseasesData(req,res){
    var getTableData = `SELECT *  FROM DiseasesTable`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
}
async function getSelectedData(req,res) {
    var data = req.params.diease
    console.log(data)
    var getTableData = `SELECT * FROM DiseasesTable where DiseaseName='${data}'`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
}
module.export={InsertData,diseasesData}