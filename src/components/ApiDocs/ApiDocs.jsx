import './ApiDocs.css';

const ApiDocs = () => {
  return (
    <section className="api-docs" id="api-docs">
      <div className="api-docs-container">
        <div className="section-header">
          <span className="section-tag">Documentação</span>
          <h2 className="section-title">
            API <span className="highlight">simples e poderosa</span>
          </h2>
          <p className="section-description">
            Integre em minutos com nossa API RESTful bem documentada.
            Retornos em JSON com todos os detalhes do cálculo.
          </p>
        </div>

        <div className="api-content">
          <div className="api-endpoints">
            <h3 className="api-section-title">Endpoints Disponíveis</h3>
            <div className="endpoint">
              <span className="method post">POST</span>
              <code>/v1/beam/flexure</code>
              <span className="endpoint-desc">Cálculo de flexão em vigas</span>
            </div>
            <div className="endpoint">
              <span className="method post">POST</span>
              <code>/v1/beam/shear</code>
              <span className="endpoint-desc">Verificação ao cisalhamento</span>
            </div>
            <div className="endpoint">
              <span className="method post">POST</span>
              <code>/v1/column/design</code>
              <span className="endpoint-desc">Dimensionamento de pilares</span>
            </div>
            <div className="endpoint">
              <span className="method post">POST</span>
              <code>/v1/slab/reinforcement</code>
              <span className="endpoint-desc">Armadura de lajes</span>
            </div>
            <div className="endpoint">
              <span className="method get">GET</span>
              <code>/v1/materials/steel</code>
              <span className="endpoint-desc">Propriedades do aço</span>
            </div>
            <div className="endpoint">
              <span className="method get">GET</span>
              <code>/v1/materials/concrete</code>
              <span className="endpoint-desc">Propriedades do concreto</span>
            </div>
          </div>

          <div className="api-response">
            <h3 className="api-section-title">Exemplo de Resposta</h3>
            <div className="code-block">
              <div className="code-header">
                <span className="code-lang">JSON Response</span>
              </div>
              <pre className="code-content">
{`{
  "success": true,
  "calculation": {
    "type": "beam_flexure",
    "standard": "NBR 6118:2014"
  },
  "input": {
    "width": 20,
    "height": 50,
    "moment": 120,
    "fck": 30,
    "steel_grade": "CA-50"
  },
  "results": {
    "neutral_axis": 8.45,
    "domain": 2,
    "required_steel": {
      "As": 6.82,
      "unit": "cm²"
    },
    "suggested_bars": "4 φ 16mm",
    "verification": "OK"
  },
  "warnings": [],
  "computation_time": "45ms"
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="api-cta">
          <a href="#signup" className="btn btn-primary btn-lg">
            Obter Chave de API
          </a>
          <a href="#" className="btn btn-outline btn-lg">
            Documentação Completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApiDocs;
