import React from "react";
import Function from "./Function";
import Test1 from "./Function";
import User from "./User";
import Home from "./Home";

function App(){
  return(
    <div>
        <Function text="This is Functional" />
        <Test1 text="This is Test1 Function" />
        <User name={{ data:'amit'}} address={{ data:'123 Mall Road'}} />
        <User name={{ data:'ajay'}} address={{ data:'123435 Mall Road'}} />
        <User name={{ data:'john'}} address={{ data:'1233355 Mall Road'}} />
        <User name={{ data:'imran'}} address={{ data:'1234646 Mall Road'}} />
        <Home name={{ data:'john'}} address={{ data:'1233355 Mall Road'}} />
        <Home name={{ data:'imran'}} address={{ data:'1234646 Mall Road'}} />
    </div>
  )
}

export default App;