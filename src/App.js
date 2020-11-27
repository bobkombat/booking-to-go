import "./tailwind.generated.css";
import NavbarHome from "./components/NavbarHome.js";
import MainHeader from "./components/MainHeader.js";
import Quote from "./components/Quote";
import Feature from "./components/Feature";

function App() {
  return (
    <div className="bg-home font-header antialiased overflow-hidden">
      <NavbarHome />
      <main>
        <MainHeader />
        <Quote />
        <Feature />
      </main>
    </div>
  );
}

export default App;
