import './App.css';
import { Card } from './components/Card';
import { DataProvider } from './components/DataContext';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';

export default function App() {
  return (
    <DataProvider>
      <div>
        <section className='App'>
          <Nav />
          <Hero />
        </section>
        <Card />
        <Footer />
      </div>
    </DataProvider>
  )
}

