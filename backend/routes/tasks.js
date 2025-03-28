const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// const dummyTasks = [
//   {
//     title: "Buy Groceries",
//     description: "Get fruits, vegetables, and snacks for the week",
//     completed: false,
//   },
//   {
//     title: "Finish Homework",
//     description: "Complete math and science assignments before the deadline",
//     completed: true,
//   },
//   {
//     title: "Go for a Run",
//     description: "Run 5km in the park to stay fit",
//     completed: false,
//   },
//   {
//     title: "Read a Book",
//     description: "Start reading 'Atomic Habits' by James Clear",
//     completed: false,
//   },
//   {
//     title: "Call Friend",
//     description: "Catch up with an old friend and plan a meetup",
//     completed: true,
//   },
//   {
//     title: "Clean Room",
//     description: "Organize desk, vacuum the floor, and tidy up the closet",
//     completed: false,
//   },
// ];

router.get("/", async (request, response) => {
  try {
    const { page = 1, limit = 10 } = request.query;
    const tasks = await Task.find()
      .skip((page - 1) * limit)
      .limit(limit);

    response.json(tasks);
  } catch (error) {
    response.status(500).json({ error: "Error fetching tasks" });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const task = await Task.findById(id);

    if (!task) {
      response.status(404).json("Task not found");
    }

    response.json(task);
  } catch (error) {
    response.status(500).json({ error: "Error fetching task" });
  }
});

router.post("/", async (request, response) => {
  try {
    const { title, description } = request.body;

    const newTask = new Task({ title, description });

    await newTask.save();

    response.status(201).json(newTask);
  } catch (error) {
    response.status(500).json({ error: "Error creating task" });
  }
});

router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const updates = request.body;

    const updatedTask = await Task.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedTask)
      return response.status(404).json({ error: "Task not found" });

    response.json(updatedTask);
  } catch (error) {
    response.status(500).json({ error: "Error updating task" });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask)
      return response.status(404).json({ error: "Task not found" });

    response.json({ message: "Task deleted successfully" });
  } catch (error) {
    response.status(500).json({ error: "Error deleting task" });
  }
});

module.exports = router;
