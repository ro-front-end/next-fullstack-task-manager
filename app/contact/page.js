"use client";

import React from "react";
import { FaLinkedin, FaGlobe, FaEnvelope, FaInstagram } from "react-icons/fa"; // Importa los íconos necesarios

function Contact() {
  return (
    <div className="min-h-screen bg-neutral-900 text-orange-50 p-8">
      {/* Título Principal */}
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 mb-12">
        Contact Me
      </h1>

      {/* Sección de Datos de Contacto */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-neutral-950 to-slate-900 p-8 rounded-2xl shadow-md space-y-6">
        {/* LinkedIn */}
        <div className="flex items-center gap-4 group">
          <FaLinkedin className="h-8 w-8 text-cyan-400 transition duration-300 group-hover:text-amber-500" />
          <a
            href="https://www.linkedin.com/in/rodrigo-arellano-ganem/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition duration-300 group-hover:text-cyan-400"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Portafolio */}
        <div className="flex items-center gap-4 group">
          <FaGlobe className="h-8 w-8 text-cyan-400 transition duration-300 group-hover:text-amber-500" />
          <a
            href="https://portfolio-front-end-rodrigo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition duration-300 group-hover:text-cyan-400"
          >
            Portfolio Website
          </a>
        </div>

        {/* Correo Electrónico */}
        <div className="flex items-center gap-4 group">
          <FaEnvelope className="h-8 w-8 text-cyan-400 transition duration-300 group-hover:text-amber-500" />
          <a
            href="mailto:newmearound@outlook.com"
            className="text-gray-300 transition duration-300 group-hover:text-cyan-400"
          >
            newmearound@outlook.com
          </a>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-4 group">
          <FaInstagram className="h-8 w-8 text-cyan-400 transition duration-300 group-hover:text-amber-500" />
          <a
            href="https://www.instagram.com/rock_front_end/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition duration-300 group-hover:text-cyan-400"
          >
            Instagram Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
