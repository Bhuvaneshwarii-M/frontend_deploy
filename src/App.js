import AddEmployee from "./AddEmployee";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
       <BrowserRouter>
                <Routes>
                      <Route path='/' element={<AddEmployee/>}>
                      </Route>
                </Routes>
       </BrowserRouter>
  );
}

export default App;
