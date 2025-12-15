import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Copy, LogOut, Home } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loginTime, setLoginTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/continue");
    } else {
      setUser(loggedInUser);
      setLoginTime(new Date().toLocaleString());
    }
  }, [navigate]);

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("loggedInUser");
      navigate("/");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(user.email);
    alert("Email copied to clipboard");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-[#0f0721] via-[#2a0a4a] to-[#4a0f6d] px-6">

      {/* Gradient Glow Border */}
      <div className="p-[2px] rounded-3xl 
      bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">

        {/* LIGHT CARD */}
        <div className="w-full max-w-2xl bg-white/85 backdrop-blur-xl 
        rounded-3xl p-10 text-center text-gray-800 shadow-xl">

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Welcome, {user.name} 👋
          </h1>

          <p className="text-gray-600 mb-8">
            You are successfully logged in to your dashboard.
          </p>

          {/* User Info */}
          <div className="grid gap-4 mb-10">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <strong>Name:</strong> {user.name}
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm 
            flex items-center justify-between">
              <span>
                <strong>Email:</strong> {user.email}
              </span>
              <button onClick={copyEmail} className="text-gray-600 hover:text-pink-500">
                <Copy size={18} />
              </button>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-sm text-gray-500">
              Login Time: {loginTime}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-6 py-3 
              rounded-full border border-gray-300 text-gray-700 
              hover:bg-gray-100 transition"
            >
              <Home size={18} /> Home
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 
              rounded-full bg-red-500 text-white 
              hover:bg-red-600 transition font-semibold"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
