import { Calendar, MapPin, Users, Award } from 'lucide-react';
import { ProfileBanner } from './ProfileBanner';

export function EventsPage() {
  const upcomingEvents = [
    {
      date: '2026-07-15',
      title: 'Asia Pacific Junior Championships',
      location: 'Kuala Lumpur, Malaysia',
      discipline: 'Foil, Épée, Sabre',
      participants: '200+ athletes',
      status: 'Confirmed',
      description: 'Major international tournament featuring the top junior fencers from across Asia Pacific region'
    },
    {
      date: '2026-08-20',
      title: 'Hong Kong Youth Open',
      location: 'Hong Kong',
      discipline: 'Foil',
      participants: '150+ athletes',
      status: 'Registered',
      description: 'Annual youth competition drawing participants from across Southeast and East Asia'
    },
    {
      date: '2026-09-10',
      title: 'National Training Camp',
      location: 'Tagaytay, Philippines',
      discipline: 'All Weapons',
      participants: '30 athletes',
      status: 'Invited',
      description: 'Intensive training camp with national team coaches preparing for international competitions'
    },
    {
      date: '2026-10-05',
      title: 'Australian Junior Circuit',
      location: 'Sydney, Australia',
      discipline: 'Épée, Sabre',
      participants: '180+ athletes',
      status: 'Pending',
      description: 'International ranking event with competitors from Oceania and Asia regions'
    }
  ];

  const pastEvents = [
    {
      date: '2026-05-12',
      title: 'National Youth Championships',
      location: 'Manila, Philippines',
      discipline: 'Foil',
      result: 'Silver Medal',
      participants: '64 athletes'
    },
    {
      date: '2026-03-08',
      title: 'Regional Training Camp',
      location: 'Cebu, Philippines',
      discipline: 'All Weapons',
      result: 'Completed',
      participants: '25 athletes'
    },
    {
      date: '2025-11-20',
      title: 'Philippines Open',
      location: 'Quezon City, Philippines',
      discipline: 'Épée',
      result: 'Bronze Medal',
      participants: '72 athletes'
    },
    {
      date: '2025-09-15',
      title: 'Asia Pacific Junior Cup',
      location: 'Singapore',
      discipline: 'Foil',
      result: 'Top 8',
      participants: '128 athletes'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'var(--brand-primary)';
      case 'Registered':
        return 'var(--brand-accent)';
      case 'Invited':
        return 'var(--brand-secondary)';
      default:
        return 'var(--text-secondary)';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ProfileBanner />
      <div className="px-6 pt-4 pb-6">
        <div className="mb-8">
          <div className="h-1 w-16 rounded mx-auto bg-[var(--brand-secondary)] mb-4" />
          <h1 className="text-center text-3xl mb-2 text-[var(--brand-primary)]">Events</h1>
          <div className="h-1 w-16 rounded mx-auto bg-[var(--brand-secondary)]" />
        </div>

        <div className="mb-8">
          <div className="h-1 w-16 rounded mb-4 bg-[var(--brand-secondary)]" />
          <h2 className="text-2xl mb-2 text-[var(--brand-primary)]">Upcoming Competitions</h2>
          <div className="h-1 w-16 rounded mb-4 bg-[var(--brand-secondary)]" />
          <div className="space-y-4">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-5 border-2 border-[var(--bg-subtle)]"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--brand-primary)' }}
                  >
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg text-[var(--brand-primary)]">{event.title}</h3>
                      <span
                        className="text-xs px-2 py-1 rounded text-white flex-shrink-0"
                        style={{ backgroundColor: getStatusColor(event.status) }}
                      >
                        {event.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={14} className="text-[var(--text-secondary)]" />
                      <p className="text-sm text-[var(--text-primary)]">{formatDate(event.date)}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={14} className="text-[var(--text-secondary)]" />
                      <p className="text-sm text-[var(--text-primary)]">{event.location}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={14} className="text-[var(--text-secondary)]" />
                      <p className="text-sm text-[var(--text-primary)]">{event.participants}</p>
                    </div>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-sm text-[var(--text-secondary)] mb-2">{event.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {event.discipline.split(', ').map((disc, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: 'var(--bg-subtle)',
                          color: 'var(--brand-primary)'
                        }}
                      >
                        {disc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="h-1 w-16 rounded mb-4 bg-[var(--brand-secondary)]" />
          <h2 className="text-2xl mb-2 text-[var(--brand-primary)]">Past Events</h2>
          <div className="h-1 w-16 rounded mb-4 bg-[var(--brand-secondary)]" />
          <div className="space-y-3">
            {pastEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-4 border-2 border-[var(--bg-subtle)]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--brand-secondary)' }}
                  >
                    <Award size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base text-[var(--brand-primary)]">{event.title}</h3>
                      <span
                        className="text-xs px-2 py-1 rounded text-white flex-shrink-0"
                        style={{ backgroundColor: 'var(--brand-accent)', color: 'var(--brand-primary)' }}
                      >
                        {event.result}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-primary)] mb-1">
                      {formatDate(event.date)} • {event.location}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {event.discipline} • {event.participants}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-[var(--bg-subtle)]">
          <div className="h-1 w-16 rounded mb-3 bg-[var(--brand-secondary)]" />
          <h2 className="text-xl mb-2 text-[var(--brand-primary)]">Help Me Compete</h2>
          <div className="h-1 w-16 rounded mb-3 bg-[var(--brand-secondary)]" />
          <p className="text-sm text-[var(--text-primary)] mb-4">
            International competitions require significant financial investment for travel, accommodation,
            registration fees, and equipment. Your support makes it possible for me to compete at these events
            and gain valuable experience against top international athletes.
          </p>
          <a
            href="/donate"
            className="block w-full py-3 rounded-lg text-center text-white transition-all active:scale-95"
            style={{ background: 'var(--brand-gradient)' }}
          >
            Support My Journey
          </a>
        </div>
      </div>
    </div>
  );
}
