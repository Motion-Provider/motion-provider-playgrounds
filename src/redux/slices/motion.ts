import { createSlice } from "@reduxjs/toolkit";
import { ReduxLibMotionChainInitialState } from "@/lib/redux.lib";

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
