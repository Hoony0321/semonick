import { ISelection } from "@/@types/ISelection";
import { ATOM_SELECTION } from "../utils/constants/state.constants";
import { atom } from "recoil";

const selectionAtom = atom<ISelection>({
  key: ATOM_SELECTION,
  default: {
    type: "",
    syllable: 0,
    requiredWord: "",
  },
});

export { selectionAtom };
