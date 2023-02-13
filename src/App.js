import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Navbar from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import Footer from './Components/Footer'
import Contract from './Pages/Contract'
import Login from './Pages/Login'
import Register from './Pages/Registration'
import JoinUs from './Pages/Joinus'
import Contracts from './Admin/Contracts'
import Collaborators from './Admin/Collobarators'
function App(props) {
  return (
    <Router>
      {/* {console.log(window.location.pathname)} */}
      {/* {window.location.pathname !== ("/login") ? (
          <Navbar />
) : null} */}


      <div className="App">
          <Navbar/>
          <Routes>
          
            <Route  path='/' element={<Login/>}/>
            <Route path='/contract' element={<Contract/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/joinus" element={<JoinUs/>} />
            <Route path="/contracts" element={<Contracts/>} />

            <Route path="/colab" element={<Collaborators/>} />

          </Routes>
          <Footer/>

    </div>
    {/* {window.location.pathname !== "/login" ? (
          <Footer />
) : null} */}
    </Router>
    
  );
}

export default App;
