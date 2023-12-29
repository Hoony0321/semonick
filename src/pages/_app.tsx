import { ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/globalStyle";
import Layout from "./components/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout router={pageProps.router}>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
