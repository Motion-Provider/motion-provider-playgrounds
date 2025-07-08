import { ReduxMotionProps } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animation: {
    mode: ["fadeIn", "scaleZoomIn"],
    transition: "cubicElastic",
    duration: 2,
  },
  controller: {
    configView: {
      amount: 0.5,
      once: false,
    },
    trigger: true,
  },
  logic: "linear",
} as ReduxMotionProps;

const motionSlice = createSlice({
  initialState,
  name: "motion",
  reducers: {
    setAnimation: (state, action) => {
      state.animation = action.payload;
    },
    setController: (state, action) => {
      state.controller = action.payload;
    },
    setLogic: (state, action) => {
      state.logic = action.payload;
    },
  },
});
export default motionSlice.reducer;
export const { setAnimation, setController, setLogic } = motionSlice.actions;
