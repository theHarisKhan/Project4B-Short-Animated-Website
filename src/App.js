import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import CaseStudy from './Components/CaseStudies/CaseStudy';
import ChatBot from './Components/ChatBot/ChatBot';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Reviews/Review';
import Sample from './Components/Samples/Sample';
import Services from './Components/Services/Services';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <About />
      <ChatBot />
      <Sample />
      <CaseStudy />
      <Blogs />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
