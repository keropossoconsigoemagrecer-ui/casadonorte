export default function CasaDoNorteSite() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5efe6',
        padding: '40px',
        fontFamily: 'Arial',
        color: '#4b2e1e',
      }}
    >
      <h1 style={{ fontSize: '42px' }}>
        Casa do Norte Tia Ritinha
      </h1>

      <p style={{ fontSize: '20px', marginTop: '20px' }}>
        Sabores do Nordeste com tradição, qualidade e atendimento familiar.
      </p>

      <div style={{ marginTop: '40px' }}>
        <h2>Delivery Local</h2>

        <p>🚚 Entrega grátis até 2km</p>
        <p>📍 Acima disso: R$ 2,00 por km</p>
        <p>🛵 Acima de 3km apenas pedidos acima de R$ 50</p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Contato</h2>

        <p>📞 (11) 5873-5416</p>

        <p>
          📍 Rua Garcia de Toledo 67A,
          Jardim São Bento Novo,
          São Paulo - SP
        </p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <a
          href="https://www.instagram.com/casadonorte.tiaritinha"
          target="_blank"
        >
          Instagram
        </a>
      </div>
    </div>
  )
}
