import Section3 from "./components/home/Section3";
import Section2 from "./components/home/Section2";
import Section1 from "./components/home/Section1";
import { NextPage } from "next";
import { Box, Container, Spacer } from "@chakra-ui/react";
import { searchResultAtom } from "@/store/searchResult.state";
import { useRecoilValue } from "recoil";

const Home: NextPage = () => {
  const searchResult = useRecoilValue(searchResultAtom);

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
        {searchResult.words.length > 0 && (
          <>
            <Box h={36} />
            <Section3 />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
