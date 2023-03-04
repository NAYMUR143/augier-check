"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import Signin from "components/auth/singin";
import { useRouter } from "next/navigation";
const Logo = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
  img {
    object-fit: contain;
  }
`;
const MobileNav = styled.div`
  padding: 20px;
  .mobilelogo {
    margin: 0px 0px 5px;
    text-align: left;
    img {
      object-fit: contain;
    }
  }
  li {
    list-style: none;
    button {
      justify-content: left;
    }
    a {
      justify-content: left;
    }
  }
  button {
    width: 100%;
  }
`;
const GetStarted = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
  display: flex;
  justify-content: end;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 20px;
  }
  li {
    &:first-child {
      a {
        color: #7b7b7b;
      }
    }
    &:last-child {
      a {
        display: flex;
        align-items: center;
        gap: 3px;
      }
      svg {
        font-size: 1.5em;
      }
    }
  }
`;
const Navbar = styled.div`
  background: #333333;
  padding: 10px 45px;
  border-radius: 15px;
  color: #c1c1c1;
  width: fit-content;
  @media screen and (max-width: 1200px) {
    padding: 10px 25px;
  }
  li {
    display: inline-block;
    list-style: none;

    a {
      padding: 0px 30px;
      font-size: 16px;
      @media screen and (max-width: 1200px) {
        padding: 0px 22px;
      }
    }
  }
`;

const drawerWidth = 240;
function Header(props) {
  const router = useRouter();

  // for login/signup
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

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // mobile nav
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <MobileNav>
        <div className="mobilelogo">
          <Image src="/images/Augier.png" alt="logo" width={100} height={100} />
        </div>
        <Divider />
        <List>
          <ul>
            <li>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <a href="#">Overview</a>
              </Button>
            </li>
            <li>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <a href="#">Resources</a>
              </Button>
            </li>
            <li>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <a href="#">About</a>
              </Button>
            </li>
            <li>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <a href="#">Sign in</a>
              </Button>
            </li>
          </ul>
        </List>
        <Box>
          <Button
            sx={{
              background: "#333333",
              border: "2px solid #333333",
              borderRadius: "15px",
              color: "#C1C1C1",
              fontSize: ".8em",
              textTransform: "capitalize",
              "&:hover": {
                background: "#fff",
                color: "#333333",
              },
            }}
          >
            <Link href="/fund">
              Get Started
              <BiRightArrowAlt />
            </Link>
          </Button>
        </Box>
      </MobileNav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "transparent",
          boxShadow: "none",
          width: "95%",
          margin: "auto",
          position: "relative",
          left: "0px",
          top: {
            md: "20px",
            sm: "00px",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "1fr 2fr 1fr",
              sm: ".8fr 1fr 1fr",
              xs: "1fr 1fr",
            },
          }}
        >
          <Box
            sx={{
              display: { md: "none" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,

                color: "#000",
                fontSize: "4em",
                borderRadius: "0px",
                justifyContent: "left",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Logo>
            <Image
              src="/images/Augier.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Logo>

          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
            }}
          >
            <Navbar>
              <ul>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </Navbar>
          </Box>
          <GetStarted>
            <ul>
              <li>
                <Button
                  onClick={handleClickOpen}
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  <a href="#">Sign in</a>
                </Button>
              </li>
              <li>
                <Button
                  sx={{
                    background: "#333333",
                    border: "2px solid #333333",
                    borderRadius: "15px",
                    color: "#C1C1C1",
                    fontSize: ".8em",
                    textTransform: "capitalize",
                    "&:hover": {
                      background: "#fff",
                      color: "#333333",
                    },
                  }}
                >
                  <Link href="/fund">
                    Get Started
                    <BiRightArrowAlt />
                  </Link>
                </Button>
              </li>
            </ul>
          </GetStarted>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
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
    </Box>
  );
}
export default Header;
