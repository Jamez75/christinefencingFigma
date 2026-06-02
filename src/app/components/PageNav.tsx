import { Link, useLocation } from 'react-router';

export function PageNav() {
  const location = useLocation();

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/events', label: 'Events' },
    { path: '/donate', label: 'Donate' },
  ];

  return (
    <div className="flex gap-2 mb-8 overflow-x-auto">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex-1 py-[7.5px] px-[10px] rounded-lg text-center transition-all active:scale-95 whitespace-nowrap text-white`}
            style={{
              background: isActive ? 'var(--brand-secondary)' : 'var(--brand-gradient)',
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
