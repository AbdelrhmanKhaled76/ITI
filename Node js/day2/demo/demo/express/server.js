// console.log("helllo");

import express from "express";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

// console.log(express());
const app = express();

const read = async () => {
  const data = await fs.readFile("./students.json", "utf-8");
  return JSON.parse(data);
};

const write = async (students) => {
  await fs.writeFile("./students.json", JSON.stringify(students));
};

app.use(express.json());

app.get("/test", (req, res) => {
  // res.send("hello world")
  res.json({ message: "hello world 5555555" });
});

//student :{name age }  crud
//create student post /student

const createStudent = (name, age) => {
  return { id: uuidv4(), name, age };
};

app.post("/student", async (req, res) => {
  try {
    const { name, age } = req.body;
    if (!name || !age) {
      return res.status(400).json({ message: "name and age are required" });
    }
    const student = createStudent(name, age);
    const students = await read();
    students.push(student);
    await write(students);
    return res.status(201).json({ data: student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/student", async (req, res) => {
  const students = await read();
  res.json({ data: students }).status(200);
});

app.patch("/student/:id", async (req, res) => {
  try {
    const newstudent = req.body;
    const { id } = req.params;
    if (!id || !newstudent) {
      return res
        .status(400)
        .json({ message: "id and newstudent are required" });
    }
    const students = await read();
    const index = students.findIndex((stud) => stud.id === id);
    if (index !== -1) {
      students[index] = { ...students[index], ...newstudent };
      await write(students);
      return res.status(200).json({ data: students[index] });
    } else {
      return res.status(404).json({ message: "student not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//nodemon
app.listen(5000, () => {
  console.log("server is running");
});
