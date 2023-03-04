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
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@mui/joy";

const Hr = styled.hr`
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
  opacity: 1;
  border: none;
`;
const Section = styled.section`
  padding: 50px 0px;

  .txt-sec {
    h3 {
      background-image: linear-gradient(to bottom, #e1debf 30%, #000000 100%);
      background-size: 100%;
      background-repeat: repeat;
      font-weight: 500;
      font-size: 1.85em;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }

    h1 {
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.64) 50%,
        #000000 100%
      );

      background-size: 100%;
      background-repeat: repeat;
      font-weight: 600;
      font-size: 2.8em;
      padding: 10px 0px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      .one-fourth-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        max-width: 60px;

        margin: 0 16px;

        span {
          line-height: 50px;
        }

        .one-fourth-up {
          display: flex;
          flex-direction: row;
          align-items: flex-start;

          span:nth-of-type(1) {
            margin-left: 16px;
          }

          span:nth-of-type(2) {
            font-size: 1.2rem;
            line-height: 30px;
          }
        }

        .one-fourth-middle {
          height: 6px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.64);
        }
      }
    }

    p {
      font-weight: 600;
      color: #444444;
      line-height: 120%;
    }
  }

  .expanded-div-container {
    width: 100%;
    padding: 10px;
    margin: 20px 0;

    > div {
      background-color: #f00;
      margin: 30px 0;
      padding: 30px;
    }

    .p-light-color {
      color: #747474;
      font-size: 1.05rem;
      font-weight: 500;
    }

    .p-light-color-1 {
      color: #aaaaaa;
    }

    .h1-fixed-color {
      color: #000;
      font-size: 2rem;
    }

    li {
      padding-left: 10px;
    }

    li::before {
      content: url(/images/svg/tik.svg);
      position: absolute;
      top: 0%;
      left: 0;

      margin-top: 2px;
    }

    .expanded-div-up {
      border: 1px solid #d9d9d9;
      background: #fbfbfb;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      .img-and-title-container {
        width: 33%;

        h1 {
          margin: 10px 0;
          font-size: 2rem;
          font-weight: 700;

          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.64) 50%,
            #000000 100%
          );

          -webkit-background-size: 100%;
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

      .list-container {
        padding: 0 20px;
        margin: 0 20px;

        width: 52%;
        border-left: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;

        p {
          font-weight: 500;
          color: #434343;
          font-size: 20px;
        }

        li {
          list-style: none;
          color: #434343;
          position: relative;
          margin: 10px 0;

          padding-left: 30px;

          font-size: 16px;
          font-weight: 500;
          @media screen and (max-width: 600px) {
            font-size: 13px;
          }
        }
      }

      .fee-info-container {
        width: 15%;
      }
    }

    .expanded-div-down {
      border: 1px solid #d9d9d9;
      background: #fbfbfb;
      border-radius: 10px;

      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      .img-and-title-container {
        width: 33%;

        h1 {
          margin: 10px 0;
          font-size: 2rem;
          font-weight: 700;

          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.64) 50%,
            #000000 100%
          );
          -webkit-background-size: 100%;
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

      .list-container {
        padding: 0 20px;
        margin: 0 20px;

        width: 52%;
        border-left: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;

        p {
          font-weight: 500;
          color: #434343;
          font-size: 20px;
          @media screen and (max-width: 600px) {
            font-size: 16px;
          }
        }

        li {
          list-style: none;
          color: #434343;
          position: relative;
          margin: 10px 0;

          padding-left: 30px;

          font-size: 16px;
          font-weight: 500;
          @media screen and (max-width: 600px) {
            font-size: 13px;
          }
        }
      }

      .fee-info-container {
        width: 15%;
      }
    }
  }

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 900px) {
    .txt-sec {
      h1 {
        font-size: 2.2rem;
      }
    }

    .expanded-div-container {
      > div {
        flex-direction: column !important;

        > div {
          width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
        }

        .list-container {
          margin: 60px 0 !important;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .txt-sec {
      h1 {
        font-size: 1.4rem;
        .one-fourth-container {
          .one-fourth-up {
            span:nth-of-type(1) {
              margin-left: 5px !important;
            }

            span:nth-of-type(2) {
              line-height: 46px !important;
              font-size: 0.5rem !important;
            }
          }

          .one-fourth-middle {
            height: 3px !important;
          }
        }
      }
      h3 {
        line-height: 100%;
      }
    }

    .expanded-div-container {
      h1 {
        font-size: 1.2rem !important;
      }
      > div {
        padding: 20px !important;
      }
    }
  }
`;

const Wrap = styled.div`
  overflow: hidden;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.8) 100%);
  padding: 40px 30px;
  border-radius: 10px;
  h1 {
    background-size: 100%;
    background-repeat: repeat;
    font-weight: 500;
    padding-bottom: 10px;
    font-size: 3rem;
    text-align: center;
    line-height: 125%;
    background: linear-gradient(
      180deg,
      #ebebeb 0%,
      rgba(255, 255, 255, 0.46) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media screen and (max-width: 900px) {
      font-size: 2.2rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
    }
  }
`;

function Pricing() {
  const labelIconWidth = 20;

  return (
    <Section>
      <Container>
        <Fade bottom>
          <Hr></Hr>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              color: "#7A7A7A",
              fontSize: "1.3em",
            }}
          >
            03
          </Box>
        </Fade>

        <div className="txt-sec">
          <Fade bottom>
            <h3>Pricing</h3>
          </Fade>
          <Fade bottom>
            <h1>
              Set up your fund for
              <span className="one-fourth-container">
                <span className="one-fourth-up">
                  <span>1</span>
                  <span>th</span>
                </span>
                <span className="one-fourth-middle"></span>
                <span className="one-fourth-down">4</span>
              </span>
              price
            </h1>
          </Fade>
        </div>

        <div className="expanded-div-container">
          <Fade bottom>
            <div className="expanded-div-up">
              <div className="img-and-title-container">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 4.375C8.75 3.21468 9.21094 2.10188 10.0314 1.28141C10.8519 0.460936 11.9647 0 13.125 0L56.875 0C58.0353 0 59.1481 0.460936 59.9686 1.28141C60.7891 2.10188 61.25 3.21468 61.25 4.375V32.8125C61.25 33.3927 61.0195 33.9491 60.6093 34.3593C60.1991 34.7695 59.6427 35 59.0625 35C58.4823 35 57.9259 34.7695 57.5157 34.3593C57.1055 33.9491 56.875 33.3927 56.875 32.8125V4.375H13.125V65.625H26.25V54.6875C26.25 54.1073 26.4805 53.5509 26.8907 53.1407C27.3009 52.7305 27.8573 52.5 28.4375 52.5H35V70H13.125C11.9647 70 10.8519 69.5391 10.0314 68.7186C9.21094 67.8981 8.75 66.7853 8.75 65.625V4.375Z"
                    fill="#454545"
                  />
                  <path
                    d="M19.6875 8.75C19.1073 8.75 18.5509 8.98047 18.1407 9.3907C17.7305 9.80094 17.5 10.3573 17.5 10.9375V15.3125C17.5 15.8927 17.7305 16.4491 18.1407 16.8593C18.5509 17.2695 19.1073 17.5 19.6875 17.5H24.0625C24.6427 17.5 25.1991 17.2695 25.6093 16.8593C26.0195 16.4491 26.25 15.8927 26.25 15.3125V10.9375C26.25 10.3573 26.0195 9.80094 25.6093 9.3907C25.1991 8.98047 24.6427 8.75 24.0625 8.75H19.6875ZM32.8125 8.75C32.2323 8.75 31.6759 8.98047 31.2657 9.3907C30.8555 9.80094 30.625 10.3573 30.625 10.9375V15.3125C30.625 15.8927 30.8555 16.4491 31.2657 16.8593C31.6759 17.2695 32.2323 17.5 32.8125 17.5H37.1875C37.7677 17.5 38.3241 17.2695 38.7343 16.8593C39.1445 16.4491 39.375 15.8927 39.375 15.3125V10.9375C39.375 10.3573 39.1445 9.80094 38.7343 9.3907C38.3241 8.98047 37.7677 8.75 37.1875 8.75H32.8125ZM45.9375 8.75C45.3573 8.75 44.8009 8.98047 44.3907 9.3907C43.9805 9.80094 43.75 10.3573 43.75 10.9375V15.3125C43.75 15.8927 43.9805 16.4491 44.3907 16.8593C44.8009 17.2695 45.3573 17.5 45.9375 17.5H50.3125C50.8927 17.5 51.4491 17.2695 51.8593 16.8593C52.2695 16.4491 52.5 15.8927 52.5 15.3125V10.9375C52.5 10.3573 52.2695 9.80094 51.8593 9.3907C51.4491 8.98047 50.8927 8.75 50.3125 8.75H45.9375ZM19.6875 21.875C19.1073 21.875 18.5509 22.1055 18.1407 22.5157C17.7305 22.9259 17.5 23.4823 17.5 24.0625V28.4375C17.5 29.0177 17.7305 29.5741 18.1407 29.9843C18.5509 30.3945 19.1073 30.625 19.6875 30.625H24.0625C24.6427 30.625 25.1991 30.3945 25.6093 29.9843C26.0195 29.5741 26.25 29.0177 26.25 28.4375V24.0625C26.25 23.4823 26.0195 22.9259 25.6093 22.5157C25.1991 22.1055 24.6427 21.875 24.0625 21.875H19.6875ZM32.8125 21.875C32.2323 21.875 31.6759 22.1055 31.2657 22.5157C30.8555 22.9259 30.625 23.4823 30.625 24.0625V28.4375C30.625 29.0177 30.8555 29.5741 31.2657 29.9843C31.6759 30.3945 32.2323 30.625 32.8125 30.625H37.1875C37.7677 30.625 38.3241 30.3945 38.7343 29.9843C39.1445 29.5741 39.375 29.0177 39.375 28.4375V24.0625C39.375 23.4823 39.1445 22.9259 38.7343 22.5157C38.3241 22.1055 37.7677 21.875 37.1875 21.875H32.8125ZM45.9375 21.875C45.3573 21.875 44.8009 22.1055 44.3907 22.5157C43.9805 22.9259 43.75 23.4823 43.75 24.0625V28.4375C43.75 29.0177 43.9805 29.5741 44.3907 29.9843C44.8009 30.3945 45.3573 30.625 45.9375 30.625H50.3125C50.8927 30.625 51.4491 30.3945 51.8593 29.9843C52.2695 29.5741 52.5 29.0177 52.5 28.4375V24.0625C52.5 23.4823 52.2695 22.9259 51.8593 22.5157C51.4491 22.1055 50.8927 21.875 50.3125 21.875H45.9375ZM19.6875 35C19.1073 35 18.5509 35.2305 18.1407 35.6407C17.7305 36.0509 17.5 36.6073 17.5 37.1875V41.5625C17.5 42.1427 17.7305 42.6991 18.1407 43.1093C18.5509 43.5195 19.1073 43.75 19.6875 43.75H24.0625C24.6427 43.75 25.1991 43.5195 25.6093 43.1093C26.0195 42.6991 26.25 42.1427 26.25 41.5625V37.1875C26.25 36.6073 26.0195 36.0509 25.6093 35.6407C25.1991 35.2305 24.6427 35 24.0625 35H19.6875ZM32.8125 35C32.2323 35 31.6759 35.2305 31.2657 35.6407C30.8555 36.0509 30.625 36.6073 30.625 37.1875V41.5625C30.625 42.1427 30.8555 42.6991 31.2657 43.1093C31.6759 43.5195 32.2323 43.75 32.8125 43.75H37.1875C37.7677 43.75 38.3241 43.5195 38.7343 43.1093C39.1445 42.6991 39.375 42.1427 39.375 41.5625V37.1875C39.375 36.6073 39.1445 36.0509 38.7343 35.6407C38.3241 35.2305 37.7677 35 37.1875 35H32.8125ZM52.0012 41.3875C52.7887 38.7056 56.5863 38.7056 57.3781 41.3875L57.5662 42.035C57.6838 42.4366 57.8898 42.8068 58.1692 43.1184C58.4486 43.4299 58.7943 43.6748 59.1809 43.8352C59.5674 43.9955 59.985 44.0671 60.4029 44.0448C60.8208 44.0225 61.2283 43.9068 61.5956 43.7062L62.1906 43.3825C64.645 42.0438 67.3312 44.73 65.9969 47.1844L65.6688 47.7794C65.469 48.1465 65.354 48.5537 65.3321 48.971C65.3102 49.3884 65.382 49.8054 65.5423 50.1913C65.7026 50.5773 65.9472 50.9225 66.2583 51.2017C66.5694 51.4808 66.939 51.6867 67.34 51.8044L67.9919 52.0012C70.6694 52.7887 70.6694 56.5863 67.9919 57.3781L67.3356 57.5662C66.9347 57.6847 66.5655 57.8915 66.2549 58.1714C65.9444 58.4512 65.7005 58.797 65.541 59.1835C65.3816 59.5699 65.3107 59.9871 65.3335 60.4045C65.3564 60.8219 65.4724 61.2289 65.6731 61.5956L65.9969 62.1906C67.3312 64.645 64.645 67.3312 62.1906 65.9969L61.5956 65.6688C61.2285 65.469 60.8213 65.354 60.404 65.3321C59.9866 65.3102 59.5696 65.382 59.1837 65.5423C58.7977 65.7026 58.4525 65.9472 58.1733 66.2583C57.8942 66.5694 57.6883 66.939 57.5706 67.34L57.3738 67.9919C56.5863 70.6694 52.7887 70.6694 51.9969 67.9919L51.8088 67.3356C51.6903 66.9347 51.4835 66.5655 51.2036 66.2549C50.9238 65.9444 50.578 65.7005 50.1915 65.541C49.8051 65.3816 49.3879 65.3107 48.9705 65.3335C48.5531 65.3564 48.1461 65.4724 47.7794 65.6731L47.1844 65.9969C44.73 67.3312 42.0437 64.645 43.3781 62.1906L43.7062 61.5956C43.906 61.2285 44.021 60.8213 44.0429 60.404C44.0648 59.9866 43.993 59.5696 43.8327 59.1837C43.6724 58.7977 43.4278 58.4525 43.1167 58.1733C42.8056 57.8942 42.436 57.6883 42.035 57.5706L41.3875 57.3738C38.7056 56.5863 38.7056 52.7887 41.3875 51.9969L42.035 51.8088C42.4366 51.6912 42.8068 51.4852 43.1184 51.2058C43.4299 50.9264 43.6748 50.5807 43.8352 50.1941C43.9955 49.8076 44.0671 49.39 44.0448 48.9721C44.0225 48.5542 43.9068 48.1467 43.7062 47.7794L43.3825 47.1844C42.0438 44.73 44.73 42.0438 47.1844 43.3781L47.7794 43.7062C48.1465 43.906 48.5537 44.021 48.971 44.0429C49.3884 44.0648 49.8054 43.993 50.1913 43.8327C50.5773 43.6724 50.9225 43.4278 51.2017 43.1167C51.4808 42.8056 51.6867 42.436 51.8044 42.035L52.0012 41.3875ZM61.25 54.6875C61.25 53.8257 61.0803 52.9723 60.7505 52.1761C60.4207 51.3799 59.9373 50.6565 59.3279 50.0471C58.7185 49.4377 57.9951 48.9543 57.1989 48.6245C56.4027 48.2947 55.5493 48.125 54.6875 48.125C53.8257 48.125 52.9723 48.2947 52.1761 48.6245C51.3799 48.9543 50.6565 49.4377 50.0471 50.0471C49.4377 50.6565 48.9543 51.3799 48.6245 52.1761C48.2947 52.9723 48.125 53.8257 48.125 54.6875C48.125 56.428 48.8164 58.0972 50.0471 59.3279C51.2778 60.5586 52.947 61.25 54.6875 61.25C56.428 61.25 58.0972 60.5586 59.3279 59.3279C60.5586 58.0972 61.25 56.428 61.25 54.6875Z"
                    fill="#454545"
                  />
                </svg>

                <h1>Form a fund with Augier</h1>

                <p className="p-light-color-1">
                  We'll guide you through what's needed to set up your fund.
                </p>
              </div>

              <div className="list-container">
                <p>Includes</p>

                <ul>
                  <li>Creates your information document stack from scratch</li>
                  <li>
                    Legal contracts are formed for your fund (PPM, LPA...)
                  </li>
                  <li>Formation of GP legal entity in Delaware</li>
                  <li>Delaware state filing fees</li>
                  <li>Tool to manage investor subscriptions</li>
                  <li>Templates for post-formation legal needs</li>
                  <li>
                    Legal knowledge base you can query in natural language
                  </li>
                  <li>Augier fund launch community membership</li>
                </ul>
              </div>

              <div className="fee-info-container">
                <h1 className="h1-fixed-color">$20,000</h1>
                <p className="p-light-color">Setup fee</p>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="expanded-div-down">
              <div className="img-and-title-container">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_601)">
                    <path
                      d="M28 30C28 27.6339 27.2188 25.6138 25.6562 23.9397C24.0938 22.2656 22.2083 21.4286 20 21.4286C17.7917 21.4286 15.9062 22.2656 14.3438 23.9397C12.7812 25.6138 12 27.6339 12 30C12 32.3661 12.7812 34.3862 14.3438 36.0603C15.9062 37.7344 17.7917 38.5714 20 38.5714C22.2083 38.5714 24.0938 37.7344 25.6562 36.0603C27.2188 34.3862 28 32.3661 28 30ZM52 47.1429C52 45.9821 51.6042 44.9777 50.8125 44.1295C50.0208 43.2812 49.0833 42.8571 48 42.8571C46.9167 42.8571 45.9792 43.2812 45.1875 44.1295C44.3958 44.9777 44 45.9821 44 47.1429C44 48.3259 44.3906 49.3359 45.1719 50.173C45.9531 51.01 46.8958 51.4286 48 51.4286C49.1042 51.4286 50.0469 51.01 50.8281 50.173C51.6094 49.3359 52 48.3259 52 47.1429ZM52 12.8571C52 11.6964 51.6042 10.692 50.8125 9.84374C50.0208 8.99553 49.0833 8.57142 48 8.57142C46.9167 8.57142 45.9792 8.99553 45.1875 9.84374C44.3958 10.692 44 11.6964 44 12.8571C44 14.0402 44.3906 15.0502 45.1719 15.8873C45.9531 16.7243 46.8958 17.1428 48 17.1428C49.1042 17.1428 50.0469 16.7243 50.8281 15.8873C51.6094 15.0502 52 14.0402 52 12.8571ZM40 26.9531V33.1473C40 33.3705 39.9271 33.5882 39.7812 33.8002C39.6354 34.0123 39.4688 34.1295 39.2812 34.1518L34.4375 34.9554C34.2083 35.7366 33.875 36.5848 33.4375 37.5C34.1458 38.5714 35.0833 39.8549 36.25 41.3504C36.3958 41.596 36.4688 41.8192 36.4688 42.0201C36.4688 42.2879 36.3958 42.5 36.25 42.6562C35.7708 43.3259 34.9115 44.3248 33.6719 45.6529C32.4323 46.981 31.6146 47.6451 31.2188 47.6451C30.9896 47.6451 30.7708 47.567 30.5625 47.4107L26.9688 44.3973C26.1979 44.8214 25.3958 45.1674 24.5625 45.4353C24.3333 47.846 24.0938 49.5759 23.8438 50.625C23.6979 51.1607 23.3854 51.4286 22.9062 51.4286H17.0938C16.8646 51.4286 16.6562 51.3449 16.4688 51.1775C16.2812 51.01 16.1771 50.8147 16.1562 50.5915L15.4375 45.4687C14.7292 45.2455 13.9479 44.8995 13.0938 44.4308L9.40625 47.4107C9.26042 47.567 9.05208 47.6451 8.78125 47.6451C8.55208 47.6451 8.33333 47.5558 8.125 47.3772C5.125 44.4085 3.625 42.6228 3.625 42.0201C3.625 41.8192 3.69792 41.6071 3.84375 41.3839C4.05208 41.0714 4.47917 40.4799 5.125 39.6094C5.77083 38.7388 6.26042 38.058 6.59375 37.567C6.11458 36.5848 5.75 35.6696 5.5 34.8214L0.75 34.0179C0.541667 33.9955 0.364583 33.8895 0.21875 33.6998C0.0729167 33.51 0 33.2924 0 33.0469V26.8527C0 26.6295 0.0729167 26.4118 0.21875 26.1998C0.364583 25.9877 0.53125 25.8705 0.71875 25.8482L5.5625 25.0446C5.79167 24.2634 6.125 23.4152 6.5625 22.5C5.85417 21.4286 4.91667 20.1451 3.75 18.6495C3.60417 18.404 3.53125 18.1808 3.53125 17.9799C3.53125 17.712 3.60417 17.4888 3.75 17.3103C4.20833 16.6406 5.0625 15.6473 6.3125 14.3303C7.5625 13.0134 8.38542 12.3549 8.78125 12.3549C9.01042 12.3549 9.22917 12.433 9.4375 12.5893L13.0312 15.6027C13.7396 15.2009 14.5417 14.8437 15.4375 14.5312C15.6667 12.1205 15.9062 10.4018 16.1562 9.37499C16.3021 8.83928 16.6146 8.57142 17.0938 8.57142H22.9062C23.1354 8.57142 23.3438 8.65513 23.5312 8.82254C23.7188 8.98995 23.8229 9.18526 23.8438 9.40847L24.5625 14.5312C25.2708 14.7545 26.0521 15.1004 26.9062 15.5692L30.5938 12.5893C30.7604 12.433 30.9688 12.3549 31.2188 12.3549C31.4479 12.3549 31.6667 12.4442 31.875 12.6228C34.875 15.5915 36.375 17.3772 36.375 17.9799C36.375 18.1585 36.3021 18.3705 36.1562 18.6161C35.9062 18.9732 35.4688 19.5759 34.8438 20.4241C34.2188 21.2723 33.75 21.942 33.4375 22.433C33.9167 23.5045 34.2708 24.4196 34.5 25.1786L39.25 25.9487C39.4583 25.9933 39.6354 26.1105 39.7812 26.3002C39.9271 26.4899 40 26.7076 40 26.9531ZM60 44.7991V49.4866C60 49.8437 58.4479 50.1897 55.3438 50.5245C55.0938 51.1272 54.7812 51.7076 54.4062 52.2656C55.4688 54.7879 56 56.3281 56 56.8862C56 56.9754 55.9583 57.0536 55.875 57.1205C53.3333 58.7054 52.0417 59.4978 52 59.4978C51.8333 59.4978 51.3542 58.9732 50.5625 57.9241C49.7708 56.875 49.2292 56.1161 48.9375 55.6473C48.5208 55.692 48.2083 55.7143 48 55.7143C47.7917 55.7143 47.4792 55.692 47.0625 55.6473C46.7708 56.1161 46.2292 56.875 45.4375 57.9241C44.6458 58.9732 44.1667 59.4978 44 59.4978C43.9583 59.4978 42.6667 58.7054 40.125 57.1205C40.0417 57.0536 40 56.9754 40 56.8862C40 56.3281 40.5312 54.7879 41.5938 52.2656C41.2188 51.7076 40.9062 51.1272 40.6562 50.5245C37.5521 50.1897 36 49.8437 36 49.4866V44.7991C36 44.442 37.5521 44.096 40.6562 43.7612C40.9271 43.1138 41.2396 42.5335 41.5938 42.0201C40.5312 39.4978 40 37.9576 40 37.3995C40 37.3103 40.0417 37.2321 40.125 37.1652C40.2083 37.1205 40.5729 36.8973 41.2188 36.4955C41.8646 36.0937 42.4792 35.7143 43.0625 35.3571C43.6458 35 43.9583 34.8214 44 34.8214C44.1667 34.8214 44.6458 35.3404 45.4375 36.3783C46.2292 37.4163 46.7708 38.1696 47.0625 38.6384C47.4792 38.5937 47.7917 38.5714 48 38.5714C48.2083 38.5714 48.5208 38.5937 48.9375 38.6384C50 37.0536 50.9583 35.8036 51.8125 34.8884L52 34.8214C52.0833 34.8214 53.375 35.6027 55.875 37.1652C55.9583 37.2321 56 37.3103 56 37.3995C56 37.9576 55.4688 39.4978 54.4062 42.0201C54.7604 42.5335 55.0729 43.1138 55.3438 43.7612C58.4479 44.096 60 44.442 60 44.7991ZM60 10.5134V15.2009C60 15.558 58.4479 15.904 55.3438 16.2388C55.0938 16.8415 54.7812 17.4219 54.4062 17.9799C55.4688 20.5022 56 22.0424 56 22.6004C56 22.6897 55.9583 22.7679 55.875 22.8348C53.3333 24.4196 52.0417 25.212 52 25.212C51.8333 25.212 51.3542 24.6875 50.5625 23.6384C49.7708 22.5893 49.2292 21.8304 48.9375 21.3616C48.5208 21.4062 48.2083 21.4286 48 21.4286C47.7917 21.4286 47.4792 21.4062 47.0625 21.3616C46.7708 21.8304 46.2292 22.5893 45.4375 23.6384C44.6458 24.6875 44.1667 25.212 44 25.212C43.9583 25.212 42.6667 24.4196 40.125 22.8348C40.0417 22.7679 40 22.6897 40 22.6004C40 22.0424 40.5312 20.5022 41.5938 17.9799C41.2188 17.4219 40.9062 16.8415 40.6562 16.2388C37.5521 15.904 36 15.558 36 15.2009V10.5134C36 10.1562 37.5521 9.81026 40.6562 9.47544C40.9271 8.82812 41.2396 8.24776 41.5938 7.73437C40.5312 5.21205 40 3.67187 40 3.11383C40 3.02454 40.0417 2.94642 40.125 2.87946C40.2083 2.83481 40.5729 2.6116 41.2188 2.20981C41.8646 1.80803 42.4792 1.42856 43.0625 1.07142C43.6458 0.714277 43.9583 0.535706 44 0.535706C44.1667 0.535706 44.6458 1.05468 45.4375 2.09263C46.2292 3.13057 46.7708 3.88392 47.0625 4.35267C47.4792 4.30803 47.7917 4.28571 48 4.28571C48.2083 4.28571 48.5208 4.30803 48.9375 4.35267C50 2.76785 50.9583 1.51785 51.8125 0.60267L52 0.535706C52.0833 0.535706 53.375 1.31696 55.875 2.87946C55.9583 2.94642 56 3.02454 56 3.11383C56 3.67187 55.4688 5.21205 54.4062 7.73437C54.7604 8.24776 55.0729 8.82812 55.3438 9.47544C58.4479 9.81026 60 10.1562 60 10.5134Z"
                      fill="#454545"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_601">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h1>Run your business</h1>

                <p className="p-light-color-1">
                  There are ongoing costs of running a fund that we help you
                  manage
                </p>
              </div>

              <div className="list-container">
                <p>
                  Augier acts as an intermediary between your fund and Delaware
                  and your state regulator
                </p>

                <ul>
                  <li>Manage your post-formation documents</li>
                  <li>Use tools to manage the operations of your fund</li>
                </ul>
              </div>

              <div className="fee-info-container">
                <h1 className="h1-fixed-color">$1,000</h1>
                <p className="p-light-color">per year, renews automaticlly</p>
              </div>
            </div>
          </Fade>
        </div>

        <Wrap>
          <Fade bottom>
            <Box>
              <h1>
                Start your fund formation today and raise capital in 2 weeks
              </h1>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                gap: "10px",
              }}
            >
              <Button
                sx={{
                  background: "#333333",
                  border: "2px solid #333333",
                  borderRadius: "30px",
                  color: "#fff",
                  fontSize: { md: "1.1em", xs: ".8em" },
                  textTransform: "capitalize",
                  padding: {
                    md: "15px 25px",
                    xs: "10px 15px",
                  },
                  fontWeight: "400",
                  transition: ".3s",
                  "&:hover": {
                    border: "2px solid #fff",
                    background: "#fff",
                    color: "#000",
                  },
                }}
              >
                Learn more
              </Button>
              <Button
                sx={{
                  background: "#EEEEEE",
                  border: "2px solid #EEEEEE",
                  borderRadius: "30px",
                  color: "#6C6C6C",
                  fontSize: { md: "1.1em", xs: ".8em" },
                  textTransform: "capitalize",
                  padding: {
                    md: "15px 25px",
                    xs: "10px 13px",
                  },
                  fontWeight: "400",
                  transition: ".3s",
                  "&:hover": {
                    background: "#6C6C6C",
                    color: "#EEEEEE",
                  },
                }}
              >
                Get Started
                <FiArrowRight />
              </Button>
            </Box>
          </Fade>
        </Wrap>
      </Container>
    </Section>
  );
}

export default Pricing;
