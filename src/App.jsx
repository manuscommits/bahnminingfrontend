import "./style.css"
import Verbindungssuche from "./components/Verbindungssuche"
import Header from "./components/Header"
import ProviderWrapper from "./provider/ProviderWrapper"

const App = () => {
  return (
    <ProviderWrapper>
      <div className="centered">
        <Header />
        <Verbindungssuche />
      </div>
    </ProviderWrapper>
  );
}

export default App;
