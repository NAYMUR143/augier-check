import { Span, Logo, Hr, GoogleBtn, Btn, SignSec, Form } from "./auth.style";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Signup from "./signup";
import logo from "../../components/images/Augier.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import Image from "next/image";
function Signin({
  open,
  setOpen,
  signupOpen,
  handleClose,
  signuphandleClickOpen,
  signuphandleClose,
  handleSubmit,
  handleClickOpen,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          sx={{
            background: "#1f1f1f",
            border: "2px solid #fff",
            borderRadius: "10px",
          }}
        >
          <SignSec>
            <Logo>
              <Image src={logo} alt="logo" />
            </Logo>
            <GoogleBtn>
              <AiFillGoogleCircle />
              <span>Sign in with Google</span>
            </GoogleBtn>
            <Hr></Hr>
            <Form onSubmit={handleSubmit}>
              <Box
                sx={{
                  margin: "25px 0px",
                }}
              >
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </Box>
              <Box
                sx={{
                  margin: "25px 0px",
                }}
              >
                <label htmlFor="password">Pasword</label>
                <input type="password" id="password" required />
              </Box>
              <input type="submit" value="Sign in" />
            </Form>
            <Span>
              No account?
              <a
                onClick={() => {
                  handleClose();
                  signuphandleClickOpen();
                }}
              >
                Sign up
              </a>
            </Span>
          </SignSec>
        </DialogContent>
      </Dialog>
      <Signup
        signuphandleClickOpen={signuphandleClickOpen}
        signuphandleClose={signuphandleClose}
        signInhandleClickOpen={handleClickOpen}
        signupOpen={signupOpen}
      />
    </div>
  );
}

export default Signin;
