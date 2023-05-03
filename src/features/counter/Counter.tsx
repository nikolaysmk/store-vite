import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementAsync } from './counterSlice';
import { RootState } from '../../store';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <h1>Counter tsx + {count}</h1>
      <button type="button" onClick={() => dispatch(increment(1))}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <div>
        <button
          type="button"
          onClick={() => {
            console.log('incrementAsync(5)');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            dispatch(incrementAsync(5));
          }}
        >
          +5
        </button>
      </div>
    </>
  );
};
