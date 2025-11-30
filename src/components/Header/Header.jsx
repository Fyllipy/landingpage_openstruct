import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-placeholder">
            <span className="logo-icon">◈</span>
            <span className="logo-text">Open Struct</span>
          </div>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#features">Recursos</a></li>
            <li><a href="#api-docs">Documentação</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#login" className="btn btn-outline">Entrar</a>
          <a href="#signup" className="btn btn-primary">Começar Grátis</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
