import './NavBar.css';

const NavBar = () => {
  const refreshPage = () => window.location.reload();

  return (
    <nav>
      <img src="/app-logo-1.png" alt="App Logo" />
      <h2>గాయత్రీ మంత్రము</h2>
      <button onClick={refreshPage}>Home</button>
    </nav>
  );
};

export default NavBar;
