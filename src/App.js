import "./App.css";
import "./tailwind.generated.css";
import NavbarHome from "./components/NavbarHome.js";
import MainHeader from "./components/MainHeader.js";

function App() {
  return (
    <div className="bg-home font-header antialiased overflow-hidden">
      <NavbarHome />
      <main>
        <MainHeader />
      </main>
    </div>
  );
}

export default App;
