import { useState } from "react";
import Dashboard from "./pages/Dashboard.tsx"
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import {writeFoodStorage} from "./lib/database/foodStorageDb.ts";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  writeFoodStorage({name: "This is a test."}).then(r => {
    console.log("FoodStorageDb: " + r);
  })

  return (
      <Dashboard />
  );
}

export default App;
