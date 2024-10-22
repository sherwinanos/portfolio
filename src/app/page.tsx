import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <About />
      <Testimonials />
    </>
  );
}
