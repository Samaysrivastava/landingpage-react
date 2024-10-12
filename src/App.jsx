
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/Footer.scss";
import "./styles/contact.scss";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Services from "./components/Services";
import "./styles/mediaquery.scss";
function App() {
 

  return (
  
     <Router>
        <Header/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contacts/>}/>
          <Route path="/services" element={<Services/>}/>
       </Routes>
       <Footer/>
     </Router>
  
  )
}

export default App
