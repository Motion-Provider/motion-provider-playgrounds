import { MetadataInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import { Motions } from "@/interfaces/@types-redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const metadataSlice = createSlice({
  name: "metadata",
  initialState: MetadataInitialState,
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
    setComplexity: (state, action: PayloadAction<number>) => {
      state.complexity = action.payload;
    },
    setDelay: (state, action: PayloadAction<number>) => {
      state.delay = action.payload;
    },
    setConfigDuration: (state, action: PayloadAction<number>) => {
      state.configDuration = action.payload;
    },
  },
});

export const {
  setCurrentMotion,
  updateSettings,
  setComplexity,
  setDelay,
  setConfigDuration,
} = metadataSlice.actions;
export default metadataSlice.reducer;
