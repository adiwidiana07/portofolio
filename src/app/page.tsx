import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <About/>
      <Project/>
      <Contact/>
      
    </main>
  );
}