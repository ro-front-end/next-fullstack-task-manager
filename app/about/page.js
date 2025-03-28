"use client";

import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-neutral-900 text-orange-50 p-8">
      {/* Título Principal */}
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 mb-12">
        About This Project
      </h1>

      {/* Descripción General */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-50 mb-4">Overview</h2>
        <p className="text-gray-300">
          This project is a full-stack task management application built using
          modern web technologies. It allows users to create, edit, delete, and
          manage tasks efficiently. The application is designed with a clean and
          responsive user interface, ensuring a seamless experience across
          devices.
        </p>
      </section>

      {/* Tecnologías Utilizadas */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-50 mb-4">
          Technologies Used
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Backend */}
          <div className="bg-black p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-amber-500 mb-3">Backend</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• Mongoose</li>
              <li>• MongoDB Atlas</li>
              <li>• CORS</li>
              <li>• Dotenv</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="bg-black p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-amber-500 mb-3">Frontend</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Next.js</li>
              <li>• React</li>
              <li>• Tailwind CSS</li>
              <li>• Formik</li>
              <li>• Yup</li>
              <li>• Axios</li>
              <li>• React Icons</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso de Desarrollo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-50 mb-4">
          Development Process
        </h2>
        <p className="text-gray-300 mb-4">
          The project was developed in stages to ensure a structured and
          efficient workflow:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-300">
          <li>
            <span className="font-semibold">Setup:</span> Started with Next.js
            for the frontend and set up the project structure.
          </li>
          <li>
            <span className="font-semibold">Backend:</span> Built the backend
            using Node.js and Express. Connected to MongoDB Atlas via Mongoose
            and created schemas for tasks.
          </li>
          <li>
            <span className="font-semibold">API Routes:</span> Developed RESTful
            API routes for CRUD operations and validated them using Postman.
          </li>
          <li>
            <span className="font-semibold">Frontend Integration:</span> Created
            services to interact with the backend using Axios. Built the Task
            Manager page and reusable components like forms, TopBar, and
            BurgerMenu.
          </li>
          <li>
            <span className="font-semibold">Styling:</span> Styled the
            application using Tailwind CSS, ensuring a modern and responsive
            design.
          </li>
        </ol>
      </section>

      {/* Dependencias */}
      <section>
        <h2 className="text-2xl font-semibold text-cyan-50 mb-4">
          Dependencies
        </h2>
        <div className="bg-black p-6 rounded-2xl shadow-md">
          <ul className="text-gray-300 space-y-2">
            <li>• axios: ^1.8.4</li>
            <li>• concurrently: ^9.1.2</li>
            <li>• cors: ^2.8.5</li>
            <li>• dotenv: ^16.4.7</li>
            <li>• express: ^4.21.2</li>
            <li>• formik: ^2.4.6</li>
            <li>• mongoose: ^8.13.0</li>
            <li>• next: 15.2.4</li>
            <li>• react: ^19.0.0</li>
            <li>• react-dom: ^19.0.0</li>
            <li>• react-icons: ^5.5.0</li>
            <li>• yup: ^1.6.1</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
