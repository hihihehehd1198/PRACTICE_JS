import "./App.css";
import React, { useState } from "react";
import bigInt from "big-integer";
function App() {
  // const clearAllInput = (inputID) => {
  //   document.getElementById(inputID).value = "";
  //   idOutput = inputID.replace("input", "output");
  //   document.getElementById(idOutput).innerText = "";
  // };
  const [output, setOutput] = useState(0);
  const outputBai4 = () => {
    let x = document.getElementById("input-bai-4").value;
    fibonaci(x);
    // document.getElementById("output-bai-4").innerText = output;
  };
  const fibonaci = (x) => {
    var output = 0;
    var outputArray = [];
    var total = bigInt(0);
    for (let i = 0; i < x; i++) {
      if (i === 0) {
        outputArray.push(0);
      } else if (i === 1) {
        outputArray.push(1);
      } else {
        outputArray.push(outputArray[i - 1] + outputArray[i - 2]);
      }
    }
    for (let j = 0; j < outputArray.length; j++) {
      // total += bigInt(outputArray[j]);
      // total.add(outputArray[j]);
      total += bigInt(outputArray[j]);
    }
    console.log(output);
    console.log(outputArray);
    console.log(total);
    setOutput(() => {
      return total;
    });
  };
  return (
    <header className="App">
      <label htmlFor="input-bai-4">
        <h1>Bài 4</h1>
      </label>
      <input type="number" placeholder="input bai 4" id="input-bai-4" />
      <div>total : {output}</div>
      <div>
        <input type="button" onClick={outputBai4} value="get Total fibo" />
      </div>
    </header>
  );
}

export default App;
