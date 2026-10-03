import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // State to track which image is currently displayed in the carousel
  const [currentImage, setCurrentImage] = useState(0);

  // State to track dark/light mode - synced with localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  // Array of image URLs for the carousel - using Picsum for beautiful random images
  const images = [
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
    "https://picsum.photos/800/400?random=4",
  ];

  // useEffect hook to create an automatic image carousel
  // Changes image every 4 seconds and cleans up timer on unmount
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 4000ms = 4 seconds
    return () => clearInterval(timer); // Cleanup function
  }, []); // Empty dependency array means this runs once on mount

  // Listen for theme changes from other components
  useEffect(() => {
    const handleThemeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));

    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("themeChange", { detail: newTheme }));
  };

  return (
    // Main container with premium theme backgrounds
    <div
      className={`min-h-screen transition-all duration-1000 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900" // Premium dark theme
          : "bg-gradient-to-br from-slate-50 via-gray-50 to-blue-100" // Elegant light theme
      }`}
    >
      {/* ===== HERO SECTION ===== */}
      {/* This is the main landing area with premium theme backgrounds */}
      <div
        className={`relative overflow-hidden py-20 sm:py-32 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-800 shadow-inner"
            : "bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 shadow-inner"
        }`}
      >
        {/* Main Content Layer - positioned above the background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8">
            {/* Main Heading - Large text with conditional colors */}
            <h1
              className={`text-5xl sm:text-7xl font-black drop-shadow-2xl ${
                isDarkMode
                  ? "text-white" // White text on dark background
                  : "text-gray-900" // Dark text on light background
              }`}
            >
              Hi, I'm Jawad
            </h1>
            <h1
              className={`text-2xl sm:text-1xl font-black drop-shadow-2xl ${
                isDarkMode
                  ? "text-white" // White text on dark background
                  : "text-gray-900" // Dark text on light background
              }`}
            >
              Frontend | Backend | Full Stack Developer
            </h1>

            {/* Subtitle text with conditional colors */}
            <p
              className={`text-xl sm:text-2xl font-light max-w-3xl mx-auto leading-relaxed ${
                isDarkMode
                  ? "text-gray-300" // Light gray text on dark
                  : "text-gray-700" // Dark gray text on light
              }`}
            >
              I am a passionate Full Stack Developer who builds modern,
              responsive, and user-friendly web applications using React,
              Node.js, and other modern technologies.
            </p>

            {/* Call-to-Action Buttons - Two styled buttons for navigation */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              {/* Primary CTA Button - Links to About page */}
              <Link
                to="/about"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
              >
                <span className="relative z-10"> Explore Magic </span>
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              {/* Secondary CTA Button - Links to Contact page */}
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/20 hover:scale-105 transform transition-all duration-300 hover:border-white/50"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements - positioned absolutely for visual flair */}
        <div className="absolute top-1/4 left-10 animate-bounce delay-100">
          <div className="w-6 h-6 bg-yellow-400 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute top-1/3 right-16 animate-ping delay-300">
          <div className="w-4 h-4 bg-pink-400 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute bottom-1/4 left-20 animate-pulse delay-500">
          <div className="w-8 h-8 bg-blue-400 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* ===== IMAGE CAROUSEL SECTION ===== */}
      {/* Interactive image gallery with auto-play and manual controls */}
      <div
        className={`py-20 px-4 transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-800 to-gray-800"
            : "bg-gradient-to-br from-slate-100 to-gray-100"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section title with enhanced gradient colors */}
          <h2
            className={`text-4xl font-bold text-center mb-12 ${
              isDarkMode
                ? "text-white bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
                : "text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            }`}
          >
            Amazing Gallery
          </h2>

          {/* Carousel container with rounded corners and shadow */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Fixed height container for images */}
            <div className="relative h-96 sm:h-[500px]">
              {/* Map through images array to create carousel slides */}
              {images.map((img, index) => (
                <img
                  key={index} // Unique key for React rendering
                  src={img} // Image source URL
                  alt={`Gallery ${index + 1}`} // Alt text for accessibility
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    // Conditional styling: show current image, hide others
                    index === currentImage
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}

              {/* ===== CAROUSEL CONTROLS ===== */}
              {/* Dot indicators at bottom - clickable to jump to specific image */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)} // Jump to clicked image
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      // Highlight active indicator with larger size
                      index === currentImage
                        ? "bg-white scale-125"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows - positioned on left and right sides */}
              {/* Previous button - goes back one image with wraparound */}
              <button
                onClick={() =>
                  setCurrentImage(
                    (prev) => (prev - 1 + images.length) % images.length,
                  )
                }
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                ‹ {/* Left arrow symbol */}
              </button>
              {/* Next button - goes forward one image with wraparound */}
              <button
                onClick={() =>
                  setCurrentImage((prev) => (prev + 1) % images.length)
                }
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                › {/* Right arrow symbol */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FEATURES SECTION ===== */}
      {/* Three-column grid showing key benefits/features */}
      <div
        className={`py-20 px-4 transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 to-gray-900"
            : "bg-gradient-to-br from-white to-slate-50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section heading with premium gradient colors */}
          <h2
            className={`text-4xl font-bold text-center mb-16 ${
              isDarkMode
                ? "text-white bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg"
                : "text-gray-900 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            }`}
          >
            Why Choose Us?
          </h2>

          {/* Responsive grid: 1 column on mobile, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map through features array to create feature cards */}
            {[
              {
                // icon: "🚀",
                title: "Lightning Fast",
                desc: "Super fast performance",
              },
              {
                // icon: "🎨",
                title: "Beautiful Design",
                desc: "Stunning visual experience",
              },
              {
                // icon: "💎",
                title: "Premium Quality",
                desc: "Top-notch craftsmanship",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 text-center hover:scale-105 transform transition-all duration-300 border-2 shadow-xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm hover:from-slate-700/80 hover:to-gray-700/80 border-slate-600 text-white hover:shadow-slate-900/50"
                    : "bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border-indigo-200 text-gray-900 hover:shadow-indigo-200/50"
                }`}
              >
                {/* Animated emoji icon */}
                <div className="text-6xl mb-4 animate-bounce">
                  {feature.icon}
                </div>
                {/* Feature title */}
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                {/* Feature description */}
                <p
                  className={`text-lg ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== FINAL CALL-TO-ACTION SECTION ===== */}
      {/* Last section to encourage user action */}
      <div
        className={`py-20 px-4 text-center transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-800 to-gray-800"
            : "bg-gradient-to-br from-blue-50 to-indigo-100"
        }`}
      >
        {/* Premium gradient background container */}
        <div
          className={`max-w-4xl mx-auto rounded-3xl p-12 shadow-2xl border-2 ${
            isDarkMode
              ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-slate-700"
              : "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 border-blue-200"
          }`}
        >
          {/* Animated heading with better colors */}
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 animate-pulse ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            Ready for Adventure?
          </h2>
          {/* Subtext with better contrast */}
          <p
            className={`text-xl mb-8 ${
              isDarkMode ? "text-indigo-100" : "text-blue-100"
            }`}
          >
            Join thousands of happy users experiencing the magic!
          </p>
          {/* Enhanced CTA button */}
          <Link
            to="/contact"
            className={`inline-block px-12 py-6 font-bold text-xl rounded-full hover:scale-110 transform transition-all duration-300 shadow-xl hover:shadow-2xl animate-bounce ${
              isDarkMode
                ? "bg-white text-indigo-600 hover:bg-gray-100"
                : "bg-white text-blue-600 hover:bg-gray-100"
            }`}
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
