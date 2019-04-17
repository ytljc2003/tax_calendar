const assert = require('assert');

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');

  // Find some documents
  collection.find({}/*,{fields:{_id:0 , a: 1}}*/).project({_id:0}).toArray(function(err, docs) {
    assert.equal(null,err);
    //console.log("Found the following records");
    //console.log(docs)
    callback(docs);
  });
}

readdb = function(cb){
	const MongoClient = require('mongodb').MongoClient;

	// Connection URL
	const url = 'mongodb://localhost:27017';

	// Database Name
	const dbName = 'myproject';

	// Create a new MongoClient
	const client = new MongoClient(url,{ useNewUrlParser: true });

	// Use connect method to connect to the Server
	client.connect(function(err) {
  		assert.equal(null, err);
  		console.log("Connected successfully to server");

  		const db = client.db(dbName);

   		findDocuments(db, function(result) {
			//console.log(result);
			cb(result);
      			client.close();
    		});

	});
}

exports.Readdb = readdb;

//readdb();
