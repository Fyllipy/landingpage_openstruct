import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 API NBR 6118 - Cálculo Estrutural</span>
          </div>
          <h1 className="hero-title">
            Cálculos Estruturais
            <span className="highlight"> Simplificados</span>
          </h1>
          <p className="hero-description">
            Open Struct oferece uma API robusta para cálculo de elementos estruturais 
            de concreto armado seguindo a norma NBR 6118. Integre facilmente em seus 
            projetos e automatize seus cálculos estruturais.
          </p>
          <div className="hero-actions">
            <a href="#signup" className="btn btn-primary btn-lg">
              Começar Gratuitamente
            </a>
            <a href="#api-docs" className="btn btn-outline btn-lg">
              Ver Documentação
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat">
              <span className="stat-value">&lt;100ms</span>
              <span className="stat-label">Latência</span>
            </div>
            <div className="stat">
              <span className="stat-value">NBR 6118</span>
              <span className="stat-label">Conformidade</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-preview">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">api-example.js</span>
            </div>
            <pre className="code-content">
{`fetch('https://api.openstruct.com/v1/beam', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'rectangular',
    width: 20,      // cm
    height: 50,     // cm
    span: 500,      // cm
    fck: 30,        // MPa
    moment: 120     // kN.m
  })
})
.then(res => res.json())
.then(data => console.log(data));`}
            </pre>
          </div>
        </div>
      </div>
      <div className="hero-bg">
        <div className="grid-pattern"></div>
      </div>
    </section>
  );
};

export default Hero;
