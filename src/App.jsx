import React from "react";
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import { Home, Component1, Component2 , Component3} from "./pages";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/component1' element={<Component1 />}>
              <Route path='component3' element={<Component3/>}/>
            </Route>
            <Route path='/component2' element={<Component2 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
