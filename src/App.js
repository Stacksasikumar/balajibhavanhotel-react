import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import Home from './pages/Home/Home';
// import Services from './pages/Service/Services';
// import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

const App = () => {
  return (
  <>
    <Router>
    <Header/>
    <main>
      <Routes>
        

      </Routes>
    </main>
   </Router>

  </>
  );
}


export default App;
