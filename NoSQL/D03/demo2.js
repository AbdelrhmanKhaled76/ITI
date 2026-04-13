db.getCollection("instructors").find({})
db.instructors.aggregate([{
    $match:{age:{$gt:20}}
} ,{
    $group:{
        _id:"$age" ,
//        count:{$sum:1}
          salaries:{$avg:"$salary"}
    }
}
,{
    $project:{
        _id:0,
        totalSalary:"$salaries"
    }
} ,{
    $out:"newCollection"
}
])

let depts=[{
    _id:1,
    name:"SD",
    location:"1'stFloor",
    phone:"0123456"
},
{
    _id:2,
    name:"OS",
    location:"2'stFloor",
    phone:"0123456"
}
]

let students=[{
    firstName:"ahmed",
    lastName:"ahmed",
    addresses:[
        {
            city:"mansoura",
            street:30
        },
        {
            city:"alex",
            street:24
        }
    ],
    department:1,
    subjects:[
    2,3
    ]
},
{
firstName:"hesham",
    lastName:"mohamed",
    addresses:[
        {
            city:"mansoura",
            street:30
        },
        {
            city:"alex",
            street:24
        }
    ],
    department:1,
    subjects:[
    2,3
    ]
}
]
db.students.insertMany(students)
db.departments.insertMany(depts)
db.students.find()
db.departments.find()
db.students.aggregate([{
    $lookup:{
        from:"departments",
        localField:"department",
        foreignField:"_id" ,
        as:"departmentInfo"
    }
}])
db.newCollection.find()