import React from 'react';
import './App.css';

const LINK_DO_APLICATIVO = "https://atlasautomacao.app.br/casadonorte";
const LINK_DO_INSTAGRAM = "https://www.instagram.com/casadonorte.tiaritinha/";
const LINK_DO_WHATSAPP = "https://wa.me/551158735416?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido.";
const LINK_DO_MAPS = "https://maps.app.goo.gl/uP9zK1gTjY6qJv8p6";

function App() {
  const rolarParaRodape = (e) => {
    e.preventDefault();
    document.getElementById('rodape').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-container">
      <header className="topo-fixo">
        <div className="topo-conteudo">
          <div className="logo-texto">Casa do Norte Tia Ritinha</div>
          <nav className="botoes-navegacao">
            <a href={LINK_DO_APLICATIVO} target="_blank" rel="noreferrer" className="btn-nav btn-app">Nosso App</a>
            <a href={LINK_DO_INSTAGRAM} target="_blank" rel="noreferrer" className="btn-nav btn-insta">Instagram</a>
            <a href={LINK_DO_WHATSAPP} target="_blank" rel="noreferrer" className="btn-nav btn-whats">WhatsApp</a>
            <a href="#rodape" onClick={rolarParaRodape} className="btn-nav">Contato</a>
            <a href="#rodape" onClick={rolarParaRodape} className="btn-nav">Localização</a>
          </nav>
        </div>
      </header>

      <section className="banner-principal">
        <div className="banner-overlay">
          <h1>Sabores do Nordeste em São Paulo</h1>
          <p>Tradição e Carinho de Família</p>
        </div>
      </section>

      <section className="secao-frango">
        <div className="card-frango">
          <div className="frango-info">
            <span className="selo-domingo">Todo Domingo</span>
            <h2>Frango Assado com Batatas</h2>
            <p>O melhor tempero da região para o seu almoço em família! Acompanha batatas assadas e farofa especial.</p>
            <a href={LINK_DO_WHATSAPP} target="_blank" rel="noreferrer" className="btn-pedido">Reservar pelo WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="secao-produtos">
        <h2>Nosso Empório</h2>
        <div className="produtos-grid">
          {["Carne Seca & Pertences", "Queijos de Tradição", "Farinhas & Polvilhos", "Temperos Moídos", "Naturais & Chás", "Bebidas & Doces"].map((item, index) => (
            <div key={index} className="card-produto">
              <h3>{item}</h3>
              <p>Clique no App para ver preços e realizar seu pedido.</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="rodape" className="rodape-site">
        <div className="rodape-grid">
          <div className="rodape-bloco">
            <h3>Nossos Contatos</h3>
            <p>WhatsApp/Fixo: (11) 5873-5416</p>
          </div>
          <div className="rodape-bloco">
            <h3>Onde Estamos</h3>
            <p>Rua Garcia de Toledo, 67 A - Capão Redondo</p>
            <a href={LINK_DO_MAPS} target="_blank" rel="noreferrer" className="btn-maps">🗺️ Traçar Rota</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
