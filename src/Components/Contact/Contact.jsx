import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 mr-2 bg-gradient-to-br from-white via-gray-50 to-blue-50 sm:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 border-2 border-gray-100">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                📬 Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start an{" "}
                <span className="font-bold text-indigo-600">
                  amazing conversation
                </span>
                !
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  house # 02, raja ashraf road, banigala islamabad
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  0348-555-1426{" "}
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  qj4007379@gmail.com
                </div>
              </div>
            </div>

            <form className="p-8 bg-gradient-to-br from-white to-gray-50 sm:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 flex flex-col justify-center">
              <div className="flex flex-col">
                <label for="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Your Full Name"
                  className="w-100 mt-2 py-4 px-4 rounded-xl bg-white border-2 border-gray-200 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-200 transition-all duration-300 hover:border-purple-300"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label for="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="w-100 mt-2 py-4 px-4 rounded-xl bg-white border-2 border-gray-200 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-200 transition-all duration-300 hover:border-purple-300"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label for="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Your Phone Number"
                  className="w-100 mt-2 py-4 px-4 rounded-xl bg-white border-2 border-gray-200 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-200 transition-all duration-300 hover:border-purple-300"
                />
              </div>

              <button
                type="submit"
                className="md:w-40 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl mt-6 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
