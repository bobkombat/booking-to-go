import "./App.css";
import "./tailwind.generated.css";
import NavbarHome from "./components/NavbarHome.js";

function App() {
  return (
    <div className="bg-home h-screen mx:auto font-header antialiased">
      <NavbarHome />
    </div>
  );
}

export default App;
