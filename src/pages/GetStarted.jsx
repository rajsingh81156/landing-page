import { CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0721] via-[#2a0a4a] to-[#4a0f6d] 
    text-white flex items-center justify-center px-6">

      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-xl 
      border border-white/10 rounded-3xl p-10 md:p-14">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Get Started with Our Platform 🚀
        </h1>



        {/* Steps / Features */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {[
            "Modern React-based architecture",
            "Clean & responsive UI design",
            "Fast navigation with React Router",
            "Scalable architecture with optimized builds."
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white/5 p-5 rounded-xl border border-white/10"
            >
              <CheckCircle className="text-green-400 mt-1" />
              <span className="text-gray-200">{item}</span>
            </div>
          ))}
        </div>


        <div className="flex flex-wrap gap-6">
          <button
            onClick={() => navigate("/continue")}
            className="px-8 py-3 rounded-full bg-gradient-to-r 
            from-purple-500 to-pink-500 font-semibold hover:scale-105 transition"
          >
            Continue
          </button>


          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-full border border-white/30 
            hover:bg-white/10 transition"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
