import { useState } from 'react'
import './App.css'
import { translations } from './translations'

const BASE = import.meta.env.BASE_URL
const photos = Array.from({ length: 17 }, (_, i) => `${BASE}images/photo-${i + 1}.jpg`)

function App() {
  const [lang, setLang] = useState('fr')
  const t = translations[lang]
  const [activeCategory, setActiveCategory] = useState('plats')
  const [dietFilter, setDietFilter] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuData = t.menuData
  const filteredMenu = Object.entries(menuData).reduce((acc, [category, items]) => {
    acc[category] = dietFilter ? items.filter(item => item.tags.includes(dietFilter)) : items
    return acc
  }, {})

  const LangToggle = ({ className = '' }) => (
    <div className={`inline-flex rounded-full border border-gray-300 overflow-hidden text-sm ${className}`}>
      {['fr', 'en'].map(code => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-3 py-1 font-medium transition-colors ${
            lang === code ? 'bg-[#E65100] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          aria-label={`Switch to ${code.toUpperCase()}`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-[#FFF8E1]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            <a href="/" className="text-2xl font-bold text-[#E65100]">Nakhon Thai</a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#menu" className="text-gray-700 hover:text-[#E65100]">{t.nav.menu}</a>
              <a href="#gallery" className="text-gray-700 hover:text-[#E65100]">{t.nav.photos}</a>
              <a href="#contact" className="text-gray-700 hover:text-[#E65100]">{t.nav.contact}</a>
              <LangToggle />
              <a
                href="https://bookings.zenchef.com/363675?host=www.nakhonthaiversailles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t.nav.reserve}
              </a>
            </div>

            {/* Mobile: lang toggle + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <LangToggle />
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="#menu" className="text-gray-700 hover:text-[#E65100]" onClick={() => setMobileMenuOpen(false)}>{t.nav.menu}</a>
                <a href="#gallery" className="text-gray-700 hover:text-[#E65100]" onClick={() => setMobileMenuOpen(false)}>{t.nav.photos}</a>
                <a href="#contact" className="text-gray-700 hover:text-[#E65100]" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
                <a
                  href="https://bookings.zenchef.com/363675?host=www.nakhonthaiversailles.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.reserve}
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-[#E65100]/95 to-[#FF8F00]/90 text-white py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${photos[0]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E65100]/85 to-[#FF8F00]/80"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-4 opacity-95 max-w-2xl mx-auto">{t.hero.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://bookings.zenchef.com/363675?host=www.nakhonthaiversailles.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-[#E65100] hover:bg-gray-100 text-lg px-8 py-4"
            >
              {t.hero.ctaReserve}
            </a>
            <a href="#menu" className="btn-primary bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg px-8 py-4">
              {t.hero.ctaMenu}
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm opacity-90">
            <span className="flex items-center gap-1">{t.hero.reviews}</span>
            <span>•</span>
            <span>{t.hero.opened}</span>
            <span>•</span>
            <span>{t.hero.family}</span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">{t.problem.title}</h2>
            <p className="text-lg text-gray-700 mb-4">
              {t.problem.p1Pre}<strong>{t.problem.p1Strong}</strong>{t.problem.p1Post}
            </p>
            <p className="text-lg text-gray-700 mb-4">{t.problem.p2}</p>
            <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
              {t.problem.list.map((li, i) => <li key={i}>• {li}</li>)}
            </ul>
            <p className="text-xl font-medium text-[#E65100] mt-6">{t.problem.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="about" className="section bg-[#FAFAFA]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t.solution.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.solution.cards.map((card, i) => (
              <div key={i} className="card">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#menu" className="btn-secondary text-lg">{t.solution.cta}</a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">{t.gallery.title}</h2>
          <p className="text-center text-gray-600 mb-10">{t.gallery.subtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.slice(1, 13).map((photo, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg aspect-square group">
                <img
                  src={photo}
                  alt={`${t.gallery.altPrefix} ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#contact" className="btn-primary">{t.gallery.cta}</a>
          </div>
        </div>
      </section>

      {/* Practical */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t.practical.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['cuisine', 'type', 'services', 'payment'].map(key => (
              <div key={key} className="card text-center">
                <h3 className="text-lg font-semibold text-[#2E7D32] mb-3">{t.practical[key].title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{t.practical[key].body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="section bg-[#FAFAFA]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">{t.menu.title}</h2>

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
                {t.menu.categories[category] || category}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setDietFilter(null)}
              className={`px-3 py-1 rounded text-sm ${!dietFilter ? 'bg-[#2E7D32] text-white' : 'bg-gray-100'}`}
            >
              {t.menu.filterAll}
            </button>
            <button
              onClick={() => setDietFilter('V')}
              className={`px-3 py-1 rounded text-sm ${dietFilter === 'V' ? 'bg-[#2E7D32] text-white' : 'bg-gray-100'}`}
            >
              {t.menu.filterVeg}
            </button>
            <button
              onClick={() => setDietFilter('S')}
              className={`px-3 py-1 rounded text-sm ${dietFilter === 'S' ? 'bg-[#E65100] text-white' : 'bg-gray-100'}`}
            >
              {t.menu.filterSpicy}
            </button>
          </div>

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
                          {tag}
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
            <p>{t.menu.legend}</p>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="section bg-[#2E7D32] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">{t.hours.title}</h2>
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4 text-lg">
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="font-semibold">{t.hours.weekdays}</p>
                <p>12h00 - 14h30</p>
                <p>19h00 - 22h30</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="font-semibold">{t.hours.sunday}</p>
                <p className="opacity-70">{t.hours.closed}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.testimonials.items.map((testimonial, idx) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">{t.faq.title}</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {t.faq.items.map((faq, idx) => (
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

      {/* Contact */}
      <section id="contact" className="section bg-gradient-to-br from-[#E65100] to-[#FF8F00] text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">{t.contact.title}</h2>
          <p className="text-center text-xl opacity-90 mb-8">{t.contact.subtitle}</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card h-full bg-white text-gray-800">
              <h3 className="text-xl font-semibold mb-4">{t.contact.visitTitle}</h3>
              <p className="text-gray-700 mb-2">
                <strong>{t.contact.addressLabel}</strong><br/>
                4 Rue Philippe de Dangeau<br/>
                78000 Versailles, France
              </p>
              <p className="text-gray-700 mb-4">
                <strong>{t.contact.phoneLabel}</strong><br/>
                <a href="tel:0977462207" className="text-[#E65100] hover:underline text-lg">09 77 46 22 07</a>
              </p>
              <p className="text-gray-600 text-sm mb-4">{t.contact.answerSpeed}</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Nakhon+Thai+4+Rue+Philippe+de+Dangeau++78000+Versailles+fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                {t.contact.directions}
              </a>
            </div>
            <div className="card h-full bg-white text-gray-800">
              <h3 className="text-xl font-semibold mb-4">{t.contact.onlineTitle}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.contact.onlineSubtitle}</p>
              <a
                href="https://bookings.zenchef.com/363675?host=www.nakhonthaiversailles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full block text-center"
              >
                {t.contact.onlineCta}
              </a>
              <div className="mt-4 pt-4 border-t">
                <p className="text-gray-600 text-sm mb-2">{t.contact.orMessage}</p>
                <form className="space-y-4">
                  <input type="text" placeholder={t.contact.formName} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]" />
                  <input type="email" placeholder={t.contact.formEmail} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]" />
                  <textarea placeholder={t.contact.formMessage} rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]"></textarea>
                  <button type="submit" className="btn-secondary w-full">{t.contact.formSubmit}</button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-sm opacity-80">
            <p>{t.contact.noFees}</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-[#FAFAFA]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">{t.newsletter.title}</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">{t.newsletter.subtitle}</p>
          <form className="max-w-md mx-auto flex gap-2">
            <input type="email" placeholder={t.newsletter.placeholder} className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]" />
            <button type="submit" className="btn-primary whitespace-nowrap">{t.newsletter.submit}</button>
          </form>
          <p className="text-gray-500 text-xs mt-4">{t.newsletter.consent}</p>
        </div>
      </section>

      {/* Instagram */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">{t.instagram.title}</h2>
          <p className="text-center text-gray-600 mb-8">{t.instagram.handle}</p>
          <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto">
            {photos.slice(0, 8).map((photo, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/nakhonthai_versailles/"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden rounded-lg"
              >
                <img src={photo} alt={t.instagram.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://www.instagram.com/nakhonthai_versailles/" target="_blank" rel="noopener noreferrer" className="text-[#E65100] font-medium hover:underline">
              {t.instagram.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-10">
        <div className="container text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.facebook.com/profile.php?id=100090665723445" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E65100] text-xl">Facebook</a>
            <a href="https://www.instagram.com/nakhonthai_versailles/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E65100] text-xl">Instagram</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-4">
            <a href="#" className="hover:text-white">{t.footer.legal}</a>
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.cookies}</a>
            <a href="#" className="hover:text-white">{t.footer.accessibility}</a>
          </div>
          <p className="text-gray-500 text-sm">{t.footer.copyright}</p>
          <p className="text-gray-600 text-xs mt-2">
            {t.footer.builtWith} <a href="https://bettersite.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white">bettersite.dev</a>
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
