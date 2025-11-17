import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: node, title: "Node Js", style: "shadow-green-400" },
    { id: 6, src: nextjs, title: "Next JS", style: "shadow-white" },
    { id: 7, src: graphql, title: "GraphQL", style: "shadow-pink-400" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 9, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 10, src: express, title: "Express", style: "shadow-white" },
    { id: 11, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
    { id: 12, src: redux, title: "Redux", style: "shadow-purple-500" },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center">
        
        {/* Header */}
        <div className="text-center md:text-left">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-4 text-gray-300">
            These are the technologies I've worked with in my projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center p-6 rounded-lg shadow-md hover:scale-105 transition duration-300 ${style}`}
            >
              <img src={src} alt={title} className="w-16 h-16 object-contain" />
              <p className="mt-4 text-lg">{title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
