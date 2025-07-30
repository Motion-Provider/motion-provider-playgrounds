import { store } from "@/redux";
import { Provider } from "react-redux";
import { ReduxProviderProps } from "@/interfaces/@types-redux";

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
