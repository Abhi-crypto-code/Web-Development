import './App.css'
import Title from "./Title.jsx";
import ProductTab from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx';
function Description(){

  return <p>Description of this app . 2 * 2 = {2*2}</p>

}

function App() {
  

  return(
    <>
      <h2>Block Buster Deals | Shop now</h2>
      <ProductTab/>
    </>
  );
}

export default App
