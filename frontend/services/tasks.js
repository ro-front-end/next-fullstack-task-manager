import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
});

export const getTasks = async () => {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("Error getting Tasks:", error);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    if (!taskData.title || !taskData.description) {
      throw new Error("Both title and description are required.");
    }

    const response = await api.post("/tasks", taskData);

    return response.data; // O el valor que desees procesar después de agregar la tarea
  } catch (error) {
    console.error("Error adding task:", error);
    throw error; // O maneja el error como desees
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await api.put(`/tasks/${id}`, taskData);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const getTaskById = (id) => api.get(`/tasks/${id}`);
