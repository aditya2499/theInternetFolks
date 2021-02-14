//const { schoolCollection }  = require("../app");
const getDb = require("../db").getDb;

errorObj = { 
   'status' : false,
   'errors' : [{
      'message' : 'Something went wrong.' 
   }
   ]
}

exports.getAllSchool = async (req,res) =>{
   try{
   const db = getDb()
   const schoolCollection = db.collection('school')
   const cursorFind = schoolCollection.find(); 
   const data = await cursorFind.toArray();
   resObj = {
      'status' : true,
      "content": {
         "data" : data
      }
   }
   res.json(resObj)
   console.log(data)
   }
   
   catch(err){
      res.json(errorObj);
   }
}

exports.getAllStudentOfSchool = async (req,res) =>{
   console.log(inside)
   try{
      const db = getDb()
      const userCollection = db.collection('user');
      const query = {schoolId : id};
      const cursorFind = userCollection.find(query);
      const data = await cursorFind.toArray();
      resObj = {
         'status' : true,
         "content": {
            "data" : data
         }
      }
      res.json(resObj)
      console.log(data)
   }
   catch(err){
      res.json(errorObj);
   }
}

exports.createSchool = async(req,res) => {
   const _db = getDb()

   const schoolCollection = _db.collection('school')
   try{
   school = {
      _id : req.params._id,
      name : req.body.name,
      city : req.body.city,
      state : req.body.state,
      country : req.body.country,
      public_id : req.body.public_id,
      created : Date.now(),
      updated : Date.now()
   }

   //const schoolCollection = db.collection('school');
   
   const result = await schoolCollection.insertOne(school);
   console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
    res.json({ 'status' : true})
}
catch(err){
   console.log(err)
   res.json(errorObj)
}
}