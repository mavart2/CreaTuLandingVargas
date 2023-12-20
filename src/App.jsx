import Button from "./component/Button/Button";
import Card from "./component/Card/Card";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar/NavBar";

function App() {
  const intro = 'Bienvenidos'
  return (
    <>
      <div>
        <NavBar />
      </div>
      
      

      <div className="greet">
        <ItemListContainer greeting="Hola comisión 57905" />
      </div>
      <div className="intro" style={{ paddingLeft: '15px' }}>
        <h2>{intro}</h2>
      </div>
      
      <Card/>
    </>
  );
}

export default App;
