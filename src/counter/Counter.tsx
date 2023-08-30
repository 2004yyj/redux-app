import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import { useEffect } from "react";
import { RootState } from "../modules/createStore";

const Counter = () => {
  const counter = useSelector((state: RootState) => {
    return state.counter
  });

  useEffect(() => {
    console.log(counter.number)
  }, [counter.number])

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <div>{counter.number}</div>
      </div>
    </div>
  );
}

export default Counter