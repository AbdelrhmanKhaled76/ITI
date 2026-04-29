//find operators
//1-comparison opertors (gt,lt ,gte ,lte ,neq,eq )
//2-logical opertors (and,or...) 
//3-Array operators
//4-element opertors
//5-embeded objects

//1-comparison opertors (gt,lt ,gte ,lte ,ne,eq ,in ,nin)
db.instructors.find()
db.instructors.find({age:{$gte:21} , firstName:"mona"})
db.instructors.find({age:30,age:27})
db.instructors.find({age:{$in:[27,30]}})

///2-logical opertors (and,or...)
db.instructors.find({$or:[{age:21},{lastName:"hesham"}]})
db.instructors.find({$or:[{age:{$gt:21}},{lastName:"hesham"}]})
db.instructors.find({$or:[{age:27},{age:30}]})

//4-element opertors
db.instructors.insertOne({firstName:"Laila" , lastName:"Amr" , salary:"abc"})
//$exists
db.instructors.find({courses:{$exists:"dummy"}}).forEach(inst=>{
    print(`${inst.firstName} ,courses : ${inst.courses.length}`)
})

//$type
db.instructors.find({salary:{$type:"number"}})

//3-Array operators
db.instructors.find({courses:"mvc"})
db.instructors.find({courses:"js",courses:"mvc"})
db.instructors.find({$and:[{courses:"js"} ,{courses:"mvc"}]})
//$all
db.instructors.find({courses:{$all:["js","mvc"]}})
//$size
db.instructors.find({courses:{$size:4}})
db.instructors.find({courses:{$size:{$gt:3}}})   //xxxxx

db.instructors.deleteOne({firstName:"Mahmoud"})
db.employees.deleteMany({})

//update("condition" ,"updateCommand" ,"options")
//1-change field value
db.instructors.updateMany({firstName:"ebtesam"} ,{$set:{lastName:"Omar"}})
db.instructors.find({firstName:"ebtesam"})
//2-add field 
db.instructors.updateMany({firstName:"Laila"} ,{$set:{age:4}})
//3-remove field
db.instructors.updateMany({firstName:"Laila"} ,{$unset:{lastName:""}})
db.instructors.updateMany({},{$set:{Gender:"Male"}})
//4-rename
db.instructors.updateMany({},{$rename:{Gender:"gender"}})

db.instructors.updateMany({firstName:"Mira" } ,{$set:{lastName:"Anas"}} ,{upsert:true})

//embeded object
//1-change field
db.instructors.updateOne({_id:6} ,{$set:{"address.street":30}})
//2-add field
db.instructors.updateOne({_id:6} ,{$set:{"address.floor":5}})
//3-remove
db.instructors.updateOne({_id:6} ,{$unset:{"address.street":""}})

//4-rename
db.instructors.updateOne({_id:6} ,{$rename:{"address.floor":"address.floorNum"}})
//Array
//1-change Value

db.instructors.updateOne({_id:6} ,{$set:{courses:"es6"}})   ///xxxx

//change value for specified element by index
db.instructors.updateOne({_id:7} ,{$set :{"courses.0":"js"}})

//byname
db.instructors.updateOne({_id:7,courses:"mvc"},{$set:{"courses.$":"mongodb"}})
//push new element
db.instructors.updateOne({_id:7} ,{$push:{courses:"nodeJS"}})
//addtoSet
db.instructors.updateOne({_id:7} ,{$addToSet:{courses:"Esnext"}})
db.instructors.find({_id:7})

//remove element
db.instructors.updateOne({_id:7} ,{$pull:{courses:"nodeJS"}})
db.instructors.updateOne({_id:7} ,{$pop:{courses:-1}})