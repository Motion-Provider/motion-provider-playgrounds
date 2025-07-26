import { ReduxProviderProps } from "@/interfaces";
import { store } from "@/redux";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
