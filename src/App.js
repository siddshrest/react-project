import React , {useState} from 'react'

function App() {

    const [list,setList] = useState([]);
    const [input, setInput] = useState("");

    return(
      <div>
        <h1> Todo List</h1>
        <input
         type = "text" 
         value={input} 
         onChange={(e)=> setInput(e.target.value)}
         />
         <button>Add</button>
      </div>
    );
}

export default App
