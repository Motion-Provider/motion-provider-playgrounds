import { ReduxLibMotionChainInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import { createSlice } from "@reduxjs/toolkit";

const motionSlice = createSlice({
  name: "motion",
  initialState: ReduxLibMotionChainInitialState,
  reducers: {
    setMotion: (state, action) => ({
      ...state,
      animation: {
        ...state.animation,
        ...action.payload,
      },
    }),
    setDelayLogic: (state, action) => {
      state.delayLogic = action.payload;
    },
  },
});

export default motionSlice.reducer;
export const { setMotion, setDelayLogic } = motionSlice.actions;
