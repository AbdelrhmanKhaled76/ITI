db.students.insertone({})
db.createCollection("students" ,{
    validator:{
        $jsonSchema:{
            bsonType:"object",
//            required:["firstName","lastName"],
            properties:{
                firstName:{bsonType:"string"},
                lastName:{bsonType:"string"},
                age:{bsonType:"number",maximum:15}
            }
        } //jsonSchema
    }//validator
})
db.getCollectionInfos({name:"students"})
//update schema after creation
db.students.runCommand("collMod" ,{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["firstName","lastName"],
            additionalProperties:false,
            properties:{
                _id:{},
                firstName:{bsonType:"string"},
                lastName:{bsonType:"string"},
                age:{bsonType:"number",maximum:15}
            }
        } //jsonSchema
    }//validator
,validationAction:"error" ,
validationLevel:"off"
})
db.students.updateOne({_id:2}, {$set:{age:100} , $unset:{lastName:""}})
db.students.insertOne({_id:3})
db.students.insertOne({firstName:"Gana" , lastName:"Omar",age:13 ,_id:2 })
db.students.insertOne({firstName:"Aya" ,lastName:"Ahmed" ,age:10,salary:1000})
db.students.find({_id:2})