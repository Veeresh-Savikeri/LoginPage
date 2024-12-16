import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import User from "./components/User";
import{Routes,Route} from 'react-router-dom'

function App() {

return(
  <>
    <Routes>
      <Route  path="/register" element={<Signup/>}/>
      <Route  path="/" element={<Login/>}/>
      <Route exact path="/home" element={<Footer/>}/>
    </Routes>

</>
)
}

export default App;
