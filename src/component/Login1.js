import React, { useState } from "react";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const Login1 = (props) => {
  const [email, setEmail] = useState("");
  const [validId, setValidId] = useState("107611946016616806376");
  const [password, setPassword] = useState("");
  const [showLoginButton, setShowLoginButton] = useState(true);
  const navigate = useNavigate();

  const clientId =
    "624133366677-0nka2s69qgusnveidttj029knsar6ouk.apps.googleusercontent.com";

  const loginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    if (
      res &&
      res.profileObj &&
      res.profileObj.googleId &&
      res.profileObj.googleId === validId
    ) {
      props.setAuthValue();
      return navigate("/home");
    }
    setShowLoginButton(false);
  };

  const loginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const emailHadler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHadler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = () => {
    setEmail("");
    setPassword("");
    setShowLoginButton(true);
  };

  const paperStyle = {
    padding: 20,
    height: "350px",
    // width: "100",
    margin: "60px 400px",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <Grid>
          <TextField
            label="username"
            placeholder="Enter your Email"
            fullWidth
            required
            value={email}
            onChange={emailHadler}
          ></TextField>
          <br />
          <br />

          <TextField
            // id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            required
            value={password}
            onChange={passwordHadler}
          />
        </Grid>
        <br />
        <br />
        <Button
          type="submit"
          color="primary"
          fullWidth
          required
          variant="contained"
          onClick={submitHandler}
          disabled={email !== "" && password !== "" ? false : true}
        >
          Sign In
        </Button>
        <br />
        <br />
        <GoogleLogin
          clientId={clientId}
          buttonText="login"
          onSuccess={loginSuccess}
          onFailure={loginFailure}
          style={{ minWidth: "200px" }}
        >
          <span
            style={{
              fontWeight: "bold",
              paddingLeft: "140px",
              paddingRight: "140px",
            }}
          >
            {" "}
            Login with Google Account
          </span>
        </GoogleLogin>
      </Paper>
    </Grid>
  );
};
export default Login1;
