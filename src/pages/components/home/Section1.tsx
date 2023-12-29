import { Container, Text } from "@chakra-ui/react";

const Section1 = () => {
  return (
    <Container
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Text fontSize={"4xl"}>세상의 모든 닉네임을 추천해드립니다.</Text>
      <Text fontSize={"lg"} mt={1}>
        * 세모닉에선 실제 게임에서 사용가능한 닉네임을 추천해드립니다.
      </Text>
    </Container>
  );
};

export default Section1;
