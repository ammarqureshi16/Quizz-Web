import logo from "./logo.svg";
import "./App.css";
import Home from "./Screen/Home-Page";
import Facbook from "./Screen/Facebook-Home";
import { useEffect, useState } from "react";

function App() {
  const [post,setPost] = useState([])
  useEffect(()=>{
    console.log("Chala bhai-->>>")
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(res => setPost(res))
  },[])
   
  return (
    <>
    <Home />
    {/* <h1>{post}</h1> */}
    <ol>
      {post.map((item)=>{
        return(
          <>
          <li>{item.title}</li>
          </>
        )
      })}
    </ol>
    <button onClick={()=>{setPost([])}}>Empty List</button>
      {/* <Facbook /> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
