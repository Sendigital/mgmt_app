import { Container } from '@mui/material';
import './App.css';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Features from './components/Features';
import BusinessPlans from './components/BusinessPlans';
import DropMenu from './components/DropMenu';
import Footer from './components/Footer';

const App = () => {
  return (
    <Container>

      <AppBar />
      <Banner />
      <Features />
      <BusinessPlans />
      <DropMenu />
      <Footer />

    </Container>
  );
}

export default App;
