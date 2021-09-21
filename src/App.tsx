import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" component={Home} exact />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
