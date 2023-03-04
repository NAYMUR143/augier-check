"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Box } from "@mui/material";
import Link from "next/link";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AugierContainer } from "@/app/page";
import { Button } from "@mui/joy";
import FundHeader from "components/dashboard/BoardingHeader";

const OnboardingSec = styled.div`
  overflow: hidden;
  h1 {
    font-weight: 500;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    color: #4b4b4b;
    padding-bottom: 40px;
  }
  .nav {
    display: flex;
    list-style: none;
    background-color: #000;
    border-radius: 20px;
    padding: 0 20px;
    flex-wrap: wrap;
    @media screen and (max-width: 600px) {
      width: 95%;
      margin: auto;
    }
    li {
      width: 98px;
      padding: 28px 0 14px 0;
      text-align: center;

      &.active {
        color: #e9e9e9;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          width: 11px;
          height: 11px;
          left: 42px;
          top: 14px;

          background: #d9d9d9;
          border-radius: 11px;
        }
      }
      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #9a9a9a;
      }
    }
  }
`;
const WelcomeTxt = styled.div`
  h1 {
    font-weight: 500;
    font-size: 4.4em;
    line-height: 97px;
    /* identical to box height */
    @media screen and (max-width: 600px) {
      font-size: 2.5em;
      line-height: 120%;
    }
    @media screen and (min-width: 1536px) {
      font-size: 4.8em;
    }
    background: linear-gradient(
      179.22deg,
      #000000 0.67%,
      rgba(0, 0, 0, 0.99) 154.85%,
      rgba(0, 0, 0, 0.79) 230.52%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    &.named {
      background: linear-gradient(
        180deg,
        #ebebeb 0%,
        rgba(89, 89, 89, 0.46) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
`;
const FundFormation = styled.div`
  background: #272727;
  border: 1px solid rgba(65, 65, 65, 0.12);
  border-radius: 10px;
  padding: 30px;
  h1 {
    width: 100%;
    display: flex;
    font-weight: 500;
    font-size: 2.2rem;
    line-height: 100%;
    /* identical to box height */
    text-align: right;
    color: #c1c1c1;
    @media screen and (max-width: 600px) {
      font-size: 1.3em;
    }
    span {
      align-self: flex-end;
      font-size: 1.1rem;
      padding-top: 6px;
      padding-left: 10px;
    }
  }
  p {
    color: #8f8f8f;
    font-weight: 500;
    font-size: 13px;
    &.requistes {
      padding-top: 15px;
      /* identical to box height */
    }
  }
  ul {
    padding-left: 20px;
    li {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #b9b9b9;
      @media screen and (max-width: 600px) {
        font-size: 10px;
      }
    }
  }
  .span {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: #bebebe;
  }
`;
function LandingPage() {
  return (
    <main className={inter.className}>
      <Fade top>
        <FundHeader />
      </Fade>
      <OnboardingSec>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "100px",
          }}
        >
          <Bounce>
            <h1>Onboarding</h1>
          </Bounce>
          <Fade bottom>
            <ul className="nav">
              <li className="active">
                <a href="#">Get Started</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </Fade>
        </Box>
      </OnboardingSec>

      <AugierContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Fade left>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <WelcomeTxt>
                  <h1>Welcome Home</h1>
                  <h1 className="named">Saketh</h1>
                </WelcomeTxt>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade right>
              <FundFormation>
                <h1>
                  Fund Formation <span>($30,000)</span>
                </h1>

                <p>Not Started</p>
                <p className="requistes ">Pre-Requisites</p>
                <ul>
                  <li>
                    Incorporation Documents (i.e. certificates of formation, any
                    amendments, and filing receipts)
                  </li>
                  <li>
                    Founder/Team Agreements (i.e. equity purchase agreements,
                    company consents)
                  </li>
                  <li>Employment and/or Contractor Agreements</li>
                  <li>Service Agreements</li>
                  <li>Confidentiality Agreements</li>
                  <li>Any Additional Third-Party Agreements</li>
                  <li>Business Plan</li>
                  <li>Pitch Deck</li>
                </ul>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      background: "#fff",
                      border: "2px solid #fff",
                      borderRadius: "15px",
                      color: "#787878",
                      fontSize: ".9em",
                      textTransform: "capitalize",
                      width: "140px",
                      margin: "20px 0px",
                      "&:hover": {
                        background: "#787878",
                        color: "#fff",
                      },
                    }}
                  >
                    <Link href="./dashboard/onboarding">Begin</Link>
                  </Button>
                </Box>

                <span className="span">
                  *You will only be charged after your fund is created
                </span>
              </FundFormation>
            </Fade>
          </Grid>
        </Grid>
      </AugierContainer>
    </main>
  );
}

export default LandingPage;
