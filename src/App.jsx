
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/Sign-Up';
import SignIn from './components/Sign-In';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
<Footer/>
    </>
  );
}
