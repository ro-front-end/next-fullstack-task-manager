"use client";

import { createContext, useState, useEffect } from "react";
import { getTasks } from "@/frontend/services/tasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const tasksFromApi = await getTasks();
      setTasks(tasksFromApi);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
