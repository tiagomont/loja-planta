import Menu from "./components/Menu";
import './assets/Css/App.scss';
import AssinaturaNewsletter from "./components/AssinaturaNewsLetter";
import Planta from "./assets/images/princ-planta.png";
import Help from './components/Help';


function App() {

  return (
    <main>
      <Menu />
      <img src={Planta} alt="Imagem de uma planta" className="principal-planta"/>
      <AssinaturaNewsletter />
      <Help />
    </main>
  )
}

export default App
