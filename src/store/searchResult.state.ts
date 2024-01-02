import { ISelection } from "@/@types/ISelection";
import { ATOM_SEARCH_RESULT } from "../utils/constants/state.constants";
import { atom } from "recoil";
import { ISearchResult } from "@/@types/ISearchResult";

const searchResultAtom = atom<ISearchResult>({
  key: ATOM_SEARCH_RESULT,
  default: {
    words: [],
  },
});

export { searchResultAtom };
