import React,{useEffect,useState} from "react";
import "./style.css";

export default function App() {
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()).then((res) => setData(res))
  },[])
  function dataHandler(e){
setSearch(e.target.value)
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input type="text" onChange={dataHandler}/>
      {
        data.sort((a,b) => a.name.localeCompare(b.name)).filter((item) => item.name.toLowerCase().includes(search)).map((item) => <li>{item.name}</li>)
      }
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
