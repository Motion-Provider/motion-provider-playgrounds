import { ReduxLibMetadataInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import { createSlice } from "@reduxjs/toolkit";

const metadataSlice = createSlice({
  name: "metadata",
  initialState: ReduxLibMetadataInitialState,
  reducers: {
    setCurrentMotion: (state, action) => {
      state.currentMotion = action.payload;
    },
  },
});

export const { setCurrentMotion } = metadataSlice.actions;
export default metadataSlice.reducer;
