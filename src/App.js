import "./styles.css";
import Footer from "./footer";
import Header from "./header";
import Content from "./content";

function App() {
  return (
    <div className="layout">
      <Header MyNiceColor="gray" />
      <Content />
      <Footer year="2023" />
    </div>
  );
}

export default App;
