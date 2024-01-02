import {
  MAPLE_API_BASE_URL,
  MAPLE_AUTH_KEY,
} from "@/utils/constants/api.constants";
import baseAxios from "axios";
const axios = baseAxios.create({
  baseURL: MAPLE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const checkNicknameInMaple = async (nickname: string) => {
  try {
    const res = await axios.get(`/character_name/${nickname}`, {
      headers: {
        Accept: "application/json",
        "x-nxopen-api-key": MAPLE_AUTH_KEY,
      },
    });
    if (res.status === 200) {
      return true;
    }
  } catch (e) {
    return false;
  }
};
