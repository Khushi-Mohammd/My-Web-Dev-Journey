import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function Description() {
  return <h3>I am the Description!</h3>;
}

function App() {
  return (
    <>
      <MsgBox userName="Khushi Mohammd" textColor="white" />
      <ProductTab />
    </>
  );
}

export default App;
