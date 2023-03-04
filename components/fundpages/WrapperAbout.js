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
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Select, Space } from "antd";
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
        margin-bottom: 10px;
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

      button {
        padding: 16px 30px;
        border: none;
        background-color: #404040;
        color: #ececec;
        border-radius: 14px;

        transform: translateY(-120%);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .form-container {
      flex-direction: column !important;
      button {
        margin: 10px 0 !important;
      }
      h1 {
        font-size: 1.8rem !important;
      }
    }

    .get-started-container {
      h1 {
        font-size: 2.6rem;
      }
    }

    .last-next-btn {
      transform: unset !important;
      margin-left: 5px;
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
  display: flex;
  flex-direction: column;

  input {
    padding: 16px;

    background: rgba(254, 254, 254, 0.8);
    border: 1px solid #aaaaaa;
    border-radius: 10px;
  }
  .ant-space-item {
    width: 100%;
  }
  .ant-select-selector {
    height: 50px !important;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
  label {
    font-weight: 500;
    font-size: 1rem;
    /* identical to box height */

    color: #b1b1b1;
  }
`;

function WrapperAbout() {
  const labelIconWidth = 20;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
            <h1>Let’s hear about you</h1>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 2 }}>
              <Grid item xs={6} sm={6} md={6}>
                <Item>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" />
                </Item>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Item>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" />
                </Item>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Item>
                  <label htmlFor="email">Email Address</label>
                  <input type="text" id="email" />
                </Item>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Item>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" />
                </Item>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Item>
                  <label htmlFor="fundType">Fund Type</label>
                  <Space wrap>
                    <Select
                      defaultValue="lucy"
                      style={{
                        width: "100%",
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                      ]}
                    />
                  </Space>
                </Item>
              </Grid>
            </Grid>
          </div>

          <div className="lst-btn-container">
            <Link href="./fund/fundformation">
              <button style={{ cursor: "pointer" }} className="last-next-btn">
                Next
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </Wrap>
  );
}

export default WrapperAbout;
