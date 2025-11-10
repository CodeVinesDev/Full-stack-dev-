import exprss from "express";
const app = exprss();

const helthReport = [
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

app.get("/", (req, res) => {
  res.json({ helthReport });
});
app.get("/:name", (req, res) => {
  //   console.log(req);

  const name2 = req.params.name;
  const kidneycheck = helthReport.find((kid) => {
    return kid.name === name2;
  });
  console.log("kidemey os ", kidneycheck);
  return res.json({ "no of kidney is": kidneycheck.kidney });
});

app.post("/post", (req, res) => {
  const { name, kidney, health } = req.body;
  helthReport.push({
    name: name,
    kidney,
    health,
  });
});

app.put("/update/:name", (req, res) => {
  const name = req.params;
  const { health } = req.body;
  const updatedHealth = helthReport.find((kid) => {
    if (kid.name === name) {
      kid.health = health;
    }
  });
  return res.json({ "updated health": updatedHealth });
});

app.delete("/delete/:name", (req, res) => {
  const name = req.params;
  const deltatiomn = helthReport.filter((fill) => fill.name !== name);
  return res.json({ deltatiomn });
});

app.listen(2000, () => {
  console.log("server started at 2000");
});
