import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Счетчик: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_AMOUNT", payload: 5 })}>
        +5
      </button>
    </div>
  );
};

export default Counter;
