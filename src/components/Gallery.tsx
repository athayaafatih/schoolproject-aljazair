import { Image, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  gradient: string;
  period: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'mosque', name: 'Masjid' },
    { id: 'architecture', name: 'Arsitektur' },
    { id: 'manuscript', name: 'Manuskrip' },
    { id: 'art', name: 'Seni Islam' },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Masjid Agung Aljazair',
      description: 'Masjid terbesar di Afrika dengan menara setinggi 265 meter. Simbol kebangkitan Islam modern di Aljazair.',
      category: 'mosque',
      gradient: 'linear-gradient(135deg, #006E3F 0%, #00A86B 100%)',
      period: '2020'
    },
    {
      id: 2,
      title: 'Masjid Ketchaoua',
      description: 'Masjid bersejarah di jantung Casbah Algiers, dibangun pada era Ottoman tahun 1612.',
      category: 'mosque',
      gradient: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
      period: '1612'
    },
    {
      id: 3,
      title: 'Casbah of Algiers',
      description: 'Benteng Ottoman yang megah, Situs Warisan Dunia UNESCO dengan arsitektur Islam klasik.',
      category: 'architecture',
      gradient: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
      period: '1516'
    },
    {
      id: 4,
      title: 'Masjid Agung Tlemcen',
      description: 'Mahakarya arsitektur Almoravid dengan pengaruh Andalusia yang kuat, dibangun tahun 1136.',
      category: 'mosque',
      gradient: 'linear-gradient(135deg, #C9A24A 0%, #F4E1B1 100%)',
      period: '1136'
    },
    {
      id: 5,
      title: 'Qalaat Banu Hammad',
      description: 'Reruntuhan ibu kota Dinasti Hammadid, menampilkan kejayaan arsitektur Islam Maghreb abad 11.',
      category: 'architecture',
      gradient: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
      period: '1007'
    },
    {
      id: 6,
      title: 'Manuskrip Al-Muqaddimah',
      description: 'Karya monumental Ibn Khaldun tentang sosiologi dan filsafat sejarah dari Aljazair.',
      category: 'manuscript',
      gradient: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)',
      period: '1377'
    },
    {
      id: 7,
      title: 'Seni Kaligrafi Arab',
      description: 'Kaligrafi Islam dengan gaya Maghrebi khas Aljazair, menghiasi masjid-masjid kuno.',
      category: 'art',
      gradient: 'linear-gradient(135deg, #006E3F 0%, #004D2C 100%)',
      period: '900-1900'
    },
    {
      id: 8,
      title: 'Keramik Berber-Islam',
      description: 'Keramik dengan motif geometris Islam yang diproduksi selama era Zirid dan Hammadid.',
      category: 'art',
      gradient: 'linear-gradient(135deg, #E67E22 0%, #D35400 100%)',
      period: '972-1152'
    },
    {
      id: 9,
      title: 'Masjid Sidi Boumediene',
      description: 'Kompleks masjid dan madrasah di Tlemcen, pusat pendidikan Islam abad 14.',
      category: 'mosque',
      gradient: 'linear-gradient(135deg, #27AE60 0%, #229954 100%)',
      period: '1339'
    },
    {
      id: 10,
      title: 'Ornamen Ottoman',
      description: 'Detail ornamen arsitektur Ottoman di Algiers dengan motif floral dan geometris.',
      category: 'art',
      gradient: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)',
      period: '1516-1830'
    },
    {
      id: 11,
      title: 'Benteng Santa Cruz',
      description: 'Benteng di puncak bukit Oran dengan pemandangan Mediterania, saksi sejarah Ottoman.',
      category: 'architecture',
      gradient: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
      period: '1577'
    },
    {
      id: 12,
      title: 'Manuskrip Ilmiah Islam',
      description: 'Koleksi manuskrip tentang astronomi, matematika, dan kedokteran dari perpustakaan Tlemcen.',
      category: 'manuscript',
      gradient: 'linear-gradient(135deg, #34495E 0%, #2C3E50 100%)',
      period: '1200-1500'
    },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setSelectedImage(filteredItems[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
            <Image className="w-4 h-4" />
            <span>Galeri Digital</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Warisan Visual Peradaban
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Koleksi visual arsitektur, seni, dan manuskrip bersejarah dari peradaban Islam di Aljazair
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
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700 border border-emerald-200 dark:border-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div
                  className="absolute inset-0 bg-gradient-to-br"
                  style={{ background: item.gradient }}
                >
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                       }}>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white text-sm font-medium mb-1">
                      {item.period}
                    </div>
                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  {item.period}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={handlePrevious}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="max-w-5xl w-full">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="h-64 lg:h-96 bg-gradient-to-br relative"
                  style={{ background: selectedImage.gradient }}
                >
                  <div className="absolute inset-0 opacity-20"
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
                       }}>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
                      {selectedImage.period}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {filteredItems.findIndex(item => item.id === selectedImage.id) + 1} / {filteredItems.length}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                    {selectedImage.title}
                  </h3>

                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
