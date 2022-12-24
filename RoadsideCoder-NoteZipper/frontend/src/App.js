import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "93vh" }}>Bla bla</main>
      <Footer />
    </>
  );
}

// alternative syntax
// const App = () => { return <h1>Hello like before</h1>; };
// const App = () => <h1>Hello like before</h1>;

export default App;
