import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Components from "./test";
import Input from "./input";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const data = [
    { label: "shop picture", name: "shop name", picture: "shop" },
    { label: "", name: "id number" },
    { label: "company picture", name: "company", picture: "company" },
    { label: "", name: "kagonoya" },
    { label: "", name: "BBQ plaza" },
  ];

  return data.map((el) => {
    if (el.picture) {
      if (el.picture == "shop") {
        return (
          <>
            <div className=" flex flex-col">
              <label>{el.name}</label>
              <input name={el.name} />
            </div>
            <div className=" flex flex-col">
              <label>{el.label}</label>
              <input type="file" />
            </div>
          </>
        );
      }
      if (el.picture == "company") {
        return (
          <>
            <div className=" flex flex-col">
              <label>{el.name}</label>
              <input name={el.name} />
            </div>
            <div className=" flex flex-col">
              <label>{el.label}</label>
              <input type="file" />
            </div>
          </>
        );
      }
    }
    return (
      <>
        <div className=" flex flex-col">
          <label>{el.name}</label>
          <input name={el.name} />
        </div>
      </>
    );
  });
}

export default App;
