let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, client){
    
    let db = client.db('EmployeeDB');

    db.collection('Employee').updateOne({'EmployeeName':'Martin'},{$set: {'EmployeeName':'Greta'}});

    let cursor = db.collection('Employee').find();

    cursor.each(function(err, doc){

        console.log(doc);
    });
});