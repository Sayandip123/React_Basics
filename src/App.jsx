import { useState } from "react";
import Card from "./Components/Card";
function App() {
  const [val, setVal] = useState({ name: "Sayan", reveal: "Main" });
  return (
    <div>
      <Card />
      
      <h1>
        Name: {val.name} Reveal:{val.reveal.toString()}{" "}
      </h1>
      <button
        onClick={() =>
          setVal({
            ...val,
            reveal: val.reveal == "Main" ? "Character" : "Main",
          })
        }
        className={` ${
          val.reveal == "Main" ? "bg-blue-400" : "bg-red-500"
        } p-2 rounded-lg`}
      >
        {val.reveal}
      </button>
    </div>
  );
}
export default App;
