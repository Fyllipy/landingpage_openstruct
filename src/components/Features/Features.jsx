import './Features.css';

const features = [
  {
    icon: '🏗️',
    title: 'Vigas',
    description: 'Cálculo de armaduras longitudinais e transversais para vigas retangulares e T, seguindo todos os requisitos da NBR 6118.'
  },
  {
    icon: '🏛️',
    title: 'Pilares',
    description: 'Dimensionamento de pilares com verificação de flambagem, efeitos de 2ª ordem e armaduras mínimas normativas.'
  },
  {
    icon: '📐',
    title: 'Lajes',
    description: 'Cálculo de lajes maciças, nervuradas e cogumelo com distribuição de momentos e armaduras.'
  },
  {
    icon: '🔧',
    title: 'Flexão Simples',
    description: 'Dimensionamento para flexão simples com domínios de deformação e posição da linha neutra.'
  },
  {
    icon: '⚡',
    title: 'Cisalhamento',
    description: 'Verificação ao cisalhamento com modelos I e II da NBR 6118 e dimensionamento de estribos.'
  },
  {
    icon: '🔗',
    title: 'Ancoragem',
    description: 'Cálculo de comprimentos de ancoragem e emendas de armaduras conforme especificações normativas.'
  }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <span className="section-tag">Recursos</span>
          <h2 className="section-title">
            Tudo que você precisa para seus
            <span className="highlight"> cálculos estruturais</span>
          </h2>
          <p className="section-description">
            Nossa API cobre os principais elementos estruturais de concreto armado,
            todos calculados conforme a NBR 6118:2014.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
