import express from "express";
let helthReport = [
  {
    name: "rahul",
    kidney: 3,
    health: "normal",
  },
  {
    name: "virat",
    kidney: 23,
    health: "danger",
  },
];

const app = express();
app.use(express.json());

// ✅ GET all data
app.get("/", (req, res) => {
  res.json({ helthReport });
});

// ✅ GET by name (safe)
app.get("/:name", (req, res) => {
  const name2 = req.params.name;
  const kidneycheck = helthReport.find((kid) => kid.name === name2);

  if (!kidneycheck) {
    return res.status(404).json({ error: "Person not found" });
  }

  console.log("kidney is:", kidneycheck.kidney);
  return res.json({ "no of kidney is": kidneycheck.kidney });
});

// ✅ POST new record
app.post("/post", (req, res) => {
  try {
    const { name, kidney, health } = req.body;

    if (!name || kidney == null || !health) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    helthReport.push({ name, kidney, health });
    return res.json({ helthReport });
  } catch (error) {
    console.error("Error in POST:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ PUT (update health by name)
app.put("/update/:name", (req, res) => {
  try {
    const name = req.params.name;
    const { health } = req.body;

    const updatedHealth = helthReport.find((kid) => kid.name === name);

    if (!updatedHealth) {
      return res.status(404).json({ error: "Person not found" });
    }

    updatedHealth.health = health;
    return res.json({ message: "Health updated", helthReport });
  } catch (error) {
    console.error("Error in PUT:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ DELETE (remove by name)
app.delete("/delete/:name", (req, res) => {
  const name = req.params.name;
  const newReport = helthReport.filter((fill) => fill.name !== name);

  if (newReport.length === helthReport.length) {
    return res.status(404).json({ error: "Person not found" });
  }

  helthReport = newReport;
  return res.json({ message: "Record deleted", helthReport });
});

// ✅ Server start
app.listen(2000, () => {
  console.log("Server started at 2000");
});
