// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#920017", // Red for Player X, accents
//       contrastText: "#ffffff",
//     },
//     secondary: {
//       main: "#fdad00", // Yellow for Player O, buttons, hovers
//       contrastText: "#000000",
//     },
//     background: {
//       default: "#fafafa",
//       paper: "#ffffff",
//     },
//     text: {
//       primary: "#1a1a1a",
//       secondary: "#555555",
//     },
//   },
//   typography: {
//     fontFamily: '"Rubik", sans-serif',
//     h1: { fontWeight: 700, fontSize: "2.5rem" },
//     h2: { fontWeight: 600 },
//     button: { textTransform: "none", fontWeight: 500 },
//   },
//   components: {
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           padding: "1rem",
//           borderRadius: "12px",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "12px",
//           fontWeight: 500,
//         },
//       },
//       defaultProps: {
//         variant: "contained",
//         disableElevation: true,
//       },
//     },
//     MuiButtonGroup: {
//       styleOverrides: {
//         root: {
//           borderRadius: "12px",
//         },
//       },
//     },
//     MuiTextField: {
//       defaultProps: {
//         variant: "outlined",
//         size: "small",
//       },
//       styleOverrides: {
//         root: {
//           borderRadius: "8px",
//         },
//       },
//     },
//     MuiModal: {
//       styleOverrides: {
//         root: {
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         },
//       },
//     },
//     MuiListItem: {
//       styleOverrides: {
//         root: {
//           borderRadius: "8px",
//           marginBottom: "4px",
//         },
//       },
//     },
//     MuiListItemButton: {
//       styleOverrides: {
//         root: {
//           "&.Mui-selected": {
//             backgroundColor: "#fdad0040",
//             "&:hover": {
//               backgroundColor: "#fdad0060",
//             },
//           },
//         },
//       },
//     },
//     MuiListItemText: {
//       styleOverrides: {
//         primary: {
//           fontWeight: 500,
//         },
//       },
//     },
//   },
// });

// export default theme;
import { createTheme } from "@mui/material/styles";

const comicBorderShadowRed = `
  2px 2px 0 #fdad00,
  4px 4px 0 #920017
`;

const comicBorderShadowYellow = `
  2px 2px 0 #920017,
  4px 4px 0 #fdad00
`;

const theme = createTheme({
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      main: "#920017", // rosso
    },
    secondary: {
      main: "#fdad00", // giallo
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "'Rubik', sans-serif",
    h2: {
      fontSize: "3.5rem",
      fontWeight: 700,
      color: "#920017",
      textShadow: `
        1.5px 1.5px 1px #fdad00aa,
        3px 3px 2px #92001799,
        4.5px 4.5px 3px #fdad00bb
      `,
    },

    h4: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#920017",
      textShadow: `
        1.5px 1.5px 1px #fdad00aa,
        3px 3px 2px #92001799,
        4.5px 4.5px 3px #fdad00bb
      `,
    },

    h6: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#920017",
      textShadow: `
        1.5px 1.5px 1px #fdad00aa,
        3px 3px 2px #92001799,
        4.5px 4.5px 3px #fdad00bb
      `,
    },
  },
  components: {
    MuiModal: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(2px)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "100%",
          border: "2.5px solid #000",
          boxShadow: comicBorderShadowRed,
          padding: "20px",
          backgroundColor: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#920017",
          color: "#fdad00",
          fontWeight: 700,
          fontSize: "1.1rem",
          boxShadow: comicBorderShadowRed,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#7a0014",
            boxShadow: comicBorderShadowRed,
          },
        },
        containedSecondary: {
          backgroundColor: "#fdad00",
          color: "#920017",
          fontWeight: 700,
          fontSize: "1.1rem",
          boxShadow: comicBorderShadowYellow,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#f7c94d",
            boxShadow: comicBorderShadowYellow,
          },
        },
        outlined: {
          border: "2.7px solid #fdad00",
          color: "#920017",
          fontWeight: "bold",
          fontSize: "1.1rem",
          fontFamily: "'Rubik', sans-serif",
          boxShadow: comicBorderShadowRed,
          textShadow: `
            1px 1px 0 #fdad00,
          `,
          textTransform: "none",
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#fff8e1",
            boxShadow: comicBorderShadowYellow,
          },
          "&:disabled": {
            opacity: 0.6,
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;

// import { createTheme } from "@mui/material/styles";

// const comicShadow = `
//   // 1.5px 1.5px 1px #fdad00aa,
//   3px 3px 2px #92001799,
//   4.5px 4.5px 3px #fdad00bb
// `;

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#920017",
//     },
//     secondary: {
//       main: "#fdad00",
//     },
//     background: {
//       default: "#fff",
//       paper: "#fff",
//     },
//   },
//   components: {
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           textShadow: comicShadow,
//           color: "#920017",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontWeight: 700,
//           color: "#920017",
//           backgroundColor: "#fdad00",
//           textShadow: comicShadow,
//           boxShadow: `3px 3px 0 #920017`,
//           "&:hover": {
//             backgroundColor: "#f0c020",
//             boxShadow: `4px 4px 0 #700010`,
//           },
//         },
//       },
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#fff",
//           border: "2px solid #920017",
//           boxShadow: `0 0 8px #fdad00cc`,
//           borderRadius: "12px",
//         },
//       },
//     },
//     MuiListItemButton: {
//       styleOverrides: {
//         root: {
//           color: "#920017",
//           textShadow: comicShadow,
//           "&.Mui-selected": {
//             backgroundColor: "#fdad00",
//             color: "#920017",
//             boxShadow: `3px 3px 0 #920017`,
//           },
//           "&:hover": {
//             backgroundColor: "#fdad00cc",
//           },
//         },
//       },
//     },
//   },
// });

// export default theme;
