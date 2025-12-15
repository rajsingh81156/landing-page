import { Zap, Shield, Rocket } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-pink-400" />,
    title: "Lightning Fast",
    desc: "Optimized with modern tools for blazing-fast performance."
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    title: "Secure by Design",
    desc: "Built following best security practices and clean architecture."
  },
  {
    icon: <Rocket className="w-8 h-8 text-indigo-400" />,
    title: "Future Ready",
    desc: "Scalable structure that grows with your product."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Powerful Features
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur 
            border border-white/10 hover:scale-105 transition-all duration-300"
          >
            <div className="mb-5 flex justify-center">{f.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
