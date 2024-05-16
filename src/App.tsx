import Dashboard from "./pages/Dashboard";
import "./App.css";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isFormBeingDisplayed, setIsFormBeingDisplayed] = useState(false);
  const displayEntryForm = (val: boolean) => {
    setIsFormBeingDisplayed(val);
  };
  return (
    <>
      <Outlet />
      <div className="flex">
        <div>
          <SideBar displayEntryForm={displayEntryForm} />
        </div>
        <div>
          <Dashboard displayEntryForm={displayEntryForm} isFormBeingDisplayed={isFormBeingDisplayed} />
        </div>
      </div>
    </>
  );
}

export default App;
