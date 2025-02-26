"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const plus = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  colorSchemes: {
    /* Light 테마 */
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#5D87FF",
          light: "#ECF2FF",
          dark: "#4570EA",
        },
        secondary: {
          main: "#49BEFF",
          light: "#E8F7FF",
          dark: "#23afdb",
        },
        success: {
          main: "#13DEB9",
          light: "#E6FFFA",
          dark: "#02b3a9",
          contrastText: "#ffffff",
        },
        info: {
          main: "#539BFF",
          light: "#EBF3FE",
          dark: "#1682d4",
          contrastText: "#ffffff",
        },
        error: {
          main: "#fa6b6b",
          light: "#FDEDE8",
          dark: "#f3704d",
          contrastText: "#ffffff",
        },
        warning: {
          main: "#FFAE1F",
          light: "#FEF5E5",
          dark: "#ae8e59",
          contrastText: "#ffffff",
        },
        grey: {
          100: "#F2F6FA",
          200: "#EAEFF4",
          300: "#DFE5EF",
          400: "#7C8FAC",
          500: "#5A6A85",
          600: "#2A3547",
        },
        text: {
          primary: "#2A3547",
          secondary: "#5A6A85",
        },
        background: {
          default: "#fff",
          paper: "#fff",
        },
        divider: "#e5eaef",
        action: {
          disabledBackground: "rgba(73,82,88,0.12)",
          hoverOpacity: 0.02,
          hover: "#f6f9fc",
        },
      },
    },

    /* Dark 테마 */
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#5D87FF",
          light: "#4570EA",
          dark: "#1A3FA4",
        },
        secondary: {
          main: "#49BEFF",
          light: "#23afdb",
          dark: "#1769aa",
        },
        success: {
          main: "#13DEB9",
          light: "#028080",
          dark: "#015F5F",
          contrastText: "#ffffff",
        },
        info: {
          main: "#539BFF",
          light: "#1682d4",
          dark: "#0A57A4",
          contrastText: "#ffffff",
        },
        error: {
          main: "#fa6b6b",
          light: "#b34040",
          dark: "#7A2525",
          contrastText: "#ffffff",
        },
        warning: {
          main: "#FFAE1F",
          light: "#ae8e59",
          dark: "#845B10",
          contrastText: "#ffffff",
        },
        grey: {
          100: "#2A2D3A",
          200: "#1E1E1E",
          300: "#121212",
          400: "#8A8F98",
          500: "#6E7681",
          600: "#525861",
        },
        text: {
          primary: "#E0E0E0",
          secondary: "#B0BEC5",
        },
        background: {
          default: "#121212",
          paper: "#121212",
        },
        action: {
          disabledBackground: "rgba(255, 255, 255, 0.12)",
          hoverOpacity: 0.05,
          hover: "#2A2D3A",
        },
        divider: "#333845",
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: plus.style.fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: "1.57rem",
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "1.66rem",
      letterSpacing: "0.03333em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
    /* background-image: var(--Paper-overlay); 제거 */
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none !important",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundImage: "none !important",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundImage: "none !important",
        },
      },
    },
  },
});

export default theme;
