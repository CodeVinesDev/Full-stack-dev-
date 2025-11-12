// import express from "express";
// let helthReport = [
//   {
//     name: "rahul",
//     kidney: 3,
//     health: "normal",
//   },
//   {
//     name: "virat",
//     kidney: 23,
//     health: "danger",
//   },
// ];

// const app = express();
// app.use(express.json());

// // ✅ GET all data
// app.get("/", (req, res) => {
//   res.json({ helthReport });
// });

// // ✅ GET by name (safe)
// app.get("/:name", (req, res) => {
//   const name2 = req.params.name;
//   const kidneycheck = helthReport.find((kid) => kid.name === name2);

//   if (!kidneycheck) {
//     return res.status(404).json({ error: "Person not found" });
//   }

//   console.log("kidney is:", kidneycheck.kidney);
//   return res.json({ "no of kidney is": kidneycheck.kidney });
// });

// // ✅ POST new record
// app.post("/post", (req, res) => {
//   try {
//     const { name, kidney, health } = req.body;

//     if (!name || kidney == null || !health) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     helthReport.push({ name, kidney, health });
//     return res.json({ helthReport });
//   } catch (error) {
//     console.error("Error in POST:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

// // ✅ PUT (update health by name)
// app.put("/update/:name", (req, res) => {
//   try {
//     const name = req.params.name;
//     const { health } = req.body;

//     const updatedHealth = helthReport.find((kid) => kid.name === name);

//     if (!updatedHealth) {
//       return res.status(404).json({ error: "Person not found" });
//     }

//     updatedHealth.health = health;
//     return res.json({ message: "Health updated", helthReport });
//   } catch (error) {
//     console.error("Error in PUT:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

// // ✅ DELETE (remove by name)
// app.delete("/delete/:name", (req, res) => {
//   const name = req.params.name;
//   const newReport = helthReport.filter((fill) => fill.name !== name);

//   if (newReport.length === helthReport.length) {
//     return res.status(404).json({ error: "Person not found" });
//   }

//   helthReport = newReport;
//   return res.json({ message: "Record deleted", helthReport });
// });

// // ✅ Server start
// app.listen(2000, () => {
//   console.log("Server started at 2000");
// });

//  &****************** assignmnet 2 **********

import express from "express";
import { uid } from "uid";

const app = express();
app.use(express.json());

// In-memory data
let todos = [
  {
    id: 1,
    title: "first todo",
    description: "first check the todo",
    completed: false,
  },
  {
    id: 2,
    title: "second todo",
    description: "second check the todo",
    completed: true,
  },
  {
    id: 3,
    title: "third todo",
    description: "third check the todo",
    completed: false,
  },
];

// 1. GET /todos - Retrieve all todo items
app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

// 2. GET /todos/:id - Retrieve a specific todo item by ID
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((t) => String(t.id) === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.status(200).json(todo);
});

// 3. POST /todos - Create a new todo item
app.post("/todos", (req, res) => {
  const { title, description, completed = false } = req.body;
  if (!title || !description)
    return res
      .status(400)
      .json({ error: "Title and description are required" });

  const newTodo = { id: uid(), title, description, completed };
  todos.push(newTodo);
  res.status(201).json({ id: newTodo.id });
});

// 4. PUT /todos/:id - Update an existing todo item by ID
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const { title, description, completed } = req.body;

  const todo = todos.find((t) => String(t.id) === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;

  res.status(200).json(todo);
});

// 5. DELETE /todos/:id - Delete a todo item by ID
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((t) => String(t.id) === id);

  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  todos.splice(index, 1);
  res.status(200).json({ message: "Todo deleted successfully" });
});
// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(3000, () => {
  console.log("✅ Server started at port 3000");
});
