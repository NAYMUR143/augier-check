"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Box } from "@mui/material";
import FundHeader from "components/fundpages/FundHeader";
import Wrapper from "components/fundpages/Wrapper";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Main = styled.main`
  overflow: hidden;
  height: 100vh !important;
  width: 100%;
  background: linear-gradient(
    180deg,
    #ebebeb 0%,
    rgba(219, 219, 219, 0.85) 5.39%,
    rgba(216, 216, 216, 0.96) 10.59%,
    rgba(197, 197, 197, 0.78) 29.84%,
    rgba(199, 199, 199, 0.78) 41.12%,
    #c5c5c5 68.44%,
    #bbbbbb 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 900px) {
    height: 100%;
  }
`;

function Page() {
  return (
    <Main className={inter.className}>
      <FundHeader />
      <Wrapper />
    </Main>
  );
}

export default Page;
