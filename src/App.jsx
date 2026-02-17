import { useState } from "react";
import "./App.css";
import Confetti from "./Confetti";
import FloatingHearts from "./FloatingHearts";
import ValentineContainer from "./ValentineContainer";

export default function App() {
  const [yes, setYes] = useState(false);

  return (
    <main>
      {yes && <Confetti />}
      <FloatingHearts />
      <ValentineContainer yes={yes} setYes={setYes} />
    </main>
  );
}
