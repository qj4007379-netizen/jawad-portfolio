import React from "react";

export default function About() {
  // Note: This component doesn't have theme state, but we can enhance it with better colors
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <div className="relative group">
              <img
                src="https://picsum.photos/400/300?random=3"
                alt="Creative Team"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-500 group-hover:shadow-3xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/40 via-purple-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Amazing Team
                </span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl lg:text-5xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse mb-2">
              Building Amazing Experiences with Passion!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"></div>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Welcome to our creative world where{" "}
              <span className="font-bold text-indigo-600">
                innovation meets excellence
              </span>
              ! We are passionate developers who turn ideas into reality with
              cutting-edge technology and stunning design.
            </p>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Our mission is to create{" "}
              <span className="font-bold text-purple-600">
                digital experiences
              </span>{" "}
              that not only work perfectly but also delight and inspire. Join us
              on this exciting journey of creativity and innovation!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold animate-bounce shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                React Experts
              </span>
              <span
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold animate-bounce shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: "0.4s" }}
              >
                UI/UX Design
              </span>
              <span
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full text-sm font-bold animate-bounce shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: "0.8s" }}
              >
                Performance
              </span>
              <span
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-bold animate-bounce shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: "0.12s" }}
              >
                Innovation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
