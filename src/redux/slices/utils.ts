import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UtilsInitialState } from "@/constants/redux/redux-motion-defaults.lib"; // keep existing constant
import { ReduxUtilsProps } from "@/interfaces/@types-redux";
import { ReduxStoreDispatchType, ReduxRootState } from "..";

interface MotionControlInput {
  stopAnimation: boolean;
  reverseAnimation: boolean;
}

export interface UtilsSliceState extends ReduxUtilsProps {
  control: MotionControlInput;
}

const initialControl: MotionControlInput = {
  stopAnimation: false,
  reverseAnimation: false,
};

const initialState: UtilsSliceState = {
  ...UtilsInitialState,
  control: initialControl,
};

let recallTimeout: ReturnType<typeof setTimeout> | null = null;
const recallDuration = 50;

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setModalState(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },

    setControl(state, action: PayloadAction<Partial<MotionControlInput>>) {
      state.control = { ...state.control, ...action.payload };
    },

    resetControl(state) {
      state = {
        ...state,
        controller: { isAnimationStopped: false, reverse: false },
        control: { ...initialControl },
      };
    },

    IMMEDIATE_STOP(state) {
      state.controller = { isAnimationStopped: true, reverse: true };
    },
    FOLLOW_STOP(state) {
      state.controller = { isAnimationStopped: true, reverse: false };
    },
    IMMEDIATE_RESET(state) {
      state.controller = { isAnimationStopped: true, reverse: false };
    },
    FOLLOW_RESET(state) {
      state.controller = { isAnimationStopped: false, reverse: false };
    },
    UPDATE(state, action: PayloadAction<{ reverseAnimation: boolean }>) {
      state.controller = {
        isAnimationStopped: false,
        reverse: action.payload.reverseAnimation,
      };
    },
  },
});

export const {
  setModalState,
  setControl,
  resetControl,
  IMMEDIATE_STOP,
  FOLLOW_STOP,
  IMMEDIATE_RESET,
  FOLLOW_RESET,
  UPDATE,
} = utilsSlice.actions;

export default utilsSlice.reducer;

export const onReverseThunk =
  () => (dispatch: ReduxStoreDispatchType, getState: () => ReduxRootState) => {
    const state = getState();
    const nextReverse = !state.utils.control.reverseAnimation;

    if (recallTimeout) {
      clearTimeout(recallTimeout);
      recallTimeout = null;
    }

    dispatch(
      setControl({ reverseAnimation: nextReverse, stopAnimation: false })
    );
    dispatch(UPDATE({ reverseAnimation: nextReverse }));
  };

export const onStopThunk = () => (dispatch: ReduxStoreDispatchType) => {
  if (recallTimeout) {
    clearTimeout(recallTimeout);
    recallTimeout = null;
  }

  dispatch(setControl({ stopAnimation: true, reverseAnimation: false }));

  dispatch(IMMEDIATE_STOP());
  recallTimeout = setTimeout(() => {
    dispatch(FOLLOW_STOP());
    recallTimeout = null;
  }, recallDuration);
};

export const resetAnimationThunk = () => (dispatch: ReduxStoreDispatchType) => {
  if (recallTimeout) {
    clearTimeout(recallTimeout);
    recallTimeout = null;
  }

  dispatch(resetControl());
  dispatch(UPDATE({ reverseAnimation: false }));
};

export const playStopThunk =
  () => (dispatch: ReduxStoreDispatchType, getState: () => ReduxRootState) => {
    const { isAnimationStopped } = getState().utils.controller;

    if (!isAnimationStopped) {
      dispatch(onStopThunk());
      return;
    }

    dispatch(resetAnimationThunk());
    dispatch(onReverseThunk());
  };

export const selectController = (s: ReduxRootState) => s.utils.controller;
export const selectControl = (s: ReduxRootState) => s.utils.control;
export const selectIsModalOpen = (s: ReduxRootState) => s.utils.isModalOpen;
