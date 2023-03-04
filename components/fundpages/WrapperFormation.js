"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import whiteProdImg from "../images/white-prod.png";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Span, Hr, GoogleBtn, Btn, SignSec, Form } from "../auth/auth.style";
import Signin from "components/auth/singin";
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > div {
    position: relative;
    width: 500px;
    padding: 50px 30px 40px 50px;
    margin: 20px;
    border-radius: 14px;
    background-color: #f00;

    > h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      margin-top: 20px;
      color: #ececec;
    }

    > p {
      font-weight: 500;
      font-size: 1rem;
      line-height: 24px;

      background: linear-gradient(
        180deg,
        #d5d5d5 0%,
        rgba(121, 119, 119, 0.85) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  .get-started-container {
    background-color: #000000cc;

    h1 {
      background-size: 100%;
      background-repeat: repeat;
      font-weight: 500;
      font-size: 3.6rem;

      background: linear-gradient(
        180deg,
        #ebebeb 0%,
        rgba(255, 255, 255, 0.46) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  .form-container {
    position: relative;
    background-color: #ececec;
    padding: 20px;
    padding-bottom: 0px;

    display: flex;
    flex-direction: column !important;

    button {
      transform: unset !important;
    }

    .looking-for-container {
      padding-left: 20px;
      h1 {
        line-height: 56px;
        font-size: 2.8rem;
        font-weight: 500;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.64) 50%,
          #000000 100%
        );

        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
    }

    .lst-btn-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 10px;

      align-self: flex-end;

      button {
        padding: 16px 30px;
        border: none;
        background-color: #404040;
        color: #ececec;
        border-radius: 14px;

        transform: translateY(-120%);
      }
      p {
        color: #a7a7a7;
        padding: 20px 0px;
        @media screen and (max-width: 1200px) {
          font-size: 0.8em;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .get-started-container {
      h1 {
        font-size: 2.6rem;
      }
    }

    .form-container {
      flex-direction: column;
      h1 {
        font-size: 1.8rem !important;
      }
    }

    .last-next-btn {
      transform: unset !important;
      margin-left: 5px;
    }

    .last-next-btn {
      transform: unset !important;
      margin-top: 5px !important;
      margin-bottom: 46px !important;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;

    .get-started-container {
      padding: 15px;
      h1 {
        font-size: 2rem;
      }
    }

    .form-container {
      padding: 15px;
      flex-direction: column;
      h1 {
        font-size: 1.6rem !important;
      }
    }

    .last-next-btn {
      transform: unset !important;
      margin-top: 5px !important;
      margin-bottom: 30px !important;
    }
  }

  @media screen and (max-width: 600px) {
    padding-top: 50px;

    > div {
      width: 96%;
    }

    .get-started-container {
      img {
        width: 96% !important;
      }
    }
  }
`;

const Item = styled.div`
  p {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 24px;

    color: #bebebe;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 48px;
    text-align: right;

    background: linear-gradient(
      180deg,
      #c5c5c5 0%,
      rgba(104, 104, 104, 0.46) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media screen and (max-width: 1200px) {
    h2 {
      font-size: 1.4rem !important;
    }
  }
`;

const ItemNext = styled.div`
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 27px;
    /* identical to box height */

    color: #767676;
  }

  p {
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 19px;

    color: #9f9f9f;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 0.75rem;
    }
  }
`;

function WrapperFormation() {
  const router = useRouter();

  const labelIconWidth = 20;
  const [open, setOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const signuphandleClickOpen = () => {
    setTimeout(() => {
      setSignupOpen(true);
    }, 200);
  };

  const signuphandleClose = () => {
    setSignupOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <Wrap>
      <Fade left>
        <div className="get-started-container">
          <p>.01 Finance</p>
          <h1>Get Started</h1>
          <Image src={whiteProdImg} width={400} height={220} />
        </div>
      </Fade>
      <Fade right>
        <div className="form-container">
          <div className="looking-for-container">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 0 }}>
              <Grid item xs={12}>
                <Item>
                  <h1>Fund Formation</h1>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <p>Not Started</p>
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <h2>*$20k to $35k</h2>
                </Item>
              </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
              <Grid item xs={10}>
                <ItemNext>
                  <h3>Pre-requisites</h3>
                </ItemNext>
              </Grid>
              <Grid item xs={16}>
                <ItemNext>
                  <p>
                    Large blah blah blaharge blah blah blaharge blah blah
                    blaharge blah blah blaharge blah blah blaharge blah blah
                    blaharge blah blah blaharge blah blah blaharge blah blah
                    blaharge blah blah blaharge{" "}
                  </p>
                </ItemNext>
              </Grid>
              <Grid item xs={10}>
                <ItemNext>
                  <h3>We provide</h3>
                </ItemNext>
              </Grid>
              <Grid item xs={16}>
                <ItemNext>
                  <p>
                    Large blah blah blaharge blah blah blaharge blah blah
                    blaharge blah blah blaharge blah blah blaharge blah blah
                    blaharge blah blah blaharge blah blah blaharge blah blah
                    blaharge blah blah blaharge{" "}
                  </p>
                </ItemNext>
              </Grid>
            </Grid>
          </div>

          <div className="lst-btn-container">
            <button style={{ cursor: "pointer" }} onClick={handleClickOpen}>
              Start
            </button>

            <p>*You will only be charged after your fund is created</p>
          </div>
          <Signin
            open={open}
            setOpen={setOpen}
            signupOpen={signupOpen}
            handleClose={handleClose}
            signuphandleClickOpen={signuphandleClickOpen}
            signuphandleClose={signuphandleClose}
            handleSubmit={handleSubmit}
            handleClickOpen={handleClickOpen}
          />
        </div>
      </Fade>
    </Wrap>
  );
}

export default WrapperFormation;
