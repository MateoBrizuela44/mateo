import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import PokeTabla from "./components/PokeTabla";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokeTabla />}></Route>
          <Route path="/:name/" element={<Pokemon />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
