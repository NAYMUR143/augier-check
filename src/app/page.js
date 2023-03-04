"use client";

import { Inter } from "next/font/google";
import Header from "components/landingpage/Header";
import HeroSection from "components/landingpage/HeroSection";
import HowItWorks from "components/landingpage/HowItWorks";
import Process from "components/landingpage/Process";
import Pricing from "components/landingpage/Pricing";
import Footer from "components/landingpage/Footer";
import styled from "@emotion/styled";
const inter = Inter({ subsets: ["latin"] });
export const AugierContainer = styled.div`
  @media screen and (max-width: 600px) {
    max-width: 98%;
    margin: auto;
  }
  @media screen and (max-width: 1200px) {
    max-width: 95%;
    margin: auto;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    margin: auto;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1450px;
    margin: auto;
  }
`;
export default function Home() {
  return (
    <main className={inter.className}>
      <HeroSection />
      <HowItWorks />
      <Process />
      <Pricing />
      <Footer />
    </main>
  );
}
