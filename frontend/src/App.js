import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm/SignInForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Programs />
              <Reasons />
              <Plans />
              <Testimonials />
              <Join />
              <Footer />
            </>
          } />
          <Route path="/sign-in" element={<SignInForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;