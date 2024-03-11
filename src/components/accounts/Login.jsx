import { useState } from "react";
import styled from "@emotion/styled";
import { Box, TextField, Button, Typography } from "@mui/material";
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;
const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background-color:pink;
  color: white;
  height: 45px;
  text-align: center;
  border-radius: 2px;
`;

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  const [account, toggleAccount] = useState("Login");
  const [signup, setSignup] = useState(signupInitialValues);
  const toggleSignup = () => {
    account === "signup" ? toggleAccount("Login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "Login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Typography>Or</Typography>
            <Button onClick={() => toggleSignup()}>Create an Account</Button>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter Name"
            />{" "}
            {/*label work as place holder*/}
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />
            <LoginButton variant="contained">Signup</LoginButton>
            <Typography>Or</Typography>
            <Button onClick={() => toggleSignup()}>
              {" "}
              Already have an account{" "}
            </Button>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};
export default Login;
