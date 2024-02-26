// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {},
  light: {
    global: {
      body: {
        color: "#7C4E38",
        bg: "#f1f1f1",
      },
    },
  },
  // dark: {
  //   global: {
  //     body: {
  //       bg: "red",
  //       color: "white",
  //     },
  //   },
  // },
});
