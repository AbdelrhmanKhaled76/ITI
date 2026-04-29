// function lengthComparison<Type extends IsSized>(a:Type,b:Type){
//     if(a.length>=b.length){
//         return a
//     }
//     return b
// }

import { Parent } from "./Models/Parent.js";

// const arr1 = [1,2,3]
// const arr2 = [1,2,4,5]
// console.log(lengthComparison(arr1,arr2))
// interface IsSized{
//     length:number
// }
// interface UserList extends IsSized{
//     users:string[]
    
// }
// const user1:UserList ={
//     users:['a','b','b'],
//     length:6
// }

// const user2:UserList ={
//     users:['a','b'],
//     length:1
// }

// console.log(lengthComparison(user1,user2))
// console.log(lengthComparison("hello","world Day"))
// console.log(lengthComparison(2,1))
/**--------------------------------------------------------------------- */
// class Point2D{
//     // readonly 
//     xPos:number=0
//     protected yPos:number=0
//     constructor(xpos:number=1,ypos:number=1){
//         this.xPos = xpos
//         this.yPos = ypos
//         Point2D.counter++
//     }
//     display(){
//         return `xPos=${this.xPos} ,YPos = ${this.yPos}` 
//     }

//     static counter = 0
// }

// class Point3D extends Point2D{
//     private zPos:number=0
//     constructor(xpos:number,ypos:number,zpos:number){
//         super(xpos,ypos)
//         this.zPos = zpos
//     }
//     display(){
//         return `xPos=${this.xPos} ,YPos = ${this.yPos} ,ZPos=${this.zPos}`
//     }

//     get ZPos(){
//         return this.zPos
//     }
//     set ZPos(val){
//         this.zPos = val
//     }
// }

// // Point2D.count = 0//es5
// class Point4D extends Point3D{
//     wPos :number=0
//     constructor(xpos:number,ypos:number,zpos:number,wpos:number){
//         super(xpos,ypos,zpos)
//         this.wPos = wpos
//     }
// }
// // let p1 = new Point2D(1,2)
// let p1 = new Point2D()
// let p2 = new Point3D(1,2,3)

// let p3:Point2D = new Point3D(1,2,3)
// console.log(p1.xPos)
// console.log(p1.yPos)
// // p1.xPos = 5//error
// console.log(p1.xPos)
// console.log(p2.display())
// console.log(p3.display())
// console.log((p3 as Point3D).zPos)
// let p4 = new Point4D(1,2,3,4)
// console.log(p4.ZPos)
// p4.ZPos = 5
// console.log(p4.ZPos)
// console.log(Point2D.counter)







/**------------------------------------------------------------ */
// interface IsSized{
//     length:number
// }
// class DataBox<Type extends IsSized>{
//     content:Type
//     constructor(_content:Type){
//         this.content = _content
//     }
//     print(){
//         // console.log(this.content)
//         for(let i=0;i<this.content.length;i++){
//             console.log(this.content[i])
//         }
//     }
// }
// const d1 = new DataBox('hello')
// d1.print()
// const d2 = new DataBox([1,2,3])
// d2.print()
// const d3 = new DataBox(5)
// d3.print()




// interface IInterview{
//     startTime:string
//     endTime:string
//     description:string

//     printInterview():void
// // }

// abstract class InterviewClass{
//     protected startTime:string=""
//     protected endTime:string=""

//     public abstract printInterview():void
// }

// class Interview extends InterviewClass{
//     protected endTime: string=""
//     protected startTime: string=""
//     description:string

//     constructor(_startTime:string,_endTime:string,_desc:string){
//         super()
//         this.startTime =_startTime
//         this.endTime = _endTime
//         this.description = _desc
//     }
//     public printInterview(): void {
        
//     }
// }


// class Interview implements IInterview{
//     startTime: string=""
//     endTime: string=""
//     description: string=""
//     printInterview(): void {
//         console.log(`StartTime=${this.startTime}`)
//     }
//     constructor(_startTime:string,_endTime:string,_desc:string){
//         this.startTime =_startTime
//         this.endTime = _endTime
//         this.description = _desc
//     }
// }

let p1:Parent = new Parent('Test Parent Class')
console.log(p1.print())







