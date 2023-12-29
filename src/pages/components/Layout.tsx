import React, { ReactNode } from "react";
import Head from "next/head";
import { NextRouter } from "next/router";
import { Box } from "@chakra-ui/react";

interface ILayout {
  children: ReactNode;
  router: NextRouter;
}

const Layout = ({ children, router }: ILayout) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Pansori Homepage" />
        <meta name="author" content="Software Maestro 13th Go Easy! Team" />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* <meta property="og:type" content="website" />
				<meta property="og:image" content={} /> */}
      </Head>
      <main>
        <Box flex={1}>{children}</Box>
      </main>
    </>
  );
};

export default Layout;
