import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';
import { ProfileBanner } from './ProfileBanner';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ eventIdx: number; imageIdx: number } | null>(null);

  const events = [
    {
      name: 'National Youth Championships 2026',
      date: 'April 28, 2026',
      location: 'Manila',
      images: [
        { alt: 'Opening ceremony', src: 'https://images.unsplash.com/photo-1487491444334-76fa4a099351?w=800' },
        { alt: 'Competition bout', src: 'https://images.unsplash.com/photo-1648484860062-ee82b3ebaa6f?w=800' },
        { alt: 'Victory moment', src: 'https://images.unsplash.com/photo-1487491491904-a48f73cd4078?w=800' },
      ]
    },
    {
      name: 'Asia Pacific Junior Cup',
      date: 'March 15, 2026',
      location: 'Singapore',
      images: [
        { alt: 'Team photo', src: 'https://images.unsplash.com/photo-1505619656705-59ebc350b547?w=800' },
        { alt: 'Competition action', src: 'https://images.unsplash.com/photo-1636812028922-023445fbab51?w=800' },
        { alt: 'Medal ceremony', src: 'https://images.unsplash.com/photo-1631529819887-5b4340090570?w=800' },
      ]
    },
    {
      name: 'Regional Training Camp',
      date: 'February 10, 2026',
      location: 'Cebu',
      images: [
        { alt: 'Training session', src: 'https://images.unsplash.com/photo-1487491444334-76fa4a099351?w=800' },
        { alt: 'Practice drills', src: 'https://images.unsplash.com/photo-1648484860062-ee82b3ebaa6f?w=800' },
        { alt: 'Group training', src: 'https://images.unsplash.com/photo-1487491491904-a48f73cd4078?w=800' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProfileBanner />
      <div className="pt-4 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-1 w-16 rounded mx-auto mb-2 bg-[var(--brand-secondary)]" />
          <h1 className="text-4xl mb-2 text-center text-[var(--brand-primary)]">Gallery</h1>
          <div className="h-1 w-16 rounded mx-auto mb-2 bg-[var(--brand-secondary)]" />
          <p className="text-center text-[var(--text-secondary)] mb-8">Journey through competitions and training</p>

          <div className="space-y-12">
            {events.map((event, eventIdx) => (
              <div key={eventIdx}>
                <div className="mb-4">
                  <h2 className="text-2xl mb-1 text-[var(--brand-secondary)]">{event.name}</h2>
                  <p className="text-[var(--text-secondary)]">
                    {event.date} • {event.location}
                  </p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {event.images.map((image, imageIdx) => (
                    <button
                      key={imageIdx}
                      onClick={() => setSelectedImage({ eventIdx, imageIdx })}
                      className="relative aspect-square rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95 hover:scale-105"
                    >
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl max-h-full">
            <ImageWithFallback
              src={events[selectedImage.eventIdx].images[selectedImage.imageIdx].src}
              alt={events[selectedImage.eventIdx].images[selectedImage.imageIdx].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="text-white text-center mt-4">
              <p className="text-lg">{events[selectedImage.eventIdx].images[selectedImage.imageIdx].alt}</p>
              <p className="text-sm text-[var(--text-secondary)] mt-1">{events[selectedImage.eventIdx].name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
