import {
  textInitialDesc,
  textInitialDuration,
  textInitialHeader,
} from "@/constants/grounds/playgrounds.lib";
import {
  TextConfigValue,
  TextFieldsDispatch,
  TextFieldsValue,
  TextConfigDispatch,
} from "@/interfaces/@types-components";
import { createContext } from "react";

const TextFieldsValueContext = createContext<TextFieldsValue>({
  header: textInitialHeader,
  desc: textInitialDesc,
});

const TextFieldsDispatchContext = createContext<TextFieldsDispatch>({
  setHeader: () => {},
  setDesc: () => {},
  getHeader: () => textInitialHeader,
  getDesc: () => textInitialDesc,
});

const TextConfigValueContext = createContext<TextConfigValue>({
  duration: textInitialDuration,
});

const TextConfigDispatchContext = createContext<TextConfigDispatch>({
  setDuration: () => {},
  getDuration: () => textInitialDuration,
});

export {
  TextFieldsValueContext,
  TextFieldsDispatchContext,
  TextConfigValueContext,
  TextConfigDispatchContext,
};
