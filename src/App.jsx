import React from 'react';
import './App.css';

// ==========================================
// CONFIGURAÇÃO: COLOQUE SEUS LINKS AQUI!
// ==========================================
const LINK_DO_APLICATIVO = "https://seu-aplicativo-aqui.com"; 
const LINK_DO_WHATSAPP = "https://wa.me/551158735416?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido.";
const LINK_DO_MAPS = "https://www.google.com/maps/dir//Rua+Garcia+de+Toledo,+67+A+-+Jardim+São+Bento+Novo,+São+Paulo+-+SP,+05882-440/";

function App() {
  
  // Função para rolar a tela suavemente até o rodapé
  const rolarParaRodape = (e) => {
    e.preventDefault();
    document.getElementById('rodape').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-container">
      
      {/* 1. TOPO FIXO COM OS 4 BOTÕES */}
      <header className="topo-fixo">
        <div className="topo-conteudo">
          <div className="logo-texto">Casa do Norte Tia Ritinha</div>
          <nav className="botoes-navegacao">
            <a href={LINK_DO_APLICATIVO} target="_blank" rel="noreferrer" className="btn-nav btn-app">Link para o App</a>
            <a href={LINK_DO_WHATSAPP} target="_blank" rel="noreferrer" className="btn-nav btn-whats">WhatsApp</a>
            <a href="#contato" onClick={rolarParaRodape} className="btn-nav">Contato</a>
            <a href="#localizacao" onClick={rolarParaRodape} className="btn-nav">Localização</a>
          </nav>
        </div>
      </header>

      {/* 2. BLCO PRINCIPAL / FACHADA */}
      <section className="banner-principal">
        <div className="banner-overlay">
          <h1>Sabores do Nordeste em São Paulo</h1>
          <p>Tradição e Carinho de Família</p>
        </div>
      </section>

      {/* 3. O GRANDE DESTAQUE DE DOMINGO (FRANGO ASSADO) */}
      <section className="secao-frango">
        <div className="card-frango">
          <div className="frango-imagem-container">
            {/* Para trocar pela sua foto real, mude o src para o link da sua imagem ou coloque frango.jpg na pasta do github */}
            <img src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=600" alt="Frango Assado" className="foto-produto" />
          </div>
          <div className="frango-info">
            <span className="selo-domingo">Todo Domingo</span>
            <h2>Frango Assado com Batatas e Farofa</h2>
            <p>O melhor tempero da região para o seu almoço em família! Acompanha batatas assadas coradas e nossa farofa especial da casa.</p>
            <p className="aviso-reserva">⚠️ Faça sua reserva antecipada para garantir o seu!</p>
            <a href={LINK_DO_WHATSAPP} target="_blank" rel="noreferrer" className="btn-pedido">Reservar pelo WhatsApp</a>
          </div>
        </div>
      </section>

      {/* 4. REGRAS DE DELIVERY (EM DESTAQUE) */}
      <section className="secao-delivery">
        <div className="caixa-delivery">
          <h3>🛵 Como funciona nosso Delivery?</h3>
          <div className="regras-grid">
            <div className="regra-item">
              <strong>Até 2 km</strong>
              <p>Entrega GRÁTIS para pedidos acima de R$ 14,00</p>
            </div>
            <div className="regra-item">
              <strong>A partir de 2 km</strong>
              <p>Taxa de R$ 2,00 por quilômetro rodado</p>
            </div>
            <div className="regra-item">
              <strong>A partir de 3 km</strong>
              <p>Pedido mínimo de R$ 50,00</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VITRINE DE PRODUTOS DE EMPÓRIO (100% CRUS) */}
      <section className="secao-produtos">
        <div className="titulo-secao">
          <h2>Nosso Empório Tradicional</h2>
          <p
