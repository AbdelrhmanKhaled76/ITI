db.employees.insert({}) 
db.employees.find()
db.instructors.insert({id:1,name:"Aya"}) 
db.instructors.find()

let instructorsArray=[{_id:10,firstName:"Mohamed",lastName:"hesham",
                age:27,salary:4500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:11,firstName:"mona",lastName:"ahmed",
                age:30,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:12,firstName:"mazen",lastName:"mohammed",
                age:11,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:13,firstName:"ebtesam",lastName:"hesham",
                age:29,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
               
		
		];
	db.instructors.drop()	
db.instructors.insertMany(instructorsArray)
db.instructors.find({})  //db.instructors.find()    //select * from instructors
//db.instructors.find("query/condition" ,"projection")
db.instructors.find({} ,{age:0 ,salary:0 })
db.instructors.find({} ,{firstName:1,lastName:1,_id:0 })
db.instructors.find({age:21,firstName:"mona",salary:3600},{firstName:1,lastName:1 ,age:1})   // if age===21
db.instructors.find({firstName:"mona"})


db.instructors.find({firstName:"mona"},{lastName:"kjnfdknchsdb"},{firstName:
1,lastName:1})

//find operators
//1-comparison opertors (gt,lt ,gte ,lte ,neq,eq )
//2-logical opertors (and,or...) 
//3-Array operators
//4-element opertors
//5-embeded objects

//embeded objects

//db.instructors.find({"address.city":"cairo"})
//db.instructors.find({"address['city']":"cairo"})  //xxx
//db.instructors.find({address:{city:"cairo"}}) //xxx  //address ==={city:"cairo"}

db.instructors.find({},{"address.city":1})
db.instructors.find({},{"address['city']":1})  //xxx
db.instructors.find({},{address:{city:1}})