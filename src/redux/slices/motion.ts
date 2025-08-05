import { MotionDefaultInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import { MotionAnimation } from "@/interfaces/@types-constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const motionSlice = createSlice({
  name: "motion",
  initialState: MotionDefaultInitialState,
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
    setAll: (_, action: PayloadAction<MotionAnimation>) => action.payload,
  },
});

export default motionSlice.reducer;
export const { setMotion, setDelayLogic, setAll } = motionSlice.actions;
