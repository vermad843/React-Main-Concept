import React,{ useState , useEffect}  from 'react';



function App() {
    const [seconds, setTime] = useState(0);
    function tick(e) {
      setTime(seconds + 1)
    }
   
    useEffect(() => {
     let  interval = setInterval(() => tick(),1/1000);
     return () =>  {
      clearInterval(interval)
     }
    })     
    return (
      <div>
        <h1>Delay</h1>
        <input 
        value = {seconds} 
         onChange = {tick}
         />
        <h1 >Timer : {seconds} </h1>
      </div>
    );
  }
 


export default App;