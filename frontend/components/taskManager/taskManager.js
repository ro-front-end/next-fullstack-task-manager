"use client";

import React, { useState, useEffect, useContext } from "react";
import { getTasks, deleteTask, updateTask } from "@/frontend/services/tasks"; // Asegúrate de que la ruta es correcta
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { TaskContext } from "@/context/taskContext";

const buttons = [
  {
    id: 1,
    name: "edit",
    icon: <FaPencilAlt />,
    bg: "bg-cyan-600",
    onHover: "hover:bg-cyan-700",
  },
  {
    id: 2,
    name: "delete",
    icon: <FaTimes />,
    bg: "bg-orange-500",
    onHover: "hover:bg-rose-900",
  },
];

function TaskManager() {
  const { tasks, deleteTask, updateTask } = useContext(TaskContext);
  const [editedTask, setEditedTask] = useState(null);
  const [taskData, setTaskData] = useState({ title: "", description: "" });

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       const tasksFromApi = await getTasks();
  //       setTasks(tasksFromApi);
  //     } catch (error) {
  //       console.error("Error fetching tasks:", error);
  //     }
  //   };

  //   fetchTasks();
  // }, []);

  const handleEdit = (task) => {
    setEditedTask(task);
    setTaskData({ title: task.title, description: task.description });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!taskData.title || !taskData.description) {
      alert("Both title and description are required.");
      return;
    }

    try {
      await updateTask(editedTask._id, taskData);
      setEditedTask(null);

      alert("Task updated successfully");
    } catch (error) {
      alert("Error updating task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      alert("Task deleted successfully");
    } catch (error) {
      alert("Error deleting task.");
    }
  };

  return (
    <div className="p-6">
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task._id}
              className="bg-gradient-to-r from-neutral-950 to-slate-900 p-6 rounded-2xl shadow-md mb-4 flex justify-between gap-14 items-center transition duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-lg">{task.title}</h3>
                <p className="text-gray-400">{task.description}</p>
              </div>

              <div className="flex gap-2">
                {buttons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => {
                      if (btn.name === "edit") {
                        handleEdit(task);
                      }
                      if (btn.name === "delete") {
                        handleDelete(task._id);
                      }
                    }}
                    className={`p-2 rounded-md cursor-pointer ${btn.bg} ${btn.onHover} text-white transition duration-300`}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-white">No tasks available.</p>
        )}
      </ul>

      {editedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg w-96">
            <h2 className="text-white text-xl font-bold text-center mb-6">
              Edit Task
            </h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-white font-medium mb-2"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={taskData.title}
                  onChange={(e) =>
                    setTaskData({ ...taskData, title: e.target.value })
                  }
                  className="w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-white font-medium mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={taskData.description}
                  onChange={(e) =>
                    setTaskData({ ...taskData, description: e.target.value })
                  }
                  className="w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setEditedTask(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-md hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 transition duration-300"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskManager;
