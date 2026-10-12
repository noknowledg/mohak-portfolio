import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bento from "@/components/Bento";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Future from "@/components/Future";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bento />
        <Journey />
        <Skills />
        <Future />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}