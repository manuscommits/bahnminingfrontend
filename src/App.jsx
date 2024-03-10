import "./style.css"
import Verbindungssuche from "./components/Verbindungssuche"
import Header from "./components/Header"
import ProviderWrapper from "./provider/ProviderWrapper"
import Analysis from "./components/Analysis"

const App = () => {
  return (
    <ProviderWrapper>
      <div className="centered">
        <Header />
        <Verbindungssuche />
        <Analysis />
      </div>
    </ProviderWrapper>
  );
}

export default App;
