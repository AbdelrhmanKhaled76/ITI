// var x=5;
// let y=8;
// const name="asd";

// console.log(x+y)

// fetch("https://dummyjson.com/posts/1").then(res=>res.json()).then(data=>console.log(data))

// setTimeout(()=>{
//     console.log("Hello world")
// },2000)

// console.log(global);

//////

// const fs=require("fs");

// console.log("first");

// const data=fs.readFileSync("./text.txt","utf-8")
// console.log(data);

// fs.readFile("./text.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }

// })

//
// fs.writeFileSync("./text.txt","Hello world")
// fs.writeFile("./text.txt","node js ui ",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })
// const txt="Hello world "
// fs.appendFile("./text.txt",txt,(err)=>{
//     if(err){
//         console.log(err);
//     }
// })
// console.log("finished");

//////////

// console.log(process.argv);

////
//todo app  crud operations create read update delete
//node index create "learn node js"
//node index read
//node index update id "new title"
//node index delete id

const fs = require("fs");
const [, , command, ...args] = process.argv;

const readFromTodos = () => {
  return JSON.parse(fs.readFileSync("./todos.json", "utf-8"));
};

const WriteTodos = (todos) => {
  fs.writeFileSync("./todos.json", JSON.stringify(todos, null, 2));
};
const addTodo = (title) => {
  const todo = {
    id: Date.now(),
    title,
  };
  const todos = readFromTodos();
  todos.push(todo);
  WriteTodos(todos);
  //   fs.appendFileSync("./todos.json", JSON.stringify(todo));
  //   WriteTodos(todo);
};

const listTodos = () => {
  const todos = readFromTodos();
  console.log(todos);
};

const updateTodo = (id, newTitle) => {
  const todos = readFromTodos();
  const todo = todos.findIndex((todo) => todo.id == id);
  console.log(todo);

  if (todo != -1) {
    todos[todo].title = newTitle;
    WriteTodos(todos);
  } else {
    console.log("todo not found");
  }
};

switch (command) {
  case "create":
    addTodo(args[0]);
    break;

  case "read":
    listTodos();
    break;
  case "update":
    updateTodo(args[0], args[1]);
    break;
}
