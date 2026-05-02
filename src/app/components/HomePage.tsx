import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Trophy, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { ProfileBanner } from './ProfileBanner';

export function HomePage() {
  const stats = [
    { value: '15', label: 'Competitions' },
    { value: '8', label: 'Medals' },
    { value: '5', label: 'Years Exp.' },
  ];

  const recentPhotos = [
    { src: 'https://images.unsplash.com/photo-1487491444334-76fa4a099351?w=400', alt: 'Competition 1' },
    { src: 'https://images.unsplash.com/photo-1648484860062-ee82b3ebaa6f?w=400', alt: 'Competition 2' },
    { src: 'https://images.unsplash.com/photo-1487491491904-a48f73cd4078?w=400', alt: 'Competition 3' },
    { src: 'https://images.unsplash.com/photo-1505619656705-59ebc350b547?w=400', alt: 'Training 1' },
    { src: 'https://images.unsplash.com/photo-1636812028922-023445fbab51?w=400', alt: 'Training 2' },
    { src: 'https://images.unsplash.com/photo-1631529819887-5b4340090570?w=400', alt: 'Training 3' },
  ];

  const achievements = [
    { icon: Trophy, text: '3x Regional Champion' },
    { icon: Award, text: 'National Youth Team' },
    { icon: Calendar, text: 'SEA Games Qualifier' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProfileBanner />

      <div className="px-6 pt-20">
        <h1 className="text-center text-4xl mb-1" style={{ color: '#0038A8' }}>Christine May Morales</h1>
        <p className="text-center text-sm mb-1" style={{ color: '#544C4C' }}>Fencing Prodigy</p>
        <p className="text-center text-sm mb-1" style={{ color: '#544C4C' }}>Straight "A" Student - UE Manila</p>

        <div className="flex items-center justify-center gap-2 mt-2">
          <MapPin size={18} style={{ color: '#544C4C' }} />
          <p className="text-sm" style={{ color: '#544C4C' }}>Metro Manila, Philippines</p>
        </div>

        <div className="flex justify-center gap-8 mt-8 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl mb-1" style={{ color: '#0038A8' }}>{stat.value}</p>
              <p className="text-sm" style={{ color: '#544C4C' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-8">
          <Link
            to="/donate"
            className="flex-1 py-3 rounded-lg text-center text-white transition-all active:scale-95"
            style={{ backgroundColor: '#CE1126' }}
          >
            Donate
          </Link>
          <Link
            to="/gallery"
            className="flex-1 py-3 rounded-lg text-center transition-all active:scale-95"
            style={{ backgroundColor: '#E8E8E8', color: '#0038A8' }}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="flex-1 py-3 rounded-lg text-center transition-all active:scale-95"
            style={{ backgroundColor: '#D4D4D4', color: '#0038A8' }}
          >
            About
          </Link>
        </div>

        <div className="border-t border-gray-300 mb-6" />

        <div className="mb-8">
          <h2 className="text-xl mb-2" style={{ color: '#0038A8' }}>Recent Highlights</h2>
          <div className="h-1 w-16 rounded mb-4" style={{ backgroundColor: '#CE1126' }} />
          <div className="grid grid-cols-3 gap-2">
            {recentPhotos.map((photo, idx) => (
              <Link
                key={idx}
                to="/gallery"
                className="aspect-square rounded-lg overflow-hidden shadow-md active:scale-95 transition-transform"
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-300 mb-6" />
      </div>

      <div className="px-6 pb-6">
        <div className="bg-white rounded-xl shadow-md p-6 border-2" style={{ borderColor: '#E8E8E8' }}>
          <div className="flex items-start gap-4">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0" style={{ backgroundColor: '#0038A8' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1487491444334-76fa4a099351?w=200"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-1">Fencing Dreams</h3>
              <p className="text-sm mb-3" style={{ color: '#78858F' }}>Supporting Future Champions</p>
              <div className="space-y-2">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon size={16} style={{ color: '#CE1126' }} />
                      <span className="text-sm">{achievement.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
