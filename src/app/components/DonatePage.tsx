import { useState } from 'react';
import { Heart, CreditCard, Banknote } from 'lucide-react';
import { ProfileBanner } from './ProfileBanner';
import { PageNav } from './PageNav';

export function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'gcash' | 'stripe' | 'wise' | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const presetAmounts = [500, 1000, 2500, 5000, 10000];
  const phpToUsd = 0.017; // Approximate conversion rate

  const convertToUSD = (php: number) => {
    return (php * phpToUsd).toFixed(2);
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && paymentMethod) {
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ProfileBanner />
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
        <PageNav />
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-2 text-[var(--brand-primary)]">Support My Journey</h1>
          <div className="h-1 w-16 rounded mx-auto mb-4 bg-[var(--brand-secondary)]" />
          <p className="text-lg text-[var(--text-primary)]">
            Your generous donation helps cover training costs, equipment, and competition travel expenses.
          </p>
        </div>

        {showThankYou && (
          <div className="mb-8 p-6 rounded-lg text-center bg-[var(--brand-accent)] text-[var(--brand-primary)]">
            <Heart className="mx-auto mb-2" size={32} />
            <h3 className="text-xl">Thank you for your support!</h3>
            <p>Your donation makes a real difference in achieving my dreams.</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-2 text-[var(--brand-secondary)]">Select Donation Amount</h2>
          <div className="h-1 w-16 rounded mb-6 bg-[var(--brand-secondary)]" />

          <div className="grid grid-cols-3 gap-4 mb-6">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedAmount === amount
                    ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white'
                    : 'border-[var(--bg-subtle)] hover:border-[var(--brand-primary)]'
                }`}
              >
                <div>₱{amount.toLocaleString()}</div>
                <div className={`text-sm mt-1 ${selectedAmount === amount ? 'text-white/80' : 'text-[var(--text-secondary)]'}`}>
                  ${convertToUSD(amount)} USD
                </div>
              </button>
            ))}
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-[var(--text-primary)]">Or enter custom amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">₱</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="Enter amount in PHP"
                className="w-full pl-10 pr-4 py-3 border-2 border-[var(--bg-subtle)] rounded-lg focus:border-[var(--brand-primary)] focus:outline-none"
              />
            </div>
            {customAmount && parseFloat(customAmount) > 0 && (
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                ≈ ${convertToUSD(parseFloat(customAmount))} USD
              </p>
            )}
          </div>

          <h2 className="text-2xl mb-2 text-[var(--brand-secondary)]">Payment Method</h2>
          <div className="h-1 w-16 rounded mb-6 bg-[var(--brand-secondary)]" />

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setPaymentMethod('gcash')}
              className={`p-6 rounded-lg border-2 transition-all ${
                paymentMethod === 'gcash'
                  ? 'border-[var(--brand-primary)] bg-[var(--bg-light)]'
                  : 'border-[var(--bg-subtle)] hover:border-[var(--brand-primary)]'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#007DFF' }}>
                  <span className="text-white">G</span>
                </div>
                <span className="text-lg">GCash</span>
              </div>
            </button>

            <button
              onClick={() => setPaymentMethod('stripe')}
              className={`p-6 rounded-lg border-2 transition-all ${
                paymentMethod === 'stripe'
                  ? 'border-[var(--brand-primary)] bg-[var(--bg-light)]'
                  : 'border-[var(--bg-subtle)] hover:border-[var(--brand-primary)]'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <CreditCard style={{ color: '#635BFF' }} size={32} />
                <span className="text-lg">Stripe</span>
              </div>
            </button>

            <button
              onClick={() => setPaymentMethod('wise')}
              className={`p-6 rounded-lg border-2 transition-all ${
                paymentMethod === 'wise'
                  ? 'border-[var(--brand-primary)] bg-[var(--bg-light)]'
                  : 'border-[var(--bg-subtle)] hover:border-[var(--brand-primary)]'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00B9FF' }}>
                  <Banknote size={24} className="text-white" />
                </div>
                <span className="text-lg">Wise</span>
              </div>
            </button>
          </div>

          {paymentMethod === 'gcash' && (
            <div className="mb-6 p-4 rounded-lg bg-[var(--bg-light)] border-l-4 border-[var(--brand-primary)]">
              <p className="text-sm text-[var(--text-primary)]">
                <strong>GCash Number:</strong> +63 xxx xxx xxxx<br />
                <strong>Account Name:</strong> Fencing Dreams Fund<br />
                Please use your email as reference.
              </p>
            </div>
          )}

          {paymentMethod === 'stripe' && (
            <div className="mb-6 space-y-4">
              <div>
                <label className="block mb-2 text-[var(--text-primary)]">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 border-2 border-[var(--bg-subtle)] rounded-lg focus:border-[var(--brand-primary)] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-[var(--text-primary)]">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border-2 border-[var(--bg-subtle)] rounded-lg focus:border-[var(--brand-primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[var(--text-primary)]">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 border-2 border-[var(--bg-subtle)] rounded-lg focus:border-[var(--brand-primary)] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'wise' && (
            <div className="mb-6 p-4 rounded-lg bg-[var(--bg-light)] border-l-4 border-[var(--brand-primary)]">
              <p className="text-sm text-[var(--text-primary)]">
                <strong>Wise Email:</strong> fencingdreams@email.com<br />
                <strong>Account Name:</strong> Fencing Dreams Fund<br />
                <strong>Country:</strong> Philippines<br />
                Please include your name in the transfer note.
              </p>
            </div>
          )}

          <button
            onClick={handleDonate}
            disabled={!(selectedAmount || customAmount) || !paymentMethod}
            className="w-full py-4 rounded-lg text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 bg-[var(--brand-secondary)]"
          >
            Complete Donation
          </button>

          <p className="text-sm text-[var(--text-secondary)] text-center mt-6">
            This is a prototype. No actual payment will be processed.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-2 text-[var(--brand-primary)]">How Your Donation Helps</h2>
          <div className="h-1 w-16 rounded mb-6 bg-[var(--brand-secondary)]" />
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-[var(--brand-accent)]">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="mb-1">Equipment</h3>
                <p className="text-[var(--text-secondary)]">Quality fencing gear including masks, jackets, gloves, and weapons</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-[var(--brand-accent)]">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <div>
                <h3 className="mb-1">Advanced Training</h3>
                <p className="text-[var(--text-secondary)]">Weight training programs and private coaching fees with experienced coaches and national team trainers</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-[var(--brand-accent)]">
                <span className="text-2xl">✈️</span>
              </div>
              <div>
                <h3 className="mb-1">International travel</h3>
                <p className="text-[var(--text-secondary)]">Flights, accommodation, and registration fees for upcoming tournaments in Malaysia, Hong Kong, and Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
