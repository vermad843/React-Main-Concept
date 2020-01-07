import React,{ useState }  from 'react';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <input value = {count}/>
      <button onClick={() => setCount(count - 1)}>
        Decrement 
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h1> Timer : {count}</h1>
    </div>
  );
}



export default App;