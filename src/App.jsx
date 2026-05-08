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

const photos = [
  '/images/photo-1.jpg',
  '/images/photo-2.jpg',
  '/images/photo-3.jpg',
  '/images/photo-4.jpg',
  '/images/photo-5.jpg',
  '/images/photo-6.jpg',
  '/images/photo-7.jpg',
  '/images/photo-8.jpg',
  '/images/photo-9.jpg',
  '/images/photo-10.jpg',
  '/images/photo-11.jpg',
  '/images/photo-12.jpg',
  '/images/photo-13.jpg',
  '/images/photo-14.jpg',
  '/images/photo-15.jpg',
  '/images/photo-16.jpg',
  '/images/photo-17.jpg',
]

const testimonials = [
  {
    quote: "The most authentic Thai food I've found in Versailles. The Pad Thai was incredible — you can tell everything is fresh and made with care.",
    name: "Marie L.",
    role: "Versailles"
  },
  {
    quote: "Finally a place that gets Thai cuisine right! The Green Curry has the perfect balance of spice. We're now regulars.",
    name: "Jean-Pierre D.",
    role: "Local Resident"
  },
  {
    quote: "A real gem in Versailles. We took our tourist friends here and everyone loved it.",
    name: "Sophie M.",
    role: "TripAdvisor Review"
  }
]

const faqs = [
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Absolutely. We offer vegetarian options and can adjust spice levels. Just let us know when you reserve."
  },
  {
    question: "Is there parking nearby?",
    answer: "Yes! Street parking is available, and we're just 5 minutes from Versailles Château train station."
  },
  {
    question: "Can I bring my family?",
    answer: "We welcome families with children. Our menu has options everyone will love."
  },
  {
    question: "Do you take walk-ins?",
    answer: "We accept walk-ins when we have availability, but we recommend reserving — especially weekends!"
  },
  {
    question: "What are your opening hours?",
    answer: "Monday-Saturday: 12:00-14:30 & 19:00-22:30. Closed Sunday."
  }
]

const languages = [
  { code: 'FR', name: 'FR' },
  { code: 'EN', name: 'EN' },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('mains')
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
            Save Your Table — Authentic Thai Cuisine in Versailles
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-95 max-w-2xl mx-auto">
            Experience the bold flavors of Thailand without leaving France. 
            Our family-run restaurant brings you recipes crafted from fresh ingredients.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://bookings.zenchef.com/363675?host=www.nakhonthaiversailles.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary bg-white text-[#E65100] hover:bg-gray-100 text-lg px-8 py-4"
            >
              Reserve My Table Now
            </a>
            <a href="#menu" className="btn-primary bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg px-8 py-4">
              View Our Menu
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm opacity-90">
            <span className="flex items-center gap-1">⭐ 4.8★ (127 reviews)</span>
            <span>•</span>
            <span>Opened April 2023</span>
            <span>•</span>
            <span>Family-owned in Versailles</span>
          </div>
        </div>
      </section>

      {/* Problem Section - INTEREST */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">You've Been Craving Something Different</h2>
            <p className="text-lg text-gray-700 mb-4">
              Not another generic French bistro. Not a chain restaurant serving pre-packaged meals. 
              You're looking for <strong>bold, authentic flavors</strong> — real Thai cuisine that transports you to the streets of Bangkok.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              But every time you search "Thai restaurant near me," you get:
            </p>
            <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
              <li>• Frozen pad thai from delivery apps</li>
              <li>• Sweet-and-sour dishes watered down for French palates</li>
              <li>• Restaurants that call themselves "Thai" but serve fusion</li>
            </ul>
            <p className="text-xl font-medium text-[#E65100] mt-6">
              You're tired of compromise. You want the real deal.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - DESIRE */}
      <section id="about" className="section bg-[#FAFAFA]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">You Don't Have to Choose Between Authentic and Accessible</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <div className="text-4xl mb-4">🥢</div>
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">Fresh Ingredients, Made On-Site</h3>
              <p className="text-gray-600">
                Every dish is crafted daily with fresh vegetables, herbs, and quality proteins. 
                No frozen pre-made sauces. No shortcuts.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">Bold, Authentic Flavors</h3>
              <p className="text-gray-600">
                Our recipes come from family traditions, not factory formulas. 
                From the tangy Tom Yum soup to the rich Massaman curry, 
                each dish carries the true taste of Thailand.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">Warm, Inviting Atmosphere</h3>
              <p className="text-gray-600">
                A family restaurant where the team remembers your name. 
                Whether you're celebrating a special occasion or grabbing a casual dinner, 
                you feel at home.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="#menu" className="btn-secondary text-lg">
              Discover Our Dishes
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Our Dishes</h2>
          <p className="text-center text-gray-600 mb-10">A visual journey through our authentic Thai cuisine</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.slice(1, 13).map((photo, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg aspect-square group">
                <img 
                  src={photo} 
                  alt={`Nakhon Thai dish ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#contact" className="btn-primary">
              Reserve Your Table
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
          <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
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
          <h2 className="text-3xl font-bold text-center mb-4">Reserve Your Table Now</h2>
          <p className="text-center text-xl opacity-90 mb-8">
            The best Thai table in Versailles won't stay empty for long. Tables fill fast on weekends!
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card h-full bg-white text-gray-800">
              <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong><br/>
                4 Rue Philippe de Dangeau<br/>
                78000 Versailles, France
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Phone:</strong><br/>
                <a href="tel:0977462207" className="text-[#E65100] hover:underline text-lg">09 77 46 22 07</a>
              </p>
              <p className="text-gray-600 text-sm mb-4">
                We answer within 3 rings!
              </p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Nakhon+Thai+4+Rue+Philippe+de+Dangeau++78000+Versailles+fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                Get Directions
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
            <p>🛡️ No cancellation fees. Change your reservation anytime.</p>
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
                  alt="Instagram post"
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
            Créé avec Zenchef
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