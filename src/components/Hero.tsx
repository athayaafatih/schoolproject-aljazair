import { ArrowRight, Scroll, Map, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      arabic: 'العلم رفعة والجهل ضعة',
      translation: 'Ilmu adalah kemuliaan, kebodohan adalah kehinaan',
      author: 'Ibn Khaldun'
    },
    {
      arabic: 'الوطن هو الأرض التي نحبها',
      translation: 'Tanah air adalah bumi yang kita cintai',
      author: 'Amir Abdelkader'
    },
    {
      arabic: 'التاريخ مرآة الأمم',
      translation: 'Sejarah adalah cermin umat',
      author: 'Pepatah Arab'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950"></div>

      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006E3F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
              <span>Mengenang Warisan Bersejarah</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-emerald-800 dark:text-emerald-400">Peradaban Islam</span>
              <br />
              <span className="text-slate-800 dark:text-white">di Aljazair</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Menelusuri jejak keemasan peradaban Islam di tanah Maghreb, dari era penaklukan hingga perlawanan ulama melawan kolonialisme
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-200">
            <button
              onClick={() => scrollToSection('timeline')}
              className="group w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Scroll className="w-5 h-5" />
              <span>Eksplorasi Era</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('articles')}
              className="group w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-emerald-700 dark:text-emerald-400 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-emerald-200 dark:border-slate-700 transform hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              <span>Baca Artikel</span>
            </button>

            <button
              onClick={() => scrollToSection('map')}
              className="group w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Map className="w-5 h-5" />
              <span>Peta Sejarah</span>
            </button>
          </div>

          <div className="mt-16 p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 dark:border-slate-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-4 font-serif leading-relaxed">
              {quotes[currentQuote].arabic}
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 italic mb-2">
              "{quotes[currentQuote].translation}"
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              — {quotes[currentQuote].author}
            </p>
            <div className="flex justify-center space-x-2 mt-6">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuote
                      ? 'bg-emerald-600 w-8'
                      : 'bg-emerald-300 dark:bg-slate-600'
                  }`}
                  aria-label={`Quote ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-600 dark:border-emerald-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
