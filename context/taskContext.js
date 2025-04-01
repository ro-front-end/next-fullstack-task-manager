"use client";

import { createContext, useState, useEffect } from "react";
import {
  getTasks,
  deleteTask as deleteTaskApi,
  updateTask as updateTaskApi,
} from "@/frontend/services/tasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Función para cargar las tareas desde el backend
  const fetchTasks = async () => {
    try {
      const tasksFromApi = await getTasks();
      setTasks(tasksFromApi);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Función para agregar una nueva tarea al estado global
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Función para eliminar una tarea del estado global
  const deleteTask = async (id) => {
    try {
      await deleteTaskApi(id); // Llama al backend para eliminar la tarea
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Función para actualizar una tarea en el estado global
  const updateTask = async (id, updatedData) => {
    try {
      const updatedTask = await updateTaskApi(id, updatedData); // Llama al backend para actualizar la tarea
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Cargar las tareas al inicializar el contexto
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
