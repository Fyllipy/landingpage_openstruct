import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <span className="section-tag">Contato</span>
            <h2 className="section-title">
              Pronto para <span className="highlight">começar?</span>
            </h2>
            <p className="contact-description">
              Entre em contato conosco para saber mais sobre como a Open Struct 
              pode ajudar a automatizar seus cálculos estruturais.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:contato@openstruct.com">contato@openstruct.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <span className="contact-label">Suporte</span>
                  <a href="mailto:suporte@openstruct.com">suporte@openstruct.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="seu@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Empresa</label>
                <input 
                  type="text" 
                  id="company" 
                  placeholder="Nome da empresa (opcional)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea 
                  id="message" 
                  rows="4"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
