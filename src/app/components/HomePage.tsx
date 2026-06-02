import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Trophy, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { ProfileBanner } from './ProfileBanner';
import { PageNav } from './PageNav';

export function HomePage() {
  const stats = [
    { value: '15', label: 'Competitions' },
    { value: '8', label: 'Medals' },
    { value: '8', label: 'Years Exp.' },
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

      <div className="px-6 pt-4">
        <div className="h-1 w-16 rounded mx-auto mb-4 bg-[var(--brand-secondary)]" />
        <h1 className="text-center text-4xl mb-1 text-[var(--brand-primary)]">Christine May Morales</h1>
        <div className="h-1 w-16 rounded mx-auto mb-4 bg-[var(--brand-secondary)]" />
        <p className="text-center text-sm mb-1 text-[var(--text-primary)]">Fencing prodigy</p>
        <p className="text-center text-sm mb-1 text-[var(--text-primary)]">Straight "A" Student - UE Manila</p>

        <div className="flex items-center justify-center gap-2 mt-2">
          <MapPin size={18} className="text-[var(--text-primary)]" />
          <p className="text-sm text-[var(--text-primary)]">Metro Manila, Philippines</p>
        </div>

        <div className="flex justify-center gap-8 mt-8 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl mb-1 text-[var(--brand-primary)]">{stat.value}</p>
              <p className="text-sm text-[var(--text-primary)]">{stat.label}</p>
            </div>
          ))}
        </div>

        <PageNav />

        <div className="border-t border-[var(--bg-subtle)] mb-6" />

        <div className="mb-8">
          <div className="h-1 w-16 rounded mx-auto mb-4 bg-[var(--brand-secondary)]" />
          <h2 className="text-xl mb-2 text-center text-[var(--brand-primary)]">Recent Highlights</h2>
          <div className="h-1 w-16 rounded mx-auto mb-4 bg-[var(--brand-secondary)]" />
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

        <div className="border-t border-[var(--bg-subtle)] mb-6" />
      </div>

      <div className="px-6 pb-6">
        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-[var(--bg-subtle)]">
          <div className="flex items-start gap-4">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 bg-[var(--brand-primary)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1487491444334-76fa4a099351?w=200"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-1">Fencing Dreams</h3>
              <p className="text-sm mb-3 text-[var(--text-secondary)]">Supporting Future Champions</p>
              <div className="space-y-2">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon size={16} className="text-[var(--brand-secondary)]" />
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
