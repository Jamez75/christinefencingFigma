import { ImageWithFallback } from './figma/ImageWithFallback';
import { Trophy, Award, Target, GraduationCap, Swords } from 'lucide-react';
import { ProfileBanner } from './ProfileBanner';

export function AboutPage() {
  const disciplines = [
    {
      name: 'Foil',
      description: 'A light thrusting weapon targeting the torso. Requires precision and strategy.',
      icon: '🤺'
    },
    {
      name: 'Sabre',
      description: 'A cutting and thrusting weapon targeting above the waist. Fast-paced and aggressive.',
      icon: '⚔️'
    },
    {
      name: 'Épée',
      description: 'A heavy thrusting weapon where the entire body is valid target. Strategic and tactical.',
      icon: '🗡️'
    }
  ];

  const achievements = [
    { year: '2026', title: 'Silver Medal - National Youth Championships', discipline: 'Foil' },
    { year: '2025', title: 'Ranked #1 in the Philippines U/12', discipline: 'Foil' },
    { year: '2025', title: 'Bronze Medal - Philippines Open', discipline: 'Épée' },
    { year: '2024', title: 'Gold Medal - Junior League Finals', discipline: 'Foil' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProfileBanner />
      <div className="px-6 pt-20 pb-6">
        <div className="mb-8">
          <h1 className="text-center text-3xl mb-2" style={{ color: '#0038A8' }}>About Me</h1>
          <div className="h-1 w-16 rounded mx-auto" style={{ backgroundColor: '#CE1126' }} />
        </div>

        <div className="mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1487491444334-76fa4a099351?w=600"
              alt="Maria Santos"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-700 mb-4">
            Hi! I'm Christine May Morales, a 13-year-old competitive fencer and straight "A" student at the University of the East in Manila, Philippines.
            Fencing has been my passion for the past 8 years, teaching me discipline, focus, and perseverance.
          </p>
          <p className="text-gray-700 mb-4">
            What makes my journey unique is that I compete in all three fencing disciplines: <strong style={{ color: '#0038A8' }}>Foil</strong>, <strong style={{ color: '#0038A8' }}>Sabre</strong>, and <strong style={{ color: '#0038A8' }}>Épée</strong>.
            Each weapon requires different techniques and strategies, and mastering all three has made me a more versatile and skilled athlete.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl mb-2" style={{ color: '#0038A8' }}>The Three Disciplines</h2>
          <div className="h-1 w-16 rounded mb-4" style={{ backgroundColor: '#CE1126' }} />
          <div className="space-y-4">
            {disciplines.map((discipline, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-4 border-2" style={{ borderColor: '#E8E8E8' }}>
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{discipline.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-1" style={{ color: '#CE1126' }}>{discipline.name}</h3>
                    <p className="text-sm text-gray-700">{discipline.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl mb-2" style={{ color: '#0038A8' }}>My Journey</h2>
          <div className="h-1 w-16 rounded mb-4" style={{ backgroundColor: '#CE1126' }} />
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FCD116' }}>
                <Swords size={24} style={{ color: '#0038A8' }} />
              </div>
              <div>
                <h3 className="mb-1">Multi-Discipline Athlete</h3>
                <p className="text-sm text-gray-700">Training in all three weapons has given me a comprehensive understanding of fencing and made me a more adaptable competitor.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FCD116' }}>
                <GraduationCap size={24} style={{ color: '#0038A8' }} />
              </div>
              <div>
                <h3 className="mb-1">Academic Excellence</h3>
                <p className="text-sm text-gray-700">Maintaining straight A's while competing at a national level requires careful time management and dedication to both my studies and sport.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FCD116' }}>
                <Target size={24} style={{ color: '#0038A8' }} />
              </div>
              <div>
                <h3 className="mb-1">International Dreams</h3>
                <p className="text-sm text-gray-700">My goal is to represent the Philippines in international competitions, including the SEA Games and eventually the Olympics.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl mb-2" style={{ color: '#0038A8' }}>Recent Achievements</h2>
          <div className="h-1 w-16 rounded mb-4" style={{ backgroundColor: '#CE1126' }} />
          <div className="space-y-3">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: '#F8F9FA' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0038A8' }}>
                  <Award size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm mb-1">{achievement.title}</h3>
                    <span className="text-xs px-2 py-1 rounded text-white flex-shrink-0" style={{ backgroundColor: '#CE1126' }}>
                      {achievement.discipline}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: '#544C4C' }}>{achievement.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-2" style={{ borderColor: '#E8E8E8' }}>
          <h2 className="text-xl mb-2" style={{ color: '#0038A8' }}>How You Can Help</h2>
          <div className="h-1 w-16 rounded mb-3" style={{ backgroundColor: '#CE1126' }} />
          <p className="text-sm text-gray-700 mb-4">
            Training in three disciplines requires more equipment, coaching time, and competition fees. Your support helps me:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span style={{ color: '#CE1126' }}>•</span>
              <span>Purchase and maintain three sets of specialized equipment</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span style={{ color: '#CE1126' }}>•</span>
              <span>Train with coaches specialized in each discipline</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span style={{ color: '#CE1126' }}>•</span>
              <span>Travel to regional and international competitions</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span style={{ color: '#CE1126' }}>•</span>
              <span>Participate in specialized training camps</span>
            </li>
          </ul>
          <a
            href="/donate"
            className="block w-full py-3 rounded-lg text-center text-white transition-all active:scale-95"
            style={{ backgroundColor: '#CE1126' }}
          >
            Support My Journey
          </a>
        </div>
      </div>
    </div>
  );
}
