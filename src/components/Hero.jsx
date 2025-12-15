import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { scrollToSection } from "../utils/scroll";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className={`relative flex flex-col items-center text-center px-6 pt-28 pb-24 
      transition-all duration-700 ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* Badge */}
      <div className="mb-7">
        <span className="inline-flex items-center gap-2 px-5 py-2 text-sm rounded-full 
        bg-purple-500/20 text-purple-300 border border-purple-400/30">
          🚀 Built for the Future
        </span>
      </div>

      {/* Heading */}
      <h1 className="max-w-4xl text-4xl md:text-5xl font-extrabold leading-tight text-white">
        Transform Your Digital
        <span className="block mt-4 text-pink-400">Experience</span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl mt-7 text-base md:text-lg text-gray-300 leading-relaxed">
        A modern, high-performance landing page designed to captivate and convert.
        Built with React and Vite for blazing-fast performance.
      </p>

      {/* Buttons */}
      <div className="mt-12 flex gap-6 flex-wrap justify-center">
        
        <button
          onClick={() => navigate("/get-started")}
          className="group flex items-center gap-2 px-8 py-3 rounded-full 
          bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold 
          hover:scale-105 transition">
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </button>

        <button
           onClick={() => scrollToSection("about")}
          className="group flex items-center gap-2 px-8 py-3 rounded-full 
          bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold 
          hover:scale-105 transition">
          About Me
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </button>

        <button
          onClick={() => scrollToSection("features")}
          className="px-8 py-3 rounded-full border border-purple-400/40 
          text-white hover:bg-purple-500/10 transition">
          Learn More
        </button>

      </div>
    </section>
  );
}
