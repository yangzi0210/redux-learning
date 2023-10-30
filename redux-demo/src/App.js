import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { increment, decrement, addToNum } from "./store/modules/counterStore";
import { fetchChannelList } from "./store/modules/channelStore";

function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        加
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        减
      </button>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(addToNum(value));
        }}
      >
        输入指定数字
      </button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
