import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
// import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/core/Menu";
import { Grid } from "@material-ui/core";

const Home1 = (props) => {
  const authCall = () => {
    props.setAuthValue();
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={24}>
          <Grid item xs={11}>
            <Typography type="title" color="red">
              Home
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <div>
              <Button
                raised
                color="white"
                onClick={authCall}
                style={{ backgroundColor: "none", color: "white" }}
              >
                Logout
              </Button>
            </div>
          </Grid>
          {/* <Grid></Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Home1;
