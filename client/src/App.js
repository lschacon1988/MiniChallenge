import "./App.css";
import TableData from "./components/Tables";
import "bootstrap/dist/css/bootstrap.min.css";
import FormState from "./components/FormState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/view/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<NavBar/>}>   
          <Route index element={<Home/>} />      
          <Route path="table"  element={<TableData/>} />
          <Route path="form"  element={<FormState/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
