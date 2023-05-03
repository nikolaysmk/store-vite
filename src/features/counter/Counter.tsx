import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { RootState } from '../../store';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <h1>Counter tsx + {count}</h1>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
    </>
  );
};
