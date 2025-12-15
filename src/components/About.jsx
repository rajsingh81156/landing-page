import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        About Me
      </h2>

      <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed mb-10">
        I’m a passionate Full-Stack Developer focused on building modern,
        scalable, and high-performance web applications using React,
        JavaScript, and Node.js.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-8">
        <a
          href="https://github.com/rajsingh81156"
          target="_blank"
          className="text-gray-300 hover:text-white hover:scale-110 transition"
        >
          <Github size={30} />
        </a>

        <a
          href="https://linkedin.com/in/raj-singh-5520b339b"
          target="_blank"
          className="text-gray-300 hover:text-white hover:scale-110 transition"
        >
          <Linkedin size={30} />
        </a>

        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          className="text-gray-300 hover:text-white hover:scale-110 transition"
        >
          <Twitter size={30} />
        </a>

        <a
          href="mailto:rajsingh81156@gmail.com"
          className="text-gray-300 hover:text-white hover:scale-110 transition"
        >
          <Mail size={30} />
        </a>
      </div>
    </section>
  ); 
}
