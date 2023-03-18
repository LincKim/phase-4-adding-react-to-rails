import { useEffect } from "react";
import './App.css';

function App() {
  
  useEffect(() => {
      fetch("/movies")
      .then(res => res.json())
      .then(mov => console.log(mov))
    }, [])

    return <h1>Hello from React!</h1>
}

export default App;
