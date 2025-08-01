import { ReduxLibMetadataInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import { Motions } from "@/interfaces/@types-redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const metadataSlice = createSlice({
  name: "metadata",
  initialState: ReduxLibMetadataInitialState,
  reducers: {
    setCurrentMotion: (state, action: PayloadAction<Motions>) => {
      state.currentMotion = action.payload;
    },
    updateSettings: (
      state,
      action: PayloadAction<{ key: string; value: any }>
    ) => {
      const motion = state.currentMotion;
      if (motion) {
        (state.settings as { [key: string]: any })[motion][action.payload.key] =
          action.payload.value;
      } else {
        console.error(
          "Currently, No motion detected: REDUX_METADATA_NO_MOTION"
        );
      }
    },
  },
});

export const { setCurrentMotion, updateSettings } = metadataSlice.actions;
export default metadataSlice.reducer;
