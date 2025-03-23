import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import OneSignal from "react-onesignal";

function App() {
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      OneSignal.init({
        appId: "2f4424cb-5ed7-42fe-bd20-e110f67a1290",
        notifyButton: {
          enable: true,
        },
      });
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
