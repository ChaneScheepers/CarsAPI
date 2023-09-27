import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cars from "./pages/cars";
import CreateCar from "./pages/createCar";
import UpdateCar from "./pages/updateCar";

//Added routes for pages. Used bootstrap for very basic styling.
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cars />}></Route>
          <Route path="/create" element={<CreateCar />}></Route>
          <Route path="/update/:id" element={<UpdateCar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
