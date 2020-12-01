Introduction
============

This module defines the classes and methods used for handling the interactions in the persistence layer of the application.

Module Breakdown
================


Routing and Retrieving Data
^^^^^^^^^^^^^^^^^^^^^^^^^^^
This is primarily handled by 3 files

- ``server.js`` - This launches the live server for NodeJS to connect to the MongoDB database.
- ``controller.js`` - This handles the querying and retrieval of data from the MongoDB database
- ``route.js`` - This handles the creation of the routes to serve data from MongoDB to the client.

**Even though server.js starts a live server for the application, the front end of the application can only be viewed by running a PHP server. NodeJS just serves to handle the interactions with the database through the MongoDB driver.**

Security
^^^^^^^^

This module defines the classes and methods used for handling the security of the application.

The files are:

- ``hashing.js`` - The classes relating to the hashing of data to be verified in the database such as passwords.

- ``encryption.js`` - The classes and functions relating to the encryption of sensitive data in the database such as addresses.


Db
^^

This module defines the classes and methods used for connecting to the database and defining the database models.

The files are:

- ``documents.js`` - The classes used to define the documentss for the database.

- ``queries.js`` - This handles the queries to MongoDB    **In Progress**


Routing and Retrieval of Data in Detail
=======================================

Using the controller to create additional queries
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Each query essentially follows the structure below:


1. In each query the url is first parsed and the query string is extracted:

    .. code-block:: javascript
        
        async function getCollection(request, response, collectionName){
                const requestUrl = url.parse(request.url, true);
                const query = requestUrl.query;
    
2. We then create the mongo client to query the database for the desired data

   .. code-block:: javascript

        await client.connect();
        // Retrieve data from MongoDb
        let collection = client.db('<databasename>').collection(collectionName);
        if ("_id" in query) {
        query["_id"] = new ObjectId(query["_id"]);
	}
		
	// Perform query
	let data = await collection.find(query).toArray();

3. Now we set the response headers and prepare the data to be sent to the client.

   .. code-block:: javascript
    
        response.statusCode = 200;
        setResponseHeaders(response);
        response.write(JSON.stringify(data));

4. Finally we close the connection to MongoDB and finish writing the response.

   .. code-block:: javascript

        // Closing the connection and ending the response.
        await client.close();
        await response.end();

**n.b)** Some aspects of ``controller.js`` may be migrated over to ``queries.js`` in the ``db`` module
