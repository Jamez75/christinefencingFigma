import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProfileBanner() {
  return (
    <div className="relative h-[260px] overflow-visible" style={{ background: 'linear-gradient(135deg, #0038A8 0%, #CE1126 100%)' }}>
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 390 100"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: '100px' }}
      >
        <path
          d="M 0,50 Q 97.5,10 195,50 Q 292.5,90 390,50 L 390,100 L 0,100 Z"
          fill="white"
        />
      </svg>
      <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '20px' }}>
        <div className="w-[155px] h-[155px] rounded-full border-4 overflow-hidden shadow-lg bg-white" style={{ borderColor: '#FCD116' }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1487491444334-76fa4a099351?w=400"
            alt="Athlete"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
