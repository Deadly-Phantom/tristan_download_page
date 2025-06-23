"use client";
import styles from "./page.module.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
// import { useEffect, useState } from "react";
const tristanDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#09ebec",
      dark: "#1052f5",
      contrastText: "rgba(10,11,26,0.87)",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
export default function Home() {
  // const [releases, setReleases] = useState([]);
  // useEffect(() => {
  //   const get = async () => {
  //     const res = await fetch(
  //       "https://api.github.com/repos/Deadly-Phantom/Mario-Game"
  //     );

  //     const releases_with_pre = await res.json();
  //     // console.log(releases_with_pre)
  //     const releases = releases_with_pre;

  //     setReleases(releases);
  //   };
  //   get();
  // }, []);
  return (
    <ThemeProvider theme={tristanDarkTheme} noSsr>
      <div className={styles.page}>
        <main className={styles.main}>
          <Grid container spacing={5}>
            <Grid>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/mario.png"
                  title="Mario Game"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mario Game
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Welcome to the first release of the Mario Game! This is a
                    simple, fun platformer inspired by classic Mario gameplay,
                    built using Python and Pygame. Run, jump, and dodge Goombas
                    as you explore a side-scrolling world. Collect coins and
                    power-ups to boost your score and abilities.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://github.com/Deadly-Phantom/Mario-Game/releases"
                      )
                    }
                    size="small"
                  >
                    Downloads
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/snake.png"
                  title="Mario Game"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Snake Game
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Welcome to the first release of the Cyber Rainbow Snake
                    Game! This is a modern, neon-themed twist on the classic
                    Snake, built with Python and Pygame. Glide through a glowing
                    grid, collect animated fruits, dodge obstacles, and chase
                    your high score in a cyberpunk world.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://github.com/Deadly-Phantom/Snake-Game/releases"
                      )
                    }
                    size="small"
                  >
                    Downloads
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/croatia.jpeg"
                  title="Mario Game"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Croatia Trip 2025
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Experience the beauty of Croatia in 2025! Join us for an
                    unforgettable adventure exploring stunning coastlines,
                    historic cities, and vibrant culture. From the crystal-clear
                    Adriatic Sea to charming old towns, this trip promises
                    breathtaking sights and lasting memories.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://deadly-phantom.github.io/holiday-react/"
                      )
                    }
                    size="small"
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <div className={styles.ctas}>
            {/* <Card sx={{ color: "white", backgroundColor: "black" }}>
            <pre>
              <code>{JSON.stringify(releases, null, 2)}</code>
            </pre>
          </Card> */}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
