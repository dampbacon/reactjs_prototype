//import logo from './logo.svg';
//import './App.css';
import Navbar from "./components/Navbar";
//import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import UPLOAD from "./components/pages/Upload";
import Create from "./components/pages/Create";
import Mark from "./components/pages/Mark";
import Review from "./components/pages/Review";
import Download from "./components/pages/Download";
function App() {
  return (
    // <div className="container">
    //   <h1>
    //     hello
    //   </h1>
    //   <Header title="test"/>
    //   <Header />

    // </div>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<UPLOAD />} />
        <Route path='/Upload' element={<UPLOAD/>} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Mark' element={<Mark/>} />
        <Route path='/Review' element={<Review/>} />
        <Route path='/Download' element={<Download/>} />
    </Routes>
    </Router>
    
  );
}

export default App;
