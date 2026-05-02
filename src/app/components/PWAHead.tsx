import { useEffect } from 'react';

export function PWAHead() {
  useEffect(() => {
    const head = document.head;

    const addMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const addLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        head.appendChild(link);
      }
      link.href = href;
    };

    addMeta('theme-color', '#0038A8');
    addMeta('apple-mobile-web-app-capable', 'yes');
    addMeta('apple-mobile-web-app-status-bar-style', 'black-translucent');
    addMeta('apple-mobile-web-app-title', 'Fencing Dreams');
    addMeta('mobile-web-app-capable', 'yes');

    addLink('manifest', '/manifest.json');
    addLink('apple-touch-icon', '/icon.svg');

    document.title = 'Fencing Dreams';
  }, []);

  return null;
}
