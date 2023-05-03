import {
  createSlice,
  PayloadAction,
  Dispatch,
  AnyAction,
} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const incrementAsync =
  (amount: number) => (dispatch: Dispatch<AnyAction>) => {
    setTimeout(() => {
      try {
        dispatch(incrementByAmount(amount));
      } catch (err) {
        console.error(
          'An error occurred while dispatching incrementByAmount:',
          err,
        );
      }
    }, 5000);
  };

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
