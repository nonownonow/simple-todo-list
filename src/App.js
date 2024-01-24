import { useRef, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const idRef = useRef(0);
  function changeHandler(e) {
    setItem(e.target.value);
  }
  function clickHandler(e) {
    setList([...list, { id: idRef.current + 1, value: item }]);
    setItem("");
    idRef.current++;
  }
  function deleteHandler(id) {
    setList(list.filter((item) => item.id !== id));
  }
  return (
    <article>
      <h1>TO-DO LIST</h1>
      <input type="text" value={item} onChange={changeHandler}></input>
      <button onClick={clickHandler}>+</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.value}</span>
            <button onClick={() => deleteHandler(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default App;
