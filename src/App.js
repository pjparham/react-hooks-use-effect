import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  useEffect(
    // 1st arg: side effect (callback function)
    () => console.log("useEffect called"),
    // 2nd arg: dependencies array
    [count]
  );

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        setImages(data.message);
      });
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    <div>
      {images.map((image) => (
        <img src={image} key={image} />
      ))}
    </div>
    </div>
  );
}
export default App;
