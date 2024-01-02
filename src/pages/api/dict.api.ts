import { ISelection } from "@/@types/ISelection";
import {
  DICT_API_BASE_URL,
  DICT_AUTH_KEY,
} from "@/utils/constants/api.constants";
import baseAxios from "axios";
const axios = baseAxios.create({
  baseURL: DICT_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const parseSuccessResponse = (res: any): string[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(res, "text/xml");

  // 단어 추출
  const items = xmlDoc.getElementsByTagName("item");
  const words: string[] = Array.from(items).map((item) => {
    const wordElement = item.querySelector("word");
    if (!wordElement || !wordElement.textContent) {
      return ""; // 값이 없는 경우 빈 문자열 반환
    }
    return wordElement.textContent;
  });

  return words.filter((word) => word !== ""); // 빈 문자열을 걸러내기
};

export const searchInDict = async (
  selection: ISelection
): Promise<string[] | undefined> => {
  // 사전 API 호출
  const res = await axios.get("/search", {
    params: {
      key: DICT_AUTH_KEY,
      q: selection.include,
      num: "100",
      advanced: "y",
      method: "include",
      pos: selection.type.join(","),
      letter_s: selection.length,
      letter_e: selection.length,
    },
  });

  // 성공 응답인지 확인
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(res.data, "text/xml");
  const isSuccess = xmlDoc.getElementsByTagName("channel").length > 0;

  if (!isSuccess) {
    console.log("사전 API 호출 실패");
    return;
  }

  const words = parseSuccessResponse(res.data);
  return words;
};
