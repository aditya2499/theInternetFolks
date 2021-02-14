//const { schoolCollection }  = require("../app");
const getDb = require("../db").getDb;

errorObj = { 
   'status' : false,
   'errors' : [{
      'message' : 'Something went wrong.' 
   }
   ]
}

exports.signup = async(req,ers) =>{

   const _db = getDb()

   const schoolCollection = _db.collection('school')
   try{
      let userPassword
      bcrypt.hash(password, 12).then((result) => {
         userPassword = result;
      });

   user = {
      first_name : req.params.first_name,
      last_name : req.body.last_name,
      email : req.body.email,
      mobile : req.body.mobile,
      password : userPassword,
      created : Date.now(),
      updated : null
   }

   //const schoolCollection = db.collection('school');
   
   const result = await userCollection.insertOne(user);
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


exports.getAllUser = async (req,res) =>{
   try{
   const db = getDb()
   const userCollection = db.collection('user')
   const cursorFind = userCollection.find(); 
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

exports.updateUser = async(req,res) => {
   const _db = getDb()

   const userCollection = _db.collection('user')
   try{

   var response = JSON.parse(responseBody)
   const result = await schoolCollection.updateOne({},{"$set" : response});
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