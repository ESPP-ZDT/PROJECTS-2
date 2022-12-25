import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

// alternative syntax
// const App = () => { return <h1>Hello like before</h1>; };
// const App = () => <h1>Hello like before</h1>;

export default App;
