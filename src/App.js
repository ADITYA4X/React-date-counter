import { useState } from "react";


export default function App() {
  return (
    <div className="App">
    <Counter/>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setstep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return <div>
    <div>
     <div>
        <button className="buttons" onClick={()=> setstep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button className="buttons" onClick={()=> setstep((c) => c + 1)}>+</button>
      </div>

      <div>
        <button className="buttons" onClick={()=> setCount(c => c - step)}>-</button>
        <span>Count: {count}</span>
        <button className="buttons" onClick={()=> setCount((c) => c + step)}>+</button>
      </div>

      

      <p> 
        <span>
          {count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `} 
        </span>

        <span>{date.toDateString()}</span>
      </p>


    </div>
  </div>
}

 
