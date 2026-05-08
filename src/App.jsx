import { useState } from 'react'
import './App.css'

const menuData = {
  starters: [
    { name: "Soupe Tom Yum", description: "Soup with lemongrass, galangal, mushrooms and chili", price: "8,50 €", tags: ["S"] },
    { name: "Soupe Tom Kha", description: "Coconut milk soup with galangal and mushrooms", price: "8,50 €", tags: [] },
    { name: "Nem", description: "Crispy spring rolls with vegetables", price: "7,50 €", tags: ["V"] },
    { name: "Satay", description: "Grilled chicken skewers with peanut sauce", price: "9,00 €", tags: [] },
    { name: "Papaya Salad", description: "Green papaya salad with tomatoes and peanuts", price: "9,50 €", tags: ["V", "S"] },
  ],
  mains: [
    { name: "Pad Thai", description: "Stir-fried rice noodles with shrimp, eggs and peanuts", price: "16,50 €", tags: [] },
    { name: "Massaman Curry", description: "Curry with potatoes, peanuts and coconut milk", price: "15,50 €", tags: [] },
    { name: "Green Curry", description: "Thai green curry with bamboo shoots and Thai basil", price: "15,50 €", tags: ["S"] },
    { name: "Red Curry", description: "Thai red curry with vegetables", price: "15,00 €", tags: ["S"] },
    { name: "Basil Chicken", description: "Stir-fried chicken with holy basil and chili", price: "14,50 €", tags: ["S"] },
    { name: "Pad See Ew", description: "Stir-fried rice noodles with soy sauce", price: "14,50 €", tags: ["V"] },
    { name: "Thai Fried Rice", description: "Fried rice with vegetables and choice of meat", price: "13,50 €", tags: [] },
    { name: "Tiger Prawns", description: "Grilled tiger prawns with garlic sauce", price: "22,00 €", tags: [] },
  ],
  desserts: [
    { name: "Mango Sticky Rice", description: "Sweet coconut sticky rice with fresh mango", price: "8,50 €", tags: ["V"] },
    { name: "Coconut Ice Cream", description: "Home-made coconut ice cream", price: "6,00 €", tags: ["V"] },
    { name: "Thai Tea Crème Brûlée", description: "Thai tea flavored custard with caramelized sugar", price: "7,50 €", tags: ["V"] },
  ],
  drinks: [
    { name: "Thai Tea", description: "Sweet Thai iced tea", price: "4,50 €", tags: ["V"] },
    { name: "Thai Coffee", description: "Thai style iced coffee", price: "4,50 €", tags: ["V"] },
    { name: "Fresh Coconut", description: "Fresh coconut water", price: "5,00 €", tags: ["V"] },
    { name: "Lemongrass Tea", description: "Hot or iced lemongrass infusion", price: "4,00 €", tags: ["V"] },
  ]
}

const languages = [
  { code: 'FR', name: 'Français' },
  { code: 'EN', name: 'English' },
  { code: 'ES', name: 'Español' },
  { code: 'IT', name: 'Italiano' },
  { code: 'DE', name: 'Deutsch' },
  { code: 'PT', name: 'Português' },
  { code: 'RU', name: 'Русский' },
  { code: 'CS', name: 'Čeština' },
  { code: 'JA', name: '日本語' },
  { code: 'ZH', name: '中文' },
  { code: 'NL', name: 'Nederlands' },
  { code: 'EL', name: 'Ελληνικά' },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('mains')
  const [dietFilter, setDietFilter] = useState(null)

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
            <div className="hidden md:flex items-center gap-6">
              <a href="#menu" className="text-gray-700 hover:text-[#E65100]">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-[#E65100]">À propos</a>
              <a href="#contact" className="text-gray-700 hover:text-[#E65100]">Contact</a>
              <a href="https://userdocs.zenchef.com/363675/Ortlf6ANQ01NdcAPmPYXAEPfHUdyT6f982lxSfRa.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-700 hover:text-[#E65100]">
                Galerie
              </a>
              <a href="#contact" className="btn-primary">Réserver</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E65100] to-[#FF8F00] text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nakhon Thai</h1>
          <p className="text-xl md:text-2xl mb-2">Restaurant traditionnel thaï</p>
          <p className="text-lg opacity-90 mb-8">Versailles, France</p>
          <a href="#contact" className="btn-primary bg-white text-[#E65100] hover:bg-gray-100 text-lg px-8 py-4">
            Réserver une table
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Bienvenue chez Nakhon Thai</h2>
            <p className="text-lg text-gray-700 mb-6">
              Restaurant thaïlandais familial, ouvert en avril 2023, nous vous proposons une large sélection 
              de plats qui s'inspirent de voyages et de cultures différentes.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Des recettes élaborées pour vous, sur place, à partir d'ingrédients frais et de qualité. 
              Cet endroit permet la rencontre d'une bonne cuisine et bonne ambiance.
            </p>
            <p className="text-lg font-medium text-[#E65100]">
              N'attendez plus pour tenter l'expérience !
            </p>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="section bg-[#FAFAFA]">
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
      <section id="menu" className="section bg-white">
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
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                <div key={idx} className="flex justify-between items-start p-4 bg-[#FAFAFA] rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      {item.tags.map(tag => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded ${
                          tag === 'V' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {tag === 'V' ? 'Végétarien' : 'Épicé'}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="font-semibold text-[#E65100] ml-4">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>Légende: V = Végétarien, S = Épicé, GF = Sans gluten</p>
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

      {/* Contact */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Contactez-nous</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="card h-full">
                <h3 className="text-xl font-semibold mb-4">Adresse</h3>
                <p className="text-gray-700 mb-4">
                  4 Rue Philippe de Dangeau<br/>
                  78000 Versailles<br/>
                  France
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Téléphone:</strong><br/>
                  <a href="tel:0977462207" className="text-[#E65100] hover:underline">09 77 46 22 07</a>
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
            </div>
            <div>
              <div className="card h-full">
                <h3 className="text-xl font-semibold mb-4">Envoyez un message</h3>
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
                    placeholder="Votre message" 
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]"
                  ></textarea>
                  <button type="submit" className="btn-primary w-full">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://www.facebook.com/profile.php?id=100090665723445" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#E65100] text-2xl"
            >
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/nakhonthai_versailles/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#E65100] text-2xl"
            >
              Instagram
            </a>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            © 2026 Nakhon Thai — Restaurant traditionnel à Versailles
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <a href="/mentions-legales" className="hover:text-white">Mentions légales</a>
            <a href="/politique-confidentialite" className="hover:text-white">Confidentialité</a>
            <a href="/politique-cookies" className="hover:text-white">Cookies</a>
          </div>
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
          "acceptsReservations": true
        })}
      </script>
    </div>
  )
}

export default App