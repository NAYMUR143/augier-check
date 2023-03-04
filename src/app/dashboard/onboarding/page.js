"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Box, Container } from "@mui/material";
import Link from "next/link";
import { Inter } from "next/font/google";
import FundHeader from "components/dashboard/BoardingHeader";
import { AugierContainer } from "@/app/page";
import { FiSearch } from "react-icons/fi";
import { Button, Grid } from "@mui/joy";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { GrNext } from "react-icons/gr";
const inter = Inter({ subsets: ["latin"] });
const LandingDiv = styled.div`
  .menu-icons-container {
    img {
      cursor: pointer;
    }
  }

  .left-menu-top-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: left;

    color: #434343;
  }

  .left-menu-top-sub-title {
    position: relative;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: left;

    color: #939393;

    margin-top: 12px;
  }

  .left-menu-top-sub-title-after::after {
    content: url(/images/onboarding/svg/subtitle-after.svg);

    position: relative;
  }
  .right-top-title {
    padding: 28px 0 0 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: left;

    color: #434343;

    align-self: flex-start;
  }
  .small-preview-title {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    color: #000000;
  }
  .small-preview-main {
    width: 106px;
    height: 140px;

    background: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;

    font-weight: 500;
    font-size: 8px;
    line-height: 10px;

    color: #9f9f9f;

    padding: 26px 14px;
    @media screen and (max-width: 1200px) {
      width: 186px;
      font-size: 13px;
      line-height: 100%;
    }
  }
`;
const OnboardingSec = styled.div`
  h1 {
    font-weight: 500;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    color: #4b4b4b;
    padding-bottom: 40px;
  }
  .searchbar {
    width: 90%;
    margin: auto;
    background: #2e2b2b;
    border-radius: 20px;

    .searchWrap {
      border: 2px solid #000;
      border-radius: 20px;
      background: #000000;
      width: 100%;
      display: flex;
      margin: auto;
      position: relative;
    }

    svg {
      position: absolute;
      top: 30%;
      left: 30px;
      color: #fff;
      font-size: 1.6em;
    }
    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      padding: 20px 20px 20px 70px;
      font-size: 1.1em;
      &::placeholder {
        opacity: 0.8;
      }
    }
    @media screen and (min-width: 900px) {
      width: 846px;
    }
    @media screen and (max-width: 900px) {
      input {
        font-size: 0.8em;
        padding: 15px 15px 15px 40px;
      }
      svg {
        left: 10px;
        font-size: 1.3em;
      }
    }
  }
  .suggestion {
    padding: 20px;
    ul {
      list-style: none;
      text-align: left;
      li {
        display: flex;
        gap: 10px;
        padding: 5px 0px;
        span {
          font-size: 1.2em;
          color: #838282;
          font-weight: 500;
        }
        p {
          color: #fff;
          line-height: 120%;
        }
      }
    }
  }
`;
const Hr = styled.div`
  position: relative;
  width: 100%;
  height: 2px;

  background: #e0e0e0;
  margin: 15px 0 0 0;
`;
const HrMiddle = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin-bottom: 30px;
`;
const MiddlePart = styled.div`
  padding: 40px;
  padding-bottom: 50px;
  background: rgba(247, 247, 247, 0.8);
  border-radius: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 1.2em;
      color: #7e7e7e;
    }
    h1 {
      font-weight: 500;
      font-size: 2em;
      line-height: 24px;
      padding: 20px;
      background: linear-gradient(180deg, #161616 0%, rgba(0, 0, 0, 0.78) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      @media screen and (max-width: 600px) {
        font-size: 1.01em;
        padding: 10px;
      }
    }
  }

  .textarea-wrapper {
    padding: 0px;
    .p {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #343434;
      @media screen and (max-width: 600px) {
        font-size: 13px;
        line-height: 120%;
      }
    }

    textarea {
      margin: 30px 0;
      padding: 10px;
      resize: none;
      width: 100%;
      height: 90px;

      background: rgba(254, 254, 254, 0.8);
      border: 1px solid #aaaaaa;
      border-radius: 10px;
    }
    .list {
      font-weight: 500;
      p {
        font-size: 18px;
        line-height: 22px;
        color: #989898;
      }
      ul {
        padding-left: 20px;
      }
      li {
        font-size: 18px;
        line-height: 22px;

        color: #989898;
      }
      @media screen and (max-width: 600px) {
        p {
          font-size: 14px;
        }
        li {
          font-size: 14px;
        }
      }
    }
  }
`;
const Btn = styled.div`
  display: flex;
  justify-content: end;
`;
function Onboarding() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClickOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const [inputData, setInputData] = useState();
  const menuIconWidth = 24;
  const middleTopRightUserWidth = 20;
  const targetLinkIconWidth = 5;

  return (
    <main className={inter.className}>
      <LandingDiv>
        <Fade top>
          <FundHeader />
        </Fade>

        <OnboardingSec>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              padding: "40px 0px 50px",
            }}
          >
            <Bounce>
              <h1>Onboarding</h1>
            </Bounce>
            <Fade left>
              <div className="searchbar">
                <div className="searchWrap">
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <FiSearch />
                    <input
                      type="text"
                      id="search"
                      placeholder="Ask any legal question... "
                    />
                  </Box>
                  <Button
                    sx={{
                      background: "#fff",
                      border: "2px solid #fff",
                      borderRadius: "18px",
                      color: "#787878",
                      fontSize: {
                        xs: ".8em",
                        sm: "1.3em",
                      },
                      textTransform: "capitalize",
                      color: "#000",
                      transition: ".2s",
                      width: {
                        xs: "100px",
                        sm: "150px",
                      },
                      "&:hover": {
                        background: "#000",
                        color: "#fff",
                      },
                    }}
                    onClick={handleToggle}
                  >
                    Enters
                  </Button>
                </div>

                {isOpen && (
                  <Box>
                    <div className={`suggestion ${isOpen ? "open" : ""}`}>
                      <ul>
                        <li>
                          <span>Saketh:</span>
                          <span>What is an RIA?</span>
                        </li>
                        <li>
                          <p>FundBot:</p>
                          <p>
                            RIA stands for Registered Investment Advisor. It
                            refers to a person or firm that provides investment
                            advice and portfolio management services to clients
                            in exchange for a fee. RIAs are registered with the
                            Securities and Exchange Commission (SEC) or state
                            securities regulators and are subject to regulations
                            designed to protect investors. To become an RIA in
                            the United States, an individual or firm must meet
                            regulatory requirements, pass the Series 65 exam,
                            and comply with ongoing regulatory requirements and
                            continuing education.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Box>
                )}
              </div>
            </Fade>
          </Box>
        </OnboardingSec>

        <AugierContainer>
          <Grid
            container
            spacing={4}
            sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}
          >
            <Grid xl={3} lg={2.5} xs={12}>
              <Fade right>
                <Box
                  sx={{
                    padding: "10px",
                    background: "#F2F2F2",
                    height: "100%",
                    "border-radius": "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      padding: "10px",
                      width: "100%",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    className="menu-icons-container"
                  >
                    <Image
                      src="/images/onboarding/svg/menu-left.svg"
                      alt="menu icons"
                      width={menuIconWidth}
                      height={menuIconWidth}
                    />
                    <Image
                      src="/images/onboarding/svg/menu-middle.svg"
                      alt="menu icons"
                      width={menuIconWidth}
                      height={menuIconWidth}
                    />
                    <Image
                      src="/images/onboarding/svg/menu-right.svg"
                      alt="menu icons"
                      width={menuIconWidth}
                      height={menuIconWidth}
                    />
                  </Box>

                  <Box
                    sx={{
                      padding: "0 10px 0 10px",

                      width: "100%",
                      height: "100%",

                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p className="left-menu-top-title">Summary</p>
                    <Hr />
                    <p className="left-menu-top-sub-title">
                      LIMITED PARTNERSHIP NAME
                    </p>
                    <p className="left-menu-top-sub-title-after"></p>
                    <p className="left-menu-top-sub-title">BUSINESS ADDRESS</p>
                    <p className="left-menu-top-sub-title-after"></p>
                    <p className="left-menu-top-sub-title">PURPOSE OF LP</p>
                    <p className="left-menu-top-sub-title-after"></p>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            <Grid xl={6} lg={7} xs={12}>
              <Fade bottom>
                <MiddlePart>
                  <div className="title">
                    <Box sx={{ display: "flex" }}>
                      <span>1</span>
                      <h1>Limited Partnership Name</h1>
                    </Box>
                    <Box>
                      <Image
                        src="/images/onboarding/svg/middle-top-right-user.svg"
                        alt="middle-top-right-user"
                        width={middleTopRightUserWidth}
                        height={middleTopRightUserWidth}
                      />
                    </Box>
                  </div>

                  <HrMiddle />

                  <div className="textarea-wrapper">
                    <p className="p">
                      Enter the Limited Partnership’s legal name exactly as
                      specified in its certificate of incorporation, including
                      punctuation.
                    </p>

                    <textarea
                      className="legal-name-input"
                      onChange={(e) => setInputData(e.target.value)}
                    />

                    <div className="list">
                      <p>Example:</p>
                      <ul>
                        <li>Pied Pier Inc.</li>
                        <li>Augier Inc.</li>
                        <li>Clerky Inc.</li>
                      </ul>
                    </div>
                    <Btn>
                      <Button
                        sx={{
                          background: "#333333",
                          border: "2px solid #333333",
                          borderRadius: "15px",
                          color: "#C1C1C1",
                          fontSize: ".8em",
                          textTransform: "capitalize",
                          padding: "5px 25px",
                          "&:hover": {
                            background: "#fff",
                            color: "#333333",
                          },
                        }}
                      >
                        Next
                      </Button>
                    </Btn>
                  </div>
                </MiddlePart>
              </Fade>
            </Grid>
            <Grid xl={3} lg={2.5} xs={12}>
              <Fade left>
                <Box
                  sx={{
                    padding: "10px",
                    background: "#EEEEEE",
                    height: "100%",
                    "border-radius": "20px",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="right-top-title">Documents Created</div>
                  <Hr />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      alignItems: "center",
                      padding: "0 74px",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  >
                    <p className="small-preview-title">PPM</p>

                    <div className="small-preview-main">
                      Large blah blah blah arge blah blah blah Large blah blah
                      blah Large blah blah blah
                    </div>

                    <Button
                      sx={{
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "15px",
                        textDecoration: "underline",
                        color: "#5b61f1",
                      }}
                      onClick={handleClickOpen}
                    >
                      <span>Open Doc</span>
                      <span className="target-link-img-container">
                        <Image
                          src="/images/onboarding/svg/target-link.svg"
                          alt="target-icon"
                          width={targetLinkIconWidth}
                          height={targetLinkIconWidth}
                        />
                      </span>
                    </Button>
                    <Dialog open={modalOpen} onClose={handleClose}>
                      <DialogTitle
                        xs={{
                          textAlign: "center",
                        }}
                      >
                        LPA Document
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>{inputData}</DialogContentText>
                      </DialogContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                        <Button
                          onClick={handleClose}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <GrNext />
                          <p>Next Page</p>
                        </Button>
                      </Box>
                    </Dialog>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      alignItems: "center",
                      padding: "0 74px",
                    }}
                  >
                    <p className="small-preview-title">LPA</p>

                    <div className="small-preview-main"></div>

                    <Button
                      sx={{
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "15px",
                        textDecoration: "underline",
                        color: "#5b61f1",
                      }}
                    >
                      <span>Open Doc</span>
                      <span className="target-link-img-container">
                        <Image
                          src="/images/onboarding/svg/target-link.svg"
                          alt="target-icon"
                          width={targetLinkIconWidth}
                          height={targetLinkIconWidth}
                        />
                      </span>
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </AugierContainer>
      </LandingDiv>
    </main>
  );
}

export default Onboarding;
