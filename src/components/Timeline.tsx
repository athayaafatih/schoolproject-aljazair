import { Clock, Crown, Scroll, Swords, BookOpen, Users } from 'lucide-react';
import { useState } from 'react';

export default function Timeline() {
  const [selectedEra, setSelectedEra] = useState<number | null>(null);

  const timelineData = [
    {
      id: 1,
      era: '647 - 900 M',
      title: 'Pembebasan Islam',
      icon: Swords,
      color: 'emerald',
      description: 'Penyebaran Islam ke Maghreb dimulai dengan ekspedisi Uqba ibn Nafi. Pembangunan Masjid Agung Kairouan sebagai pusat peradaban.',
      figures: ['Uqba ibn Nafi', 'Musa ibn Nusayr', 'Tariq ibn Ziyad'],
      achievements: [
        'Pembangunan Kairouan sebagai pusat Islam',
        'Islamisasi masyarakat Berber',
        'Ekspansi ke Semenanjung Iberia'
      ],
      artifacts: 'Masjid Kairouan, Manuskrip Arab awal'
    },
    {
      id: 2,
      era: '972 - 1152 M',
      title: 'Dinasti Zirid & Hammadid',
      icon: Crown,
      color: 'amber',
      description: 'Era keemasan seni, arsitektur, dan perdagangan. Qalaat Banu Hammad menjadi kota metropolitan yang megah.',
      figures: ['Buluggin ibn Ziri', 'Al-Muizz ibn Badis', 'Al-Nasir ibn Alnas'],
      achievements: [
        'Pembangunan Qalaat Banu Hammad',
        'Berkembangnya seni Islam Maghreb',
        'Pusat perdagangan trans-Sahara'
      ],
      artifacts: 'Istana Qalaat Banu Hammad, Keramik Berber'
    },
    {
      id: 3,
      era: '1235 - 1516 M',
      title: 'Kerajaan Tlemcen',
      icon: BookOpen,
      color: 'blue',
      description: 'Tlemcen menjadi pusat ilmu pengetahuan dan budaya. Pengaruh arsitektur Andalusia sangat kuat.',
      figures: ['Yaghmurasen ibn Zyan', 'Abu Hammou Musa', 'Ibn Khaldun'],
      achievements: [
        'Masjid Agung Tlemcen',
        'Pusat ilmu pengetahuan Maghreb',
        'Karya Ibn Khaldun: Al-Muqaddimah'
      ],
      artifacts: 'Masjid Tlemcen, Manuskrip ilmiah'
    },
    {
      id: 4,
      era: '1516 - 1830 M',
      title: 'Periode Ottoman',
      icon: Crown,
      color: 'red',
      description: 'Aljazair menjadi provinsi penting Ottoman. Khair ad-Din Barbarossa membangun kekuatan maritim yang tangguh.',
      figures: ['Khair ad-Din Barbarossa', 'Aruj Barbarossa', 'Salah Rais'],
      achievements: [
        'Armada laut Mediterania terkuat',
        'Benteng Algiers yang megah',
        'Perlindungan dari invasi Eropa'
      ],
      artifacts: 'Benteng Casbah, Masjid Ketchaoua'
    },
    {
      id: 5,
      era: '1830 - 1962 M',
      title: 'Perlawanan & Kemerdekaan',
      icon: Users,
      color: 'emerald',
      description: 'Perlawanan heroik dipimpin ulama dan pejuang. Amir Abdelkader menjadi simbol perlawanan Islam.',
      figures: ['Amir Abdelkader', 'Imam Shamil', 'Ahmed Ben Bella'],
      achievements: [
        'Gerakan perlawanan Islam',
        'Mempertahankan identitas Arab-Islam',
        'Kemerdekaan tahun 1962'
      ],
      artifacts: 'Bendera kemerdekaan, Dokumen sejarah perlawanan'
    },
    {
      id: 6,
      era: '1962 - Sekarang',
      title: 'Era Modern',
      icon: Scroll,
      color: 'purple',
      description: 'Kebangkitan identitas Islam di era modern. Pembangunan Masjid Agung Aljazair (Djamaa el Djazair) sebagai simbol kejayaan.',
      figures: ['Abdelaziz Bouteflika', 'Ulama kontemporer', 'Cendekiawan Muslim'],
      achievements: [
        'Masjid Agung Aljazair (2020)',
        'Pelestarian warisan Islam',
        'Pendidikan Islam modern'
      ],
      artifacts: 'Masjid Agung Aljazair, Pusat studi Islam'
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; hover: string }> = {
      emerald: {
        bg: 'bg-emerald-100 dark:bg-emerald-900/30',
        border: 'border-emerald-600',
        text: 'text-emerald-600 dark:text-emerald-400',
        hover: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/50'
      },
      amber: {
        bg: 'bg-amber-100 dark:bg-amber-900/30',
        border: 'border-amber-600',
        text: 'text-amber-600 dark:text-amber-400',
        hover: 'hover:bg-amber-50 dark:hover:bg-amber-900/50'
      },
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        border: 'border-blue-600',
        text: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/50'
      },
      red: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        border: 'border-red-600',
        text: 'text-red-600 dark:text-red-400',
        hover: 'hover:bg-red-50 dark:hover:bg-red-900/50'
      },
      purple: {
        bg: 'bg-violet-100 dark:bg-violet-900/30',
        border: 'border-violet-600',
        text: 'text-violet-600 dark:text-violet-400',
        hover: 'hover:bg-violet-50 dark:hover:bg-violet-900/50'
      }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="timeline" className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Timeline Interaktif</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Perjalanan Waktu Peradaban
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Jelajahi kronologi peradaban Islam di Aljazair dari awal penyebaran hingga era modern
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 via-amber-600 to-emerald-600 transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-24">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              const colors = getColorClasses(item.color);
              const isLeft = index % 2 === 0;
              const isSelected = selectedEra === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div
                      onClick={() => setSelectedEra(isSelected ? null : item.id)}
                      className={`group cursor-pointer bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                        isSelected ? colors.border : 'border-transparent hover:border-emerald-200 dark:hover:border-slate-700'
                      } transform hover:scale-105`}
                    >
                      <div className={`p-6 ${colors.bg}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-bold ${colors.text}`}>
                            {item.era}
                          </span>
                          <div className={`p-2 rounded-lg ${colors.bg}`}>
                            <IconComponent className={`w-5 h-5 ${colors.text}`} />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                          {item.title}
                        </h3>
                      </div>

                      <div className="p-6">
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                          {item.description}
                        </p>

                        {isSelected && (
                          <div className="space-y-4 animate-fade-in">
                            <div>
                              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                                Tokoh Penting:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.figures.map((figure, idx) => (
                                  <span
                                    key={idx}
                                    className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                                  >
                                    {figure}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                                Pencapaian:
                              </h4>
                              <ul className="space-y-2">
                                {item.achievements.map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-2 text-slate-600 dark:text-slate-300"
                                  >
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.bg}`}></span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                                Artefak & Warisan:
                              </h4>
                              <p className="text-slate-600 dark:text-slate-300 italic">
                                {item.artifacts}
                              </p>
                            </div>
                          </div>
                        )}

                        <button className={`mt-4 text-sm font-semibold ${colors.text} ${colors.hover} px-4 py-2 rounded-lg transition-colors duration-300`}>
                          {isSelected ? 'Tutup Detail' : 'Lihat Detail'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full ${colors.bg} border-4 ${colors.border} flex items-center justify-center shadow-lg`}>
                      <IconComponent className={`w-8 h-8 ${colors.text}`} />
                    </div>
                  </div>

                  <div className="w-full lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
