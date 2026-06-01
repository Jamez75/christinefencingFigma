import { Trophy, Medal, Award, Star, Target } from 'lucide-react';
import { ProfileBanner } from './ProfileBanner';
import { PageNav } from './PageNav';

export function AchievementsPage() {
  const achievements = [
    {
      year: '2026',
      title: 'Silver Medal - National Youth Championships',
      discipline: 'Foil',
      location: 'Manila, Philippines',
      description: 'Competed against 64 fencers in the U/14 category',
      icon: Medal,
      color: 'var(--brand-primary)'
    },
    {
      year: '2025',
      title: 'Ranked #1 in the Philippines U/12',
      discipline: 'Foil',
      location: 'Philippines',
      description: 'Achieved top national ranking in under-12 foil category',
      icon: Trophy,
      color: 'var(--brand-accent)'
    },
    {
      year: '2025',
      title: 'Bronze Medal - Philippines Open',
      discipline: 'Épée',
      location: 'Quezon City, Philippines',
      description: 'First podium finish in épée competition',
      icon: Medal,
      color: 'var(--brand-secondary)'
    },
    {
      year: '2024',
      title: 'Gold Medal - Junior League Finals',
      discipline: 'Foil',
      location: 'Makati, Philippines',
      description: 'Undefeated run in regional tournament',
      icon: Trophy,
      color: 'var(--brand-accent)'
    },
    {
      year: '2024',
      title: 'Most Improved Fencer Award',
      discipline: 'All Weapons',
      location: 'Manila Fencing Club',
      description: 'Recognized for dedication and rapid skill development',
      icon: Star,
      color: 'var(--brand-primary)'
    },
    {
      year: '2023',
      title: 'Silver Medal - Regional Championship',
      discipline: 'Sabre',
      location: 'Cebu, Philippines',
      description: 'Runner-up in U/12 sabre division',
      icon: Medal,
      color: 'var(--brand-primary)'
    },
    {
      year: '2023',
      title: 'Top 8 Finish - Asia Pacific Youth Cup',
      discipline: 'Foil',
      location: 'Singapore',
      description: 'First international competition quarterfinal appearance',
      icon: Target,
      color: 'var(--brand-secondary)'
    },
    {
      year: '2022',
      title: 'Best Newcomer - Manila Circuit',
      discipline: 'Foil',
      location: 'Manila, Philippines',
      description: 'Outstanding performance in first competitive season',
      icon: Award,
      color: 'var(--brand-accent)'
    }
  ];

  const stats = [
    { value: '18', label: 'Total Awards' },
    { value: '5', label: 'Gold Medals' },
    { value: '8', label: 'Podium Finishes' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProfileBanner />
      <div className="px-6 pt-20 pb-6">
        <PageNav />

        <div className="mb-8">
          <h1 className="text-center text-3xl mb-2 text-[var(--brand-primary)]">Achievements</h1>
          <div className="h-1 w-16 rounded mx-auto bg-[var(--brand-secondary)]" />
        </div>

        <div className="flex justify-center gap-8 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl mb-1 text-[var(--brand-primary)]">{stat.value}</p>
              <p className="text-sm text-[var(--text-primary)]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-5 border-2 border-[var(--bg-subtle)]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: achievement.color }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg text-[var(--brand-primary)]">{achievement.title}</h3>
                      <span
                        className="text-xs px-2 py-1 rounded text-white flex-shrink-0"
                        style={{ backgroundColor: 'var(--brand-secondary)' }}
                      >
                        {achievement.discipline}
                      </span>
                    </div>
                    <p className="text-sm mb-1 text-[var(--text-primary)]">{achievement.location} • {achievement.year}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6 border-2 border-[var(--bg-subtle)]">
          <h2 className="text-xl mb-2 text-[var(--brand-primary)]">Looking Ahead</h2>
          <div className="h-1 w-16 rounded mb-3 bg-[var(--brand-secondary)]" />
          <p className="text-sm text-[var(--text-primary)] mb-4">
            With your support, I'm working towards even bigger goals: qualifying for the SEA Games,
            competing at the World Youth Championships, and ultimately representing the Philippines at the Olympics.
          </p>
          <a
            href="/donate"
            className="block w-full py-3 rounded-lg text-center text-white transition-all active:scale-95"
            style={{ backgroundColor: 'var(--brand-secondary)' }}
          >
            Support My Journey
          </a>
        </div>
      </div>
    </div>
  );
}
