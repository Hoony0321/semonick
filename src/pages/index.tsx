import Section3 from "./components/home/Section3";
import Section2 from "./components/home/Section2";
import Section1 from "./components/home/Section1";
import { NextPage } from "next";
import { Box, Container, Spacer } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Container
        maxW="container.lg"
        centerContent
        flexDir={"column"}
        py={16}
        border={"2px solid black"}
      >
        <Section1 />
        <Box h={24} />
        <Section2 />
        <Section3 />
      </Container>
    </>
  );
};

export default Home;
