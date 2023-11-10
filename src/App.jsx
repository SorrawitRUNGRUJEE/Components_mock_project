import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Components from "./test";
import Input from "./input";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const data = [
    { name: "CQK" },
    { name: "Otoya" },
    { name: "Chester grill" },
    { name: "kagonoya" },
    { name: "BBQ plaza" },
  ];

  const hdl_search = (e) => {
    let result = [];
    setInput(e.target.value);
    for (let i of data) {
      let input = e.target.value.trim().toUpperCase();
      let shopList = i.name.trim().toUpperCase();
      if (shopList.includes(input)) {
        result.push(i);
      }
    }
  };

  return (
    <input
      className=" border border-solid"
      value={input}
      onChange={hdl_search}
    />
  );
}

export default App;
