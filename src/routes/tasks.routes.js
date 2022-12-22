const { Router } = require("express");

const router = Router();

router.get("/tasks", (req, res) => {
  res.send("retrieving a list of task")
});

router.get("/tasks/10", (req, res) => {
  res.send("Retrieving a single task");
});

router.post("/tasks", (req, res) => {
  res.send("Creating a task");
});

router.delete("/tasks", (req, res) => {
  res.send("Deleting a task");
});

router.put("/tasks", (req, res) => {
  res.send("Updating a task");
});

module.exports = router;
