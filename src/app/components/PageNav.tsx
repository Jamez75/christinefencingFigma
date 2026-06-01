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
        const isDonate = item.path === '/donate';
        const isAbout = item.path === '/about';
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex-1 py-3 px-3 rounded-lg text-center transition-all active:scale-95 whitespace-nowrap ${
              isDonate
                ? 'text-white'
                : isAbout
                ? 'text-[var(--brand-primary)]'
                : isActive
                ? 'text-white'
                : 'text-[var(--brand-primary)]'
            }`}
            style={{
              backgroundColor: isDonate
                ? 'var(--brand-secondary)'
                : isAbout
                ? 'var(--bg-subtle)'
                : isActive
                ? 'var(--brand-secondary)'
                : 'var(--bg-subtle)',
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
