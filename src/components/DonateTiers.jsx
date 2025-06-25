import React from 'react';

const tiers = [
  {
    amount: '$25',
    impact: 'Provides menstrual hygiene kits for 10 girls',
    icon: '/assets/tier1.png',
  },
  {
    amount: '$100',
    impact: 'Supports a health camp in a rural village',
    icon: '/assets/tier2.png',
  },
  {
    amount: '$250',
    impact: 'Trains 5 women in vocational skills',
    icon: '/assets/tier3.png',
  },
  {
    amount: '$500',
    impact: 'Funds a full-time health worker for a month',
    icon: '/assets/tier4.png',
  },
];

export default function DonateTiers() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Your Donation in Action</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={tier.icon} alt={`Tier ${i}`} className="h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{tier.amount}</h3>
              <p className="text-gray-700 text-sm">{tier.impact}</p>
            </div>
          ))}
        </div>
        <a
          href="/donate"
          className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded font-semibold"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}
