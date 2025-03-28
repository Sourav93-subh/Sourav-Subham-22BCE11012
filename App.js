import { useState} from "react";
import { fetchData } from "./test.js";

export default function ApiComponent(){
  const [data, setData] = useState(null);
  fetchData()
  .then((data) => {
    setData(data);

  })
  
  .catch((error) => {
    console.log("error");

  });

  return(
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}