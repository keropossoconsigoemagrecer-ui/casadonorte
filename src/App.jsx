import React from 'react'
// ============================================
// PROJETO: CASA DO NORTE TIA RITINHA
// STACK: React + Tailwind + Vercel
// ============================================

export default function CasaDoNorteSite() {
  const deliveryRules = {
    freeUntilKm: 2,
    pricePerKm: 2,
    scheduledAboveKm: 3,
    minimumOrderAbove3Km: 50,
  }

  const featuredFreeDeliveryProducts = [
    'Frango Assado',
    'Galão de Água 20L',
  ]

  return (
    <div className="min-h-screen bg-[#f6f1e7] text-[#3b2a1f] font-sans">
      {/* DELIVERY INFO BAR */}
      <section className="bg-[#8b5e34] text-white py-4 px-6 text-center text-sm md:text-base font-medium">
        <p>
          🚚 Entrega grátis até 2km • Acima disso R$ 2,00 por km • Acima de 3km apenas pedidos acima de R$ 50 com entrega agendada.
        </p>
      </section>

      {/* HERO */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Casa do Norte Tia Ritinha
          </h1>

          <p className="text-xl md:text-2xl text-[#f8e9c8] mt-6 leading-relaxed">
            Produtos nordestinos selecionados, sabor de casa e aquele atendimento acolhedor que lembra família.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-[#8b5e34] hover:bg-[#6d4725] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg transition"
            >
              Pedir no WhatsApp
            </a>

            <a
              href="#produtos"
              className="bg-white text-[#3b2a1f] px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
            >
              Ver Produtos
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop"
            alt="Produtos nordestinos"
            className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Sobre nós</h2>

          <p className="text-lg leading-relaxed mb-5">
            A Casa do Norte Tia Ritinha nasceu para trazer os sabores mais tradicionais do Nordeste com qualidade, carinho e aquele atendimento acolhedor de comércio de bairro.
          </p>

          <p className="text-lg leading-relaxed mb-5">
            Trabalhamos com queijos, farinhas, castanhas, doces típicos, temperos, bebidas regionais e muito mais.
          </p>

          <p className="text-lg leading-relaxed">
            Aos domingos, também temos nosso tradicional frango assado, muito procurado pelos clientes da região.
          </p>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-20 bg-[#eadfcb] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Catálogo de Produtos</h2>
            <p className="mt-4 text-lg">
              Produtos selecionados para matar a saudade do Nordeste.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                nome: 'Queijos e Requeijão',
                imagem: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1200&auto=format&fit=crop',
              },
              {
                nome: 'Castanhas e Frutas Secas',
                imagem: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e3?q=80&w=1200&auto=format&fit=crop',
              },
              {
                nome: 'Farinhas e Temperos',
                imagem: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
              },
              {
                nome: 'Doces Nordestinos',
                imagem: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{item.nome}</h3>

                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-5 bg-[#8b5e34] text-white px-5 py-3 rounded-xl"
                  >
                    Consultar no WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRANGO ASSADO */}
      <section id="frango" className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Frango Assado de Domingo
          </h2>

          <p className="text-lg leading-relaxed mb-5">
            Todo domingo temos nosso tradicional frango assado, preparado para deixar o almoço em família ainda mais especial.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Faça sua reserva antecipadamente pelo WhatsApp para garantir o seu.
          </p>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-[#8b5e34] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Faça sua reserva
          </a>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop"
            alt="Frango assado"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="py-20 bg-[#eadfcb] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Avaliações dos clientes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Atendimento maravilhoso e produtos de excelente qualidade.',
              'O melhor frango assado da região. Atendimento muito acolhedor.',
              'A loja é linda, organizada e cheia de produtos difíceis de encontrar.',
            ].map((texto, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
                <p className="text-lg leading-relaxed">“{texto}”</p>
                <div className="mt-5 text-yellow-500 text-2xl">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Onde estamos</h2>

          <p className="text-lg mb-4">
            Venha conhecer nossa loja e encontrar os melhores sabores do Nordeste.
          </p>

          <div className="space-y-3 text-lg">
            <p><strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo/SP</p>
            <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
            <p><strong>Instagram:</strong> @casadonortetiaritinha</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://instagram.com/casadonortetiaritinha"
              target="_blank"
              rel="noreferrer"
              className="bg-[#8b5e34] text-white px-6 py-3 rounded-2xl"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-2xl"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px]">
          <iframe
            title="mapa"
            src="https://maps.google.com/maps?q=Sao%20Paulo&t=&z=13&ie=UTF-8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-[#3b2a1f] text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Fale com a gente</h2>

          <p className="text-lg text-[#f6e8c8] mb-10">
            Tire dúvidas, faça reservas ou solicite entregas diretamente no WhatsApp.
          </p>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 px-10 py-5 rounded-2xl text-xl font-semibold transition"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* ADMIN FEATURES PREVIEW */}
      <section className="py-20 bg-[#f3ece1] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Painel Administrativo</h2>
            <p className="mt-4 text-lg">
              Sistema preparado para gestão da loja, pedidos e delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                titulo: 'Gestão de Produtos',
                itens: ['Adicionar produtos', 'Alterar preços', 'Promoções', 'Controle de estoque'],
              },
              {
                titulo: 'Gestão de Delivery',
                itens: ['Controle de raio', 'Taxa por km', 'Agendamento', 'Produtos com frete grátis'],
              },
              {
                titulo: 'Gestão de Pedidos',
                itens: ['Pedidos via WhatsApp', 'Status de entrega', 'Reservas de domingo', 'Histórico de clientes'],
              },
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">{card.titulo}</h3>

                <ul className="space-y-3">
                  {card.itens.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg">
                      <span>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2a1d15] text-[#f1dfc0] py-8 text-center px-6">
        <p>© 2026 Casa do Norte Tia Ritinha • Todos os direitos reservados.</p>
        <div className="mt-4 text-sm text-[#d6c1a0]">
          Delivery local inteligente com pedidos e reservas via WhatsApp.
        </div>
      </footer>
    </div>
  )
}
