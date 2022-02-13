import "./App.css";
import * as React from "react";
import { Paper, Typography, Grid, Avatar, Stack, Link } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  styled,
} from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import bgImg from "./bgImg.jpg";
import avatar from "./avatar.jpg";

const githubURL = "https://github.com/haozhangzyb";
const linkedinURL = "https://www.linkedin.com/in/haozhangzyb/";

let theme = createTheme({
  palette: {
    primary: {
      main: "#cfd8dc",
    },
    secondary: {
      main: "#b0bec5",
    },
  },
  spacing: 14,
});

theme = responsiveFontSizes(theme);

// const useStyles = makeStyles((theme) => ({
//   sizeAvatar: {
//     height: theme.spacing(4),
//     width: theme.spacing(4),
//   },
// }));

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="mailto:contact@haozhang.name">
        contactme@haozhang.name
      </Link>{" "}
      {"© "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function App() {
  // const classes = useStyles(theme);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{
            height: "100vh",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          sx={{ pb: 20 }}
        >
          <Grid item xs={3} sx={{ mx: 1 }}>
            <Avatar
              alt="Hao Zhang"
              src={avatar}
              sx={{ width: 110, height: "auto", mx: "auto", mb: 1 }}
            />
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="primary"
              gutterBottom
            >
              Hao Zhang
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="secondary"
              component="p"
            >
              MSCS @ Northwestern University
            </Typography>
            <Stack
              direction="row"
              align="center"
              justifyContent="center"
              spacing={2}
              sx={{ mx: "auto", my: 1 }}
            >
              <a href={githubURL}>
                <GitHubIcon color="secondary" />
              </a>
              <a href={linkedinURL}>
                <LinkedInIcon color="secondary" />
              </a>
            </Stack>
          </Grid>
          <Copyright
            color="secondary"
            sx={{ position: "absolute", bottom: 20 }}
          />
          {/* <Paper sx={{ height: "35vh" }}></Paper> */}
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
