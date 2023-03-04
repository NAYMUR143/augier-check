"use client";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import whiteProdImg from "../images/white-prod.png";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { Button } from "antd";
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
    background-color: #ececec;
    padding: 20px;
    padding-bottom: 0px;

    display: flex;
    flex-direction: row;

    .looking-for-container {
      padding-left: 20px;
      h1 {
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

      form {
        width: 100%;

        div {
          position: relative;

          label {
            position: absolute;
            margin: 14px 0 0 10px;
          }
        }

        input {
          width: 90%;

          padding: 10px 10px 10px 36px;
          margin: 5px 0;

          border: none;
          border-radius: 6px;

          border: 1.75px solid #bbb;

          outline: none;

          font-weight: 500;
          font-size: 18px;
          /* identical to box height */

          color: #525252;
        }
      }
    }

    .lst-btn-container {
      align-self: flex-end;
      cursor: pointer;
      button {
        padding: 16px 30px;
        border: none;
        background-color: #404040;
        color: #ececec;
        border-radius: 14px;
        cursor: pointer;
        transform: translateY(-120%);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .form-container {
      flex-direction: column !important;

      h1 {
        font-size: 1.8rem !important;
      }

      button {
        transform: unset !important;
        margin: 10px 0 !important;
      }
    }

    .get-started-container {
      h1 {
        font-size: 2.6rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .get-started-container {
      padding: 15px;
      h1 {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding-top: 50px;

    > div {
      width: 96%;
    }

    .get-started-container {
      h1 {
        margin: 5px 0 !important;
      }

      img {
        width: 96% !important;
      }
    }
  }
`;
function Wrapper() {
  const labelIconWidth = 20;

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
            <h1>What are you looking for</h1>

            <form>
              <div>
                <label htmlFor="launching_a_fund">
                  <Image
                    src="/images/label-icons/material-symbols_rocket-launch-outline.svg"
                    alt="label"
                    width={labelIconWidth}
                    height={labelIconWidth}
                  />
                </label>
                <input
                  type="text"
                  id="launching_a_fund"
                  value="Launching a Fund"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="fund_administration">
                  <Image
                    src="/images/label-icons/clarity_administrator-solid.svg"
                    alt="label"
                    width={labelIconWidth}
                    height={labelIconWidth}
                  />
                </label>
                <input
                  type="text"
                  id="fund_administration"
                  value="Fund Administration"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="investing_fund">
                  <Image
                    src="/images/label-icons/Group.svg"
                    alt="label"
                    width={labelIconWidth}
                    height={labelIconWidth}
                  />
                </label>
                <input
                  type="text"
                  id="investing_fund"
                  value="Investing in Funds"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="something_else">
                  <Image
                    src="/images/label-icons/ic_round-insert-comment.svg"
                    alt="label"
                    width={labelIconWidth}
                    height={labelIconWidth}
                  />
                </label>
                <input
                  type="text"
                  id="something_else"
                  value="Something Else"
                  readOnly
                />
              </div>
            </form>
          </div>

          <div className="lst-btn-container">
            <Link href="./fund/fundabout">
              <button>Next</button>
            </Link>
          </div>
        </div>
      </Fade>
    </Wrap>
  );
}

export default Wrapper;
