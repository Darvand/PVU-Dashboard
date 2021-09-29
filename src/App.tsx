import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import { AppProvider } from "./store/context";
import Farm from "./pages/Farm/Farm";

function App() {
  return (
    <HashRouter>
      <AppProvider>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/farm" component={Farm} />
        </Layout>
      </AppProvider>
    </HashRouter>
  );
}

export default App;
