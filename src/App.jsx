import './styles/globals.css';
import { 
  Header, 
  Hero, 
  Features, 
  ApiDocs, 
  About, 
  Contact, 
  Footer 
} from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <ApiDocs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
