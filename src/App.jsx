import Login from "./components/Login";
import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetctAPI = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res = await data.json();
      setData(res);
      console.log(res);
    };
    fetctAPI();
    // console.log("Useeffect working");
  }, []);

  // no dependencies array = run on every render
  // no dependencies in array = only run on mounting
  // dependencies = when it changes, our useeffect runs\

  const Post = (post) => {
    return (
      <div key={post.id}>
        <h1>{post.id}</h1> <h2>{post.title}</h2>
        <p>{`${post.completed}`}</p>
      </div>
    );
  };

  return (
    <>
      <div id="container">
        <div>{counter}</div>
        <button
          onClick={() => {
            setCounter((state) => state + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCounter((state) => state - 1);
          }}
        >
          Decrease
        </button>
      </div>
      <div>{data.map(Post)}</div>
    </>
  );
};

export default App;
