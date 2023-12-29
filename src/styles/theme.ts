import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Pretendard, sans-serif",
    body: "Pretendard, sans-serif",
  },
  colors: {
    brand: {
      100: "#CAEAF6",
      200: "#99D2ED",
      300: "#5EA1C9",
      400: "#326A93",
      500: "#092C4C",
      600: "#062241",
      700: "#041936",
      800: "#02112C",
      900: "#010C24",
    },
  },
});

export default theme;
