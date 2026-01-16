import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Sobre />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
