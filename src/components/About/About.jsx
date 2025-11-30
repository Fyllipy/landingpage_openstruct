import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">Open Source</span>
          <h2 className="section-title">
            Sobre o <span className="highlight">Open Struct</span>
          </h2>
          <p className="section-description">
            Open Struct é um projeto open source dedicado a democratizar 
            o acesso a ferramentas de cálculo estrutural para engenheiros.
          </p>
        </div>

        <div className="about-card">
          <div className="about-badge">✨ 100% Gratuito</div>
          <h3 className="about-title">API Livre e Aberta</h3>
          <p className="about-description">
            Todos os recursos disponíveis, sem limitações. Contribua com o projeto no GitHub.
          </p>
          
          <div className="about-features">
            <div className="about-feature-item">
              <span className="check">✓</span>
              <span>Requisições ilimitadas</span>
            </div>
            <div className="about-feature-item">
              <span className="check">✓</span>
              <span>Todos os tipos de cálculo (vigas, pilares, lajes)</span>
            </div>
            <div className="about-feature-item">
              <span className="check">✓</span>
              <span>Cálculos conforme NBR 6118:2014</span>
            </div>
            <div className="about-feature-item">
              <span className="check">✓</span>
              <span>Documentação completa</span>
            </div>
            <div className="about-feature-item">
              <span className="check">✓</span>
              <span>Suporte da comunidade</span>
            </div>
            <div className="about-feature-item">
              <span className="check">✓</span>
              <span>Código open source</span>
            </div>
          </div>

          <a href="#signup" className="btn btn-primary btn-lg btn-block">
            Começar a Usar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
