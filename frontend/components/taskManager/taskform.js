"use client";

import { createTask } from "@/frontend/services/tasks";
import {
  initialValues,
  validationSchema,
} from "@/frontend/validation/createTaskValidation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";

function Taskform() {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await createTask(values);
      alert("Task added successfully!");

      resetForm();
    } catch (error) {
      console.error("Error adding task");
      alert("An error occurred while adding task.");
    }
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="bg-neutral-950 justify-center items-center flex flex-col gap-2 rounded-2xl">
            <h2 className="uppercase w-full mx-auto text-center text-cyan-50 bg-slate-900 p-4 font-semibold rounded-t-2xl">
              Add a New Task
            </h2>
            <div className="my-4">
              <div className="flex flex-col gap-8 py-4 px-6 rounded-xl w-full">
                <Field
                  className="bg-white text-black p-2"
                  placeholder="Task title..."
                  type="text"
                  name="title"
                  aria-label="Task title"
                />
                <ErrorMessage
                  name="title"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>

              <div className="flex flex-col gap-8 py-4 px-6 rounded-xl w-full">
                <Field
                  className="bg-white text-black p-2"
                  placeholder="Task description..."
                  type="text"
                  name="description"
                  aria-label="description"
                />
                <ErrorMessage
                  name="description"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-semibold cursor-pointer hover:bg-gradient-to-l mb-10 bg-gradient-to-r from-orange-500 to-amber-500 p-2 w-full"
            >
              {isSubmitting ? "Adding..." : "Add a Task!"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Taskform;
