import { MapPin, X } from 'lucide-react';
import { useState } from 'react';

interface Region {
  id: string;
  name: string;
  position: { top: string; left: string };
  facts: string[];
  historicalSites: string[];
  period: string;
}

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const regions: Region[] = [
    {
      id: 'algiers',
      name: 'Algiers',
      position: { top: '35%', left: '50%' },
      facts: [
        'Ibu kota dan pusat kekuasaan Ottoman',
        'Benteng Casbah yang megah',
        'Masjid Ketchaoua (1612)',
        'Pusat administrasi dan perdagangan'
      ],
      historicalSites: ['Casbah of Algiers', 'Masjid Ketchaoua', 'Benteng Ottoman'],
      period: '1516 - Sekarang'
    },
    {
      id: 'tlemcen',
      name: 'Tlemcen',
      position: { top: '38%', left: '30%' },
      facts: [
        'Pusat ilmu pengetahuan Maghreb',
        'Masjid Agung Tlemcen (1136)',
        'Kota Ibn Khaldun',
        'Pengaruh Andalusia yang kuat'
      ],
      historicalSites: ['Masjid Agung Tlemcen', 'Istana Mechouar', 'Mansourah'],
      period: '1235 - 1516'
    },
    {
      id: 'constantine',
      name: 'Constantine',
      position: { top: '32%', left: '70%' },
      facts: [
        'Kota jembatan gantung kuno',
        'Pusat budaya Berber-Islam',
        'Masjid Emir Abdelkader',
        'Benteng alami di atas ngarai'
      ],
      historicalSites: ['Jembatan Sidi M\'Cid', 'Masjid Emir Abdelkader', 'Casbah Constantine'],
      period: '647 - Sekarang'
    },
    {
      id: 'oran',
      name: 'Oran',
      position: { top: '40%', left: '25%' },
      facts: [
        'Pelabuhan penting Mediterania',
        'Benteng Santa Cruz',
        'Pusat perdagangan maritim',
        'Musik Raï dan budaya pesisir'
      ],
      historicalSites: ['Benteng Santa Cruz', 'Masjid Hassan Pasha', 'Pelabuhan Lama'],
      period: '902 - Sekarang'
    },
    {
      id: 'qalaat',
      name: 'Qalaat Banu Hammad',
      position: { top: '42%', left: '55%' },
      facts: [
        'Ibu kota Dinasti Hammadid',
        'Situs Warisan Dunia UNESCO',
        'Arsitektur Islam Maghreb klasik',
        'Pusat seni dan budaya abad 11'
      ],
      historicalSites: ['Istana Hammadid', 'Masjid Agung', 'Menara Manar'],
      period: '1007 - 1152'
    },
    {
      id: 'kairouan',
      name: 'Kairouan Region',
      position: { top: '45%', left: '75%' },
      facts: [
        'Kota suci keempat Islam',
        'Masjid Agung Kairouan (670)',
        'Dibangun oleh Uqba ibn Nafi',
        'Pusat penyebaran Islam awal'
      ],
      historicalSites: ['Masjid Uqba', 'Makam Sahabat', 'Medina Kairouan'],
      period: '670 - Sekarang'
    },
    {
      id: 'sahara',
      name: 'Rute Sahara',
      position: { top: '70%', left: '50%' },
      facts: [
        'Jalur perdagangan trans-Sahara',
        'Penyebaran Islam ke Afrika Sub-Sahara',
        'Perdagangan garam dan emas',
        'Oasis dan pemukiman Berber'
      ],
      historicalSites: ['Tamanrasset', 'Ghardaia', 'Oasis M\'zab'],
      period: '800 - 1900'
    }
  ];

  return (
    <section id="map" className="py-20 lg:py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>Peta Interaktif</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Peta Peradaban Aljazair
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Klik pada titik-titik di peta untuk menjelajahi wilayah bersejarah dan warisan Islam di Aljazair
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl shadow-2xl p-8 lg:p-12 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 dark:opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006E3F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-[16/9] bg-gradient-to-br from-emerald-100/50 to-amber-100/50 dark:from-slate-700/50 dark:to-slate-600/50 rounded-2xl border-4 border-emerald-200 dark:border-slate-600">
              <svg viewBox="0 0 800 600" className="w-full h-full">
                <defs>
                  <pattern id="map-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#006E3F" fillOpacity="0.1"/>
                  </pattern>
                </defs>
                <rect width="800" height="600" fill="url(#map-pattern)"/>

                <path
                  d="M 150 250 L 350 200 L 500 220 L 600 280 L 650 350 L 600 450 L 400 500 L 250 480 L 150 400 Z"
                  fill="#006E3F"
                  fillOpacity="0.2"
                  stroke="#006E3F"
                  strokeWidth="2"
                  className="animate-pulse-slow"
                />

                <path
                  d="M 200 450 C 250 520, 450 540, 550 480"
                  stroke="#E4CFA3"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
              </svg>

              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ top: region.position.top, left: region.position.left }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-600 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-6 h-6 lg:w-8 lg:h-8 bg-emerald-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg group-hover:scale-125 transition-transform duration-300">
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 px-3 py-1 rounded-lg shadow-lg whitespace-nowrap text-xs lg:text-sm font-semibold text-slate-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {region.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selectedRegion && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 flex items-center justify-between rounded-t-2xl">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {selectedRegion.name}
                    </h3>
                    <p className="text-emerald-100 text-sm">
                      {selectedRegion.period}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedRegion(null)}
                    className="p-2 hover:bg-emerald-700 rounded-lg transition-colors duration-300"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center space-x-2">
                      <span className="w-1 h-6 bg-emerald-600 rounded-full"></span>
                      <span>Fakta Sejarah</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedRegion.facts.map((fact, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 text-slate-600 dark:text-slate-300"
                        >
                          <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center space-x-2">
                      <span className="w-1 h-6 bg-amber-600 rounded-full"></span>
                      <span>Situs Bersejarah</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegion.historicalSites.map((site, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-lg text-sm font-medium"
                        >
                          {site}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
