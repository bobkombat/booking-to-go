import "./tailwind.generated.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home.js";
import Search from "./pages/Search";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Detail from "./pages/Detail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:searched/:page" component={Search} />
          <Route path="/movie/:id" component={Detail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
