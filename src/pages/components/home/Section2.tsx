import {
  Box,
  Container,
  Flex,
  Grid,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

const Section2 = () => {
  return (
    <>
      <Container flexDir={"column"}>
        <Grid w={"100%"} templateColumns="repeat(1, 1fr)" gap={6}>
          <Flex>
            <Box flex={1}>
              <Text flex={1}>타입</Text>
            </Box>
            <Box flex={2}>
              <Select>
                <option value="명사" defaultChecked>
                  명사
                </option>
                <option value="형용사">형용사</option>
              </Select>
            </Box>
          </Flex>

          <Flex>
            <Box flex={1}>
              <Text>글자수</Text>
            </Box>
            <Box flex={2}>
              {" "}
              <Select>
                <option value="2" defaultChecked>
                  2
                </option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Select>
            </Box>
          </Flex>

          <Flex>
            <Box flex={1}>
              <Text>필수 포함 글자</Text>
            </Box>
            <Box flex={2}>
              <Input flex={2} placeholder="없음" />
            </Box>
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default Section2;
