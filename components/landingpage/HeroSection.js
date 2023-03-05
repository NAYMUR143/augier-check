"use client";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import Typed from "react-typed";
const Main = styled.div`
  background: linear-gradient(to top, #c3c3c3, #f2f2f2 100%);
  padding-bottom: 10px;
  height: 100%;
`;
const Herosection = styled.section`
  .demo-video {
    border: 6px solid #000;
    width: 80%;
    height: 400px;
    border-radius: 20px;
    margin: auto;
    @media screen and (max-width: 900px) {
      width: 100%;
      height: 300px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      height: auto;
    }
    video {
      object-fit: cover;
      border-radius: 13px;
    }
  }
  .start-fund-section {
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.8) 100%);
    border: 1px solid #bababa;
    border-radius: 20px;
    padding: 50px;
    text-align: center;
    margin: 100px 0px;

    h1 {
      color: #fff;
      font-size: 3.1em;
      line-height: 120%;
      font-weight: 500;
    }
    p {
      font-size: 1.8em;
      line-height: 120%;
      padding: 20px 0px;
      color: #888888;
    }
    .text-grandient {
      background-image: linear-gradient(to bottom, #000000, #00000075);
      background-size: 100%;
      background-repeat: repeat;

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
  @media screen and (max-width: 1200px) {
    .start-fund-section {
      padding: 30px;
      h1 {
        font-size: 2.7rem;
        br {
          display: none;
        }
      }
      p {
        font-size: 1.4rem;
        br {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    .start-fund-section {
      margin: 50px 0px;
      padding: 30px;
      h1 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .start-fund-section {
      padding: 30px;
      h1 {
        font-size: 1.3em;
      }
      p {
        font-size: 0.8em;
      }
    }
  }
`;
const Wrap = styled.div`
  display: grid;
  justify-content: center;
  overflow: hidden;
  h1 {
    color: #000000;
    font-weight: 500;
    font-size: 4.5em;
    line-height: 110%;
    padding: 40px 0px 30px;

    .gradient {
      padding: 0px 25px;
      @media screen and (max-width: 900px) {
        padding: 0px 8px;
      }
      .typed-cursor {
        opacity: 1;
        animation: typedjsBlink 0.7s infinite;
        -webkit-animation: typedjsBlink 0.7s infinite;
        animation: typedjsBlink 0.7s infinite;
      }
      @keyframes typedjsBlink {
        50% {
          opacity: 0;
        }
      }
      @-webkit-keyframes typedjsBlink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .typed-fade-out {
        opacity: 0;
        transition: opacity 0.25s;
        -webkit-animation: 0;
        animation: 0;
      }
      background-image: linear-gradient(
        to bottom,
        #d3c85e91,
        #d3c85e91,
        #000000e8 100%
      );
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      position: relative;
    }
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 2.5em;
      text-align: center;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.5em;
      text-align: center;
      br {
        display: none;
      }
    }
  }
`;

function HeroSection() {
  return (
    <Main>
      <Fade top>
        <Header />
      </Fade>

      <Herosection>
        <Container>
          <Wrap>
            <Fade bottom>
              <h1>
                The easiest way to form <br /> your own
                <span className="gradient">
                  <Typed
                    strings={["Real Estate", "Hedge", "ESG", "Crypto"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                  />
                </span>
                Fund
              </h1>
            </Fade>

            <Fade bottom>
              <div className="demo-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%" }}
                >
                  <source src="/augier-demo.mp4" />
                </video>
              </div>
            </Fade>
          </Wrap>

          <div className="start-fund-section">
            <Fade bottom>
              <h1>
                Augier is a powerful, safe, and easy-to-use <br /> platform for
                forming a private fund
              </h1>
            </Fade>

            <Fade bottom>
              <p>
                By removing lengthy paperwork, legal complexity, and numerous
                fees, <br /> Augier helps emerging fund managers launch funds in
                the United States
              </p>
            </Fade>

            <Fade bottom>
              <Button
                sx={{
                  background: "#fff",
                  border: "2px solid #333333",
                  borderRadius: "30px",
                  color: "#C1C1C1",
                  fontSize: { md: "1.35em" },
                  textTransform: "capitalize",
                  padding: "12px 40px",
                  "&:hover": {
                    background: "#f2f2f2",
                  },
                }}
              >
                <a href="#">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "#4E4E4E",
                    }}
                  >
                    <span className="text-grandient">Start your fund</span>
                    <BiRightArrowAlt />
                  </Box>
                </a>
              </Button>
            </Fade>
          </div>
        </Container>
      </Herosection>
    </Main>
  );
}

export default HeroSection;
