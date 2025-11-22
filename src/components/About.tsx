import { Heart, BookOpen, Users, Globe } from 'lucide-react';

export default function About() {
  const missions = [
    {
      icon: BookOpen,
      title: 'Preservasi Sejarah',
      description: 'Mendokumentasikan dan melestarikan warisan peradaban Islam di Aljazair untuk generasi mendatang.',
      color: 'emerald'
    },
    {
      icon: Users,
      title: 'Edukasi Generasi',
      description: 'Memberikan pengetahuan mendalam tentang kontribusi peradaban Islam Aljazair kepada pelajar dan mahasiswa.',
      color: 'amber'
    },
    {
      icon: Heart,
      title: 'Menghormati Warisan',
      description: 'Mengapresiasi dan merayakan kejayaan intelektual, spiritual, dan budaya Islam di tanah Maghreb.',
      color: 'red'
    },
    {
      icon: Globe,
      title: 'Menyebarkan Pengetahuan',
      description: 'Memperkenalkan kekayaan sejarah Islam Aljazair kepada dunia melalui platform digital modern.',
      color: 'blue'
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      emerald: {
        bg: 'bg-emerald-100 dark:bg-emerald-900/30',
        text: 'text-emerald-600 dark:text-emerald-400'
      },
      amber: {
        bg: 'bg-amber-100 dark:bg-amber-900/30',
        text: 'text-amber-600 dark:text-amber-400'
      },
      red: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        text: 'text-red-600 dark:text-red-400'
      },
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400'
      }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Tentang Kami</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Misi Pelestarian Warisan
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Platform digital ini lahir dari keinginan mendalam untuk melestarikan, mendokumentasikan,
              dan membagikan kekayaan peradaban Islam di Aljazair kepada dunia. Dari era penaklukan hingga
              perjuangan kemerdekaan, setiap bab sejarah adalah cerminan kejayaan intelektual dan spiritual
              yang harus dikenang.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {missions.map((mission, index) => {
              const IconComponent = mission.icon;
              const colors = getColorClasses(mission.color);

              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    {mission.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800/30 rounded-full -ml-48 -mb-48"></div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Warisan Yang Harus Dijaga
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-5xl font-bold mb-2">1300+</div>
                  <div className="text-emerald-100">Tahun Sejarah</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">10+</div>
                  <div className="text-emerald-100">Dinasti & Era</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">100+</div>
                  <div className="text-emerald-100">Tokoh Bersejarah</div>
                </div>
              </div>

              <p className="text-lg text-emerald-50 leading-relaxed mb-8">
                Dari Uqba ibn Nafi yang membangun Kairouan, Ibn Khaldun yang menulis Al-Muqaddimah,
                hingga Amir Abdelkader yang memimpin perlawanan melawan kolonialisme — setiap nama
                adalah bagian dari narasi besar peradaban Islam yang telah memberikan kontribusi
                luar biasa kepada ilmu pengetahuan, seni, arsitektur, dan spiritualitas dunia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#articles"
                  className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold text-center hover:bg-emerald-50 transition-colors duration-300 shadow-lg"
                >
                  Mulai Eksplorasi
                </a>
                <a
                  href="#timeline"
                  className="px-8 py-4 bg-emerald-800 text-white rounded-xl font-semibold text-center hover:bg-emerald-900 transition-colors duration-300 border-2 border-emerald-700"
                >
                  Lihat Timeline
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border-2 border-emerald-200 dark:border-slate-600">
              <p className="text-2xl lg:text-3xl font-bold text-emerald-800 dark:text-emerald-400 mb-4 font-serif leading-relaxed">
                إِنَّ التَّارِيخَ مِرْآةُ الأُمَمِ
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 italic">
                "Sesungguhnya sejarah adalah cermin umat"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
