import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    primary: {
      50: "#FFF680",
      100: "#FFDB1B",
      200: "#E7C500",
      300: "#CEAF00",
      400: "#B69A00",
    },
    secondary: {
      100: "#80EBFF",
      200: "#B2FEFA",
      300: "#0ED2F7",
      400: "#0088CC",
      500: "#005580",
    },
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    muted: {
      200: "#7C7C8A",
      500: "#00B37E",
      300: "#04D361",
    },
    trueGray: {
      100: "background: linear-gradient(134.49deg, #B2FEFA 0%, #0ED2F7 99.13%)",
      200: "background: linear-gradient(135deg, #FFF680 0%, #FFDB1B 100%)",
      300: "background: linear-gradient(135deg, #181818 0%, #303030 100%)",
      400: "background: linear-gradient(191.95deg, #2F2F3D 0%, #4B4C5A 126.82%)",
      500: "background: linear-gradient(113.67deg, #4B4C5A 15.24%, #303030 84.76%)",
      600: "background: linear-gradient(113.67deg, rgba(75, 76, 90, 0.3) 15.24%, rgba(48, 48, 48, 0) 84.76%)",
      700: "background: linear-gradient(180deg, #0022B7 20.83%, #A70000 61.46%, #FFDB1B 91.67%)",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Poppins_700Bold",
    body: "Poppins_400Regular",
    mono: "Poppins_800ExtraBold",
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
});
