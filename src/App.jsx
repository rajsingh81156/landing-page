import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import GetStarted from "./pages/GetStarted";
import Continue from "./pages/Continue";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gradient-to-br from-[#0f0721] via-[#2a0a4a] to-[#4a0f6d]">
            <Hero />
            <Features />
            <About />
          </div>
        }
      />

      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/continue" element={<Continue />} />
      <Route path="/dashboard" element={<Dashboard />} />


    </Routes>
  );
}

export default App;
