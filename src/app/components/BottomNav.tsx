import { Link, useLocation } from 'react-router';
import { Home, Heart, Image, Share2, Facebook, Link as LinkIcon, X as CloseIcon, QrCode } from 'lucide-react';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export function BottomNav() {
  const location = useLocation();
  const [showShareModal, setShowShareModal] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleShare = () => {
    setShowShareModal(true);
    setShowQRCode(false);
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.origin);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    setShowShareModal(false);
  };

  const shareToX = () => {
    const url = encodeURIComponent(window.location.origin);
    const text = encodeURIComponent('Help me represent the Philippines in international fencing competitions! 🤺');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    setShowShareModal(false);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard!');
    } catch (err) {
      const input = document.createElement('input');
      input.value = window.location.origin;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      alert('Link copied to clipboard!');
    }
    setShowShareModal(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home, onClick: null },
    { path: '/donate', label: 'Donate', icon: Heart, onClick: null },
    { path: '/gallery', label: 'Gallery', icon: Image, onClick: null },
    { path: '#share', label: 'Share', icon: Share2, onClick: handleShare },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--bg-subtle)] z-50 pb-safe">
        <div className="grid grid-cols-4 max-w-lg mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            if (item.onClick) {
              return (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="flex flex-col items-center justify-center py-3 px-2 transition-colors"
                >
                  <Icon
                    size={24}
                    className="text-[var(--brand-primary)] mb-1"
                  />
                  <span className="text-xs text-[var(--brand-primary)]">
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center justify-center py-3 px-2 transition-colors"
              >
                <Icon
                  size={24}
                  className={`mb-1 ${isActive ? 'text-[var(--brand-secondary)]' : 'text-[var(--brand-primary)]'}`}
                />
                <span
                  className={`text-xs ${isActive ? 'text-[var(--brand-secondary)]' : 'text-[var(--brand-primary)]'}`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {showShareModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="bg-white rounded-t-2xl md:rounded-2xl w-full max-w-sm pb-safe"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg text-[var(--brand-primary)]">Share</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-2 hover:bg-[var(--bg-light)] rounded-full"
              >
                <CloseIcon size={20} />
              </button>
            </div>
            {!showQRCode ? (
              <div className="p-4 space-y-2">
                <button
                  onClick={shareToFacebook}
                  className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-[var(--bg-light)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1877F2' }}>
                    <Facebook size={20} className="text-white" />
                  </div>
                  <span className="text-lg">Share on Facebook</span>
                </button>
                <button
                  onClick={shareToX}
                  className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-[var(--bg-light)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-lg">Share on X</span>
                </button>
                <button
                  onClick={copyLink}
                  className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-[var(--bg-light)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--brand-accent)]">
                    <LinkIcon size={20} className="text-[var(--brand-primary)]" />
                  </div>
                  <span className="text-lg">Copy Link</span>
                </button>
                <button
                  onClick={() => setShowQRCode(true)}
                  className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-[var(--bg-light)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--brand-primary)]">
                    <QrCode size={20} className="text-white" />
                  </div>
                  <span className="text-lg">Show QR Code</span>
                </button>
              </div>
            ) : (
              <div className="p-8 flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <QRCodeSVG
                    value={window.location.origin}
                    size={200}
                    level="H"
                    includeMargin={true}
                    style={{ color: 'var(--brand-primary)' }}
                  />
                </div>
                <p className="text-center text-[var(--text-secondary)] mt-4 mb-2">Scan to visit</p>
                <button
                  onClick={() => setShowQRCode(false)}
                  className="mt-2 px-6 py-2 rounded-lg text-white bg-[var(--brand-secondary)]"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
