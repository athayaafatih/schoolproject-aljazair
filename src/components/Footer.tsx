import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigasi',
      links: [
        { name: 'Beranda', href: '#home' },
        { name: 'Artikel', href: '#articles' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Peta', href: '#map' },
      ]
    },
    {
      title: 'Sumber Daya',
      links: [
        { name: 'Galeri', href: '#gallery' },
        { name: 'Tentang', href: '#about' },
        { name: 'Referensi', href: '#' },
        { name: 'Kontak', href: '#' },
      ]
    },
    {
      title: 'Topik',
      links: [
        { name: 'Pembebasan Islam', href: '#articles' },
        { name: 'Dinasti Maghreb', href: '#articles' },
        { name: 'Era Ottoman', href: '#articles' },
        { name: 'Perjuangan Ulama', href: '#articles' },
      ]
    }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">إ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Peradaban Islam</h3>
                <p className="text-emerald-400 text-sm">di Aljazair</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Melestarikan dan membagikan warisan peradaban Islam di Aljazair untuk generasi mendatang.
              Dari era penaklukan hingga kemerdekaan, setiap cerita adalah bagian dari kejayaan umat.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Peradaban Islam di Aljazair. Semua hak dilindungi.
            </p>
            <p className="text-slate-400 text-sm flex items-center space-x-2">
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>untuk pelestarian warisan Islam</span>
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-emerald-400 text-sm italic">
              "Barangsiapa yang menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga" - HR. Muslim
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
