import { searchResultAtom } from "@/store/searchResult.state";
import { Box, Grid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const Section3 = () => {
  const searchResult = useRecoilValue(searchResultAtom);

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <>
      <Text fontSize={36}>추천 결과</Text>
      <Box h={12} />
      <Grid
        w={"100%"}
        templateColumns="repeat(1, 1fr)"
        gap={6}
        textAlign={"center"}
      >
        {searchResult.words.map((word, index) => {
          return (
            <Text key={"word" + index} fontSize={24}>
              {word}
            </Text>
          );
        })}
      </Grid>
    </>
  );
};

export default Section3;
