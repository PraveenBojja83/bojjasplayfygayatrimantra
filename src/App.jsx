import HeaderBar from './components/HeaderBar';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import FooterBar from './components/FooterBar';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <HeaderBar />
      <NavBar />
      <MainPage />
      <FooterBar />
    </div>
  );
}


export default App;
