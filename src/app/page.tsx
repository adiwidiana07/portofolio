// Import komponen yang ada di folder components
// Alias "@/components" biasanya diarahkan ke folder "src/components"
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

// Komponen utama halaman (Home Page)
export default function Home() {
  return (
    // Elemen utama halaman menggunakan tag main
    // Styling pakai Tailwind CSS:
    // - bg-white → background warna putih
    // - text-gray-900 → teks warna abu-abu gelap (hampir hitam)
    <main className="bg-white text-gray-900">
      
      {/* Bagian Hero → biasanya berisi banner/judul utama halaman */}
      <Hero />
      
      {/* Bagian About → informasi tentang diri/perusahaan */}
      <About/>
      
      {/* Bagian Project → menampilkan daftar project atau portfolio */}
      <Project/>
      
      {/* Bagian Contact → biasanya form atau informasi kontak */}
      <Contact/>
    
    </main>
  );
} 
