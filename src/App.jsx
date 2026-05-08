import { useState } from 'react'
import './App.css'

const menuData = {
  entrées: [
    { name: "Soupe Tom Yum", description: "Soupe à la citronnelle, galanga, champignons et piment", price: "8,50 €", tags: ["S"] },
    { name: "Soupe Tom Kha", description: "Soupe au lait de coco avec galanga et champignons", price: "8,50 €", tags: [] },
    { name: "Nem", description: "Rouleaux de printemps croustillants aux légumes", price: "7,50 €", tags: ["V"] },
    { name: "Satay", description: "Brochettes de poulet grillé, sauce cacahuète", price: "9,00 €", tags: [] },
    { name: "Salade de Papaye", description: "Salade de papaye verte aux tomates et cacahuètes", price: "9,50 €", tags: ["V", "S"] },
  ],
  plats: [
    { name: "Pad Thaï", description: "Nouilles de riz sautées aux crevettes, œufs et cacahuètes", price: "16,50 €", tags: [] },
    { name: "Curry Massaman", description: "Curry aux pommes de terre, cacahuètes et lait de coco", price: "15,50 €", tags: [] },
    { name: "Curry Vert", description: "Curry vert thaï aux pousses de bambou et basilic thaï", price: "15,50 €", tags: ["S"] },
    { name: "Curry Rouge", description: "Curry rouge thaï aux légumes", price: "15,00 €", tags: ["S"] },
    { name: "Poulet au Basilic", description: "Poulet sauté au basilic sacré et piment", price: "14,50 €", tags: ["S"] },
    { name: "Pad See Ew", description: "Nouilles de riz sautées à la sauce soja", price: "14,50 €", tags: ["V"] },
    { name: "Riz Sauté Thaï", description: "Riz sauté aux légumes avec viande au choix", price: "13,50 €", tags: [] },
    { name: "Gambas Tigrées", description: "Gambas tigrées grillées, sauce à l'ail", price: "22,00 €", tags: [] },
  ],
  desserts: [
    { name: "Riz Gluant à la Mangue", description: "Riz gluant à la noix de coco et mangue fraîche", price: "8,50 €", tags: ["V"] },
    { name: "Glace à la Noix de Coco", description: "Glace maison à la noix de coco", price: "6,00 €", tags: ["V"] },
    { name: "Crème Brûlée au Thé Thaï", description: "Crème parfumée au thé thaï avec sucre caramélisé", price: "7,50 €", tags: ["V"] },
  ],
  boissons: [
    { name: "Thé Thaï", description: "Thé glacé thaï sucré", price: "4,50 €", tags: ["V"] },
    { name: "Café Thaï", description: "Café glacé à la thaïlandaise", price: "4,50 €", tags: ["V"] },
    { name: "Noix de Coco Fraîche", description: "Eau de coco fraîche", price: "5,00 €", tags: ["V"] },
    { name: "Infusion Citronnelle", description: "Infusion de citronnelle chaude ou glacée", price: "4,00 €", tags: ["V"] },
  ]
}

const BASE = import.meta.env.BASE_URL
const photos = Array.from({ length: 17 }, (_, i) => `${BASE}images/photo-${i + 1}.jpg`)

const testimonials = [
  {
    quote: "La cuisine thaï la plus authentique que j'ai trouvée à Versailles. Le Pad Thaï était incroyable — on sent que tout est frais et fait avec soin.",
    name: "Marie L.",
    role: "Versailles"
  },
  {
    quote: "Enfin un endroit qui maîtrise la cuisine thaïlandaise ! Le curry vert a un équilibre parfait entre épices et saveurs. Nous sommes devenus des habitués.",
    name: "Jean-Pierre D.",
    role: "Habitant local"
  },
  {
    quote: "Un vrai bijou à Versailles. Nous y avons emmené nos amis touristes et tout le monde a adoré.",
    name: "Sophie M.",
    role: "Avis TripAdvisor"
  }
]

const faqs = [
  {
    question: "Proposez-vous des options pour régimes spéciaux ?",
    answer: "Absolument. Nous proposons des options végétariennes et pouvons ajuster le niveau d'épices. Précisez-le simplement lors de votre réservation."
  },
  {
    question: "Y a-t-il un parking à proximité ?",
    answer: "Oui ! Du stationnement dans la rue est disponible, et nous sommes à seulement 5 minutes de la gare Versailles Château."
  },
  {
    question: "Puis-je venir en famille ?",
    answer: "Nous accueillons les familles avec enfants. Notre menu propose des options qui plairont à tous."
  },
  {
    question: "Acceptez-vous les clients sans réservation ?",
    answer: "Nous acceptons les clients sans réservation selon disponibilité, mais nous recommandons de réserver — surtout le week-end !"
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "Lundi-Samedi : 12h00-14h30 & 19h00-22h30. Fermé le dimanche."
  }
]

const languages = [
  { code: 'FR', name: 'FR' },
  { code: 'EN', name: 'EN' },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('plats')
  const [dietFilter, setDietFilter] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredMenu = Object.entries(menuData).reduce((acc, [category, items]) => {
    if (dietFilter) {
      acc[category] = items.filter(item => item.tags.includes(dietFilter))
    } else {
      acc[category] = items
    }
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-[#FFF8E1]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            <a href="/" className="text-2xl font-bold text-[#E65100]">Nakhon Thai</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#menu" className="text-gray-700 hover:text-[#E65100]">Menu</a>
              <a href="#gallery" className="text-gray-700 hover:text-[#E65100]">Photos</a>
              <a href="#contact" className="text-gray-700 hover:text-[#E65100]">Contact</a>
              <a 
                href="https://bookings.zenchef.com/363675?host=www.nakhonthaiversailles.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Réserver
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="#menu" className="text-gray-700 hover:text-[#E65100]" onClick={() => setMobileMenuOpen(false)}>Menu</a>
                <a href="#gallery" className="text-gray-700 hover:text-[#E65100]" onClick={() => setMobileMenuOpen(false)}>Photos</a>
                <a href="#contact" className="text-gray-700 hover:text-[#E65100]" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <a 
                  href="https://bookings.zenchef.com/363675?host=www.nakhonthaiversailles.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Réserver
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero - ATTENTION */}
      <section 
        className="relative bg-gradient-to-br from-[#E65100]/95 to-[#FF8F00]/90 text-white py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${photos[0]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E65100]/85 to-[#FF8F00]/80"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Réservez votre table — Cuisine thaïlandaise authentique à Versailles
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-95 max-w-2xl mx-auto">
            Découvrez les saveurs intenses de la Thaïlande sans quitter la France.
            Notre restaurant familial vous propose des recettes élaborées à partir d'ingrédients frais.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://bookings.zenchef.com/363675?host=www.nakhonthaiversailles.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary bg-white text-[#E65100] hover:bg-gray-100 text-lg px-8 py-4"
            >
              Réserver ma table
            </a>
            <a href="#menu" className="btn-primary bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg px-8 py-4">
              Voir notre menu
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm opacity-90">
            <span className="flex items-center gap-1">⭐ 4,8★ (127 avis)</span>
            <span>•</span>
            <span>Ouvert depuis avril 2023</span>
            <span>•</span>
            <span>Restaurant familial à Versailles</span>
          </div>
        </div>
      </section>

      {/* Problem Section - INTEREST */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Vous avez envie de quelque chose de différent</h2>
            <p className="text-lg text-gray-700 mb-4">
              Pas un énième bistrot français banal. Pas un restaurant de chaîne servant des plats préparés.
              Vous cherchez des <strong>saveurs intenses et authentiques</strong> — la vraie cuisine thaï qui vous transporte dans les rues de Bangkok.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Mais à chaque fois que vous cherchez "restaurant thaï près de moi", vous trouvez :
            </p>
            <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
              <li>• Du pad thaï surgelé livré par applications</li>
              <li>• Des plats aigre-doux édulcorés pour le palais français</li>
              <li>• Des restaurants qui se disent "thaï" mais servent de la fusion</li>
            </ul>
            <p className="text-xl font-medium text-[#E65100] mt-6">
              Vous en avez assez des compromis. Vous voulez de l'authentique.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - DESIRE */}
      <section id="about" className="section bg-[#FAFAFA]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Vous n'avez pas à choisir entre authenticité et accessibilité</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <div className="text-4xl mb-4">🥢</div>
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">Ingrédients frais, faits sur place</h3>
              <p className="text-gray-600">
                Chaque plat est préparé chaque jour avec des légumes frais, des herbes et des protéines de qualité.
                Pas de sauces surgelées. Pas de raccourcis.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">Saveurs intenses et authentiques</h3>
              <p className="text-gray-600">
                Nos recettes viennent de traditions familiales, pas de formules industrielles.
                De la soupe Tom Yum acidulée au riche curry Massaman,
                chaque plat porte le vrai goût de la Thaïlande.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">Atmosphère chaleureuse et conviviale</h3>
              <p className="text-gray-600">
                Un restaurant familial où l'équipe se souvient de votre prénom.
                Que vous fêtiez une occasion spéciale ou veniez pour un dîner simple,
                vous vous sentez chez vous.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="#menu" className="btn-secondary text-lg">
              Découvrir nos plats
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Nos plats</h2>
          <p className="text-center text-gray-600 mb-10">Un voyage visuel à travers notre cuisine thaï authentique</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.slice(1, 13).map((photo, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg aspect-square group">
                <img 
                  src={photo} 
                  alt={`Plat Nakhon Thai ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#contact" className="btn-primary">
              Réserver votre table
            </a>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Informations pratiques</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-[#2E7D32] mb-3">Cuisine</h3>
              <p className="text-gray-600">Traditionnel<br/>Produits frais<br/>Fait maison<br/>Asiatique</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-[#2E7D32] mb-3">Type</h3>
              <p className="text-gray-600">Restaurant traditionnel</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-[#2E7D32] mb-3">Services</h3>
              <p className="text-gray-600">Terrasse<br/>Wifi<br/>Accès PMR</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-[#2E7D32] mb-3">Paiement</h3>
              <p className="text-gray-600">CB, Visa, Mastercard<br/>Espèces<br/>Apple Pay<br/>Ticket Restaurant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="section bg-[#FAFAFA]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Notre Menu</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(menuData).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#E65100] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Diet Filter */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setDietFilter(null)}
              className={`px-3 py-1 rounded text-sm ${!dietFilter ? 'bg-[#2E7D32] text-white' : 'bg-gray-100'}`}
            >
              Tout
            </button>
            <button
              onClick={() => setDietFilter('V')}
              className={`px-3 py-1 rounded text-sm ${dietFilter === 'V' ? 'bg-[#2E7D32] text-white' : 'bg-gray-100'}`}
            >
              Végétarien
            </button>
            <button
              onClick={() => setDietFilter('S')}
              className={`px-3 py-1 rounded text-sm ${dietFilter === 'S' ? 'bg-[#E65100] text-white' : 'bg-gray-100'}`}
            >
              Épicé
            </button>
          </div>

          {/* Menu Items */}
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {filteredMenu[activeCategory]?.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      {item.tags.map(tag => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded ${
                          tag === 'V' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {tag === 'V' ? 'V' : 'S'}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="font-semibold text-[#E65100] ml-4 whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>Légende: V = Végétarien, S = Épicé</p>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="section bg-[#2E7D32] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Horaires d'ouverture</h2>
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4 text-lg">
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="font-semibold">Lundi - Samedi</p>
                <p>12h00 - 14h30</p>
                <p>19h00 - 22h30</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="font-semibold">Dimanche</p>
                <p className="opacity-70">Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="card">
                <div className="text-[#FFD700] text-xl mb-3">★★★★★</div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-[#E65100]">— {testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#FAFAFA]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Foire Aux Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card">
                <button 
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="text-[#E65100] text-2xl">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - ACTION */}
      <section id="contact" className="section bg-gradient-to-br from-[#E65100] to-[#FF8F00] text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Réservez votre table maintenant</h2>
          <p className="text-center text-xl opacity-90 mb-8">
            La meilleure table thaï de Versailles ne restera pas vide longtemps. Les tables se remplissent vite le week-end !
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card h-full bg-white text-gray-800">
              <h3 className="text-xl font-semibold mb-4">Nous rendre visite</h3>
              <p className="text-gray-700 mb-2">
                <strong>Adresse :</strong><br/>
                4 Rue Philippe de Dangeau<br/>
                78000 Versailles, France
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Téléphone :</strong><br/>
                <a href="tel:0977462207" className="text-[#E65100] hover:underline text-lg">09 77 46 22 07</a>
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Nous répondons en moins de 3 sonneries !
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Nakhon+Thai+4+Rue+Philippe+de+Dangeau++78000+Versailles+fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                Itinéraire
              </a>
            </div>
            <div className="card h-full bg-white text-gray-800">
              <h3 className="text-xl font-semibold mb-4">Réservation en ligne</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cliquez ci-dessous pour réserver votre table directement sur notre système de réservation.
              </p>
              <a 
                href="https://bookings.zenchef.com/363675?host=www.nakhonthaiversailles.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full block text-center"
              >
                Réserver en ligne
              </a>
              <div className="mt-4 pt-4 border-t">
                <p className="text-gray-600 text-sm mb-2">Ou envoyez-nous un message:</p>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Votre nom" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]"
                  />
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]"
                  />
                  <textarea 
                    placeholder="Votre message..." 
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]"
                  ></textarea>
                  <button type="submit" className="btn-secondary w-full">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-sm opacity-80">
            <p>🛡️ Aucun frais d'annulation. Modifiez votre réservation à tout moment.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-[#FAFAFA]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos offres spéciales et actualités.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              S'inscrire
            </button>
          </form>
          <p className="text-gray-500 text-xs mt-4">
            En vous inscrivant, vous acceptez de recevoir des communications de notre part.
          </p>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Suivez-nous sur Instagram</h2>
          <p className="text-center text-gray-600 mb-8">@nakhonthai_versailles</p>
          <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto">
            {photos.slice(0, 8).map((photo, idx) => (
              <a 
                key={idx}
                href="https://www.instagram.com/nakhonthai_versailles/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden rounded-lg"
              >
                <img 
                  src={photo} 
                  alt="Publication Instagram"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
          <div className="text-center mt-6">
            <a 
              href="https://www.instagram.com/nakhonthai_versailles/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E65100] font-medium hover:underline"
            >
              Voir plus sur Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* Social & Footer */}
      <footer className="bg-[#1A1A1A] text-white py-10">
        <div className="container text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://www.facebook.com/profile.php?id=100090665723445" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#E65100] text-xl"
            >
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/nakhonthai_versailles/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#E65100] text-xl"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-4">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
            <a href="#" className="hover:text-white">Politique de cookies</a>
            <a href="#" className="hover:text-white">Accessibilité</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Nakhon Thai — Restaurant traditionnel à Versailles
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Créé avec <a href="https://bettersite.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white">bettersite.dev</a>
          </p>
        </div>
      </footer>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Nakhon Thai",
          "image": "https://www.nakhonthaiversailles.com/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4 Rue Philippe de Dangeau",
            "addressLocality": "Versailles",
            "postalCode": "78000",
            "addressCountry": "FR"
          },
          "telephone": "+3377462207",
          "priceRange": "€€",
          "cuisine": ["Thai", "Asian"],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "12:00",
              "closes": "14:30"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "19:00",
              "closes": "22:30"
            }
          ],
          "servesCuisine": "Thai",
          "acceptsReservations": true,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127"
          }
        })}
      </script>
    </div>
  )
}

export default App