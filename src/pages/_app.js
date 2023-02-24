import "@/styles/Material.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      WebkitFontSmoothing: "auto",
      MozOsxFontSmoothing: "auto",
      boxSizing: "border-box",
    },
    "*, *::before, *::after": {
      boxSizing: "inherit",
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
    },
  },
}));

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

// custom CssBaseline with dark mode

export default function App({ Component, pageProps }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
