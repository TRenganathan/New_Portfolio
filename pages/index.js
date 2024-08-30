import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MySkills from "../components/MySkills";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import FooterComp from "../components/FooterComp";
import AIGerereateButton from "../components/AIGerereateTemplate";
import UserContext from "../lib/context/userContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col   ${inter.className}  m-auto`}>
      <Navbar />
      <Hero />
      <About />
      <MySkills />
      <Experience />
      {/* <Footer />
       */}
      <FooterComp />
      <AIGerereateButton />
    </main>
  );
}
