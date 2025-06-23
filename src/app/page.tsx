"use client";
import Triscard from "@/components/Triscard";
import { data } from "./data";
import styles from "./page.module.css";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
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
  return (
    <ThemeProvider theme={tristanDarkTheme} noSsr>
      <div className={styles.page}>
        <main className={styles.main}>
          <div
            style={{
              background: "url(./THz.png)",
              width: "100%",
              height: 400,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <Grid container spacing={5}>
            {data.map((itemData, i) => (
              <Triscard data={itemData} key={i} />
            ))}
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
}
