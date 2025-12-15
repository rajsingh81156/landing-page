import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Continue() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // 🔹 REGISTER
  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      setMessage("❌ User already exists");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("✅ Registration successful! Please login.");
    setIsLogin(true);
    setName("");
    setEmail("");
    setPassword("");
  };

  // 🔹 LOGIN
const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    setMessage("❌ Invalid email or password");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  navigate("/dashboard"); 
};


  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? handleLogin() : handleRegister();
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-[#0f0721] via-[#2a0a4a] to-[#4a0f6d] px-6 text-white">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl 
      border border-white/10 rounded-3xl p-10">

        <h2 className="text-3xl font-bold text-center mb-2">
          {isLogin ? "Login" : "Register"}
        </h2>

        <p className="text-gray-300 text-center mb-6">
          {isLogin ? "Login to continue" : "Create a new account"}
        </p>

        {message && (
          <p className="text-center mb-4 text-sm text-yellow-400">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 
              border border-white/20 focus:outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 
            border border-white/20 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 
            border border-white/20 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r 
            from-purple-500 to-pink-500 font-semibold hover:scale-105 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-300">
          {isLogin ? "New user?" : "Already have an account?"}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
            className="ml-2 text-pink-400 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 block mx-auto text-sm text-gray-400 hover:text-white"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
