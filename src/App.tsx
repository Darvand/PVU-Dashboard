import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Route path="/" component={Home} exact />
      </Layout>
    </HashRouter>
  );
}

export default App;
