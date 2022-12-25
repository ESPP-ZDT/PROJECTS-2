import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}

// alternative syntax
// const App = () => { return <h1>Hello like before</h1>; };
// const App = () => <h1>Hello like before</h1>;

export default App;
