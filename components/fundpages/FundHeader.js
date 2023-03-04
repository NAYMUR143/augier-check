"use client";
import * as React from "react";
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
  padding: 10px 8px;
  border-radius: 15px;
  color: #c1c1c1;
  width: fit-content;
  @media screen and (max-width: 1200px) {
    padding: 10px 5px;
  }
  li {
    color: #9a9a9a;

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

  .active-nav-itm {
    color: #e9e9e9;
  }
`;

const drawerWidth = 240;
function FundHeader(props) {
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
                <a href="#">Get Started</a>
              </Button>
            </li>
            <li>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <a href="#">Product</a>
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
                <a href="#">Resources</a>
              </Button>
            </li>
          </ul>
        </List>
      </MobileNav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
      }}
    >
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
              md: "0.9fr 2.3fr 0.8fr",
              sm: ".6fr 1.6fr 1fr",
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
            <Box
              component="h2"
              sx={{
                display: { md: "flex", xs: "none" },
              }}
            >
              .01 Finance
            </Box>
          </Logo>

          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
            }}
          >
            <Navbar>
              <ul>
                <li className="active-nav-itm">
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
              </ul>
            </Navbar>
          </Box>
          <GetStarted></GetStarted>
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
    </Box>
  );
}
export default FundHeader;
