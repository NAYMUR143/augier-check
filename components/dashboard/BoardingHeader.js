import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 180,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
      },
      "&:active": {},
    },
  },
}));

const Header = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  .logo {
    font-size: 30px;
    background: linear-gradient(
      180deg,
      #363636 0%,
      rgba(156, 156, 156, 0.85) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .right-top-text {
    color: #9a9a9a;
  }
`;

function BoardingHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Header>
        <div className="logo">
          <Link href="./dashboard/onboarding">SwiftFund</Link>
        </div>
        <div>
          <Button
            sx={{
              background: "#fff",
              border: "2px solid #fff",
              borderRadius: "15px",
              color: "#787878",
              fontSize: {
                sm: "1.2em",
                xs: ".7em",
              },
              textTransform: "capitalize",
              margin: "20px 0px",
              "&:hover": {
                background: "#787878",
                color: "#fff",
              },
            }}
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Saketh Kesiraju
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {/* <MenuItem onClick={handleClose} disableRipple>
              <MdAccountCircle />
              my Account
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MdAccountCircle />
              Add Another Account
            </MenuItem> */}
            {/* <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <FiSettings />
              Settings
            </MenuItem> */}
            <Link href="/">
              <MenuItem onClick={handleClose} disableRipple>
                <FiLogOut />
                Sign out
              </MenuItem>
            </Link>
          </StyledMenu>
        </div>
      </Header>
    </>
  );
}

export default BoardingHeader;
