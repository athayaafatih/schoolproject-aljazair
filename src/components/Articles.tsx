import { BookOpen, Calendar, Tag, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'pembebasan', name: 'Pembebasan Islam' },
    { id: 'dinasti', name: 'Dinasti Zirid & Hammadid' },
    { id: 'andalusia', name: 'Pengaruh Andalusia' },
    { id: 'ottoman', name: 'Periode Ottoman' },
    { id: 'perjuangan', name: 'Perjuangan Ulama' },
  ];

  const articles = [
    {
      id: 1,
      title: 'Penaklukan Islam di Maghreb (647-900 M)',
      excerpt: 'Perjalanan awal penyebaran Islam ke wilayah Afrika Utara dan penerimaan masyarakat Berber terhadap ajaran Islam.',
      category: 'pembebasan',
      date: '647 - 900 M',
      readTime: '8 menit',
      image: 'linear-gradient(135deg, #006E3F 0%, #00A86B 100%)',
      tags: ['Uqba ibn Nafi', 'Berber', 'Kairouan']
    },
    {
      id: 2,
      title: 'Dinasti Zirid dan Hammadid: Era Keemasan Maghreb',
      excerpt: 'Periode kejayaan seni, arsitektur, dan ilmu pengetahuan di bawah pemerintahan Zirid dan Hammadid.',
      category: 'dinasti',
      date: '972 - 1152 M',
      readTime: '10 menit',
      image: 'linear-gradient(135deg, #C9A24A 0%, #F4E1B1 100%)',
      tags: ['Qalaat Banu Hammad', 'Seni Islam', 'Perdagangan']
    },
    {
      id: 3,
      title: 'Warisan Andalusia di Aljazair',
      excerpt: 'Pengaruh budaya, arsitektur, dan ilmu pengetahuan Andalusia yang dibawa oleh pengungsi Muslim dari Spanyol.',
      category: 'andalusia',
      date: '1492 - 1600 M',
      readTime: '7 menit',
      image: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
      tags: ['Tlemcen', 'Arsitektur', 'Musik Andalus']
    },
    {
      id: 4,
      title: 'Periode Ottoman: Kejayaan dan Pertahanan',
      excerpt: 'Masa kekuasaan Ottoman di Aljazair yang membawa kemakmuran dan perlindungan dari invasi Eropa.',
      category: 'ottoman',
      date: '1516 - 1830 M',
      readTime: '12 menit',
      image: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
      tags: ['Khair ad-Din Barbarossa', 'Algiers', 'Armada Laut']
    },
    {
      id: 5,
      title: 'Ulama Aljazair Melawan Kolonialisme Prancis',
      excerpt: 'Perlawanan heroik para ulama dan pemimpin spiritual dalam mempertahankan identitas Islam Aljazair.',
      category: 'perjuangan',
      date: '1830 - 1962 M',
      readTime: '15 menit',
      image: 'linear-gradient(135deg, #006E3F 0%, #004D2C 100%)',
      tags: ['Amir Abdelkader', 'Perlawanan', 'Kemerdekaan']
    },
    {
      id: 6,
      title: 'Ibn Khaldun: Pemikir Besar dari Maghreb',
      excerpt: 'Kontribusi monumental Ibn Khaldun dalam bidang sosiologi, sejarah, dan filsafat dari tanah Aljazair.',
      category: 'dinasti',
      date: '1332 - 1406 M',
      readTime: '9 menit',
      image: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
      tags: ['Muqaddimah', 'Sosiologi', 'Filsafat']
    },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <section id="articles" className="py-20 lg:py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Artikel Peradaban</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Jelajahi Sejarah Mendalam
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Kumpulan artikel mendalam tentang perjalanan peradaban Islam di Aljazair dari masa ke masa
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-emerald-50 dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer border border-emerald-100 dark:border-slate-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="h-48 bg-gradient-to-br relative overflow-hidden"
                style={{ background: article.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  {article.readTime}
                </div>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                     }}>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center space-x-1 px-3 py-1 bg-emerald-50 dark:bg-slate-700 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-semibold group-hover:space-x-3 transition-all duration-300">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
