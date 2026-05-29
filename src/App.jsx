import React from 'react';
import './App.css';

// ==========================================
// CONFIGURAÇÃO DOS LINKS OFICIAIS DA LOJA
// ==========================================
const LINK_DO_APLICATIVO = "https://atlasautomacao.app.br/casadonorte"; 
const LINK_DO_INSTAGRAM = "https://www.instagram.com/casadonorte.tiaritinha/";
const LINK_DO_WHATSAPP = "https://wa.me/551158735416?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido.";
const LINK_DO_MAPS = "https://www.google.com/maps/dir/?api=1&destination=Rua+Garcia+de+Toledo,+67A+Jardim+São+Bento+Novo+São+Paulo";

function App() {
  
  // Função para rolar a tela suavemente até o rodapé (Contato e Localização)
  const rolarParaRodape = (e) => {
    e.preventDefault();
    document.getElementById('rodape').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-container">
      
      {/* 1. TOPO FIXO COM 5 BOTÕES */}
      <header className="topo-fixo">
        <div className="topo-conteudo">
          <div className="logo-texto">Casa do Norte Tia Ritinha</div>
          <nav className="botoes-navegacao">
            <a href={LINK_DO_APLICATIVO} target="_blank" rel="noreferrer" className="btn-nav btn-app">Acessar Nosso App</a>
            <a href={LINK_DO_INSTAGRAM} target="_blank" rel="noreferrer" className="btn-nav btn-insta">Instagram</a>
            <a href={LINK_DO_WHATSAPP} target="_blank" rel="noreferrer" className="btn-nav btn-whats">WhatsApp</a>
            <a href="#contato" onClick={rolarParaRodape} className="btn-nav">Contato</a>
            <a href="#localizacao" onClick={rolarParaRodape} className="btn-nav">Localização</a>
          </nav>
        </div>
      </header>

      {/* 2. BANNER PRINCIPAL / FACHADA */}
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
            {/* O site exibirá uma imagem base. Para usar a sua foto real futuramente, basta salvar sua foto como 'frango.jpg' no github */}
            <img src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=600" alt="Frango Assado Real" className="foto-produto" />
          </div>
          <div className="frango-info">
            <span className="selo-domingo">Todo Domingo</span>
            <h2>Frango Assado com Batatas e Farofa</h2>
            <p>O melhor tempero da região para o seu almoço de domingo! Acompanha batatas assadas bem douradas e nossa farofa artesanal especial da casa.</p>
            <p className="aviso-reserva">⚠️ Faça sua reserva antecipada para garantir o seu!</p>
            <a href={LINK_DO_WHATSAPP} target="_blank" rel="noreferrer" className="btn-pedido">Reservar pelo WhatsApp</a>
          </div>
        </div>
      </section>

      {/* 4. REGRAS DE DELIVERY (EM DESTAQUE) */}
      <section className="secao-delivery">
        <div className="caixa-delivery">
          <h3>🛵 Regras do Nosso Delivery Local</h3>
          <div className="regras-grid">
            <div className="regra-item">
              <strong>Até 2 km</strong>
              <p>Entrega GRÁTIS para pedidos acima de R$ 14,00</p>
            </div>
            <div className="regra-item">
              <strong>A partir de 2 km</strong>
              <p>Taxa fixa de R$ 2,00 por quilômetro rodado</p>
            </div>
            <div className="regra-item">
              <strong>A partir de 3 km</strong>
              <p>Pedido mínimo necessário de R$ 50,00</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VITRINE DE PRODUTOS DE EMPÓRIO (100% CRUS) */}
      <section className="secao-produtos">
        <div className="titulo-secao">
          <h2>Nosso Empório Tradicional</h2>
          <p>Os melhores produtos regionais selecionados para preparar na sua casa (Produtos Crus)</p>
        </div>

        <div className="produtos-grid">
          {/* Categoria 1: Carnes Secas e Feijoada */}
          <div className="card-produto">
            <img src="https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=400" alt="Carne Seca" className="foto-produto" />
            <h3>Carne Seca & Pertences</h3>
            <p>Carne seca selecionada de primeira e pertences completos (orelha, pé, rabo e linguiças) para aquela feijoada caprichada.</p>
          </div>

          {/* Categoria 2: Queijos */}
          <div className="card-produto">
            <img src="https://images.unsplash.com/photo-1552763442-1b482f02d64b?q=80&w=400" alt="Queijos" className="foto-produto" />
            <h3>Queijos de Tradição</h3>
            <p>Queijo coalho fresquinho para grelhar, queijo minas, queijo manteiga legítimo e requeijão de corte tradicional.</p>
          </div>

          {/* Categoria 3: Farinhas, Goma e Tapioca */}
          <div className="card-produto">
            <img src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=400" alt="Farinhas" className="foto-produto" />
            <h3>Farinhas, Polvilhos & Goma</h3>
            <p>Farinha de mandioca fina e grossa, feijão de corda novo, massa pronta de qualidade para tapioca, bolo puba e polvilhos doce/azedo.</p>
          </div>

          {/* Categoria 4: Temperos */}
          <div className="card-produto">
            <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400" alt="Temperos" className="foto-produto" />
            <h3>Temperos Moídos na Hora</h3>
            <p>Variedade incrível de temperos puros, pimentas selecionadas, azeite de dendê, óleo e leite de coco para dar o verdadeiro sabor à sua comida.</p>
          </div>

          {/* Categoria 5: Naturais e Chás */}
          <div className="card-produto">
            <img src="
