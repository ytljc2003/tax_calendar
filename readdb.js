findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');

  // Find some documents
  collection.find({a:1},{_id: 1, 'a': 0}).toArray(function(err, docs) {
    //console.log(err);
    //assert.equal(null,err);
    //console.log("Found the following records");
    //console.log(docs)
    callback(docs);
  });
}

readdb = function(){
	const MongoClient = require('mongodb').MongoClient;
	const assert = require('assert');

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
      			client.close();
			return result;
    		});

	});
}

exports.Readdb = function(){
	var result;

	return function()
	{
		return readdb();
	}
}

//readdb();
