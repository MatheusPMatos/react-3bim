import "./App.css";

import Contador from "./components/contador";
import Layout from "./components/layout";
import Saudacao from "./components/saudacao";

function App() {
  return (
    <div className="App">
      <Saudacao name="Matheus" size={32} />
      <Contador count={0}/>
      <Layout />
    </div>
  );
}

export default App;
