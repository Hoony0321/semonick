import { ISearchResult } from "@/@types/ISearchResult";
import { ISelection, SelectionType } from "@/@types/ISelection";
import { searchInDict } from "@/pages/api/dict.api";
import { checkNicknameInMaple } from "@/pages/api/maple.api";
import { searchResultAtom } from "@/store/searchResult.state";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

const Section2 = () => {
  // State
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ISelection>();
  const [searchResult, setSearchResult] = useRecoilState(searchResultAtom);

  const changeSelectionType = (value: string) => {
    if (value === "명사/대명사") {
      return [SelectionType.명사, SelectionType.대명사];
    }

    if (value === "형용사/부사/동사") {
      return [SelectionType.형용사, SelectionType.부사, SelectionType.동사];
    }
  };

  const onSubmit: SubmitHandler<ISelection> = async (value: ISelection) => {
    const searchDictResult = await searchInDict(value);
    const searchResult: string[] = [];
    if (searchDictResult) {
      // 순서 섞기
      const shuffledWords = searchDictResult
        .slice()
        .sort(() => Math.random() - 0.5);

      // 5개 이상이 될 때까지 중복되지 않은 단어 넣기
      for (let i = 0; i < shuffledWords.length; i++) {
        if (searchResult.length >= 5) break;

        const word = shuffledWords[i];
        const isExist = await checkNicknameInMaple(word);
        if (!isExist) {
          searchResult.push(word);
        }
      }
    }

    // 검색 결과가 없을 때
    if (searchResult.length == 0) {
      alert("검색 결과가 없습니다.");
      return;
    }

    setSearchResult({
      words: searchResult,
    });
  };

  return (
    <>
      <Container flexDir={"column"}>
        <Grid
          w={"100%"}
          templateColumns="repeat(1, 1fr)"
          gap={6}
          onSubmit={handleSubmit(onSubmit)}
          as={"form"}
        >
          <Flex>
            <Box flex={1}>
              <Text flex={1}>타입</Text>
            </Box>
            <Box flex={2}>
              <Select
                {...register("type", {
                  setValueAs: changeSelectionType,
                })}
              >
                <option value={"명사/대명사"} defaultChecked>
                  명사/대명사
                </option>
                <option value={"형용사/부사/동사"}>형용사/부사/동사</option>
              </Select>
            </Box>
          </Flex>

          <Flex>
            <Box flex={1}>
              <Text>글자수</Text>
            </Box>
            <Box flex={2}>
              {" "}
              <Select {...register("length")}>
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
              <Input
                flex={2}
                placeholder="없음"
                {...register("include")}
                required
              />
            </Box>
          </Flex>

          <Flex justify={"center"}>
            <Button type="submit" colorScheme="teal">
              추천받기
            </Button>
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default Section2;
