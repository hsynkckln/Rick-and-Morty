import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Detail from './pages/Detail/Detail.jsx';

function App() {
  return (
    <div className="">
        {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              
            </ul>
          </nav>
        </div> */}

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/char/:id" element={<Detail></Detail>}></Route>
        </Routes>
    </div>
  );
}

export default App;
